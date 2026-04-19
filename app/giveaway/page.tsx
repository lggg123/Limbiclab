'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackLead } from '@/lib/fbq'

const GIVEAWAY_END = new Date('2026-05-19T23:59:59')

const PRIZES = [
  { icon: '◈', label: '3-Month Newsletter', sub: 'Full access — $29.97 value' },
  { icon: '◉', label: 'Neuroscience of the Dark Ebook', sub: '5 chapters, 21+ citations' },
  { icon: '◇', label: 'Dark Psychology Defense Guide', sub: 'PDF — $27 value' },
]

function useCountdown(end: Date) {
  const [remaining, setRemaining] = useState(() => Math.max(0, end.getTime() - Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, end.getTime() - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [end])

  const d = Math.floor(remaining / 86400000)
  const h = Math.floor((remaining % 86400000) / 3600000)
  const m = Math.floor((remaining % 3600000) / 60000)
  const s = Math.floor((remaining % 60000) / 1000)
  return { d, h, m, s, expired: remaining === 0 }
}

export default function GiveawayPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const { d, h, m, s, expired } = useCountdown(GIVEAWAY_END)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), name: name.trim(), source: 'giveaway' }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
        return
      }

      trackLead('giveaway')
      setDone(true)
    } catch {
      setError('Network error — please try again.')
    } finally {
      setLoading(false)
    }
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', fontFamily: 'monospace', color: '#e0e0e0' }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse-glow { 0%,100%{opacity:0.4;} 50%{opacity:0.7;} }
        .ga { animation: fadeUp 0.5s ease both; }
        .ga-1 { animation-delay: 0.05s; }
        .ga-2 { animation-delay: 0.15s; }
        .ga-3 { animation-delay: 0.25s; }
        .ga-4 { animation-delay: 0.4s; }
        .ga-5 { animation-delay: 0.55s; }
        .prize-card { transition: border-color 0.2s, background 0.2s; }
        .prize-card:hover { border-color: rgba(124,58,237,0.4) !important; background: rgba(124,58,237,0.04) !important; }
        @media(max-width:640px) { .giveaway-inner { padding: 0 16px !important; } .countdown-grid { gap: 12px !important; } }
      `}</style>

      {/* radial glow */}
      <div aria-hidden style={{
        position: 'fixed', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600, borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
        animation: 'pulse-glow 5s ease-in-out infinite',
      }} />

      <div className="giveaway-inner" style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* badge */}
        <div className="ga ga-1" style={{ textAlign: 'center', marginBottom: 24 }}>
          <span style={{
            fontSize: 9, letterSpacing: '0.28em', color: '#7c3aed',
            border: '1px solid rgba(124,58,237,0.3)', padding: '4px 16px', display: 'inline-block',
          }}>
            GIVEAWAY · ENDS {GIVEAWAY_END.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase()}
          </span>
        </div>

        {/* headline */}
        <div className="ga ga-2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{
            fontSize: 42, fontWeight: 800, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Win the Full<br />
            <span style={{ color: '#7c3aed' }}>LimbicLab</span> Bundle
          </h1>
          <p style={{ fontSize: 13, color: '#777', lineHeight: 1.75, maxWidth: 480, margin: '0 auto' }}>
            3 months of graduate-level neuroscience research in your inbox + the full ebook + the Dark Psychology Defense Guide. One winner, drawn live.
          </p>
        </div>

        {/* countdown */}
        <div className="ga ga-3" style={{
          border: '1px solid #1e1e1e', background: '#0f0f0f',
          padding: '28px 32px', marginBottom: 40, textAlign: 'center',
        }}>
          <div style={{ fontSize: 9, letterSpacing: '0.22em', color: '#444', marginBottom: 16 }}>
            DRAWING CLOSES IN
          </div>
          {expired ? (
            <div style={{ fontSize: 14, color: '#7c3aed', letterSpacing: '0.1em' }}>DRAWING CLOSED</div>
          ) : (
            <div className="countdown-grid" style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
              {[{ n: pad(d), l: 'DAYS' }, { n: pad(h), l: 'HRS' }, { n: pad(m), l: 'MIN' }, { n: pad(s), l: 'SEC' }].map(({ n, l }) => (
                <div key={l} style={{ minWidth: 56, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: '#7c3aed', letterSpacing: '-0.02em', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 9, letterSpacing: '0.2em', color: '#333', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* prizes */}
        <div className="ga ga-3" style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.22em', color: '#444', marginBottom: 16, textAlign: 'center' }}>
            WHAT YOU WIN
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRIZES.map((p) => (
              <div key={p.label} className="prize-card" style={{
                display: 'flex', alignItems: 'center', gap: 16,
                border: '1px solid #1a1a1a', background: '#111',
                padding: '16px 20px',
              }}>
                <span style={{ fontSize: 20, color: '#7c3aed', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.05em' }}>{p.label}</div>
                  <div style={{ fontSize: 10, color: '#444', marginTop: 2, letterSpacing: '0.08em' }}>{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form */}
        <div className="ga ga-4">
          {done ? (
            <div style={{
              border: '1px solid rgba(124,58,237,0.3)',
              background: 'rgba(124,58,237,0.04)',
              padding: '40px 32px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>◈</div>
              <h2 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8 }}>
                YOU&apos;RE IN THE DRAWING
              </h2>
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.75, marginBottom: 28, maxWidth: 360, margin: '0 auto 28px' }}>
                Winner announced on {GIVEAWAY_END.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                We&apos;ll email you if you win.
              </p>
              <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 24, marginTop: 24 }}>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#444', marginBottom: 14 }}>
                  WHILE YOU WAIT — DON&apos;T MISS THE NEWSLETTER
                </div>
                <Link href="/store" style={{
                  display: 'inline-block',
                  fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em',
                  color: '#0a0a0a', background: '#2a9d9d',
                  border: '1px solid #2a9d9d', padding: '12px 28px',
                  textDecoration: 'none', fontWeight: 700,
                }}>
                  START 14-DAY FREE TRIAL →
                </Link>
              </div>
            </div>
          ) : (
            <div style={{
              border: '1px solid rgba(124,58,237,0.2)',
              background: 'rgba(124,58,237,0.02)',
              padding: '36px 32px',
            }}>
              <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 4, textAlign: 'center' }}>
                ENTER THE GIVEAWAY
              </h2>
              <p style={{ fontSize: 10, color: '#444', letterSpacing: '0.08em', textAlign: 'center', marginBottom: 28 }}>
                One entry per person. Winner drawn {GIVEAWAY_END.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    background: '#0a0a0a', border: '1px solid #1e1e1e',
                    color: '#e0e0e0', fontFamily: 'monospace', fontSize: 13,
                    padding: '12px 16px', outline: 'none', transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = '#1e1e1e')}
                />
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: '#0a0a0a', border: '1px solid #1e1e1e',
                    color: '#e0e0e0', fontFamily: 'monospace', fontSize: 13,
                    padding: '12px 16px', outline: 'none', transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.4)')}
                  onBlur={(e) => (e.target.style.borderColor = '#1e1e1e')}
                />

                {error && (
                  <p style={{ fontSize: 11, color: '#8A0303', letterSpacing: '0.05em', margin: 0 }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || expired}
                  style={{
                    background: expired ? '#1a1a1a' : '#7c3aed',
                    border: `1px solid ${expired ? '#1a1a1a' : '#7c3aed'}`,
                    color: expired ? '#444' : '#fff',
                    fontFamily: 'monospace', fontSize: 11,
                    fontWeight: 700, letterSpacing: '0.2em',
                    padding: '14px 0', cursor: loading || expired ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1, transition: 'background 0.15s',
                  }}
                >
                  {expired ? 'GIVEAWAY CLOSED' : loading ? 'ENTERING...' : 'ENTER TO WIN →'}
                </button>

                <p style={{ fontSize: 10, color: '#2a2a2a', letterSpacing: '0.08em', textAlign: 'center', margin: 0 }}>
                  No purchase necessary. By entering you agree to receive occasional emails from LimbicLab.
                </p>
              </form>
            </div>
          )}
        </div>

        {/* back */}
        <div className="ga ga-5" style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/" style={{
            fontSize: 10, color: '#333', letterSpacing: '0.15em',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = '#777')}
            onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = '#333')}
          >
            ← BACK TO LIMBICLAB
          </Link>
        </div>
      </div>
    </main>
  )
}
