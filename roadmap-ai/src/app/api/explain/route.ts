import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getCachedExplanation, setCachedExplanation } from '@/lib/supabase'
import { GOALS, QUESTIONS } from '@/data/roadmaps'
import type { GoalId } from '@/types'

const rateLimit = new Map<string, { count: number; reset: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)
  if (!limit || now > limit.reset) {
    rateLimit.set(ip, { count: 1, reset: now + 86400000 })
    return true
  }
  if (limit.count >= 5) return false
  limit.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || 'anonymous'
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Daily AI limit reached (5/day). Your roadmap is still fully functional!' }, { status: 429 })
  }

  const body = await req.json()
  const { goalId, scores, type = 'roadmap' } = body as { goalId: GoalId; scores: number[]; type: string }

  if (!goalId || !scores) {
    return NextResponse.json({ error: 'Missing goalId or scores' }, { status: 400 })
  }

  const scoresKey = `${goalId}-${scores.join('-')}`

  // Check cache first (massive API savings)
  const cached = await getCachedExplanation(goalId, scoresKey)
  if (cached) {
    return NextResponse.json({ text: cached, cached: true })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'AI not configured on server. Add ANTHROPIC_API_KEY to .env.local' }, { status: 500 })
  }

  const goal = GOALS.find(g => g.id === goalId)
  const questions = QUESTIONS[goalId]
  const skillSummary = questions.map((q, i) => `${q.q}: ${q.opts[scores[i] || 0]}`).join('\n')

  const prompt = type === 'module'
    ? body.prompt
    : `You are an expert learning coach helping someone become a ${goal?.label}.

Their current skill assessment:
${skillSummary}

Write a personal, direct coaching message (3-4 paragraphs) covering:
1. An honest assessment of where they currently stand and what that means
2. Exactly why the recommended modules are the right starting point for THEIR specific level
3. What to tackle first and the single most important mindset shift for success
4. A realistic, motivating perspective on their timeline — no fluff

Be specific to their answers. Don't be generic. Sound like a senior mentor who's been through this path.`

  try {
    const client = new Anthropic({ apiKey })
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 700,
      messages: [{ role: 'user', content: prompt }],
    })
    const text = (message.content[0] as { type: string; text: string }).text

    // Cache so next user with same profile gets instant response
    await setCachedExplanation(goalId, scoresKey, text)

    return NextResponse.json({ text, cached: false })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `AI error: ${message}` }, { status: 500 })
  }
}
