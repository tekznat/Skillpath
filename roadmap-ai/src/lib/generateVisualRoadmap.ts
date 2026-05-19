import type { Phase, GoalId } from '@/types'
import type { VisualRoadmap, RoadmapNode, RoadmapEdge } from '@/data/visualRoadmaps'
import { VISUAL_ROADMAPS } from '@/data/visualRoadmaps'
import { GOALS } from '@/data/roadmaps'
import { buildTopicResources, type ResourceItem } from '@/lib/resourceUtils'

function toNodeResources(items: ResourceItem[]): NonNullable<RoadmapNode['resources']> {
  return items.map((r) => ({ title: r.title, url: r.url, free: r.free }))
}

/** Attach curated YouTube (and existing video/course links) to every node. */
export function enrichVisualRoadmapWithVideos(roadmap: VisualRoadmap, goalLabel: string): VisualRoadmap {
  return {
    ...roadmap,
    nodes: roadmap.nodes.map((node) => {
      if (node.type === 'group') return node
      const base = (node.resources ?? []).map((r) => ({
        title: r.title,
        url: r.url,
        type: r.url.includes('youtu') ? 'video' : 'course',
        free: r.free,
        subtitle: '',
      }))
      const merged = buildTopicResources(node.label, base, goalLabel)
      return {
        ...node,
        resources: toNodeResources(merged),
      }
    }),
  }
}

/**
 * Flow-style graph from assessment phases (roadmap.sh–like columns).
 * Every module becomes a node with resources including YouTube links from your channel map.
 */
export function buildGeneratedVisualRoadmap(
  goalId: GoalId,
  goalLabel: string,
  accentColor: string,
  phases: Phase[],
): VisualRoadmap {
  const colW = 210
  const rowGap = 14
  const nodeH = 40
  const headerH = 36
  const topPad = 48
  const startX = 110

  const nodes: RoadmapNode[] = []
  const edges: RoadmapEdge[] = []

  let maxY = topPad
  let prevLastId: string | null = null

  phases.forEach((phase, pi) => {
    const x = startX + pi * colW
    let y = topPad

    const groupId = `ph-${goalId}-${pi}`
    nodes.push({
      id: groupId,
      label: phase.label,
      x,
      y,
      type: 'group',
      width: 190,
      height: headerH,
    })
    y += headerH + rowGap

    phase.modules.forEach((mod, mi) => {
      const id = `m-${goalId}-${pi}-${mi}`
      const recommended = Boolean((mod as typeof mod & { recommended?: boolean }).recommended)
      const baseRes = (mod.resources ?? []).map((r) => ({
        title: r.title,
        url: r.url,
        type: r.type,
        free: r.free,
        subtitle: '',
      }))
      const merged = buildTopicResources(mod.name, baseRes, goalLabel)

      nodes.push({
        id,
        label: mod.name,
        x,
        y,
        type: recommended ? 'core' : 'optional',
        width: 188,
        height: nodeH,
        description: `${mod.hours} · ${mod.icon}`,
        resources: toNodeResources(merged),
      })

      const prevInCol = mi === 0 ? groupId : `m-${goalId}-${pi}-${mi - 1}`
      edges.push({ from: prevInCol, to: id, style: mi === 0 ? 'solid' : 'solid' })

      if (prevLastId && mi === 0) {
        edges.push({ from: prevLastId, to: id, style: 'solid' })
      }

      y += nodeH + rowGap
      prevLastId = id
    })

    maxY = Math.max(maxY, y)
  })

  const canvasWidth = Math.max(640, startX * 2 + phases.length * colW)
  const canvasHeight = Math.max(520, maxY + 80)

  return {
    id: goalId,
    title: goalLabel,
    accentColor,
    canvasWidth,
    canvasHeight,
    nodes,
    edges,
    theme: 'roadmapLight',
  }
}

export function getVisualRoadmapForGoal(goalId: GoalId, phases: Phase[]): VisualRoadmap {
  const goal = GOALS.find((g) => g.id === goalId)
  const label = goal?.label ?? goalId
  const accent = goal?.accentColor ?? '#6366f1'

  const preset = VISUAL_ROADMAPS[goalId]
  if (preset) {
    return enrichVisualRoadmapWithVideos(preset, label)
  }
  return buildGeneratedVisualRoadmap(goalId, label, accent, phases)
}
