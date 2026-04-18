import React from 'react'

interface LogoProps {
  size?: number
  className?: string
  /** show wordmark beside the mark */
  wordmark?: boolean
}

/**
 * LimbicLab logo mark — Saint Peter's Cross (inverted) with a headless
 * crucified figure. Peter was crucified upside-down; the head is absent,
 * severed at the neck. Crossbar sits in the lower third (Peter's cross).
 */
export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LimbicLab logo"
    >
      {/* ── Peter's Cross (inverted Latin cross) ──────────────────── */}
      {/* Vertical bar — full height */}
      <rect x="20.5" y="0" width="7" height="72" rx="1.5" fill="#8A0303" />
      {/* Horizontal bar — lower third (Peter's cross position) */}
      <rect x="0" y="51" width="48" height="7" rx="1.5" fill="#8A0303" />

      {/* ── Headless inverted figure ───────────────────────────────── */}
      {/* Legs — splayed upward at the very top (inverted crucifixion) */}
      <line x1="24" y1="7"  x2="14" y2="0"  stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="24" y1="7"  x2="34" y2="0"  stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
      {/* Upper leg join */}
      <circle cx="24" cy="8" r="3" fill="#8A0303" />

      {/* Torso — from hips down to severed neck */}
      <path
        d="M17 14 C17 14 14 18 14 28 C14 38 17 46 20.5 48 L20.5 51 L27.5 51 L27.5 48 C31 46 34 38 34 28 C34 18 31 14 31 14 Z"
        fill="#8A0303"
      />

      {/* Arms — merge into the horizontal crossbar, slightly above it */}
      <line x1="14" y1="38" x2="1"  y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="34" y1="38" x2="47" y2="51" stroke="#8A0303" strokeWidth="3.5" strokeLinecap="round" />

      {/* Severed neck gap — clean cut, slight void */}
      <rect x="20" y="47" width="8" height="5" fill="#0a0a0a" />

      {/* Blood drip from severed neck — below the crossbar */}
      <path
        d="M24 58 Q22.5 62 23 65 Q23.5 68 24 68 Q24.5 68 25 65 Q25.5 62 24 58 Z"
        fill="#8A0303"
        opacity="0.85"
      />
    </svg>
  )
}

export function Logo({ size = 48, wordmark = true, className }: LogoProps) {
  if (!wordmark) return <LogoMark size={size} className={className} />

  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <LogoMark size={size} />
      <div style={{ fontFamily: 'monospace' }}>
        <div
          style={{
            fontSize: size * 0.28,
            fontWeight: 700,
            color: '#e0e0e0',
            letterSpacing: '0.12em',
            lineHeight: 1.1,
          }}
        >
          LIMBICLAB
        </div>
        <div
          style={{
            fontSize: size * 0.18,
            color: '#8A0303',
            letterSpacing: '0.22em',
            lineHeight: 1.2,
          }}
        >
          NEURO RESEARCH
        </div>
      </div>
    </div>
  )
}
