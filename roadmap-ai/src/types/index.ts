export type GoalId = string

export interface Goal {
  id: GoalId
  label: string
  desc: string
  icon: string
  color: string
  accentColor: string
  category?: string
}

export interface Question {
  q: string
  opts: string[]
}

export interface Module {
  name: string
  hours: string
  icon: string
  skillIndex: number
  thresholdToShow: number // min score to recommend skipping (below = must learn)
  resources: Resource[]
}

export interface Resource {
  title: string
  url: string
  type: string
  free: boolean
}

export interface Phase {
  label: string
  color: string
  modules: Module[]
}

export interface ProjectIdea {
  title: string
  description: string
  impact: string
}

export interface Roadmap {
  phases: Phase[]
  projectIdeas?: ProjectIdea[]
}

export interface UserProgress {
  goalId: GoalId
  scores: number[]
  completed: Set<string>
  createdAt: Date
}

export interface CachedExplanation {
  goalId: GoalId
  scores: number[]
  text: string
  createdAt: string
}
