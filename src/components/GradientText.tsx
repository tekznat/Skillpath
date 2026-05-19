'use client'

import { motion } from 'framer-motion'

export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="relative inline-block">
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '200% auto',
          }}
        >
          {children}
        </motion.span>
        <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    </motion.span>
  )
}
