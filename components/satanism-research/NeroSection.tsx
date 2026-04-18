'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'
import { NERO_666 } from '@/lib/satanismResearchData'

const C = {
  bg: '#0a0a0a', surface: '#111111', surface2: '#161616',
  border: '#1e1e1e', borderAccent: '#3a1010',
  crimson: '#8A0303', crimsonDim: '#5a0202',
  text: '#e0e0e0', textDim: '#777777', textMid: '#aaaaaa',
  gold: '#b8860b', goldLight: '#d4a017', tealLight: '#2a9d9d',
}

// ── 3D Inverted Cross Canvas ──────────────────────────────────────────────────

function CrossCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const W = el.clientWidth || 400
    const H = el.clientHeight || 400

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x020202)
    scene.fog = new THREE.FogExp2(0x020202, 0.18)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100)
    camera.position.set(0, 0, 6)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    el.appendChild(renderer.domElement)

    // ── Cross geometry ────────────────────────────────────────────
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.88,
      roughness: 0.18,
      envMapIntensity: 1,
    })
    const crimsonEmit = new THREE.MeshStandardMaterial({
      color: 0x8A0303,
      metalness: 0.6,
      roughness: 0.3,
      emissive: new THREE.Color(0x3a0101),
      emissiveIntensity: 0.4,
    })

    const crossGroup = new THREE.Group()

    // Vertical beam (taller, full height)
    const vertGeom = new THREE.BoxGeometry(0.32, 3.4, 0.22)
    const vertMesh = new THREE.Mesh(vertGeom, metalMat)
    vertMesh.castShadow = true
    crossGroup.add(vertMesh)

    // Horizontal beam — lower third = Peter's cross
    const horizGeom = new THREE.BoxGeometry(2.2, 0.32, 0.22)
    const horizMesh = new THREE.Mesh(horizGeom, metalMat)
    horizMesh.position.y = -0.72
    horizMesh.castShadow = true
    crossGroup.add(horizMesh)

    // Edge highlight strips — vertical
    const edgeMatV = new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.95, roughness: 0.05 })
    const edgeV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 3.4, 0.24), edgeMatV)
    edgeV.position.x = -0.14
    crossGroup.add(edgeV)

    // Edge highlight strips — horizontal
    const edgeH = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.04, 0.24), edgeMatV)
    edgeH.position.y = -0.72 + 0.14
    crossGroup.add(edgeH)

    // Crimson inlay line down the center
    const inlayGeom = new THREE.BoxGeometry(0.06, 3.42, 0.23)
    const inlayMesh = new THREE.Mesh(inlayGeom, crimsonEmit)
    inlayMesh.position.z = 0.01
    crossGroup.add(inlayMesh)

    scene.add(crossGroup)

    // ── "DCLXVI" floating text as thin planes ─────────────────────
    // Use simple box stand-ins — actual text via canvas texture
    const makeTextPlane = (text: string, x: number, y: number, z: number) => {
      const canvas = document.createElement('canvas')
      canvas.width = 128; canvas.height = 64
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = 'transparent'
      ctx.clearRect(0, 0, 128, 64)
      ctx.fillStyle = '#8A0303'
      ctx.font = 'bold 28px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, 64, 32)
      const tex = new THREE.CanvasTexture(canvas)
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.6), mat)
      mesh.position.set(x, y, z)
      return mesh
    }

    const label1 = makeTextPlane('DCLXVI', -2.8, 1.2, 0)
    const label2 = makeTextPlane('= 666', 2.8, -0.8, 0)
    const label3 = makeTextPlane('NERON', -2.6, -1.6, 0)
    const label4 = makeTextPlane('KESAR', 2.5, 1.8, 0)
    scene.add(label1, label2, label3, label4)

    // ── Particle field — floating crimson motes ───────────────────
    const particleCount = 120
    const particleGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x8A0303, size: 0.04, transparent: true, opacity: 0.6 })
    const particles = new THREE.Points(particleGeom, particleMat)
    scene.add(particles)

    // ── Lighting ──────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x111111, 0.8)
    scene.add(ambient)

    // Primary crimson key light
    const crimsonKey = new THREE.PointLight(0x8A0303, 4, 12)
    crimsonKey.position.set(3, 3, 3)
    crimsonKey.castShadow = true
    scene.add(crimsonKey)

    // Rim light — cold grey from behind
    const rimLight = new THREE.PointLight(0x334455, 2, 10)
    rimLight.position.set(-3, -1, -3)
    scene.add(rimLight)

    // Fill — subtle warm glow from below
    const fillLight = new THREE.PointLight(0x5a0202, 1.5, 8)
    fillLight.position.set(0, -4, 2)
    scene.add(fillLight)

    // Spotlight on cross
    const spot = new THREE.SpotLight(0xcccccc, 1.2, 20, Math.PI / 6, 0.4)
    spot.position.set(0, 8, 4)
    spot.target = crossGroup
    scene.add(spot)

    // ── Animation loop ────────────────────────────────────────────
    let frame = 0
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      frame++

      // Slow Y rotation — the cross turns to face you
      crossGroup.rotation.y = frame * 0.005
      // Subtle breathing on Z
      crossGroup.rotation.z = Math.sin(frame * 0.008) * 0.04

      // Orbit labels opposite to cross
      label1.rotation.y = -crossGroup.rotation.y
      label2.rotation.y = -crossGroup.rotation.y
      label3.rotation.y = -crossGroup.rotation.y
      label4.rotation.y = -crossGroup.rotation.y

      // Drift particles
      particles.rotation.y = frame * 0.001

      // Crimson light pulse
      crimsonKey.intensity = 3.5 + Math.sin(frame * 0.03) * 0.8

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const onResize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: 380, borderRadius: 0, overflow: 'hidden', border: `1px solid ${C.borderAccent}` }}
    />
  )
}

