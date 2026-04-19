'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackEbookConversion } from '@/lib/gtag'

const C = {
  bg: '#0a0a0a',
  surface: '#111111',
  surface2: '#161616',
  border: '#1e1e1e',
  borderAccent: '#1a3a3a',
  text: '#e0e0e0',
  textDim: '#777777',
  textMid: '#aaaaaa',
  teal: '#1a6b6b',
  tealLight: '#2a9d9d',
  error: '#8A0303',
}

export default function LandingES() {
  const [ebookEmail, setEbookEmail] = useState('')
  const [ebookLoading, setEbookLoading] = useState(false)
  const [ebookError, setEbookError] = useState<string | null>(null)
  const [ebookDone, setEbookDone] = useState(false)
  const [capReached, setCapReached] = useState(false)
  const [ebookClaimed, setEbookClaimed] = useState(0)
  const EBOOK_MAX = 200

  const [nlEmail, setNlEmail] = useState('')
  const [nlLoading, setNlLoading] = useState(false)
  const [nlError, setNlError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/ebook/availability')
      .then(r => r.json())
      .then(d => {
        if (!d.available) setCapReached(true)
        setEbookClaimed(d.claimed ?? 0)
      })
      .catch(() => {})
  }, [])

  async function handleEbook() {
    if (!ebookEmail.trim()) { setEbookError('Ingresa tu correo para reclamar el ebook gratuito.'); return }
    setEbookLoading(true)
    setEbookError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: ebookEmail.trim(), source: 'ebook', language: 'es' }),
      })
      const data = await res.json()
      if (data.error === 'EBOOK_CAP_REACHED') { setCapReached(true); setEbookLoading(false); return }
      if (!res.ok) throw new Error(data.error || 'Algo salió mal')
      trackEbookConversion()
      setEbookDone(true)
    } catch (err) {
      setEbookError(err instanceof Error ? err.message : 'Algo salió mal')
      setEbookLoading(false)
    }
  }

  async function handleNewsletter() {
    if (!nlEmail.trim()) { setNlError('Ingresa tu correo para iniciar tu prueba gratuita.'); return }
    setNlLoading(true)
    setNlError(null)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail.trim(), source: 'newsletter', language: 'es' }),
      })
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'newsletter', email: nlEmail.trim() }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error || 'Error al procesar')
      window.location.href = data.url
    } catch (err) {
      setNlError(err instanceof Error ? err.message : 'Algo salió mal')
      setNlLoading(false)
    }
  }

  const spotsLeft = Math.max(0, EBOOK_MAX - ebookClaimed)

  return (
    <main style={{ background: C.bg, minHeight: '100vh', padding: '60px 24px 80px' }}>
      <style>{`
        @media (max-width: 600px) {
          .lp-row { flex-direction: column !important; }
          .lp-row input { border-right: 1px solid #1a3a3a !important; border-bottom: none !important; }
          .lp-row button { width: 100% !important; }
        }
      `}</style>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.25em', marginBottom: 14 }}>
            {`// LIMBICLAB`}
          </div>
          <h1 style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '0.07em', lineHeight: 1.25, marginBottom: 14 }}>
            LA NEUROCIENCIA<br />DE LO OSCURO
          </h1>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, maxWidth: 480, margin: '0 auto' }}>
            Trastorno bipolar, trauma y psicología oscura — investigación de nivel de posgrado destilada en despachos claros y citados. Ebook gratuito + boletín semanal.
          </p>
        </div>

        {/* Sección ebook */}
        <div style={{ background: C.surface, border: `1px solid ${C.tealLight}`, padding: '36px 36px 32px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#0a0a0a', background: C.tealLight, letterSpacing: '0.2em', padding: '3px 10px', fontWeight: 700 }}>
              GRATIS
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.2em', border: `1px solid ${C.tealLight}`, padding: '3px 10px' }}>
              E-BOOK
            </div>
            {!capReached && (
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.12em', marginLeft: 'auto' }}>
                {spotsLeft} de {EBOOK_MAX} lugares restantes
              </div>
            )}
          </div>

          <h2 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '0.05em', marginBottom: 10, lineHeight: 1.3 }}>
            La Neurociencia de lo Oscuro
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, marginBottom: 24 }}>
            Cinco capítulos. Oscilación bipolar, trauma ambiental, neurociencia del ritual, convergencia suicida y el cerebro creativo. Más de 21 citas de investigación revisada por pares.
          </p>

          {capReached ? (
            <div style={{ background: C.surface2, border: `1px solid ${C.border}`, padding: '18px 20px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0 }}>
                ◈ El acceso gratuito ha cerrado — todos los 200 ejemplares reclamados.<br />
                <span style={{ color: C.textDim }}>Suscríbete al boletín a continuación para mantenerte al tanto.</span>
              </p>
            </div>
          ) : ebookDone ? (
            <div style={{ background: C.surface2, border: `1px solid ${C.tealLight}`, padding: '18px 20px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.tealLight, lineHeight: 1.7, margin: 0 }}>
                ◈ Revisa tu bandeja de entrada — tu enlace personal al ebook ya está en camino.
              </p>
            </div>
          ) : (
            <>
              <div className="lp-row" style={{ display: 'flex', gap: 0, maxWidth: 480 }}>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={ebookEmail}
                  onChange={(e) => setEbookEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleEbook()}
                  style={{
                    fontFamily: 'monospace', fontSize: 12, color: C.text,
                    background: C.surface2, border: `1px solid ${ebookError ? C.error : C.borderAccent}`,
                    borderRight: 'none', padding: '12px 16px', flex: 1, outline: 'none', letterSpacing: '0.05em',
                  }}
                />
                <button
                  onClick={handleEbook}
                  disabled={ebookLoading}
                  style={{
                    fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em',
                    color: ebookLoading ? C.textDim : C.bg,
                    background: ebookLoading ? C.surface2 : C.tealLight,
                    border: `1px solid ${ebookLoading ? C.border : C.tealLight}`,
                    padding: '12px 22px', cursor: ebookLoading ? 'not-allowed' : 'pointer',
                    whiteSpace: 'nowrap', fontWeight: 700,
                  }}
                >
                  {ebookLoading ? 'ENVIANDO...' : 'OBTENER EBOOK GRATIS →'}
                </button>
              </div>
              {ebookError && (
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.error, marginTop: 8 }}>◈ {ebookError}</p>
              )}
              <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginTop: 12, letterSpacing: '0.1em' }}>
                Entrega inmediata a tu correo · Sin tarjeta · Sin spam
              </p>
            </>
          )}
        </div>

        {/* Divisor */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '40px 0 32px' }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, letterSpacing: '0.22em' }}>BOLETÍN SEMANAL</div>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        {/* Sección boletín */}
        <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '36px 36px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#0a0a0a', background: C.tealLight, letterSpacing: '0.2em', padding: '3px 10px', fontWeight: 700 }}>
              14 DÍAS GRATIS
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.tealLight, letterSpacing: '0.2em', border: `1px solid ${C.tealLight}`, padding: '3px 10px' }}>
              BOLETÍN
            </div>
          </div>

          <h2 style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: '0.05em', marginBottom: 10, lineHeight: 1.3 }}>
            LimbicLab Semanal
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.75, marginBottom: 12 }}>
            Resúmenes de investigación de nivel de posgrado sobre trastorno bipolar, trauma y psicología oscura — citados, verificados y en tu bandeja de entrada cada semana.
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.6, marginBottom: 24 }}>
            14 días de prueba gratuita, luego $9.99/mes. Usa el código <strong style={{ color: C.tealLight }}>VENEZIA300</strong> para 3 meses gratis.
          </p>

          <div className="lp-row" style={{ display: 'flex', gap: 0, maxWidth: 480 }}>
            <input
              type="email"
              placeholder="tu@correo.com"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
              style={{
                fontFamily: 'monospace', fontSize: 12, color: C.text,
                background: C.surface2, border: `1px solid ${nlError ? C.error : C.borderAccent}`,
                borderRight: 'none', padding: '12px 16px', flex: 1, outline: 'none', letterSpacing: '0.05em',
              }}
            />
            <button
              onClick={handleNewsletter}
              disabled={nlLoading}
              style={{
                fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.18em',
                color: nlLoading ? C.textDim : C.bg,
                background: nlLoading ? C.surface2 : C.tealLight,
                border: `1px solid ${nlLoading ? C.border : C.tealLight}`,
                padding: '12px 22px', cursor: nlLoading ? 'not-allowed' : 'pointer',
                whiteSpace: 'nowrap', fontWeight: 700,
              }}
            >
              {nlLoading ? 'CARGANDO...' : 'INICIAR PRUEBA GRATIS →'}
            </button>
          </div>
          {nlError && (
            <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.error, marginTop: 8 }}>◈ {nlError}</p>
          )}
          <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, marginTop: 12, letterSpacing: '0.1em' }}>
            Sin cargo por 14 días · Cancela cuando quieras · Procesado por Stripe
          </p>
        </div>

        {/* Pie de página */}
        <div style={{ marginTop: 40, fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.7, textAlign: 'center' }}>
          <Link href="/lp/en" style={{ color: C.textDim, textDecoration: 'underline', marginRight: 20 }}>View in English</Link>
          <Link href="/" style={{ color: C.textDim, textDecoration: 'underline' }}>← limbiclab.xyz</Link>
        </div>
      </div>
    </main>
  )
}
