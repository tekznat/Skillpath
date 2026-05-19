'use client'

import { useEffect, useState } from 'react'
import HeroSection from './HeroSection'

interface Props {
  onStart: () => void
}

export default function LandingScreenNew({ onStart }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full">
      <HeroSection onStart={onStart} onHowItWorks={() => {}} />
    </div>
  )
}
