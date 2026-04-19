# LimbicLab — Meta Ads Playbook

## A/B Test: Free Guide vs. Giveaway

**Campaign Objective:** Lead Generation  
**Budget:** $20–30/day total ($10–15 per ad set)  
**Duration:** 2 weeks minimum (target 50+ leads per variant before comparing)

---

## Ad Set A — Free Ebook (Free Guide)

**Landing page:** https://www.limbiclab.com/ebook  
**Lead magnet:** "The Neuroscience of the Dark" — free ebook, instant access  
**Conversion event:** Lead (fires on email submit)

### Primary Ad Copy (Facebook/Instagram Feed)

**Headline:**
```
The Neuroscience Behind Dark Behavior — Free
```

**Body (short):**
```
Most people don't understand what happens neurologically during a manic episode, a trauma response, or a cult's psychological pull.

We modeled it. 5 chapters, 21+ peer-reviewed citations.

Get the free ebook →
```

**Body (long — for feed):**
```
Bipolar disorder isn't just "mood swings."
Environmental trauma rewires the brain at the epigenetic level.
Ritual belief systems trigger measurable neurochemical states.

The Neuroscience of the Dark is a graduate-level synthesis of all of it — bipolar oscillation, ACEs research, ritual neuroscience, suicidality, and the creative brain.

Free. No paywall. Just your email.

Tap to unlock it →
```

**CTA Button:** Learn More  
**Visual suggestion:** Dark background, the ebook cover icon, teal glow — matches site aesthetic

---

## Ad Set B — Giveaway

**Landing page:** https://www.limbiclab.com/giveaway  
**Lead magnet:** Win 3-month newsletter + ebook + Dark Psychology Guide bundle  
**Conversion event:** Lead (fires on form submit)

### Primary Ad Copy (Facebook/Instagram Feed)

**Headline:**
```
Win the Full LimbicLab Bundle — Enter Free
```

**Body (short):**
```
3 months of graduate-level neuroscience research in your inbox.
The Neuroscience of the Dark ebook.
The Dark Psychology Defense Guide PDF.

One winner. Drawn May 19. Enter free →
```

**Body (long — for feed):**
```
Every week we send a deep research brief on bipolar disorder, environmental trauma, dark psychology, and the neuroscience of behavior.

21+ citations per issue. Graduate-level analysis. In your inbox.

We're giving away a 3-month subscription + the full ebook bundle to one subscriber.

Value: $56.97. Cost to enter: $0.

Drawing closes May 19 — enter while it's open →
```

**CTA Button:** Enter Now  
**Visual suggestion:** Prize bundle flat lay, countdown clock, dark terminal aesthetic

---

## Retargeting Ad (runs to website visitors who didn't convert)

**Headline:**
```
Still thinking about it?
```

**Body:**
```
The LimbicLab ebook is free — just your email.

5 chapters on bipolar oscillation, trauma neuroscience, and dark psychology.
21+ peer-reviewed citations.

No subscription required. No catch.
```

**CTA Button:** Get Free Access  
**Landing page:** https://www.limbiclab.com/ebook

---

## Audience Targeting

### Cold Audiences (Top of Funnel)

**Interest stack 1 — Science/Research:**
- Neuroscience
- Psychiatry
- Psychology (academic)
- Behavioral neuroscience
- Mental health research

**Interest stack 2 — Dark Psychology / True Crime:**
- Dark psychology
- True crime
- Criminal psychology
- Forensic psychology
- Narcissistic abuse recovery

**Interest stack 3 — Disorder-specific:**
- Bipolar disorder
- PTSD
- Trauma recovery
- Mental health awareness

**Demographics:** 22–45, all genders, English-speaking markets (US, UK, CA, AU)

### Warm Audiences (Retargeting — after pixel has data)

- Website visitors (last 30 days) — exclude converters
- Ebook page visitors who didn't submit email
- Lookalike 1% of leads list (upload CSV from Supabase)
- Lookalike 1% of newsletter subscribers

---

## Creative Formats

| Format | Use |
|--------|-----|
| Single image | First 2 weeks — simplest to test |
| Short-form video (15s) | Week 3+ — read a quote from the ebook over dark visuals |
| Carousel | Show the 5 chapter titles as cards |
| Story (9:16) | Countdown clock for giveaway urgency |

---

## Metrics to Track

| Metric | Where | Target |
|--------|-------|--------|
| CPL (cost per lead) | Meta Ads Manager | < $3 ebook / < $2 giveaway |
| CTR | Meta Ads Manager | > 2% |
| Email open rate (day 7) | Email provider | > 35% = quality signal |
| Trial start rate | Supabase / Stripe | > 5% of leads → quality signal |
| CAC (cost per subscriber) | Calculate manually | < $15 |

---

## Setup Checklist

- [ ] Add `NEXT_PUBLIC_META_PIXEL_ID` to `.env.local` and Vercel env vars
- [ ] Add Supabase keys to `.env.local` and Vercel env vars
- [ ] Run Supabase migration (SQL below)
- [ ] Verify pixel fires on `/ebook` email submit and `/giveaway` submit
- [ ] Test lead appears in Supabase `leads` table
- [ ] Set up Meta Business Manager → Events Manager → verify `Lead` event
- [ ] Create campaign in Meta Ads Manager (Leads objective)
- [ ] Upload creative assets

---

## Supabase Migration

Run this in Supabase SQL editor:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id          uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  email       text        NOT NULL,
  name        text,
  source      text        NOT NULL CHECK (source IN ('ebook', 'giveaway')),
  created_at  timestamptz DEFAULT now(),
  UNIQUE (email, source)
);

CREATE INDEX IF NOT EXISTS leads_source_idx ON leads (source);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
```

---

## How to Export Leads for Lookalike Audience

1. Go to Supabase → Table Editor → `leads`
2. Filter by source = 'ebook' or 'giveaway'
3. Export CSV
4. Upload to Meta Ads Manager → Audiences → Custom Audience → Customer List
5. Create Lookalike from that list (1% similarity)
