# VENEZIA300 Coupon Ad Strategy

## The Offer
- **Code:** `VENEZIA300`
- **Value:** 3 months free (100% off, repeating 3 months)
- **Cap:** 100 redemptions — Stripe auto-rejects after
- **Where to redeem:** Stripe Checkout on `/lp/en` or `/lp/es`

---

## A/B Test Structure

| Test | URL | Language | Offer |
|------|-----|----------|-------|
| A | `limbiclab.xyz/lp/en` | English | Free ebook → newsletter upsell + VENEZIA300 |
| B | `limbiclab.xyz/lp/es` | Spanish | Free ebook → newsletter upsell + VENEZIA300 |
| C | `limbiclab.xyz/store?lang=en` | English | Newsletter trial direct + VENEZIA300 |
| D | `limbiclab.xyz/store?lang=es` | Spanish | Newsletter trial direct + VENEZIA300 |

**Signal to watch:** A vs C (EN) and B vs D (ES) — which converts better, ebook-first or direct trial?  
Kill the loser per language after 500+ impressions each.

---

## YouTube Ad Setup

### In-Video
- Say the code out loud in the outro
- Flash on screen last 5 seconds: `VENEZIA300 — 3 MONTHS FREE`
- White monospace text on dark background

### YouTube Ads Manager Fields
- **Headline:** `3 Months Free — Code VENEZIA300`
- **Description:** `100 spots only · LimbicLab Weekly · Neuroscience research delivered`
- **CTA button:** `Get Offer`
- **Final URL:** `/lp/en` (EN campaigns) or `/lp/es` (ES campaigns)
- **Companion banner:** Same code + CTA visible while ad plays

### Campaigns
| Campaign | Budget | Target | CTA URL |
|----------|--------|--------|---------|
| EN Ebook | $15/day | English-speaking, 25–45, psychology/neuroscience interests | `/lp/en` |
| ES Ebook | $15/day | Spanish-speaking, LATAM + US Hispanic, same interests | `/lp/es` |
| EN Newsletter | $10/day | Retarget EN visitors who didn't convert | `/store?lang=en` |
| ES Newsletter | $10/day | Retarget ES visitors who didn't convert | `/store?lang=es` |

---

## When the 100 Redemptions Run Out

### Warning signs
- Check Stripe Dashboard → Coupons → VENEZIA300 weekly
- Watch for redemption count approaching 100

### What to do
1. **Edit the running ad** in YouTube Ads Manager — update headline and description, remove code reference. No new campaign needed, edits go live within minutes.
2. **Option B:** Create `VENEZIA300B` with another 100 redemptions and swap the code in ad copy.
3. **Option C:** Drop the coupon angle entirely — switch CTA to "14 Days Free" which is still true.

### Get notified early
Set a Stripe webhook on `coupon.updated` or manually check weekly. Calendar reminder: every Sunday, check redemption count.

---

## Landing Page Coupon Placement

Both `/lp/en` and `/lp/es` already show:
> *Use code **VENEZIA300** for 3 months free*

This means the code is visible at every touchpoint:
- Ad copy (YouTube headline)
- Video end card (on screen + voiceover)
- Landing page (newsletter section)
- Stripe Checkout (user enters it manually)

---

## Success Metrics

| Metric | Target |
|--------|--------|
| CTR (YouTube) | > 1.5% |
| Ebook claim rate | > 30% of landing page visits |
| Newsletter trial starts | > 10% of landing page visits |
| VENEZIA300 redemptions | Track weekly — pause at 90 |
| Cost per ebook lead | < $5 |
| Cost per newsletter trial | < $15 |
