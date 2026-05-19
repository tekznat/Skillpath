'use client'

import { useMemo, useState } from 'react'
import { GOALS, getRoadmap, computeRoadmap } from '@/data/roadmaps'
import { buildTopicResources, type ResourceItem } from '@/lib/resourceUtils'
import type { GoalId } from '@/types'
import ModuleItem from './ModuleItem'
import ResourceViewer from './ResourceViewer'

interface ModuleType {
  name: string
  hours: string
  icon: string
  recommended: boolean
  resources: Array<{ title: string; url: string; type: string; free: boolean; subtitle?: string }>
}

interface Props {
  goalId: GoalId
  scores: number[]
  onRetake: () => void
  onRestart: () => void
  onVisualRoadmap: () => void
}

export default function RoadmapScreen({ goalId, scores, onRetake, onRestart, onVisualRoadmap }: Props) {
  const goal = GOALS.find(g => g.id === goalId)!
  const roadmap = getRoadmap(goalId)
  const result = computeRoadmap(goalId, scores)
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [activeResource, setActiveResource] = useState<{ url: string; title: string; moduleKey: string; type?: string; subtitle?: string; relatedResources: ResourceItem[] } | null>(null)

  const completedCount = completed.size
  const recommendedTotal = result.recommended
  const progressPct = recommendedTotal > 0 ? Math.round((completedCount / recommendedTotal) * 100) : 0
  const projectIdeas = roadmap.projectIdeas ?? []

  function toggleDone(key: string) {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key); else next.add(key)
      return next
    })
  }

  function getDefaultProjectIdeas(goalLabel: string) {
    return [
      {
        title: `Build a ${goalLabel} showcase project`,
        description: `Create a hiring-ready portfolio project that demonstrates the core skills for ${goalLabel}.`,
        impact: 'Use this project as a case study in interviews and your resume.',
      },
      {
        title: `Document your process`,
        description: 'Write concise documentation, architecture notes, and lessons learned for your project.',
        impact: 'Helps recruiters see your communication skills and problem-solving mindset.',
      },
      {
        title: `Deploy a production-ready demo`,
        description: 'Put your work behind a public URL or demo video so it is easy to share.',
        impact: 'Makes your portfolio much stronger in interviews and job applications.',
      },
    ]
  }

  const effectiveProjectIdeas = projectIdeas.length ? projectIdeas : getDefaultProjectIdeas(goal.label)

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      animation: 'fadeUp 0.5s ease forwards',
    }}>
      {/* Header Bar */}
      <div style={{ padding: '16px 24px', background: 'var(--bg-1)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700,
            fontFamily: 'var(--font-mono)', color: goal.accentColor,
            background: goal.accentColor + '15', borderRadius: 100, padding: '4px 12px',
          }}>
            {goal.icon} {goal.label} Roadmap
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
            {completedCount}/{recommendedTotal} done • {progressPct}%
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['↩ Retake', onRetake], ['← Change goal', onRestart]].map(([label, fn]) => (
            <button key={label as string} onClick={fn as () => void} style={{
              background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100,
              padding: '6px 14px', fontSize: 12, color: 'var(--text-2)', cursor: 'pointer',
              fontFamily: 'var(--font-display)', transition: 'all 0.2s ease'
            }}>{label as string}</button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Side: Viewer & Progress */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '24px', gap: 24, background: 'var(--bg)' }}>
          <div>
            <ResourceViewer 
              resource={activeResource ?? null}
              relatedResources={activeResource?.relatedResources ?? []}
              isCompleted={activeResource ? completed.has(activeResource.moduleKey) : false}
              goalAccent={goal.accentColor}
              onComplete={() => {
                if (activeResource && !completed.has(activeResource.moduleKey)) {
                  toggleDone(activeResource.moduleKey)
                }
              }}
              onSelectResource={(resource) => {
                if (!activeResource) return
                setActiveResource({
                  ...resource,
                  moduleKey: activeResource.moduleKey,
                  relatedResources: activeResource.relatedResources,
                })
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <div style={{ background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Overall Course Progress</span>
                <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: goal.accentColor }}>{progressPct}%</span>
              </div>
              <div style={{ height: 6, background: 'var(--bg-3)', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ height: 6, borderRadius: 6, background: goal.accentColor, width: `${progressPct}%`, transition: 'width 0.5s ease' }} />
              </div>
            </div>

            <button onClick={onVisualRoadmap} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem',
              background: `linear-gradient(135deg, ${goal.accentColor}18, ${goal.accentColor}08)`,
              border: `1px solid ${goal.accentColor}40`,
              borderRadius: 'var(--radius-lg)', cursor: 'pointer',
              fontFamily: 'var(--font-display)', textAlign: 'left',
              transition: 'all 0.2s ease',
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: goal.accentColor, marginBottom: 3 }}>
                  🗺 Interactive Flowchart
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                  View the full roadmap visually
                </div>
              </div>
              <span style={{ fontSize: 20, color: goal.accentColor }}>→</span>
            </button>
          </div>

          {/* Project Ideas */}
          {effectiveProjectIdeas.length > 0 && (
            <div style={{ padding: '1.5rem', background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: goal.accentColor, marginBottom: 4 }}>Project ideas</div>
              <div style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 16 }}>Build projects that strengthen your portfolio and hiring case.</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {effectiveProjectIdeas.map((idea, index) => (
                  <div key={index} style={{ padding: '1rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{idea.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 8 }}>{idea.description}</div>
                    <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: goal.accentColor }}>{idea.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Syllabus (Scrollable) */}
        <div style={{ width: '400px', flexShrink: 0, background: 'var(--bg-1)', borderLeft: '1px solid var(--border)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Course Content</h2>
            <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>{result.phases.length} Phases • {result.recommended} Modules</p>
          </div>
          
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {result.phases.map((phase, pi) => (
              <div key={phase.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, paddingLeft: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: phase.color, display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-2)', fontFamily: 'var(--font-mono)' }}>
                    PHASE {pi + 1} — {phase.label.toUpperCase()}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {phase.modules.map((mod, mi) => {
                    const key = `${pi}-${mi}`
                    return (
                      <ModuleItem
                        key={key} mod={mod} isDone={completed.has(key)}
                        phaseColor={phase.color} goalAccent={goal.accentColor}
                        goalLabel={goal.label}
                        onToggle={() => toggleDone(key)}
                        onPlayVideo={(resource, relatedResources) => setActiveResource({ url: resource.url, title: resource.title, type: resource.type, subtitle: resource.subtitle, moduleKey: key, relatedResources })}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
