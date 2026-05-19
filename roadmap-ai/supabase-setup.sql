-- Run this in Supabase SQL Editor to set up the database
-- Dashboard → SQL Editor → New Query → paste this → Run

-- Table 1: Cache AI responses (avoids duplicate API calls)
CREATE TABLE IF NOT EXISTS cached_explanations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  goal_id text NOT NULL,
  scores_key text NOT NULL,
  text text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(goal_id, scores_key)
);

-- Table 2: Save user progress
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id text NOT NULL,
  goal_id text NOT NULL,
  scores integer[] NOT NULL,
  completed text[] DEFAULT '{}',
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE cached_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Allow public read on cached_explanations (they're shareable)
CREATE POLICY "Public read cached explanations" ON cached_explanations
  FOR SELECT USING (true);

-- Allow server-side inserts (using service role key server-side)
CREATE POLICY "Server inserts" ON cached_explanations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Server upserts" ON cached_explanations
  FOR UPDATE USING (true);

-- User progress: open for now (add auth later)
CREATE POLICY "Open user progress" ON user_progress
  FOR ALL USING (true);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_cached_goal_scores ON cached_explanations(goal_id, scores_key);
CREATE INDEX IF NOT EXISTS idx_progress_user ON user_progress(user_id);