// ── Gematria Table ────────────────────────────────────────────────────────────

function GematriaTable({
  letters, total, isHebrew,
}: {
  letters: { letter: string; roman: string; value: number; word: string }[]
  total: number
  isHebrew: boolean
}) {
  const words = [...new Set(letters.map((l) => l.word))]

  return (
    <div>
      {words.map((word) => {
        const group = letters.filter((l) => l.word === word)
        const subtotal = group.reduce((s, l) => s + l.value, 0)
        return (
          <div key={word} style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.2em', marginBottom: 6 }}>
              {word}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {group.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    background: l.value > 0 ? C.crimsonDim : C.surface2,
                    border: `1px solid ${l.value > 0 ? C.crimson : C.border}`,
                    padding: '6px 10px', textAlign: 'center', minWidth: 48,
                  }}
                >
                  <div style={{
                    fontFamily: isHebrew ? 'serif' : 'monospace',
                    fontSize: isHebrew ? 18 : 14,
                    color: C.text,
                    direction: isHebrew ? 'rtl' : 'ltr',
                    marginBottom: 2,
                  }}>
                    {l.letter}
                  </div>
                  {isHebrew && (
                    <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, marginBottom: 2 }}>{l.roman}</div>
                  )}
                  <div style={{ fontFamily: 'monospace', fontSize: 10, color: l.value > 0 ? C.goldLight : C.textDim }}>
                    {l.value > 0 ? l.value : '—'}
                  </div>
                </motion.div>
              ))}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: C.surface, border: `1px solid ${C.border}`,
                padding: '6px 12px', minWidth: 52,
              }}>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.goldLight, fontWeight: 700 }}>= {subtotal}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Grand total */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: letters.length * 0.04 }}
        style={{
          marginTop: 10,
          background: C.crimsonDim,
          border: `2px solid ${C.crimson}`,
          padding: '10px 18px',
          display: 'inline-flex', alignItems: 'center', gap: 16,
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 12, color: C.textMid, letterSpacing: '0.15em' }}>TOTAL</span>
        <span style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: C.text }}>{total}</span>
      </motion.div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function NeroSection() {
  const [activeTab, setActiveTab] = useState<'judge' | 'nero' | 'pope' | 'constitution' | 'god'>('judge')
  const d = NERO_666

  const TABS = [
    { id: 'judge'        as const, label: 'WAS NERO THE JUDGE?' },
    { id: 'nero'         as const, label: 'NERO = 666'          },
    { id: 'pope'         as const, label: 'POPE = 666'          },
    { id: 'constitution' as const, label: 'ROMAN CONSTITUTION'  },
    { id: 'god'          as const, label: 'NERO AS GOD'         },
  ]

  return (
    <div id="nero-666">
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: C.crimson, letterSpacing: '0.22em', marginBottom: 6 }}>
        {`SECTION 00c //`}
      </div>
      <h2 style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '0.08em', marginBottom: 6 }}>
        {d.title}
      </h2>
      <p style={{ fontFamily: 'monospace', fontSize: 12, color: C.textDim, lineHeight: 1.7, maxWidth: 680, marginBottom: 24 }}>
        {d.subtitle}
      </p>

      {/* 3D Canvas */}
      <div style={{ marginBottom: 28, position: 'relative' }}>
        <CrossCanvas3D />
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          fontFamily: 'monospace', fontSize: 9, color: C.crimson,
          letterSpacing: '0.18em', opacity: 0.7,
        }}>
          NERON KESAR · DCLXVI · VICARIUS FILII DEI
        </div>
      </div>

      {/* Tab nav */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.12em',
              padding: '7px 14px',
              border: `1px solid ${activeTab === t.id ? C.crimson : C.border}`,
              background: activeTab === t.id ? C.crimsonDim : 'transparent',
              color: activeTab === t.id ? C.text : C.textDim,
              cursor: 'pointer',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* Was Nero the Judge */}
        {activeTab === 'judge' && (
          <motion.div key="judge" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 12 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 6 }}>VERDICT</div>
              <div style={{ fontFamily: 'monospace', fontSize: 14, color: C.text, fontWeight: 700, marginBottom: 14 }}>{d.neroJudge.verdict}</div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 14 }}>{d.neroJudge.body}</p>
              <div style={{ borderLeft: `2px solid ${C.gold}`, paddingLeft: 12 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.18em', marginBottom: 5 }}>LEGAL MECHANISM</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textDim, lineHeight: 1.85, margin: 0 }}>{d.neroJudge.legalMechanism}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Nero = 666 */}
        {activeTab === 'nero' && (
          <motion.div key="nero" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 12 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 8 }}>METHOD</div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 16 }}>{d.neroGematria.method}</p>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 10 }}>
                ◈ נרון קסר — NERON KESAR — LETTER VALUES
              </div>
              <GematriaTable letters={d.neroGematria.letters} total={d.neroGematria.total} isHebrew />
              <div style={{ marginTop: 16, borderLeft: `2px solid ${C.tealLight}`, paddingLeft: 12 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.tealLight, letterSpacing: '0.18em', marginBottom: 5 }}>VARIANT / 616</div>
                <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.8, margin: 0 }}>{d.neroGematria.note}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pope = 666 */}
        {activeTab === 'pope' && (
          <motion.div key="pope" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 12 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 8 }}>METHOD</div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 12 }}>{d.popGematria.method}</p>
              <div style={{ background: C.surface2, borderLeft: `3px solid ${C.gold}`, padding: '10px 14px', marginBottom: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.18em', marginBottom: 4 }}>⚠ CRITICAL NOTE</div>
                <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textDim, lineHeight: 1.8, margin: 0 }}>{d.popGematria.controversy}</p>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.2em', marginBottom: 10 }}>
                ◈ VICARIUS FILII DEI — LATIN NUMERAL VALUES
              </div>
              <GematriaTable letters={d.popGematria.letters} total={d.popGematria.total} isHebrew={false} />
            </div>
          </motion.div>
        )}

        {/* Roman Constitution */}
        {activeTab === 'constitution' && (
          <motion.div key="constitution" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.border}`, padding: '20px 22px', marginBottom: 12 }}>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, marginBottom: 20 }}>
                {d.romanConstitution.overview}
              </p>
              <div style={{ display: 'grid', gap: 12 }}>
                {d.romanConstitution.pillars.map((pillar) => (
                  <div key={pillar.name} style={{ background: C.surface2, border: `1px solid ${C.border}`, padding: '14px 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
                      <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: C.text }}>{pillar.name}</div>
                      <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, fontStyle: 'italic' }}>{pillar.latin}</div>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.85, margin: 0 }}>{pillar.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, borderLeft: `3px solid ${C.crimson}`, paddingLeft: 14 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.crimson, letterSpacing: '0.18em', marginBottom: 6 }}>CONCLUSION</div>
                <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.9, margin: 0 }}>{d.romanConstitution.conclusion}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Nero as God */}
        {activeTab === 'god' && (
          <motion.div key="god" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.borderAccent}`, padding: '20px 22px', marginBottom: 12 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: C.crimson, letterSpacing: '0.2em', marginBottom: 8 }}>
                ◈ {d.neroAsGod.heading}
              </div>
              <p style={{ fontFamily: 'monospace', fontSize: 11, color: C.textMid, lineHeight: 1.95, marginBottom: 24 }}>
                {d.neroAsGod.body}
              </p>

              {/* Caesar comparison grid */}
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.goldLight, letterSpacing: '0.2em', marginBottom: 12 }}>
                THREE CAESARS — THE ESCALATION
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {d.neroAsGod.caesarComparison.map((caesar, i) => {
                  const colors = [C.tealLight, C.goldLight, C.crimson]
                  const col = colors[i]
                  return (
                    <div key={caesar.name} style={{
                      background: C.surface2,
                      border: `1px solid ${C.border}`,
                      borderLeft: `3px solid ${col}`,
                      padding: '14px 16px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                        <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: C.text }}>{caesar.name}</div>
                        <div style={{ fontFamily: 'monospace', fontSize: 10, color: col, fontStyle: 'italic' }}>{caesar.title}</div>
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 9, color: C.textDim, letterSpacing: '0.15em', marginBottom: 4 }}>FATE</div>
                      <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textMid, lineHeight: 1.7, marginBottom: 8 }}>{caesar.fate}</p>
                      <div style={{ fontFamily: 'monospace', fontSize: 9, color: col, letterSpacing: '0.15em', marginBottom: 4 }}>ASSESSMENT</div>
                      <p style={{ fontFamily: 'monospace', fontSize: 10, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{caesar.error}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
