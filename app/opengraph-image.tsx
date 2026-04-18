import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'LimbicLab — Computational Neuroscience Research'
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
        {/* Scanline texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
          }}
        />

        {/* Red glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,3,3,0.25) 0%, transparent 70%)',
          }}
        />
        {/* Red glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,3,3,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Border frame */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid #3a1010',
            display: 'flex',
          }}
        />
        {/* Inner accent lines */}
        <div
          style={{
            position: 'absolute',
            inset: 40,
            border: '1px solid #1a0808',
            display: 'flex',
          }}
        />

        {/* Corner marks */}
        {[
          { top: 28, left: 28 },
          { top: 28, right: 28 },
          { bottom: 28, left: 28 },
          { bottom: 28, right: 28 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              width: 20,
              height: 20,
              borderTop: i < 2 ? '2px solid #8A0303' : 'none',
              borderBottom: i >= 2 ? '2px solid #8A0303' : 'none',
              borderLeft: i % 2 === 0 ? '2px solid #8A0303' : 'none',
              borderRight: i % 2 === 1 ? '2px solid #8A0303' : 'none',
            }}
          />
        ))}

        {/* Main content — logo + title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Peter's Cross SVG mark — inline */}
          <svg
            width="90"
            height="135"
            viewBox="0 0 48 72"
            fill="none"
            style={{ marginBottom: 24 }}
          >
            {/* Vertical bar */}
            <rect x="20.5" y="0" width="7" height="72" rx="1.5" fill="#8A0303" />
            {/* Horizontal bar — lower third (Peter's cross) */}
            <rect x="0" y="51" width="48" height="7" rx="1.5" fill="#8A0303" />
            {/* Legs splayed upward */}
            <line x1="24" y1="7"  x2="14" y2="0"  stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="24" y1="7"  x2="34" y2="0"  stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="24" cy="8" r="3" fill="#8A0303" />
            {/* Torso */}
            <path
              d="M17 14 C17 14 14 18 14 28 C14 38 17 46 20.5 48 L20.5 51 L27.5 51 L27.5 48 C31 46 34 38 34 28 C34 18 31 14 31 14 Z"
              fill="#8A0303"
            />
            {/* Arms */}
            <line x1="14" y1="38" x2="1"  y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="34" y1="38" x2="47" y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
            {/* Severed neck void */}
            <rect x="20" y="47" width="8" height="5" fill="#020202" />
            {/* Blood drip */}
            <path
              d="M24 58 Q22.5 62 23 65 Q23.5 68 24 68 Q24.5 68 25 65 Q25.5 62 24 58 Z"
              fill="#8A0303"
              opacity="0.85"
            />
          </svg>

          {/* Site name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#e0e0e0',
              letterSpacing: '0.18em',
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            LIMBICLAB
          </div>

          {/* Crimson rule */}
          <div
            style={{
              width: 280,
              height: 1,
              background: 'linear-gradient(90deg, transparent, #8A0303, transparent)',
              marginBottom: 18,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 18,
              color: '#8A0303',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Computational Neuroscience Research
          </div>

          {/* Sub-tagline */}
          <div
            style={{
              fontSize: 14,
              color: '#555',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Brain · Belief · Neurochemistry · Epigenetics
          </div>
        </div>

        {/* Bottom status bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            left: 52,
            right: 52,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.2em' }}>
            limbiclab.com
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['SIMULATOR', 'BRAIN ATLAS', 'SATANISM RESEARCH', 'PSYCH PROFILE'].map((item) => (
              <div key={item} style={{ fontSize: 10, color: '#333', letterSpacing: '0.15em' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
