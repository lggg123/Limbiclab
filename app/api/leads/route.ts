import { NextRequest, NextResponse } from 'next/server'
import { getLeadsClient } from '@/lib/supabase-leads'
import { resend } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { email, name, source } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    if (!source || !['ebook', 'giveaway'].includes(source)) {
      return NextResponse.json({ error: 'Invalid source' }, { status: 400 })
    }

    const db = getLeadsClient()

    if (db) {
      const { error } = await db
        .from('leads')
        .upsert(
          { email: email.toLowerCase().trim(), name: name?.trim() || null, source },
          { onConflict: 'email,source', ignoreDuplicates: true }
        )

      if (error) {
        console.error('[leads] Supabase error:', error)
      }
    } else {
      console.log('[leads] Supabase not configured — lead received:', { email, source })
    }

    if (source === 'ebook') {
      await resend.emails.send({
        from: 'LimbicLab <onboarding@resend.dev>',
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
            <a href="https://www.limbiclab.xyz/ebook" style="display:inline-block;background:#2a9d9d;color:#030305;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:0.2em;padding:14px 32px;text-decoration:none;">
              READ THE EBOOK →
            </a>
            <p style="font-size:10px;color:#3a3a52;margin-top:40px;letter-spacing:0.08em;line-height:1.6;">
              You received this because you signed up at limbiclab.xyz.<br/>
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
