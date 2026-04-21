import { NextRequest, NextResponse } from 'next/server'
import { getLeadsClient } from '@/lib/supabase-leads'
import { resend } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { email, name, source, language } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    if (!source || !['ebook', 'giveaway', 'newsletter'].includes(source)) {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }

    const lang = language === 'es' ? 'es' : 'en'

    const db = getLeadsClient()
    let ebookToken: string | null = null

    if (source === 'ebook' && db) {
      const max = parseInt(process.env.EBOOK_MAX_CLAIMS ?? '0', 10)
      if (max > 0) {
        const { count } = await db
          .from('leads')
          .select('*', { count: 'exact', head: true })
          .eq('source', 'ebook')
        if ((count ?? 0) >= max) {
          return NextResponse.json({ error: 'EBOOK_CAP_REACHED' }, { status: 410 })
        }
      }
    }

    if (db) {
      const cleanEmail = email.toLowerCase().trim()

      if (source === 'ebook') {
        ebookToken = crypto.randomUUID()
        const { error } = await db
          .from('leads')
          .upsert(
            { email: cleanEmail, name: name?.trim() || null, source, language: lang, ebook_token: ebookToken },
            { onConflict: 'email,source', ignoreDuplicates: false }
          )
        if (error) console.error('[leads] Supabase error:', error)
      } else {
        const { error } = await db
          .from('leads')
          .upsert(
            { email: cleanEmail, name: name?.trim() || null, source, language: lang },
            { onConflict: 'email,source', ignoreDuplicates: true }
          )
        if (error) console.error('[leads] Supabase error:', error)
      }
    } else {
      console.log('[leads] Supabase not configured — lead received:', { email, source })
      if (source === 'ebook') ebookToken = crypto.randomUUID()
    }

    const FROM = process.env.RESEND_FROM_EMAIL ?? 'LimbicLab <onboarding@resend.dev>'
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.limbiclab.xyz'

    if (source === 'ebook') {
      const ebookUrl = ebookToken ? `${BASE_URL}/ebook?token=${ebookToken}` : `${BASE_URL}/ebook`
      await resend.emails.send({
        from: FROM,
        to: email.toLowerCase().trim(),
        subject: 'Your Ebook: The Neuroscience of the Dark',
        html: `
          <div style="background:#030305;color:#d4d4e0;font-family:monospace;padding:48px 32px;max-width:520px;margin:0 auto;">
            <div style="font-size:9px;letter-spacing:0.28em;color:#2a9d9d;border:1px solid rgba(42,157,157,0.25);display:inline-block;padding:4px 14px;margin-bottom:28px;">
              LIMBICLAB · E-BOOK
            </div>
            <h1 style="font-size:20px;font-weight:700;color:#d4d4e0;letter-spacing:0.04em;margin:0 0 16px;">
              The Neuroscience of the Dark
            </h1>
            <p style="font-size:13px;color:#8888a0;line-height:1.75;margin:0 0 32px;">
              Five chapters. Bipolar oscillation, environmental trauma, ritual neuroscience,
              suicidality convergence, and the creative brain. 21+ citations.
            </p>
            <a href="${ebookUrl}" style="display:inline-block;background:#2a9d9d;color:#030305;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:0.2em;padding:14px 32px;text-decoration:none;">
              READ THE EBOOK →
            </a>
            <div style="border-top:1px solid #161625;margin-top:36px;padding-top:28px;">
              <p style="font-size:11px;color:#555;line-height:1.75;margin:0 0 20px;">
                While you're here — LimbicLab publishes a weekly research brief on bipolar disorder,
                trauma neuroscience, and dark psychology. 14-day free trial.
              </p>
              <a href="${BASE_URL}/store" style="display:inline-block;background:transparent;color:#2a9d9d;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:0.18em;padding:10px 24px;text-decoration:none;border:1px solid rgba(42,157,157,0.4);">
                START FREE TRIAL →
              </a>
            </div>
            <p style="font-size:10px;color:#3a3a52;margin-top:36px;letter-spacing:0.08em;line-height:1.6;">
              You received this because you signed up at limbiclab.xyz.<br/>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        `,
      })
    }

    if (source === 'newsletter') {
      await resend.emails.send({
        from: FROM,
        to: email.toLowerCase().trim(),
        subject: "You're on the list — LimbicLab Weekly",
        html: `
          <div style="background:#030305;color:#d4d4e0;font-family:monospace;padding:48px 32px;max-width:520px;margin:0 auto;">
            <div style="font-size:9px;letter-spacing:0.28em;color:#2a9d9d;border:1px solid rgba(42,157,157,0.25);display:inline-block;padding:4px 14px;margin-bottom:28px;">
              LIMBICLAB · NEWSLETTER
            </div>
            <h1 style="font-size:20px;font-weight:700;color:#d4d4e0;letter-spacing:0.04em;margin:0 0 16px;">
              You're on the list.
            </h1>
            <p style="font-size:13px;color:#8888a0;line-height:1.75;margin:0 0 32px;">
              Every week: one neuroscience topic, dissected. Bipolar disorder, trauma, dark psychology,
              circadian biology — graduate-level research briefs, no fluff.
            </p>
            <p style="font-size:13px;color:#8888a0;line-height:1.75;margin:0 0 32px;">
              Your first issue lands next Monday. If you don't see it, check your spam folder and mark us as safe.
            </p>
            <a href="${BASE_URL}/store" style="display:inline-block;background:#2a9d9d;color:#030305;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:0.2em;padding:14px 32px;text-decoration:none;">
              VIEW YOUR SUBSCRIPTION →
            </a>
            <p style="font-size:10px;color:#3a3a52;margin-top:36px;letter-spacing:0.08em;line-height:1.6;">
              You received this because you subscribed at limbiclab.xyz.<br/>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        `,
      })
    }

    if (source === 'giveaway') {
      await resend.emails.send({
        from: FROM,
        to: email.toLowerCase().trim(),
        subject: "You're entered — LimbicLab Giveaway",
        html: `
          <div style="background:#030305;color:#d4d4e0;font-family:monospace;padding:48px 32px;max-width:520px;margin:0 auto;">
            <div style="font-size:9px;letter-spacing:0.28em;color:#7c3aed;border:1px solid rgba(124,58,237,0.25);display:inline-block;padding:4px 14px;margin-bottom:28px;">
              LIMBICLAB · GIVEAWAY
            </div>
            <h1 style="font-size:20px;font-weight:700;color:#d4d4e0;letter-spacing:0.04em;margin:0 0 16px;">
              You're in the drawing.
            </h1>
            <p style="font-size:13px;color:#8888a0;line-height:1.75;margin:0 0 24px;">
              ${name ? `Hey ${name} — your` : 'Your'} entry is confirmed.
              The winner is drawn on <strong style="color:#d4d4e0;">May 19, 2026</strong> and we'll email you directly if you win.
            </p>
            <div style="border:1px solid #161625;background:#07070e;padding:20px 24px;margin-bottom:32px;">
              <div style="font-size:9px;letter-spacing:0.2em;color:#444;margin-bottom:12px;">PRIZE BUNDLE</div>
              <div style="font-size:12px;color:#8888a0;line-height:2;">
                ◈ 3-Month Newsletter Subscription<br/>
                ◉ The Neuroscience of the Dark Ebook<br/>
                ◇ Dark Psychology Defense Guide PDF
              </div>
            </div>
            <div style="border-top:1px solid #161625;padding-top:28px;">
              <p style="font-size:11px;color:#555;line-height:1.75;margin:0 0 20px;">
                Don't want to wait? Start a 14-day free trial of the newsletter now —
                cancel anytime before it ends.
              </p>
              <a href="${BASE_URL}/store" style="display:inline-block;background:#7c3aed;color:#fff;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:0.18em;padding:12px 28px;text-decoration:none;">
                START FREE TRIAL →
              </a>
            </div>
            <p style="font-size:10px;color:#3a3a52;margin-top:36px;letter-spacing:0.08em;line-height:1.6;">
              You received this because you entered the LimbicLab giveaway.<br/>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[leads] Error:', err)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
