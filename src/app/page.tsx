'use client'

import { useState } from 'react'
import type { GoalId } from '@/types'
import LandingScreen from '@/components/LandingScreen'
import GoalScreen from '@/components/GoalScreen'
import AssessScreen from '@/components/AssessScreen'
import RoadmapScreen from '@/components/RoadmapScreen'
import VisualRoadmapPage from '@/components/VisualRoadmapPage'

type Screen = 'landing' | 'goal' | 'assess' | 'roadmap' | 'visual'

export default function Home() {
  const [screen, setScreen] = useState<Screen>('landing')
  const [selectedGoal, setSelectedGoal] = useState<GoalId | null>(null)
  const [scores, setScores] = useState<number[]>([])

  function handleGoalSelect(goalId: GoalId) {
    setSelectedGoal(goalId)
    setScreen('assess')
  }

  function handleAssessComplete(finalScores: number[]) {
    setScores(finalScores)
    setScreen('roadmap')
  }

  // Show visual roadmap full-screen
  if (screen === 'visual' && selectedGoal) {
    return <VisualRoadmapPage goalId={selectedGoal} scores={scores} onBack={() => setScreen('roadmap')} />
  }

  return (
    <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      {screen === 'landing' && <LandingScreen onStart={() => setScreen('goal')} />}
      {screen === 'goal' && (
        <GoalScreen onSelect={handleGoalSelect} onBack={() => setScreen('landing')} />
      )}
      {screen === 'assess' && selectedGoal && (
        <AssessScreen
          goalId={selectedGoal}
          onComplete={handleAssessComplete}
          onBack={() => setScreen('goal')}
        />
      )}
      {screen === 'roadmap' && selectedGoal && (
        <RoadmapScreen
          goalId={selectedGoal}
          scores={scores}
          onRetake={() => setScreen('assess')}
          onRestart={() => setScreen('goal')}
          onVisualRoadmap={() => setScreen('visual')}
        />
      )}
    </main>
  )
}
