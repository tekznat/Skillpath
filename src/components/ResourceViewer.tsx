'use client'

import { useEffect, useRef, useState } from 'react'
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube'
import { CheckCircle2, PlaySquare } from 'lucide-react'

interface Resource {
  title: string
  url: string
  subtitle?: string
  type?: string
}

interface Props {
  resource: Resource | null
  relatedResources: Resource[]
  isCompleted: boolean
  goalAccent: string
  onComplete: () => void
  onSelectResource: (resource: Resource) => void
}

export default function ResourceViewer({ resource, relatedResources, isCompleted, goalAccent, onComplete, onSelectResource }: Props) {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const sideResources = resource
    ? relatedResources.filter((item) => item.url !== resource.url && item.type !== 'video')
    : []

  // Determine if it's a youtube video
  const isYoutube = resource?.url.includes('youtube.com') || resource?.url.includes('youtu.be')
  let videoId = ''
  if (isYoutube && resource) {
    if (resource.url.includes('youtube.com/watch')) {
      const urlParams = new URL(resource.url).searchParams
      videoId = urlParams.get('v') || ''
    } else if (resource.url.includes('youtu.be/')) {
      videoId = resource.url.split('youtu.be/')[1]?.split('?')[0] || ''
    } else if (resource.url.includes('youtube.com/embed/')) {
      videoId = resource.url.split('youtube.com/embed/')[1]?.split('?')[0] || ''
    }
  }

  // Timer to track progress
  useEffect(() => {
    if (!player || isCompleted || !isYoutube) return

    timerRef.current = setInterval(async () => {
      try {
        const currentTime = await player.getCurrentTime()
        const duration = await player.getDuration()
        
        if (duration > 0) {
          const pct = currentTime / duration
          setProgress(Math.min(pct, 1))

          // Auto-complete at 85%
          if (pct >= 0.85) {
            onComplete()
            if (timerRef.current) clearInterval(timerRef.current)
          }
        }
      } catch {
        // Player might not be ready yet
      }
    }, 2000) // check every 2s

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [player, isCompleted, isYoutube, onComplete])

  // Reset state when resource changes
  useEffect(() => {
    setPlayer(null)
    setProgress(0)
  }, [resource])

  const onReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target)
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  if (!resource) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-3)', padding: '4rem 2rem', background: 'var(--bg-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', aspectRatio: '16/9' }}>
        <PlaySquare size={48} style={{ opacity: 0.2, marginBottom: 16 }} />
        <p style={{ fontSize: 16, fontWeight: 500 }}>Select a resource from the roadmap to start learning</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', background: 'var(--bg-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{resource.title}</h2>
          <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>
            {resource.subtitle ?? resource.type?.toUpperCase() ?? 'RESOURCE'}
          </div>
        </div>
        
        {isCompleted && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: goalAccent, fontSize: 13, fontWeight: 700, padding: '6px 12px', background: `${goalAccent}15`, borderRadius: 100 }}>
            <CheckCircle2 size={16} /> Completed
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 0', minWidth: 320 }}>
          {/* Viewer */}
          <div style={{ position: 'relative', background: isYoutube && videoId ? '#000' : 'var(--bg-1)', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, overflow: 'hidden' }}>
            {isYoutube && videoId ? (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <YouTube videoId={videoId} opts={opts} onReady={onReady} style={{ height: '100%', width: '100%' }} iframeClassName="w-full h-full" />
              </div>
            ) : (
              <iframe
                src={resource.url}
                title={resource.title}
                style={{ width: '100%', height: '100%', border: '0' }}
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            )}
          </div>

          {!isYoutube && (
            <div style={{ padding: '12px 20px', background: 'var(--bg-1)', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16, borderRadius: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>
                  Embedded {resource.type?.toUpperCase() || 'resource'} preview
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: goalAccent,
                    textDecoration: 'none',
                  }}
                >
                  Open in a new tab
                </a>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>
                If the site blocks embedding, use the link above to open the resource directly in a new tab.
              </div>
            </div>
          )}
        </div>

        {sideResources.length > 0 && (
          <aside style={{ width: 320, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--bg-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '18px 16px' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>Additional docs & courses</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6 }}>Only non-video learning resources are shown here for the current module.</div>
            {sideResources.map((item, index) => (
              <button
                key={index}
                onClick={() => onSelectResource(item)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 6,
                  width: '100%',
                  background: resource.url === item.url ? `${goalAccent}15` : 'transparent',
                  border: `1px solid ${resource.url === item.url ? goalAccent : 'var(--border)'}`,
                  borderRadius: 14,
                  padding: '12px 14px',
                  textAlign: 'left',
                  color: 'var(--text)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700 }}>{item.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, color: 'var(--text-3)', background: 'var(--bg)', padding: '4px 8px', borderRadius: 999 }}>{item.type?.toUpperCase() ?? 'RESOURCE'}</span>
                  {item.subtitle && <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{item.subtitle}</span>}
                </div>
              </button>
            ))}
          </aside>
        )}
      </div>

      {/* Footer / Progress Bar */}
      {isYoutube && !isCompleted && (
        <div style={{ padding: '12px 20px', background: 'var(--bg-1)', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', whiteSpace: 'nowrap' }}>
            Watch progress: {Math.round(progress * 100)}%
          </div>
          <div style={{ flex: 1, height: 6, background: 'var(--bg-3)', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: goalAccent, width: `${progress * 100}%`, transition: 'width 1s linear' }} />
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
            Reaches 85% to auto-complete
          </div>
        </div>
      )}
    </div>
  )
}
