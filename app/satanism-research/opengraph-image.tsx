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

        {/* Left: large inverted cross (Peter's Cross) watermark */}
        <svg
          width="260"
          height="390"
          viewBox="0 0 48 72"
          fill="none"
          style={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', opacity: 0.07 }}
        >
          {/* Vertical bar */}
          <rect x="20.5" y="0" width="7" height="72" rx="1.5" fill="#8A0303" />
          {/* Horizontal bar — lower third (Peter's cross) */}
          <rect x="0" y="51" width="48" height="7" rx="1.5" fill="#8A0303" />
          {/* Legs splayed upward */}
          <line x1="24" y1="7" x2="14" y2="0" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="24" y1="7" x2="34" y2="0" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="24" cy="8" r="3" fill="#8A0303" />
          {/* Torso */}
          <path d="M17 14 C17 14 14 18 14 28 C14 38 17 46 20.5 48 L20.5 51 L27.5 51 L27.5 48 C31 46 34 38 34 28 C34 18 31 14 31 14 Z" fill="#8A0303" />
          {/* Arms */}
          <line x1="14" y1="38" x2="1"  y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="38" x2="47" y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
          {/* Severed neck void */}
          <rect x="20" y="47" width="8" height="5" fill="#020202" />
          {/* Blood drip */}
          <path d="M24 58 Q22.5 62 23 65 Q23.5 68 24 68 Q24.5 68 25 65 Q25.5 62 24 58 Z" fill="#8A0303" opacity="0.85" />
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
          <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.15em' }}>limbiclab.com/satanism-research</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
