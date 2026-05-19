'use client'

import { useMemo, useState } from 'react'
import { computeRoadmap } from '@/data/roadmaps'
import { getVisualRoadmapForGoal } from '@/lib/generateVisualRoadmap'
import RoadmapCanvas from './RoadmapCanvas'
import ResourcesPanel from './ResourcesPanel'
import type { RoadmapNode, VisualRoadmap } from '@/data/visualRoadmaps'

interface Props {
  goalId: string
  scores: number[]
  onBack: () => void
}

export default function VisualRoadmapPage({ goalId, scores, onBack }: Props) {
  const roadmap = useMemo(() => {
    const { phases } = computeRoadmap(goalId, scores)
    return getVisualRoadmapForGoal(goalId, phases)
  }, [goalId, scores])

  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState<'map' | 'checklist'>('map')
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)

  function toggleNode(id: string) {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  function handleNodeClick(node: RoadmapNode) {
    setSelectedNode(node)
  }

  const totalNodes = roadmap.nodes.filter((n) => n.type !== 'group').length
  const doneCount = completed.size
  const pct = totalNodes > 0 ? Math.round((doneCount / totalNodes) * 100) : 0

  const coreNodes = roadmap.nodes.filter(n => n.type === 'core')
  const recNodes = roadmap.nodes.filter(n => n.type === 'recommended')
  const optNodes = roadmap.nodes.filter(n => n.type === 'optional')

  const s: Record<string, React.CSSProperties> = {
    wrap: { display: 'flex', flexDirection: 'column' as const, height: '100vh', background: 'var(--bg)' },
    topBar: {
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '0.75rem 1.25rem',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-1)',
      flexShrink: 0,
    },
    main: { display: 'flex', flex: 1, overflow: 'hidden' },
    sidebar: {
      width: 280, flexShrink: 0,
      background: 'var(--bg-1)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column' as const,
      overflow: 'hidden',
    },
    canvas: { flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' as const },
  }

  return (
    <div style={s.wrap}>
      {/* Top bar */}
      <div style={s.topBar}>
        <button onClick={onBack} style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 100,
          padding: '5px 14px', fontSize: 13, color: 'var(--text-2)', cursor: 'pointer',
          fontFamily: 'var(--font-display)',
        }}>← Back</button>

        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: roadmap.accentColor, flexShrink: 0,
        }} />
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em', flex: 1 }}>
          {roadmap.title} Roadmap
        </span>

        {/* Progress pill */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          borderRadius: 100, padding: '5px 14px',
        }}>
          <div style={{ width: 80, height: 4, background: 'var(--bg-3)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: 4, background: roadmap.accentColor, borderRadius: 4, transition: 'width 0.4s ease' }} />
          </div>
          <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>{pct}%</span>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', background: 'var(--bg-2)', borderRadius: 8, padding: 2, gap: 2 }}>
          {(['map', 'checklist'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: activeTab === tab ? 'var(--bg-3)' : 'transparent',
              border: 'none', borderRadius: 6, padding: '5px 14px',
              fontSize: 12, color: activeTab === tab ? 'var(--text)' : 'var(--text-3)',
              cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 500,
              transition: 'all 0.15s',
              textTransform: 'capitalize' as const,
            }}>
              {tab === 'map' ? '🗺 Map' : '☑ Checklist'}
            </button>
          ))}
        </div>
      </div>

      <div style={s.main}>
        {/* Sidebar */}
        <div style={s.sidebar}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: 8 }}>PROGRESS</div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em', color: roadmap.accentColor }}>
              {pct}%
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>
              {doneCount} of {totalNodes} topics
            </div>
            <div style={{ height: 4, background: 'var(--bg-3)', borderRadius: 4, marginTop: 10, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: 4, background: roadmap.accentColor, borderRadius: 4, transition: 'width 0.4s' }} />
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' as const, padding: '0.75rem' }}>
            {/* Legend */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: 8 }}>LEGEND</div>
              {[
                { label: 'Personal Recommendation', color: roadmap.accentColor, style: 'filled' },
                { label: 'Alternative Option', color: roadmap.accentColor + '60', style: 'border' },
                { label: 'Optional / Advanced', color: 'rgba(255,255,255,0.15)', style: 'dim' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{
                    width: 14, height: 14, borderRadius: 3, flexShrink: 0,
                    background: item.style === 'filled' ? item.color : 'transparent',
                    border: `1.5px solid ${item.color}`,
                  }} />
                  <span style={{ fontSize: 12, color: 'var(--text-2)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Quick checklist */}
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginBottom: 8 }}>
              CORE TOPICS ({coreNodes.filter(n => completed.has(n.id)).length}/{coreNodes.length})
            </div>
            {coreNodes.map(node => (
              <button
                key={node.id}
                onClick={() => toggleNode(node.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', background: 'none', border: 'none',
                  padding: '5px 4px', cursor: 'pointer', textAlign: 'left' as const,
                  borderRadius: 6, fontFamily: 'var(--font-display)',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <span style={{
                  width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                  background: completed.has(node.id) ? roadmap.accentColor : 'transparent',
                  border: `1.5px solid ${completed.has(node.id) ? roadmap.accentColor : 'var(--border-hover)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: '#0a0a0b',
                }}>
                  {completed.has(node.id) ? '✓' : ''}
                </span>
                <span style={{
                  fontSize: 12,
                  color: completed.has(node.id) ? roadmap.accentColor : 'var(--text-2)',
                  textDecoration: completed.has(node.id) ? 'line-through' : 'none',
                }}>
                  {node.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main area */}
        <div style={s.canvas}>
          {activeTab === 'map' ? (
            <RoadmapCanvas
              roadmap={roadmap}
              completedNodes={completed}
              onNodeToggle={toggleNode}
              onNodeClick={handleNodeClick}
            />
          ) : (
            <ChecklistView
              roadmap={roadmap}
              completed={completed}
              onToggle={toggleNode}
            />
          )}
        </div>
      </div>

      {/* Resources Panel */}
      {selectedNode && (
        <ResourcesPanel
          topic={selectedNode.label}
          resources={(selectedNode.resources ?? []).map((r) => ({
            title: r.title,
            url: r.url,
            type: r.url.includes('youtu') ? 'video' : 'course',
            free: r.free,
          }))}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  )
}

function ChecklistView({
  roadmap,
  completed,
  onToggle,
}: {
  roadmap: VisualRoadmap
  completed: Set<string>
  onToggle: (id: string) => void
}) {
  const sections = [
    { label: 'Core Topics', nodes: roadmap.nodes.filter(n => n.type === 'core'), color: roadmap.accentColor },
    { label: 'Recommended', nodes: roadmap.nodes.filter(n => n.type === 'recommended'), color: roadmap.accentColor + '80' },
    { label: 'Optional / Advanced', nodes: roadmap.nodes.filter(n => n.type === 'optional'), color: 'var(--text-3)' },
  ]

  return (
    <div style={{ overflow: 'auto', padding: '1.5rem', flex: 1 }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {sections.map(section => (
          <div key={section.label} style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.75rem',
              paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: section.color }} />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
                {section.label.toUpperCase()}
              </span>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginLeft: 'auto' }}>
                {section.nodes.filter(n => completed.has(n.id)).length}/{section.nodes.length}
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 6 }}>
              {section.nodes.map(node => {
                const done = completed.has(node.id)
                return (
                  <button
                    key={node.id}
                    onClick={() => onToggle(node.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '9px 12px',
                      background: done ? `${roadmap.accentColor}12` : 'var(--bg-1)',
                      border: `1px solid ${done ? roadmap.accentColor + '40' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)',
                      cursor: 'pointer', textAlign: 'left' as const,
                      fontFamily: 'var(--font-display)',
                      transition: 'all 0.15s',
                    }}
                  >
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                      background: done ? roadmap.accentColor : 'transparent',
                      border: `1.5px solid ${done ? roadmap.accentColor : 'var(--border-hover)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, color: '#0a0a0b', fontWeight: 700,
                    }}>
                      {done ? '✓' : ''}
                    </span>
                    <span style={{
                      fontSize: 13,
                      color: done ? roadmap.accentColor : 'var(--text)',
                      textDecoration: done ? 'line-through' : 'none',
                      lineHeight: 1.3,
                    }}>
                      {node.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
