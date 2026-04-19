import { NextRequest, NextResponse } from 'next/server'
import { getLeadsClient } from '@/lib/supabase-leads'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) return NextResponse.json({ valid: false }, { status: 400 })

  const db = getLeadsClient()
  if (!db) return NextResponse.json({ valid: false }, { status: 503 })

  const { data, error } = await db
    .from('leads')
    .select('email')
    .eq('ebook_token', token)
    .single()

  if (error || !data) return NextResponse.json({ valid: false }, { status: 401 })

  return NextResponse.json({ valid: true })
}
