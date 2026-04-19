import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Satanism — Neurological & Psychological Profile | LimbicLab'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#020202',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Scanlines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.006) 3px, rgba(255,255,255,0.006) 4px)',
          }}
        />

        {/* Glows */}
        <div style={{ position: 'absolute', top: -80, left: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,3,3,0.3) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,3,3,0.2) 0%, transparent 65%)' }} />

        {/* Border */}
        <div style={{ position: 'absolute', inset: 28, border: '1px solid #3a1010', display: 'flex' }} />

        {/* Corner marks */}
        {[{ top: 24, left: 24 }, { top: 24, right: 24 }, { bottom: 24, left: 24 }, { bottom: 24, right: 24 }].map((pos, i) => (
          <div key={i} style={{ position: 'absolute', ...pos, width: 18, height: 18, borderTop: i < 2 ? '2px solid #8A0303' : 'none', borderBottom: i >= 2 ? '2px solid #8A0303' : 'none', borderLeft: i % 2 === 0 ? '2px solid #8A0303' : 'none', borderRight: i % 2 === 1 ? '2px solid #8A0303' : 'none' }} />
        ))}

        {/* Left: large metallic inverted cross watermark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 300"
          width="260"
          height="390"
          style={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', opacity: 0.1 }}
        >
          <defs>
            <linearGradient id="mg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   style={{ stopColor: '#888888', stopOpacity: 1 }} />
              <stop offset="40%"  style={{ stopColor: '#cccccc', stopOpacity: 1 }} />
              <stop offset="60%"  style={{ stopColor: '#aaaaaa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#555555', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect x="85" y="40" width="30" height="220" fill="url(#mg2)" rx="2" ry="2" />
          <rect x="30" y="190" width="140" height="30" fill="url(#mg2)" rx="2" ry="2" />
          <rect x="85" y="40" width="4" height="220" fill="#dddddd" opacity="0.3" rx="1" />
          <rect x="30" y="190" width="140" height="4" fill="#dddddd" opacity="0.3" rx="1" />
        </svg>

        {/* Right content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10, gap: 0 }}>

          {/* Label */}
          <div style={{ fontSize: 13, color: '#8A0303', letterSpacing: '0.32em', marginBottom: 20, textTransform: 'uppercase' }}>
            Research Analysis // Belief System Neuroscience
          </div>

          {/* Main title */}
          <div style={{ fontSize: 58, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.1em', lineHeight: 1, marginBottom: 6, textAlign: 'center' }}>
            SATANISM
          </div>
          <div style={{ fontSize: 22, color: '#8A0303', letterSpacing: '0.25em', marginBottom: 28, textAlign: 'center' }}>
            NEUROLOGICAL & PSYCHOLOGICAL PROFILE
          </div>

          {/* Rule */}
          <div style={{ width: 360, height: 1, background: 'linear-gradient(90deg, transparent, #8A0303, transparent)', marginBottom: 28 }} />

          {/* Section grid */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 700 }}>
            {[
              'Taxonomy', 'Ritual Neuroscience', 'Neuroreceptors',
              'Disorders', 'Epigenetics', 'Hate Rituals',
              'Sense Rituals', 'Séance', 'Blood Pact', 'Recovery',
            ].map((s) => (
              <div
                key={s}
                style={{
                  fontSize: 11,
                  color: '#555',
                  border: '1px solid #2a0808',
                  padding: '4px 12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Citations badge */}
          <div style={{ marginTop: 28, fontSize: 12, color: '#444', letterSpacing: '0.2em' }}>
            21 PEER-REVIEWED CITATIONS · GRADUATE LEVEL ANALYSIS
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ position: 'absolute', bottom: 40, left: 44, right: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 11, color: '#8A0303', letterSpacing: '0.18em' }}>LIMBICLAB</div>
          <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.15em' }}>limbiclab.xyz/satanism-research</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
