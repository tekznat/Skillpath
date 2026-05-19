'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { X, CheckCircle2, Zap, LayoutDashboard } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function HowItWorksAnimation({ onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Basic GSAP timeline
    const tl = gsap.timeline()
    
    // Animate container in
    tl.fromTo(containerRef.current, 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }
    )

    // Stagger steps in
    if (stepsRef.current) {
      const steps = stepsRef.current.children
      tl.fromTo(steps,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: 'back.out(1.5)' }
      )
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(9, 11, 17, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 20
    }}>
      <div 
        ref={containerRef}
        style={{
          background: 'var(--bg-1)',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: 40,
          width: '100%',
          maxWidth: 600,
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'none',
            border: 'none',
            color: 'var(--text-2)',
            cursor: 'pointer',
            padding: 8
          }}
        >
          <X size={24} />
        </button>

        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>
          How SkillPath Works
        </h2>
        <p style={{ color: 'var(--text-2)', marginBottom: 40, fontSize: 16 }}>
          A simple, intelligent process to accelerate your learning.
        </p>

        <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(163,230,53,0.1)', 
              color: '#a3e635', 
              padding: 12, 
              borderRadius: 16,
              border: '1px solid rgba(163,230,53,0.2)'
            }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>1. Take the Assessment</h3>
              <p style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.5 }}>
                Answer a few targeted questions so we can gauge your current skill level accurately. No fluff.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(125,160,201,0.1)', 
              color: '#7da0c9', 
              padding: 12, 
              borderRadius: 16,
              border: '1px solid rgba(125,160,201,0.2)'
            }}>
              <Zap size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>2. AI Analyzes Your Gaps</h3>
              <p style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.5 }}>
                Our engine identifies exactly what you need to learn to reach your goal, skipping what you already know.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(168,85,247,0.1)', 
              color: '#a855f7', 
              padding: 12, 
              borderRadius: 16,
              border: '1px solid rgba(168,85,247,0.2)'
            }}>
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>3. Get Your Roadmap</h3>
              <p style={{ color: 'var(--text-3)', fontSize: 14, lineHeight: 1.5 }}>
                Follow a personalized, interactive path with the best resources curated just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
