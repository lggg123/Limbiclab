# LimbicLab — Email Setup (Resend)

## Current Status

| Flow | Trigger | Email sent |
|------|---------|------------|
| Ebook gate | User submits email on `/ebook` | Access link + newsletter trial CTA |
| Giveaway | User enters on `/giveaway` | Entry confirmation + newsletter trial CTA |

---

## Why emails aren't reaching real users yet

Resend's default `onboarding@resend.dev` sender **only delivers to the email address that owns the Resend account**. To send to anyone, you must verify your domain.

---

## Step 1 — Verify your domain in Resend

1. Go to **resend.com/domains** → Add Domain
2. Enter `limbiclab.com`
3. Resend gives you DNS records (SPF, DKIM, DMARC) — add them in your DNS provider (Cloudflare, Namecheap, etc.)
4. Click **Verify** — takes 5–30 minutes to propagate

Once verified, emails send from `hello@limbiclab.com` (or any `@limbiclab.com` address).

---

## Step 2 — Update the from address

`.env.local` and Vercel already have this set:

```
RESEND_FROM_EMAIL=LimbicLab <hello@limbiclab.com>
```

Change `hello@limbiclab.com` to whatever inbox you want replies going to (e.g. `research@limbiclab.com`).

**Also add this to Vercel** — Settings → Environment Variables → `RESEND_FROM_EMAIL`.

---

## Step 3 — Add env vars to Vercel

Make sure all three are set in Vercel (Settings → Environment Variables):

| Key | Value |
|-----|-------|
| `RESEND_API_KEY` | `re_9kyGwyAf_...` (already in `.env.local`) |
| `RESEND_FROM_EMAIL` | `LimbicLab <hello@limbiclab.com>` |
| `NEXT_PUBLIC_BASE_URL` | `https://www.limbiclab.com` |

---

## What each email looks like

### Ebook confirmation
- **Subject:** `Your Ebook: The Neuroscience of the Dark`
- **From:** `LimbicLab <hello@limbiclab.com>`
- **Content:** Link to `/ebook`, newsletter free trial CTA
- **Fires when:** User submits email on the ebook gate

### Giveaway confirmation
- **Subject:** `You're entered — LimbicLab Giveaway`
- **From:** `LimbicLab <hello@limbiclab.com>`
- **Content:** Entry confirmed, prize list, newsletter free trial CTA
- **Fires when:** User submits form on `/giveaway`

---

## Testing

To test locally without domain verification:

1. Sign up with **the email that owns the Resend account** — it will deliver
2. Or add a **test email** in Resend dashboard → Audiences → add yourself
3. Check Resend dashboard → **Emails** tab to see delivery status, opens, bounces

---

## Resend free tier limits

| Limit | Amount |
|-------|--------|
| Emails/month | 3,000 |
| Emails/day | 100 |
| Custom domains | 1 |

Upgrade to Pro ($20/mo) when you hit scale — 50k emails/month.

---

## Troubleshooting

**Email not delivered:**
- Check Resend dashboard → Emails → look for bounced/failed status
- Confirm domain is verified (green checkmark in Resend → Domains)
- Confirm `RESEND_API_KEY` is set in Vercel env vars and redeployed

**Getting `onboarding@resend.dev` still:**
- `RESEND_FROM_EMAIL` env var is missing in Vercel — add it and redeploy

**DKIM/SPF failing:**
- DNS records take up to 48h to propagate — wait and retry verification
