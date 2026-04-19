import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'
import { createClient } from '@supabase/supabase-js'

function verifySignature(email: string, sig: string): boolean {
  const secret = process.env.WEBHOOK_SECRET ?? ''
  const expected = createHmac('sha256', secret).update(email).digest('hex')
  return expected === sig
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')
  const sig = req.nextUrl.searchParams.get('sig')

  if (!email || !sig) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }

  if (!verifySignature(email, sig)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  await supabase
    .from('leads')
    .delete()
    .eq('email', email)
    .eq('source', 'newsletter')

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:monospace;background:#0a0a0a;color:#e0e0e0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
      <div style="text-align:center;">
        <p style="font-size:1.2rem;">You've been unsubscribed.</p>
        <p style="color:#888;font-size:0.9rem;">You will no longer receive LimbicLab newsletters.</p>
        <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color:#2a9d9d;">Return to LimbicLab</a>
      </div>
    </body></html>`,
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  )
}
