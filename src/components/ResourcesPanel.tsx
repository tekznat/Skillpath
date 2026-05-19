'use client'

import { useState, useMemo } from 'react'
import { findResourceChannels, type ResourceItem } from '@/lib/resourceUtils'
import type { ChannelDetails } from '@/data/youtubeResources'

interface Props {
  topic: string
  resources?: ResourceItem[]
  onClose: () => void
}

export default function ResourcesPanel({ topic, resources = [], onClose }: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState<'Hindi' | 'English' | null>('English')

  const channels = useMemo(() => findResourceChannels(topic), [topic])

  const filteredChannels = useMemo(() => {
    if (!selectedLanguage) return []
    return channels.filter(channel => channel.language === selectedLanguage)
  }, [channels, selectedLanguage])

  const videoResources = useMemo(
    () => resources.filter(resource => resource.type === 'video'),
    [resources]
  )

  const courseResources = useMemo(
    () => resources.filter(resource => resource.type === 'course'),
    [resources]
  )

  const VideoCard = ({ channel }: { channel: ChannelDetails }) => (
    <div style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    }}>
      {/* Thumbnail */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
        <img
          src={`https://img.youtube.com/vi/${channel.videoId}/mqdefault.jpg`}
          alt={channel.sampleVideoTitle}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 8,
          right: 8,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '2px 6px',
          borderRadius: 4,
          fontSize: 11,
          fontWeight: 600,
        }}>
          {channel.language === 'Hindi' ? '🇮🇳' : '🌐'}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h4 style={{
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--text)',
          marginBottom: 4,
          lineHeight: 1.4,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {channel.sampleVideoTitle}
        </h4>
        <p style={{
          fontSize: 12,
          color: 'var(--text-3)',
          marginBottom: 8,
        }}>
          {channel.channelName}
        </p>
      </div>

      {/* Watch Button */}
      <a
        href={channel.sampleVideoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          background: 'var(--accent)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontSize: 13,
          fontWeight: 500,
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        ▶ Watch
      </a>
    </div>
  )

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}
    onClick={onClose}
    >
      <div style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: 800,
        maxHeight: '80vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: 4,
            }}>
              YouTube Resources for {topic}
            </h2>
            <p style={{
              fontSize: 14,
              color: 'var(--text-3)',
            }}>
              Curated video tutorials from top creators
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--text-2)',
              fontSize: 16,
            }}
          >
            ✕
          </button>
        </div>

        {/* Language selector */}
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <div style={{ flex: '1 1 auto' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
              Choose your preferred video language
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>
              Only Hindi or English YouTube tutorial videos will show in your feed.
            </div>
          </div>
          {(['Hindi', 'English'] as const).map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              style={{
                background: selectedLanguage === lang ? 'var(--accent)' : 'var(--bg-1)',
                color: selectedLanguage === lang ? 'white' : 'var(--text-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '8px 14px',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                minWidth: 100,
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '1.5rem',
        }}>
          {!selectedLanguage ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '40vh',
              color: 'var(--text-2)',
              gap: '0.75rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>Pick a language to see videos</div>
              <div style={{ fontSize: 14, maxWidth: 480 }}>
                Select Hindi or English above, and only video tutorials from YouTube channels in that language will appear.
              </div>
            </div>
          ) : (
            <div>
              {videoResources.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>Topic Videos</div>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {videoResources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius)',
                          background: 'var(--bg-1)',
                          border: '1px solid var(--border)',
                          textDecoration: 'none',
                          color: 'var(--text)',
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{resource.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{resource.type ? resource.type.toUpperCase() : resource.subtitle ?? 'Resource'}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {courseResources.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>Suggested Courses</div>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {courseResources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius)',
                          background: 'var(--bg-1)',
                          border: '1px solid var(--border)',
                          textDecoration: 'none',
                          color: 'var(--text)',
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{resource.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{resource.type ? resource.type.toUpperCase() : resource.subtitle ?? 'Course'}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {filteredChannels.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1rem',
                }}>
                  {filteredChannels.map(channel => (
                    <VideoCard key={channel.channelName} channel={channel} />
                  ))}
                </div>
              ) : videoResources.length === 0 && courseResources.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: 'var(--text-3)',
                }}>
                  <div style={{ fontSize: 48, marginBottom: '1rem' }}>🔎</div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
                    No curated videos or courses are available for this topic.
                  </div>
                  <div style={{ fontSize: 14 }}>
                    This topic has no matched resources yet. Try another topic or open a different node.
                  </div>
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: 'var(--text-3)',
                }}>
                  <div style={{ fontSize: 48, marginBottom: '1rem' }}>🔎</div>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>
                    No videos found in {selectedLanguage} for this topic.
                  </div>
                  <div style={{ fontSize: 14 }}>
                    Switch languages or use the suggested course links above if available.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}