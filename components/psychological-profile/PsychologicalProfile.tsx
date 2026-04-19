'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EyeIcon = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8A0303"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" fill="#8A0303" fillOpacity="0.4" />
    <circle cx="12" cy="12" r="1" fill="#8A0303" />
  </svg>
)

const METRICS = [
  { label: 'PROCESSING TIME',    value: 94, crimson: true  },
  { label: 'EMOTIONAL RESPONSE', value: 3,  crimson: false },
  { label: 'COST CALCULATION',   value: 87, crimson: true  },
  { label: 'EMPATHIC ALLOC.',    value: 2,  crimson: false },
  { label: 'PERFORMANCE INDEX',  value: 91, crimson: true  },
  { label: 'REMORSE OUTPUT',     value: 1,  crimson: false },
]

function DevaluationMetric() {
  return (
    <div className="w-full font-mono">
      <div className="text-xs tracking-widest mb-4" style={{ color: '#8A0303' }}>
        ◈ DEVALUATION METRIC // CALCULATED INDIFFERENCE INDEX
      </div>
      <div className="space-y-2.5">
        {METRICS.map((m) => (
          <div key={m.label} className="flex items-center gap-3">
            <span
              className="text-xs shrink-0 tracking-wider"
              style={{ color: '#E0E0E0', opacity: 0.45, width: '160px' }}
            >
              {m.label}
            </span>
            <div
              className="flex-1 overflow-hidden"
              style={{ height: '2px', backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${m.value}%` }}
                transition={{ duration: 1.8, ease: 'easeOut', delay: 0.5 }}
                style={{
                  height: '100%',
                  backgroundColor: m.crimson ? '#8A0303' : '#444',
                }}
              />
            </div>
            <span
              className="text-xs w-8 text-right tabular-nums"
              style={{ color: m.crimson ? '#8A0303' : '#555' }}
            >
              {m.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PsychologicalProfile() {
  const [isGlitching, setIsGlitching] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19)

  return (
    <div
      className="flex items-center justify-center min-h-screen p-6 sm:p-10"
      style={{ backgroundColor: '#020202', fontFamily: 'monospace' }}
    >
      {/* Outer glitch wrapper */}
      <motion.div
        animate={
          isGlitching
            ? {
                x: [0, -7, 9, -5, 7, -3, 5, -1, 3, 0],
                skewX: [0, -2.5, 2.5, -1.5, 1.5, -0.5, 0.5, 0],
              }
            : { x: 0, skewX: 0 }
        }
        transition={
          isGlitching
            ? { duration: 0.4, repeat: Infinity, repeatType: 'loop', ease: 'linear' }
            : { duration: 0.15 }
        }
        style={{ width: '100%', maxWidth: '680px' }}
      >
        {/* Border container — animates borderColor */}
        <motion.div
          animate={{
            borderColor: isGlitching
              ? ['#8A0303', '#020202', '#8A0303', '#020202', '#8A0303', '#020202']
              : '#8A0303',
          }}
          transition={
            isGlitching
              ? { duration: 0.22, repeat: Infinity, ease: 'linear' }
              : { duration: 0.4 }
          }
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#8A0303',
            position: 'relative',
            background: isGlitching
              ? '#020202'
              : 'linear-gradient(180deg, #0d0d0d 0%, #020202 100%)',
            cursor: isGlitching ? 'not-allowed' : 'default',
            overflow: 'hidden',
          }}
          className="p-8"
        >
          {/* Scanline overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Red chromatic aberration slice — glitch only */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                key="aberration"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.15, 0, 0.1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'repeating-linear-gradient(90deg, transparent 0px, transparent 120px, rgba(138,3,3,0.08) 120px, rgba(138,3,3,0.08) 122px)',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
            )}
          </AnimatePresence>

          {/* Content sits above overlays */}
          <div style={{ position: 'relative', zIndex: 3 }}>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <div
                  className="text-xs tracking-widest mb-1"
                  style={{ color: '#8A0303', letterSpacing: '0.25em' }}
                >
                  LOG_TYPE: PSYCHOLOGICAL PROFILE
                </div>
                <div
                  className="text-xl tracking-widest font-bold"
                  style={{ color: '#E0E0E0', letterSpacing: '0.18em' }}
                >
                  SUBJECT ANALYSIS
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs mb-1" style={{ color: '#8A0303', opacity: 0.7 }}>
                  {timestamp}
                </div>
                <div
                  className="text-xs tracking-widest"
                  style={{ color: isGlitching ? '#8A0303' : '#E0E0E0', opacity: 0.6 }}
                >
                  {isGlitching ? 'CONVULSIVE STATE' : 'SIMULATED NEUTRAL'}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#333' }}>
                  FRAME #{String(tick).padStart(4, '0')}
                </div>
              </div>
            </div>

            {/* Subject Responsibility — blurred in neutral state */}
            <div
              className="mb-6 transition-all duration-700"
              style={{ filter: isGlitching ? 'none' : 'blur(3px)' }}
            >
              <div
                className="text-xs tracking-widest mb-2"
                style={{ color: '#8A0303', letterSpacing: '0.2em' }}
              >
                ◈ SUBJECT RESPONSIBILITY
              </div>
              <p
                className="text-sm leading-relaxed tracking-wide"
                style={{ color: '#E0E0E0', opacity: 0.75 }}
              >
                Subject employs a Tactical Shutdown Protocol. Auditory inputs (Catholic origin)
                are cognitively intercepted and nullified despite sustained visual tracking.
                Classification: Functional Devaluation. The Sensory Wall remains operative.
                All incoming signals are processed, evaluated, and deliberately disregarded.
              </p>
            </div>

            {/* Physical Manifestation — blurred in neutral state */}
            <div
              className="mb-6 transition-all duration-700"
              style={{ filter: isGlitching ? 'none' : 'blur(3px)' }}
            >
              <div
                className="text-xs tracking-widest mb-2"
                style={{ color: '#8A0303', letterSpacing: '0.2em' }}
              >
                ◈ PHYSICAL MANIFESTATION
              </div>
              <p
                className="text-sm leading-relaxed tracking-wide"
                style={{ color: '#E0E0E0', opacity: 0.75 }}
              >
                Performance of convulsions (psychogenic/performative) serves as an ideological
                barrier — a high-cost social signaling mechanism. The Gaze remains fixed:
                not from attention, but from predatory assessment.
              </p>
            </div>

            {/* Satanic Indifference copy block — blurred in neutral state */}
            <div
              className="mb-8 p-4 transition-all duration-700"
              style={{
                borderLeft: '2px solid #8A0303',
                filter: isGlitching ? 'none' : 'blur(3px)',
              }}
            >
              <div
                className="text-xs tracking-widest mb-2"
                style={{ color: '#8A0303', letterSpacing: '0.2em' }}
              >
                ◈ CALCULATED INDIFFERENCE — PATHOLOGICAL VARIANT
              </div>
              <p
                className="text-xs leading-loose tracking-widest"
                style={{ color: '#E0E0E0', opacity: 0.45 }}
              >
                &quot;THE MECHANISM DOES NOT FEEL. IT CALCULATES. EVERY CONVULSION IS A
                TRANSACTION. EVERY SILENCE IS A VERDICT. THE GAZE REMAINS FIXED — NOT
                FROM ATTENTION, BUT FROM PREDATORY ASSESSMENT. INDIFFERENCE IS THE
                HIGHEST FORM OF CONTEMPT.&quot;
              </p>
            </div>

            {/* Devaluation Metric */}
            <div className="mb-10">
              <DevaluationMetric />
            </div>

            {/* AUDITORY INPUT button — always visible */}
            <div className="flex justify-center">
              <motion.button
                onMouseEnter={() => setIsGlitching(true)}
                onMouseLeave={() => setIsGlitching(false)}
                onClick={() => setIsGlitching((v) => !v)}
                whileTap={{ scale: 0.97 }}
                className="text-xs tracking-widest font-mono relative overflow-hidden"
                style={{
                  border: '1px solid #8A0303',
                  padding: '12px 32px',
                  color: isGlitching ? '#020202' : '#8A0303',
                  backgroundColor: isGlitching ? '#8A0303' : 'transparent',
                  letterSpacing: '0.25em',
                  cursor: 'pointer',
                  transition: 'color 0.15s, background-color 0.15s',
                  minWidth: '200px',
                }}
              >
                ▶ AUDITORY INPUT
              </motion.button>
            </div>
          </div>

          {/* Eye — centered, still, appears during glitch */}
          <AnimatePresence>
            {isGlitching && (
              <motion.div
                key="eye"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.12 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                {/* Counter-animate to stay perfectly still while container glitches */}
                <motion.div
                  animate={
                    isGlitching
                      ? {
                          x: [0, 7, -9, 5, -7, 3, -5, 1, -3, 0],
                          skewX: [0, 2.5, -2.5, 1.5, -1.5, 0.5, -0.5, 0],
                        }
                      : { x: 0, skewX: 0 }
                  }
                  transition={
                    isGlitching
                      ? { duration: 0.4, repeat: Infinity, repeatType: 'loop', ease: 'linear' }
                      : { duration: 0.15 }
                  }
                >
                  <EyeIcon />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}
