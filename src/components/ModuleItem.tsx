'use client'

import { useMemo, useState } from 'react'
import { buildTopicResources, type ResourceItem } from '@/lib/resourceUtils'

interface ModuleProps {
  mod: {
    name: string
    hours: string
    icon: string
    recommended: boolean
    resources: Array<{ title: string; url: string; type: string; free: boolean; subtitle?: string }>
  }
  isDone: boolean
  phaseColor: string
  goalAccent: string
  /** Improves YouTube channel matching for this course */
  goalLabel?: string
  onToggle: () => void
  onPlayVideo?: (resource: { title: string; url: string; type?: string; subtitle?: string }, relatedResources: ResourceItem[]) => void
}

const typeColors: Record<string, string> = {
  video: '#6b7280',
  course: '#6b7280',
  docs: '#6b7280',
  book: '#6b7280',
}

export default function ModuleItem({
  mod, isDone, phaseColor, goalAccent, goalLabel, onToggle, onPlayVideo
}: ModuleProps) {
  const [open, setOpen] = useState(false)
  const isSkip = !mod.recommended

  const moduleResources = useMemo(
    () => buildTopicResources(mod.name, mod.resources || [], goalLabel),
    [mod.name, mod.resources, goalLabel],
  )
  
  const hasVideo = useMemo(() => moduleResources.some(r => r.url.includes('youtube.com') || r.url.includes('youtu.be')), [moduleResources])

  const hasResources = moduleResources.length > 0

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <div style={{
      background: isSkip ? 'var(--bg)' : 'var(--bg-1)',
      border: `1px solid ${isDone ? 'rgba(148,163,184,0.35)' : 'var(--border)'}`,
      borderRadius: '16px',
      overflow: 'hidden',
      opacity: isSkip ? 0.55 : 1,
      transition: 'all 0.15s ease',
    }}>
      <div
        onClick={toggleOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '0.85rem 1rem',
          cursor: 'pointer',
        }}
      >
        {/* Check button */}
        {!isSkip && (
          <button
            onClick={e => { 
              e.stopPropagation(); 
              if (hasVideo && !isDone) {
                alert('Please watch the video resource to complete this module.')
                return
              }
              onToggle() 
            }}
            title={hasVideo && !isDone ? 'Watch video to complete' : isDone ? 'Mark incomplete' : 'Mark complete'}
            style={{
              width: 24, height: 24,
              borderRadius: '50%',
              border: `1.5px solid ${isDone ? goalAccent : hasVideo ? 'var(--border)' : 'var(--border-hover)'}`,
              background: isDone ? goalAccent : 'transparent',
              color: isDone ? '#0a0a0b' : hasVideo ? 'var(--text-3)' : 'transparent',
              cursor: hasVideo && !isDone ? 'not-allowed' : 'pointer',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700,
              transition: 'all 0.15s ease',
            }}
          >
            {hasVideo && !isDone ? '🔒' : '✓'}
          </button>
        )}

        {/* Icon */}
        <span style={{
          width: 34, height: 34,
          borderRadius: 8,
          background: isSkip ? 'var(--bg-2)' : `${phaseColor}18`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 17, flexShrink: 0,
        }}>
          {mod.icon}
        </span>

        {/* Name + hours */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14, fontWeight: 600,
            color: isDone ? 'var(--text-3)' : isSkip ? 'var(--text-3)' : 'var(--text)',
            textDecoration: isDone ? 'line-through' : 'none',
            letterSpacing: '-0.01em',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const,
          }}>
            {mod.name}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
            {mod.hours}
          </div>
        </div>

        {/* Status badge */}
        <span style={{
          fontSize: 10,
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          padding: '3px 9px',
          borderRadius: 100,
          background: isSkip ? 'var(--bg-3)' : isDone ? `${goalAccent}20` : `${phaseColor}20`,
          color: isSkip ? 'var(--text-3)' : isDone ? goalAccent : phaseColor,
          flexShrink: 0,
          letterSpacing: '0.05em',
        }}>
          {isSkip ? 'SKIP' : isDone ? 'DONE' : 'LEARN'}
        </span>

        {hasResources && (
          <button
            onClick={e => { e.stopPropagation(); toggleOpen() }}
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '5px 12px',
              fontSize: 12,
              color: 'var(--text-2)',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              flexShrink: 0,
              transition: 'all 0.15s',
            }}
          >
            {open ? 'Hide resources' : 'Resources'}
          </button>
        )}
      </div>

      {open && (
        <div style={{
          padding: '1rem 1rem 1.125rem',
          borderTop: '1px solid var(--border)',
          background: 'var(--bg)',
          display: 'grid',
          gap: '0.75rem',
          fontFamily: 'var(--font-sans)',
        }}>
          {moduleResources.length > 0 ? (
            moduleResources.map((resource, index) => {
              const content = (
                <>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: 4,
                      lineHeight: 1.4,
                    }}>{resource.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
                      {resource.subtitle ?? resource.type?.toUpperCase() ?? 'LINK'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px 10px',
                      borderRadius: 999,
                      background: 'rgba(148,163,184,0.15)',
                      color: 'var(--text-2)',
                      fontSize: 11,
                      fontWeight: 700,
                    }}>
                      ▶ Open
                    </span>
                  </div>
                </>
              )

              const style = {
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 12,
                alignItems: 'center',
                padding: '0.85rem 1rem',
                borderRadius: 12,
                border: '1px solid var(--border)',
                background: 'var(--bg-1)',
                textDecoration: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }

              if (onPlayVideo) {
                return (
                  <button
                    key={index}
                    onClick={() => onPlayVideo(resource, moduleResources)}
                    style={style}
                  >
                    {content}
                  </button>
                )
              }

              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={style}
                >
                  {content}
                </a>
              )
            })
          ) : (
            <div style={{ fontSize: 13, color: 'var(--text-3)' }}>
              No learning resources available for this module yet.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
