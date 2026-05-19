'use client'

import { useState } from 'react'
import { GOALS } from '@/data/roadmaps'
import type { GoalId } from '@/types'

interface Props {
  onSelect: (goalId: GoalId) => void
  onBack: () => void
}

export default function GoalScreen({ onSelect, onBack }: Props) {
  const [hovered, setHovered] = useState<GoalId | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const PROJECT_HIGHLIGHTS = [
    { title: 'Interview-ready projects', desc: 'Roadmaps designed to help you ship hiring portfolio work and beat technical screens.' },
    { title: 'Portfolio launch plans', desc: 'Projects, case studies and demos that recruiters can review easily.' },
    { title: 'AI & data showcases', desc: 'Build data or AI-focused portfolios that highlight real business impact.' },
  ]

  const sections = [
    { key: 'New Roadmaps', title: 'NEW ROADMAPS' },
    { key: 'Revamped Roadmaps', title: 'REVAMPED ROADMAPS' },
    { key: 'Skill Based Roadmaps', title: 'SKILL BASED ROADMAPS' },
    { key: 'Absolute Beginners', title: 'ABSOLUTE BEGINNERS' },
    { key: 'More Roadmaps', title: 'MORE ROADMAPS' },
  ]

  const filteredGoals = GOALS.filter(goal =>
    goal.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    goal.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const groupedGoals = filteredGoals.reduce<Record<string, typeof filteredGoals>>((acc, goal) => {
    const category = goal.category || 'More Roadmaps'
    if (!acc[category]) acc[category] = []
    acc[category].push(goal)
    return acc
  }, {})

  const s: Record<string, React.CSSProperties> = {
    wrap: {
      minHeight: '100vh',
      padding: '3rem 1.5rem',
      maxWidth: 980,
      margin: '0 auto',
      animation: 'fadeUp 0.5s ease forwards',
    },
    back: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: '1px solid var(--border)',
      borderRadius: 100,
      padding: '6px 14px',
      fontSize: 13,
      color: 'var(--text-2)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      marginBottom: '2.5rem',
      transition: 'all 0.15s',
    },
    heading: {
      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      marginBottom: '0.5rem',
    },
    sub: {
      fontSize: 15,
      color: 'var(--text-2)',
      marginBottom: '2.5rem',
      lineHeight: 1.6,
    },
    search: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      fontSize: 16,
      marginBottom: '2rem',
      background: 'var(--bg-1)',
      color: 'var(--text)',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    sectionHeading: {
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-3)',
      marginBottom: 10,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 12,
    },
    projectPanel: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 12,
      marginBottom: '2rem',
    },
    projectCard: {
      padding: '1rem',
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
    },
    projectTitle: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 6,
    },
    projectDesc: {
      fontSize: 12,
      color: 'var(--text-3)',
      lineHeight: 1.6,
    },
  }

  return (
    <div style={s.wrap}>
      <button style={s.back} onClick={onBack}>← Back</button>
      <h1 style={s.heading}>What do you want to become?</h1>
      <p style={s.sub}>Pick your goal. We&apos;ll assess your level and build a roadmap around it.</p>

      <input
        type="text"
        placeholder="Search courses"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={s.search}
      />

      <div style={s.projectPanel}>
        {PROJECT_HIGHLIGHTS.map(project => (
          <div key={project.title} style={s.projectCard}>
            <div style={s.projectTitle}>{project.title}</div>
            <div style={s.projectDesc}>{project.desc}</div>
          </div>
        ))}
      </div>

      {sections.map(section => {
        const goals = groupedGoals[section.key]
        if (!goals?.length) return null
        return (
          <div key={section.key} style={{ marginBottom: '1.75rem' }}>
            <div style={s.sectionHeading}>{section.title}</div>
            <div style={s.grid}>
              {goals.map((goal, i) => {
                const isHov = hovered === goal.id
                return (
                  <button
                    key={goal.id}
                    onClick={() => onSelect(goal.id)}
                    onMouseEnter={() => setHovered(goal.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      background: isHov ? 'var(--bg-2)' : 'var(--bg-1)',
                      border: isHov ? `1px solid ${goal.accentColor}40` : '1px solid var(--border)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      transform: isHov ? 'translateY(-2px)' : 'none',
                      fontFamily: 'var(--font-display)',
                      animation: `fadeUp 0.5s ease ${i * 0.04}s both`,
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 10 }}>{goal.icon}</div>
                    <div style={{
                      display: 'inline-block',
                      fontSize: 11,
                      fontFamily: 'var(--font-mono)',
                      color: goal.accentColor,
                      background: `${goal.accentColor}18`,
                      borderRadius: 100,
                      padding: '3px 10px',
                      marginBottom: 8,
                    }}>
                      {goal.id.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6, letterSpacing: '-0.02em' }}>
                      {goal.label}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{goal.desc}</div>
                    {isHov && (
                      <div style={{ marginTop: 12, fontSize: 11, color: goal.accentColor, fontFamily: 'var(--font-mono)' }}>
                        Start assessment →
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
