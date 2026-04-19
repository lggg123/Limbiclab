-- Add language preference to leads table
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS language CHAR(2) NOT NULL DEFAULT 'en'
  CHECK (language IN ('en', 'es'));

CREATE INDEX IF NOT EXISTS leads_language_idx ON leads (language);
