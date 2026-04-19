# LimbicLab — YouTube Ads Marketing Strategy

> Skill: `youtube-ads` v1.0.1 · Updated 2026-04-19

This strategy covers paid YouTube advertising across two parallel funnels: free ebook lead capture and free newsletter trial sign-ups. Both use the same video creative with different end cards and CTAs.

---

## 1. Goals & Funnel Mapping

| Stage | Goal | Primary Metric |
|-------|------|----------------|
| **Top of Funnel** | Awareness — dark psychology / neuroscience content | Views, Watch Time |
| **Middle of Funnel — Funnel A** | Free ebook sign-up (200 cap) | Leads, CPL |
| **Middle of Funnel — Funnel B** | Free newsletter trial (14 days) | Trials started, CPT |
| **Bottom of Funnel** | Newsletter paid conversion / store purchase | Revenue, ROAS |

---

## 2. Dual CTA Strategy

**One video. Two exports. Two campaigns.**

The same 2-minute combined video (church + Russian Satanist + Playa Del Rey interview) is exported twice in CapCut with different end cards:

| Export | End Card | CTA | URL |
|--------|----------|-----|-----|
| **Version A** | `THE NEUROSCIENCE OF THE DARK — FREE` | `GET FREE EBOOK →` | `/ebook` |
| **Version B** | `WEEKLY RESEARCH BRIEF — 14 DAYS FREE` | `START FREE TRIAL →` | `/store` |

Never run both CTAs in the same ad. Keep them in separate campaigns so Google optimizes each independently.

---

## 3. Video Structure — Combined Cut

| Timestamp | Clip | Voiceover / Overlay |
|-----------|------|---------------------|
| 0–5s | Church expulsion — cold open | Silent |
| 5–18s | Church clip finishes | Satan etymology — institutional rejection angle |
| 18–28s | Playa Del Rey interview — *"how much do you know about Satan?"* | Let her answer play natural |
| 28–35s | Her answer lands | Text overlay: `Most people don't.` |
| 35–55s | Russian Satanist / bus | Dissociation + ritual neuroscience angle |
| 55–1:20 | Playa Del Rey — 5 sec slowed to 0.5x | Voiceover tying all three clips together |
| 1:20–1:50 | Text overlays, citations, site b-roll | Ebook/newsletter pitch |
| 1:50–2:00 | **Version A end card** OR **Version B end card** | Static CTA frame |

---

## 4. A/B Test Structure

Run three hook variants as separate ads within each campaign. Same targeting, same budget split. Let Google optimize after 500 impressions per ad.

| Hook | Opening Clip | Angle |
|------|-------------|-------|
| **A** | Church expulsion + dog | Institutional rejection / Satan etymology |
| **B** | Russian Satanist / bus | Dissociation + ritual neuroscience |
| **C** | Hollywood — coercive language clip | Compliance neuroscience / command framing |

**Rule**: Don't manually kill a variant before 500 impressions. Let the data decide.

---

## 5. Ad Scripts

### Script A — Church / Hollywood

> "That man just got removed from a church in Hollywood. With his dog.
> And the reason is more neurologically interesting than you think.
>
> The word 'Satan' — the original Aramaic — doesn't mean a demon.
> It means adversary. Someone who opposes the established order.
> Yeshua used it on his closest disciple. Not as an insult. As a diagnosis.
>
> LimbicLab is a computational neuroscience platform.
> We study what institutions actually do to the brains they reject —
> the kindling model, the stress-diathesis framework,
> the epigenetics of repeated social exclusion.
>
> The free ebook is called The Neuroscience of the Dark.
> Five chapters. Bipolar oscillation, trauma, ritual neuroscience,
> suicidality, and the creative brain. 21 peer citations.
>
> Link is in the description. It's free. Read it."

### Script B — Russian Satanist / Bus

> "She told me she was going to Russia. She's on the bus home.
>
> What you just watched is a dissociation loop —
> the brain constructing a narrative that protects identity
> even when the behavior directly contradicts it.
> Sex rituals, initiation ceremonies, coercive group dynamics —
> they all run through the same neurological architecture.
> Oxytocin. Dopamine. Fear conditioning. Repetition.
>
> It's not mysticism. It's receptor pharmacology.
>
> LimbicLab documents the neuroscience behind belief systems
> that operate at the edge of human psychology.
> Ritual. Trauma. Dark psychology. The biology of extremity.
>
> The free ebook breaks it down in five chapters.
> Graduate-level research. Plain language. Fully cited.
>
> Link in the description. First 200 copies are free. After that it's gone."

### Delivery Notes
- Pace slower than feels natural — leave 1 full second after punchy lines
- Tone: researcher talking to a colleague, not influencer to camera
- *"After that it's gone"* — deliver flat, no inflection
- Record 2–3 takes, use the one where you sound least like you're reading

