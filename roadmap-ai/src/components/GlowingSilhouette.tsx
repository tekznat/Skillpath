'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function GlowingSilhouette() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = containerRef.current
    if (!svg) return

    // Animate stroke offset for flowing effect
    const style = document.createElement('style')
    style.textContent = `
      @keyframes flowOutline {
        0% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: -20;
        }
      }

      @keyframes pulseGlow {
        0%, 100% {
          stroke-width: 2;
          opacity: 0.4;
        }
        50% {
          stroke-width: 3;
          opacity: 0.8;
        }
      }

      @keyframes breatheGlow {
        0%, 100% {
          filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.3));
        }
        50% {
          filter: drop-shadow(0 0 25px rgba(34, 197, 94, 0.6));
        }
      }

      .flowing-outline {
        stroke-dasharray: 20, 10;
        animation: flowOutline 8s linear infinite;
        stroke: url(#glowGradient);
        filter: drop-shadow(0 0 15px rgba(34, 197, 94, 0.5));
      }

      .pulse-outline {
        animation: pulseGlow 3s ease-in-out infinite;
      }

      .breathe-glow {
        animation: breatheGlow 4s ease-in-out infinite;
      }
    `
    svg.parentElement?.appendChild(style)

    return () => {
      style.remove()
    }
  }, [])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        ref={containerRef}
        viewBox="0 0 400 600"
        className="w-96 h-screen max-h-[600px] filter breathe-glow"
        style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))' }}
      >
        <defs>
          {/* Gradient for the glow */}
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          {/* Radial gradient for body fill */}
          <radialGradient id="bodyGradient">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0.9)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.5)" />
          </radialGradient>

          {/* Filter for glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Body silhouette - filled */}
        <g filter="url(#glow)">
          {/* Head */}
          <circle cx="200" cy="80" r="35" fill="url(#bodyGradient)" />

          {/* Neck */}
          <rect x="190" y="115" width="20" height="25" fill="url(#bodyGradient)" />

          {/* Torso */}
          <ellipse cx="200" cy="200" rx="50" ry="80" fill="url(#bodyGradient)" />

          {/* Left arm */}
          <path
            d="M 150 160 Q 120 180 100 220"
            stroke="rgba(0, 0, 0, 0.7)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />

          {/* Right arm */}
          <path
            d="M 250 160 Q 280 180 300 220"
            stroke="rgba(0, 0, 0, 0.7)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />

          {/* Left leg */}
          <path
            d="M 180 280 L 170 420"
            stroke="rgba(0, 0, 0, 0.7)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
          />

          {/* Right leg */}
          <path
            d="M 220 280 L 230 420"
            stroke="rgba(0, 0, 0, 0.7)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Glowing outline - animated */}
        <g className="pulse-outline">
          {/* Head outline */}
          <circle
            cx="200"
            cy="80"
            r="35"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
          />

          {/* Neck outline */}
          <rect
            x="190"
            y="115"
            width="20"
            height="25"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
          />

          {/* Torso outline */}
          <ellipse
            cx="200"
            cy="200"
            rx="50"
            ry="80"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
          />

          {/* Left arm outline */}
          <path
            d="M 150 160 Q 120 180 100 220"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Right arm outline */}
          <path
            d="M 250 160 Q 280 180 300 220"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left leg outline */}
          <path
            d="M 180 280 L 170 420"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Right leg outline */}
          <path
            d="M 220 280 L 230 420"
            fill="none"
            className="flowing-outline"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Energy aura particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx="200"
            cy="200"
            r="4"
            fill="rgba(34, 197, 94, 0.6)"
            initial={{
              cx: 200,
              cy: 200,
              opacity: 0,
            }}
            animate={{
              cx: 200 + Math.cos((i / 8) * Math.PI * 2) * 120,
              cy: 200 + Math.sin((i / 8) * Math.PI * 2) * 150,
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              delay: (i / 8) * 1.5,
              repeat: Infinity,
            }}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Additional glow halo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          boxShadow: [
            '0 0 40px rgba(34, 197, 94, 0.3)',
            '0 0 80px rgba(34, 197, 94, 0.5)',
            '0 0 40px rgba(34, 197, 94, 0.3)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  )
}
