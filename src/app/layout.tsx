import type { Metadata } from 'next'
import './globals.css'
import { getSiteUrl } from '@/lib/siteUrl'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: 'SkillPath - Personalized Learning Roadmaps for Developers | Free Skill Assessment',
  description:
    'SkillPath: get a customized learning roadmap based on your current skill level. Answer a few questions and receive tailored roadmaps for frontend, backend, fullstack, devops, data science, and more. Free, fast, and AI-powered.',
  keywords:
    'SkillPath, learning roadmap, developer roadmap, skill assessment, personalized learning, frontend roadmap, backend roadmap, fullstack development, devops roadmap, data science roadmap, AI learning, coding roadmap, programming skills',
  authors: [{ name: 'SkillPath' }],
  openGraph: {
    title: 'SkillPath - Personalized Learning Roadmaps',
    description: 'Get customized learning paths based on your skill level. Free assessment for developers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillPath - Personalized Learning Roadmaps',
    description: 'Get customized learning paths based on your skill level. Free assessment for developers.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
