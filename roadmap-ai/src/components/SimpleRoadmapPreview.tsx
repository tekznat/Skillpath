'use client'

import type { CSSProperties } from 'react'
import { Check, Circle, Lock } from 'lucide-react'

const ACCENT = '#a3e635'

const ROWS = [
  { n: 1, title: 'Fundamentals', status: 'Completed', state: 'done' as const },
  { n: 2, title: 'Core Concepts', status: 'In progress', state: 'active' as const },
  { n: 3, title: 'Practical Projects', status: 'Next up', state: 'next' as const },
  { n: 4, title: 'Advanced Topics', status: 'Locked', state: 'locked' as const },
  { n: 5, title: 'Mastery & Beyond', status: 'Locked', state: 'locked' as const },
]

const rail: CSSProperties = {
  position: 'relative',
  width: 12,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 4,
}

const lineBg: CSSProperties = {
  position: 'absolute',
  top: 4,
  bottom: 4,
  width: 1,
  background: 'rgba(255,255,255,0.12)',
}

const lineFg: CSSProperties = {
  position: 'absolute',
  top: 4,
  bottom: 4,
  width: 2,
  marginLeft: -0.5,
  borderRadius: 1,
  background: ACCENT,
  opacity: 0.85,
}

export default function SimpleRoadmapPreview() {
  return (
    <div
      className="land-preview-card"
      style={{
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        borderRadius: 16,
        border: '1px solid var(--border)',
        background: 'var(--bg-1)',
        padding: '1.25rem 1.25rem 1.35rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 14,
          paddingBottom: 12,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', margin: 0, lineHeight: 1.35 }}>
          Your personalized roadmap
        </p>
        <span style={{ fontSize: 14, fontWeight: 700, color: ACCENT, fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
          32%
        </span>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <div style={rail}>
          <span style={lineBg} aria-hidden />
          <span className="land-preview-line-inner" style={lineFg} aria-hidden />
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ROWS.map((row, i) => (
            <li
              key={row.title}
              className="land-preview-row"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 10,
                border:
                  row.state === 'active' ? `1px solid rgba(163,230,53,0.35)` : '1px solid transparent',
                background: row.state === 'active' ? 'rgba(163,230,53,0.06)' : 'transparent',
                animationDelay: `${120 + i * 75}ms`,
              }}
            >
              <span style={{ marginTop: 2, flexShrink: 0 }}>
                {row.state === 'done' && <Check size={18} color={ACCENT} strokeWidth={2.2} aria-hidden />}
                {row.state === 'active' && <Circle size={18} color={ACCENT} fill="none" strokeWidth={2.2} aria-hidden />}
                {(row.state === 'locked' || row.state === 'next') && <Lock size={18} color="var(--text-3)" strokeWidth={2} aria-hidden />}
              </span>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                  {row.n}. {row.title}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--text-3)' }}>{row.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
