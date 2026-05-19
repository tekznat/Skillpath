'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'How much does SkillPath cost?',
    answer: 'SkillPath is currently free to use. You can take the assessment and generate personalized roadmaps at no cost.'
  },
  {
    question: 'How accurate is the assessment?',
    answer: 'Our assessment is powered by an advanced AI engine that dynamically adapts to your responses, pinpointing your exact skill level across various domains.'
  },
  {
    question: 'How long does a roadmap take to complete?',
    answer: 'It entirely depends on your current skill level and the end goal. Roadmaps are fully personalized, ranging from a few days for quick upskilling to several months for mastery.'
  },
  {
    question: 'Are the recommended courses free?',
    answer: 'We prioritize high-quality free resources, especially from comprehensive YouTube playlists, but we may also suggest premium resources if they are the absolute best way to learn a concept.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '80px 24px', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
          fontWeight: 800, 
          marginBottom: 40, 
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx}
                style={{ 
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text)',
                    fontSize: 18,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit'
                  }}
                >
                  {faq.question}
                  <ChevronDown 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: 'var(--text-3)'
                    }} 
                  />
                </button>
                
                <div style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0,
                  padding: isOpen ? '0 24px 24px 24px' : '0 24px',
                  transition: 'all 0.3s ease',
                  color: 'var(--text-2)',
                  lineHeight: 1.6
                }}>
                  {faq.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
