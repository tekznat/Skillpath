'use client'

import type { CSSProperties } from 'react'
import { Bolt, Zap, Target, Bot, Box } from 'lucide-react'
import SimpleRoadmapPreview from './SimpleRoadmapPreview'

const ACCENT = '#a3e635'

const NAV = ['How it works', 'FAQ'] as const

const FEATURES = [
  { title: 'Skill-aware', body: 'Skips what you already know', Icon: Zap },
  { title: 'Precise', body: 'Only what moves the needle', Icon: Target },
  { title: 'AI-explained', body: 'On-demand coaching, not spam', Icon: Bot },
  { title: 'Free', body: 'Assessment and roadmap at no cost', Icon: Box },
] as const

interface HeroSectionProps {
  onStart: () => void
  onHowItWorks: () => void
}

export default function HeroSection({ onStart, onHowItWorks }: HeroSectionProps) {
  const btn: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 22px',
    borderRadius: 999,
    border: 'none',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    background: ACCENT,
    color: '#0a0a0a',
    fontFamily: 'var(--font-display)',
    transition: 'transform 0.15s ease, filter 0.15s ease',
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #111622, var(--bg) 80%)',
        color: 'var(--text)',
        fontFamily: 'var(--font-display)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '600px',
        background: 'radial-gradient(circle, rgba(163,230,53,0.03) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      <header
        style={{
          borderBottom: '1px solid var(--border)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(9,11,17,0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', zIndex: 1 }}>
            <Bolt size={24} color={ACCENT} strokeWidth={2.4} aria-hidden />
            SkillPath
          </div>
          <nav className="land-hero-nav" aria-label="Primary" style={{ zIndex: 1 }}>
            {NAV.map((label) => (
              label === 'How it works' ? (
                <button key={label} onClick={onHowItWorks} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, padding: '8px 12px', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
                  {label}
                </button>
              ) : (
                <a key={label} href={`#${label.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, padding: '8px 12px', transition: 'color 0.2s' }}>
                  {label}
                </a>
              )
            ))}
          </nav>
          <button type="button" onClick={onStart} style={{ ...btn, zIndex: 1 }}>
            Get started
          </button>
        </div>
      </header>

      <main style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1280, 
        margin: '0 auto', 
        padding: '64px 24px',
        zIndex: 1
      }}>
        <div className="land-hero-grid" style={{ width: '100%' }}>
          <div className="land-hero-copy">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                borderRadius: 999,
                border: '1px solid rgba(163,230,53,0.25)',
                background: 'rgba(163,230,53,0.08)',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--text-2)',
                marginBottom: 20,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT }} />
              Personalized learning paths
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Learn what you need.{' '}
              <span style={{ color: ACCENT }}>Skip the rest.</span>
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 16,
                lineHeight: 1.65,
                color: 'var(--text-2)',
                maxWidth: 480,
              }}
            >
              Answer a few questions. Get a roadmap matched to your level—no generic course lists, no wasted hours.
            </p>

            <button type="button" onClick={onStart} style={{ ...btn, marginTop: 28, padding: '14px 26px', fontSize: 16 }}>
              Build my roadmap →
            </button>

            <div
              style={{
                marginTop: 40,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 22,
              }}
            >
              {FEATURES.map(({ title, body, Icon }) => (
                <div key={title} style={{ display: 'flex', gap: 12 }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      border: '1px solid rgba(163,230,53,0.22)',
                      background: 'rgba(163,230,53,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} color={ACCENT} strokeWidth={2.2} aria-hidden />
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>{title}</p>
                    <p style={{ margin: '6px 0 0', fontSize: 13, color: 'var(--text-3)', lineHeight: 1.45 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="land-hero-visual" style={{ display: 'flex', justifyContent: 'center' }}>
            <SimpleRoadmapPreview />
          </div>
        </div>
      </main>
    </div>
  )
}
