-- Add token column to leads table for ebook access gating
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS ebook_token UUID UNIQUE;

-- Index for fast token lookups
CREATE INDEX IF NOT EXISTS leads_ebook_token_idx ON leads (ebook_token);
