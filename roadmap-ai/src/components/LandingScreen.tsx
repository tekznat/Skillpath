'use client'

import { useState } from 'react'
import HeroSection from './HeroSection'
import FAQSection from './FAQSection'
import HowItWorksAnimation from './HowItWorksAnimation'

interface Props {
  onStart: () => void
}

export default function LandingScreen({ onStart }: Props) {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false)

  return (
    <div className="w-full">
      <HeroSection 
        onStart={onStart} 
        onHowItWorks={() => setIsHowItWorksOpen(true)}
      />
      <FAQSection />
      
      {isHowItWorksOpen && (
        <HowItWorksAnimation onClose={() => setIsHowItWorksOpen(false)} />
      )}
    </div>
  )
}

