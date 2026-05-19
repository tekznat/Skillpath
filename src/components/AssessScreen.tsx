'use client'

import { useState, useEffect } from 'react'
import { getQuestions, GOALS } from '@/data/roadmaps'
import type { GoalId } from '@/types'

interface Props {
  goalId: GoalId
  onComplete: (scores: number[]) => void
  onBack: () => void
}

export default function AssessScreen({ goalId, onComplete, onBack }: Props) {
  const questions = getQuestions(goalId)
  const goal = GOALS.find(g => g.id === goalId)!
  const [qIdx, setQIdx] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [animKey, setAnimKey] = useState(0)

  const current = questions[qIdx]
  const selected = answers[qIdx]
  const pct = Math.round((qIdx / questions.length) * 100)

  function selectAnswer(i: number) {
    const next = [...answers]
    next[qIdx] = i
    setAnswers(next)
  }

  function goNext() {
    if (selected === null) return
    if (qIdx === questions.length - 1) {
      onComplete(answers as number[])
      return
    }
    setAnimKey(k => k + 1)
    setQIdx(q => q + 1)
  }

  function goPrev() {
    if (qIdx === 0) { onBack(); return }
    setAnimKey(k => k + 1)
    setQIdx(q => q - 1)
  }

  const optColors = ['#ef4444', '#f97316', '#eab308', '#a3e635']

  const s: Record<string, React.CSSProperties> = {
    wrap: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
    },
    inner: { width: '100%', maxWidth: 600 },
    topBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem',
    },
    goalTag: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      fontFamily: 'var(--font-mono)',
      color: goal.accentColor,
      background: `${goal.accentColor}15`,
      border: `1px solid ${goal.accentColor}30`,
      borderRadius: 100,
      padding: '5px 12px',
    },
    counter: {
      fontSize: 12,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-3)',
    },
    progressWrap: {
      height: 2,
      background: 'var(--bg-3)',
      borderRadius: 2,
      marginBottom: '2.5rem',
      overflow: 'hidden',
    },
    progressFill: {
      height: 2,
      background: goal.accentColor,
      borderRadius: 2,
      width: `${pct}%`,
      transition: 'width 0.4s ease',
    },
    qCard: {
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      marginBottom: '1rem',
      animation: 'fadeUp 0.35s ease forwards',
    },
    qNum: {
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-3)',
      marginBottom: '0.75rem',
      letterSpacing: '0.08em',
    },
    qText: {
      fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
      marginBottom: '1.5rem',
    },
    opts: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: 8,
    },
    navRow: {
      display: 'flex',
      gap: 10,
      justifyContent: 'space-between',
    },
    btnBack: {
      flex: '0 0 auto',
      background: 'none',
      border: '1px solid var(--border)',
      borderRadius: 100,
      padding: '10px 20px',
      fontSize: 14,
      color: 'var(--text-2)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
    },
    btnNext: {
      flex: 1,
      background: selected !== null ? goal.accentColor : 'var(--bg-3)',
      color: selected !== null ? '#0a0a0b' : 'var(--text-3)',
      border: 'none',
      borderRadius: 100,
      padding: '12px 24px',
      fontSize: 14,
      fontWeight: 700,
      cursor: selected !== null ? 'pointer' : 'not-allowed',
      fontFamily: 'var(--font-display)',
      transition: 'all 0.2s ease',
    },
  }

  return (
    <div style={s.wrap}>
      <div style={s.inner}>
        <div style={s.topBar}>
          <div style={s.goalTag}>{goal.icon} {goal.label}</div>
          <div style={s.counter}>{qIdx + 1} / {questions.length}</div>
        </div>

        <div style={s.progressWrap}><div style={s.progressFill} /></div>

        <div key={animKey} style={s.qCard}>
          <div style={s.qNum}>QUESTION {qIdx + 1} OF {questions.length}</div>
          <div style={s.qText}>{current.q}</div>
          <div style={s.opts}>
            {current.opts.map((opt, i) => {
              const isSel = selected === i
              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: isSel ? `${optColors[i]}15` : 'var(--bg-2)',
                    border: isSel ? `1px solid ${optColors[i]}50` : '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (!isSel) e.currentTarget.style.borderColor = 'var(--border-hover)' }}
                  onMouseLeave={e => { if (!isSel) e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  <span style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: isSel ? optColors[i] : 'var(--bg-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontFamily: 'var(--font-mono)',
                    color: isSel ? '#fff' : 'var(--text-3)',
                    flexShrink: 0,
                  }}>
                    {isSel ? '✓' : String.fromCharCode(65 + i)}
                  </span>
                  <span style={{ fontSize: 14, color: isSel ? 'var(--text)' : 'var(--text-2)', lineHeight: 1.4 }}>
                    {opt}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div style={s.navRow}>
          <button style={s.btnBack} onClick={goPrev}>← Back</button>
          <button style={s.btnNext} onClick={goNext} disabled={selected === null}>
            {qIdx === questions.length - 1 ? 'Build my roadmap →' : 'Next question →'}
          </button>
        </div>
      </div>
    </div>
  )
}
