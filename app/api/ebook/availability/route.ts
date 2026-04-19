import { NextResponse } from 'next/server'
import { getLeadsClient } from '@/lib/supabase-leads'

export async function GET() {
  const max = parseInt(process.env.EBOOK_MAX_CLAIMS ?? '0', 10)

  // 0 = unlimited
  if (!max) return NextResponse.json({ available: true, claimed: null, max: null })

  const db = getLeadsClient()
  if (!db) return NextResponse.json({ available: true, claimed: null, max })

  const { count, error } = await db
    .from('leads')
    .select('*', { count: 'exact', head: true })
    .eq('source', 'ebook')

  if (error) return NextResponse.json({ available: true, claimed: null, max })

  const claimed = count ?? 0
  return NextResponse.json({ available: claimed < max, claimed, max })
}