---

## 6. CapCut Checklist

- [ ] Aspect ratio: 16:9 (not 9:16)
- [ ] Color grade: desaturate slightly, push shadows dark — match `#0a0a0a`
- [ ] Text style: white monospace, tight letter spacing — match site aesthetic
- [ ] Audio: ambient sound at 20%, low drone underneath, voiceover clean on top
- [ ] Beep/mute any explicit audio (YouTube policy)
- [ ] Auto-caption → style monospace white (boosts watch time)
- [ ] Playa Del Rey clip: slow to 0.5x speed for cinematic stretch
- [ ] Export twice — Version A (ebook CTA) and Version B (newsletter CTA)
- [ ] End card: static last 5 seconds with URL + cap reminder

---

## 7. Campaign Structure in Google Ads

```
Campaign A: LimbicLab — Free Ebook
  Budget: $15/day
  └── Ad Group: Dark Psychology Cold Audience
        └── Hook A — Church (Version A end card)
        └── Hook B — Russian Satanist (Version A end card)
        └── Hook C — Hollywood command (Version A end card)

Campaign B: LimbicLab — Free Newsletter Trial
  Budget: $10/day
  └── Ad Group: Dark Psychology Cold Audience
        └── Hook A — Church (Version B end card)
        └── Hook B — Russian Satanist (Version B end card)
        └── Hook C — Hollywood command (Version B end card)

Campaign C: LimbicLab — Retargeting
  Budget: $10/day
  └── Ad Group: Ebook page visitors (no sign-up)
        └── TrueView for Action — newsletter CTA
  └── Ad Group: Channel subscribers
        └── TrueView for Action — "You watched. Now subscribe."

Campaign D: LimbicLab — Awareness
  Budget: $5/day
  └── Ad Group: Adjacent content (true crime, psychology channels)
        └── Bumper 6 sec — brand stamp
```

**Total starting budget: $40/day.** Scale Campaign A or B once one proves lower CPL.

---

## 8. UTM Parameters

| Campaign | URL |
|----------|-----|
| Ebook ads | `limbiclab.xyz/ebook?utm_source=youtube&utm_medium=paid&utm_campaign=ebook` |
| Newsletter ads | `limbiclab.xyz/store?utm_source=youtube&utm_medium=paid&utm_campaign=newsletter` |
| Retargeting | `limbiclab.xyz/store?utm_source=youtube&utm_medium=retargeting&utm_campaign=newsletter` |

---

## 9. Budget Table

| Campaign | Daily Budget | Format | Est. CPV | Goal |
|----------|-------------|--------|----------|------|
| Free Ebook | $15/day | TrueView Skippable | $0.03–0.08 | <$4 CPL |
| Free Newsletter | $10/day | TrueView Skippable | $0.03–0.08 | <$12 CPT |
| Retargeting | $10/day | TrueView for Action | $0.10–0.25 | Paid conversions |
| Awareness | $5/day | Bumper | $0.01–0.03 | Brand recall |
| **Total** | **$40/day** | — | — | — |

---

## 10. KPIs & Optimization Triggers

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| View-through rate (VTR) | >30% | Rewrite hook — first 5 sec failing |
| Click-through rate (CTR) | >1.5% | Test new CTA overlay text |
| Cost per ebook lead | <$4.00 | Scale Campaign A budget |
| Cost per trial start | <$12.00 | Tighten retargeting audience |
| Ebook → trial conversion | >10% | Fix email sequence, not the ads |

---

## 11. Pre-Launch Checklist

- [ ] Google Ads account linked to YouTube channel
- [ ] Conversion tracking live — ebook sign-up + newsletter checkout (gtag installed ✓)
- [ ] Ebook cap set to 200 (`EBOOK_MAX_CLAIMS=200` in Vercel ✓)
- [ ] Remarketing audiences created: site visitors, ebook page, channel viewers
- [ ] Both video exports done in CapCut (Version A + Version B)
- [ ] UTM parameters on all CTA URLs
- [ ] Brand safety exclusions applied (no children's content, no crisis categories)
- [ ] Monthly budget hard cap set in Google Ads account settings

---

## 12. 30-Day Content Calendar

| Week | Action |
|------|--------|
| **Week 1** | Edit combined video tonight. Export Version A + B. Launch Campaign A + B at $25/day total. |
| **Week 2** | Check VTR at 500 impressions per hook. Kill lowest performer. Film more Hollywood/Playa Del Rey for Hook C. |
| **Week 3** | Launch Hook C. Launch retargeting campaign against ebook page visitors. |
| **Week 4** | Compare ebook CPL vs newsletter CPT. Double budget on winning campaign. |

---

*Strategy built with the `youtube-ads` skill. For organic YouTube optimization, run `/youtube-seo`. For Google Search/PMax campaigns, run `/google-ads`.*
