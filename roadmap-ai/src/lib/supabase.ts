import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let supabase: SupabaseClient | null = null
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }

export async function getCachedExplanation(goalId: string, scoresKey: string): Promise<string | null> {
  if (!supabase) return null
  try {
    const { data } = await supabase
      .from('cached_explanations')
      .select('text')
      .eq('goal_id', goalId)
      .eq('scores_key', scoresKey)
      .single()
    return data?.text || null
  } catch {
    return null
  }
}

export async function setCachedExplanation(goalId: string, scoresKey: string, text: string): Promise<void> {
  if (!supabase) return
  try {
    await supabase.from('cached_explanations').upsert({
      goal_id: goalId,
      scores_key: scoresKey,
      text,
      created_at: new Date().toISOString(),
    })
  } catch {}
}

export async function saveProgress(userId: string, goalId: string, scores: number[], completed: string[]): Promise<void> {
  if (!supabase) return
  try {
    await supabase.from('user_progress').upsert({
      user_id: userId,
      goal_id: goalId,
      scores,
      completed,
      updated_at: new Date().toISOString(),
    })
  } catch {}
}

export async function getProgress(userId: string) {
  if (!supabase) return null
  try {
    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single()
    return data
  } catch {
    return null
  }
}
