'use client'

import { useState } from 'react'

const C = {
  bg: '#040408',
  panel: '#08080f',
  border: '#1a2a1a',
  accent: '#4ade80',
  accentDim: '#166534',
  accentMid: '#22c55e',
  teal: '#2a9d9d',
  text: '#c8d4c8',
  textMid: '#889988',
  textDim: '#445544',
  gold: '#d4a017',
}

const SECTIONS = [
  { id: 'ecs',           label: 'ENDO SYSTEM',  num: '01' },
  { id: 'neuro',         label: 'NEUROPROTECT', num: '02' },
  { id: 'mental',        label: 'MENTAL HEALTH', num: '03' },
  { id: 'plasticity',    label: 'PLASTICITY',   num: '04' },
  { id: 'pain',          label: 'PAIN & INFLAM', num: '05' },
  { id: 'clinical',      label: 'CLINICAL DATA', num: '06' },
  { id: 'bibliography',  label: 'BIBLIOGRAPHY', num: '07' },
]

function SectionHeader({ num, title, sub }: { num: string; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 10, color: C.accentDim, letterSpacing: '0.3em', marginBottom: 6 }}>{num} ·· {title.toUpperCase()}</div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.05em', margin: '0 0 8px' }}>{title}</h2>
      <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.7, margin: 0, maxWidth: 640 }}>{sub}</p>
    </div>
  )
}

const ECS_RECEPTORS = [
  {
    name: 'CB1 Receptors',
    location: 'Brain, spinal cord, peripheral nerves',
    role: 'Modulate neurotransmitter release — primarily inhibitory. Dense in hippocampus (memory), amygdala (fear/emotion), basal ganglia (motor), prefrontal cortex (executive function). THC binds here, producing psychoactive effects.',
    endogenous: 'Anandamide (AEA), 2-Arachidonoylglycerol (2-AG)',
    color: C.accentMid,
  },
  {
    name: 'CB2 Receptors',
    location: 'Immune cells, gut, peripheral tissue, glial cells',
    role: 'Primarily regulate immune function and inflammation. Low density in the brain under normal conditions but upregulate during neuroinflammation — making them a key target for neuroprotective therapies without psychoactive effects.',
    endogenous: '2-Arachidonoylglycerol (2-AG)',
    color: C.teal,
  },
  {
    name: 'TRPV1 Channels',
    location: 'Peripheral sensory neurons, brain',
    role: 'Activated by CBD and anandamide at high concentrations. Involved in pain modulation, body temperature regulation, and inflammation. CBD\'s interaction here partly explains its analgesic properties.',
    endogenous: 'Anandamide (high dose)',
    color: C.gold,
  },
]

const NEURO_MECHANISMS = [
  {
    step: '1',
    label: 'Anti-Neuroinflammation',
    body: 'CBD and THC reduce microglial activation and pro-inflammatory cytokine release (TNF-α, IL-6, IL-1β). Chronic neuroinflammation underlies Alzheimer\'s, Parkinson\'s, and TBI — cannabinoids suppress this pathway via CB2 and PPARγ activation.',
  },
  {
    step: '2',
    label: 'BDNF Upregulation',
    body: 'Brain-derived neurotrophic factor (BDNF) supports neuronal survival and synaptic plasticity. Cannabinoids increase BDNF expression in the hippocampus and cortex, counteracting the neurodegeneration seen in depression, chronic stress, and aging.',
  },
  {
    step: '3',
    label: 'Oxidative Stress Reduction',
    body: 'CBD is a potent antioxidant — more so than Vitamin C or E in some cell models. It reduces reactive oxygen species (ROS) that damage neurons, relevant to Parkinson\'s, stroke recovery, and environmental neurotoxin exposure.',
  },
  {
    step: '4',
    label: 'Adult Neurogenesis',
    body: 'Cannabinoids promote hippocampal neurogenesis via CB1 receptor activation. New neuron formation in the dentate gyrus is associated with antidepressant effects, fear extinction, and cognitive resilience — a mechanism shared with SSRIs.',
  },
  {
    step: '5',
    label: 'Glutamate Excitotoxicity Block',
    body: 'Excessive glutamate activity kills neurons in stroke, TBI, and epilepsy. CB1 activation suppresses presynaptic glutamate release, providing a neuroprotective brake. This is why cannabis research is active in epilepsy (Epidiolex/CBD is FDA-approved).',
  },
]

const MENTAL_HEALTH = [
  {
    condition: 'PTSD',
    evidence: 'Strong',
    color: C.accentMid,
    summary: 'The ECS plays a central role in fear extinction — the process of "unlearning" traumatic memories. CB1 activation in the amygdala and hippocampus facilitates extinction learning. PTSD patients show lower endocannabinoid tone. THC reduces nightmare frequency; CBD reduces hyperarousal. Phase 2/3 trials ongoing.',
    citations: ['Rabinak et al. (2013) Neuropsychopharmacology', 'Jetly et al. (2015) Psychoneuroendocrinology', 'Blessing et al. (2015) Neurotherapeutics'],
  },
  {
    condition: 'Anxiety',
    evidence: 'Moderate–Strong (dose-dependent)',
    color: C.accentMid,
    summary: 'CBD has anxiolytic effects at low-to-moderate doses via 5-HT1A serotonin receptor agonism and indirect ECS modulation. THC is dose-dependent: low doses reduce anxiety, high doses can induce it via CB1 overstimulation in the amygdala. CBD-dominant formulations show consistent benefit in social anxiety disorder (SAD) and generalized anxiety.',
    citations: ['Bergamaschi et al. (2011) Neuropsychopharmacology', 'Zuardi et al. (2017) Frontiers in Pharmacology'],
  },
  {
    condition: 'Depression',
    evidence: 'Emerging',
    color: C.gold,
    summary: 'ECS deficiency is hypothesized as a depression substrate. Cannabinoids increase anandamide tone and BDNF, mirroring antidepressant mechanisms. CBD shows efficacy in animal models. Human RCT data is limited but promising, particularly in treatment-resistant cases. Does not suppress REM sleep like SSRIs.',
    citations: ['Linge et al. (2016) Neuropharmacology', 'Sales et al. (2019) Molecular Neurobiology'],
  },
  {
    condition: 'Chronic Pain & Sleep',
    evidence: 'Strong',
    color: C.accentMid,
    summary: 'Pain and sleep are deeply linked to ECS tone. CB1/CB2 activation reduces pain signaling at spinal and supraspinal levels. THC reduces sleep onset latency and increases slow-wave sleep. Particularly effective in neuropathic pain, fibromyalgia, and MS-associated spasticity.',
    citations: ['Aviram & Samuelly-Leichtag (2017) J Pain', 'Russo (2008) Chemistry & Biodiversity'],
  },
]

const PLASTICITY_POINTS = [
  {
    title: 'Synaptic Pruning Modulation',
    body: 'The ECS is a key regulator of synaptic plasticity — both long-term potentiation (LTP) and long-term depression (LTD). Retrograde endocannabinoid signaling allows postsynaptic neurons to silence overactive inputs, fine-tuning neural circuits.',
  },
  {
    title: 'Hippocampal Neurogenesis',
    body: 'Adult neurogenesis in the dentate gyrus is facilitated by CB1 activation. New neurons integrate into existing memory circuits, supporting pattern separation, contextual learning, and emotional regulation.',
  },
  {
    title: 'Default Mode Network (DMN) Modulation',
    body: 'Cannabis transiently disrupts DMN connectivity — the brain\'s self-referential "resting state" network. This is associated with altered time perception and increased cross-network connectivity, which some researchers link to the creativity-enhancing effects reported by artists and researchers.',
  },
  {
    title: 'Fear Memory Reconsolidation',
    body: 'The window after memory retrieval when memories become labile is called reconsolidation. CB1 activation during this window can weaken fear memories — a mechanism being actively investigated for trauma therapy when combined with psychotherapy.',
  },
]

const REFS = [
  'Rabinak CA et al. (2013). Cannabinoid facilitation of fear extinction memory recall in humans. Neuropsychopharmacology, 38(8), 1654–1660.',
  'Blessing EM et al. (2015). Cannabidiol as a Potential Treatment for Anxiety Disorders. Neurotherapeutics, 12(4), 825–836.',
  'Zuardi AW et al. (2017). Cannabidiol for the treatment of psychosis in Parkinson\'s disease. J Psychopharmacol.',
  'Linge R et al. (2016). Cannabidiol induces rapid-acting antidepressant-like effects. Neuropharmacology, 103, 16–26.',
  'Russo EB (2008). Cannabinoids in the management of difficult to treat pain. Ther Clin Risk Manag, 4(1), 245–259.',
  'Aviram J & Samuelly-Leichtag G (2017). Efficacy of Cannabis-Based Medicines for Pain Management. J Pain, 18(10), 1260–1268.',
  'Atakan Z (2012). Cannabis, a complex plant. Ther Adv Psychopharmacol, 2(6), 241–254.',
  'Mechoulam R & Parker LA (2013). The endocannabinoid system and the brain. Annu Rev Psychol, 64, 21–47.',
  'Devane WA et al. (1992). Isolation and structure of a brain constituent that binds to the cannabinoid receptor. Science, 258(5090), 1946–1949.',
  'Hampson AJ et al. (1998). Cannabidiol and (−)Δ9-tetrahydrocannabinol are neuroprotective antioxidants. PNAS, 95(14), 8268–8273.',
  'Marsicano G & Lutz B (2006). Neuromodulatory functions of the endocannabinoid system. J Endocrinol Invest, 29(3 Suppl), 27–46.',
  'Sales AJ et al. (2019). Cannabidiol Induces Rapid and Sustained Antidepressant-Like Effects. Mol Neurobiol, 56(2), 1070–1081.',
]

export default function CannabisDashboard() {
  const [active, setActive] = useState('ecs')

  return (
    <div style={{ background: C.bg, minHeight: '100vh', fontFamily: 'monospace', color: C.text }}>
      <style>{`
        @media (max-width: 640px) {
          .cann-header { padding: 24px 16px 20px !important; }
          .cann-body { padding: 20px 16px !important; }
          .cann-receptor-grid { grid-template-columns: 1fr !important; }
          .cann-cascade-row { grid-template-columns: 32px 1fr !important; gap: 12px !important; }
          .cann-cascade-body { grid-column: 1 / -1; }
          .cann-header h1 { font-size: 22px !important; }
        }
      `}</style>

      {/* Header */}
      <div className="cann-header" style={{ borderBottom: `1px solid ${C.border}`, padding: '40px 48px 32px' }}>
        <div style={{ fontSize: 11, color: C.accentDim, letterSpacing: '0.3em', marginBottom: 12, textTransform: 'uppercase' }}>
          Deep Research // Cannabinoid Neuroscience
        </div>
        <h1 style={{ fontSize: 38, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>
          CANNABIS & THE BRAIN
        </h1>
        <div style={{ fontSize: 13, color: C.accentDim, letterSpacing: '0.18em', marginTop: 8 }}>
          ENDOCANNABINOID SYSTEM · NEUROPROTECTION · NEUROPLASTICITY · CLINICAL EVIDENCE
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 32, fontSize: 11, color: C.textDim, letterSpacing: '0.15em', flexWrap: 'wrap' }}>
          <span>CB1 / CB2 RECEPTORS</span>
          <span style={{ color: C.border }}>|</span>
          <span>ANANDAMIDE</span>
          <span style={{ color: C.border }}>|</span>
          <span>PTSD · ANXIETY · PAIN</span>
          <span style={{ color: C.border }}>|</span>
          <span style={{ color: C.accentDim }}>12+ PEER-REVIEWED CITATIONS</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${C.border}`, overflowX: 'auto' }}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: 'none', border: 'none',
              borderBottom: active === s.id ? `2px solid ${C.accentMid}` : '2px solid transparent',
              color: active === s.id ? C.accentMid : C.textDim,
              padding: '14px 24px', fontSize: 10, letterSpacing: '0.2em',
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.2s',
            }}
          >
            <span style={{ color: C.textDim, marginRight: 6 }}>{s.num}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="cann-body" style={{ padding: '40px 48px', maxWidth: 1100 }}>

        {/* 01 — Endocannabinoid System */}
        {active === 'ecs' && (
          <div>
            <SectionHeader
              num="01"
              title="The Endocannabinoid System"
              sub="The ECS is one of the most widespread neuromodulatory systems in the body — present in virtually every organ. It maintains homeostasis by regulating mood, memory, appetite, pain, immune function, and sleep through retrograde synaptic signaling."
            />
            <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: 20, borderRadius: 4, marginBottom: 28 }}>
              <p style={{ fontSize: 12, color: C.text, lineHeight: 1.9, margin: 0 }}>
                Unlike classical neurotransmitters that travel forward from presynaptic to postsynaptic neurons, endocannabinoids are synthesized on demand in the postsynaptic neuron and travel backwards — suppressing excess neurotransmitter release upstream. This "retrograde inhibition" makes the ECS a master regulator of synaptic tone across virtually every major neural circuit.
              </p>
            </div>

            <div className="cann-receptor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
              {ECS_RECEPTORS.map((r) => (
                <div key={r.name} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 22px', borderTop: `3px solid ${r.color}` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: r.color, letterSpacing: '0.08em', marginBottom: 8 }}>{r.name}</div>
                  <div style={{ fontSize: 10, color: C.textDim, letterSpacing: '0.12em', marginBottom: 10 }}>{r.location.toUpperCase()}</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: '0 0 10px' }}>{r.role}</p>
                  <div style={{ fontSize: 10, color: C.accentDim, letterSpacing: '0.1em' }}>
                    ENDOGENOUS LIGAND: <span style={{ color: C.accentMid }}>{r.endogenous}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '18px 22px', borderLeft: `3px solid ${C.accentMid}` }}>
              <div style={{ fontSize: 10, color: C.accentDim, letterSpacing: '0.2em', marginBottom: 8 }}>KEY DISTINCTION</div>
              <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.8, margin: 0 }}>
                Phytocannabinoids (plant-derived, e.g. THC, CBD) interact with the same receptors as our endogenous cannabinoids. THC is a partial CB1 agonist — it mimics anandamide but with higher potency and longer duration. CBD does not directly bind CB1/CB2 with high affinity; instead it modulates the ECS indirectly by inhibiting the enzyme FAAH, which breaks down anandamide — effectively raising your brain's own endocannabinoid tone.
              </p>
            </div>
          </div>
        )}

        {/* 02 — Neuroprotection */}
        {active === 'neuro' && (
          <div>
            <SectionHeader
              num="02"
              title="Neuroprotection"
              sub="Cannabinoids — particularly CBD — demonstrate robust neuroprotective properties through multiple mechanisms. These effects are relevant to traumatic brain injury, neurodegeneration, stroke, and chronic neuroinflammatory conditions."
            />
            <div style={{ display: 'grid', gap: 0, borderRadius: 4, overflow: 'hidden', border: `1px solid ${C.border}` }}>
              {NEURO_MECHANISMS.map((step, i) => (
                <div key={step.step} className="cann-cascade-row" style={{ borderBottom: i < NEURO_MECHANISMS.length - 1 ? `1px solid ${C.border}` : 'none', padding: '18px 24px', display: 'grid', gridTemplateColumns: '40px 180px 1fr', gap: 20, alignItems: 'start', background: C.panel }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: C.accentDim }}>{step.step}</div>
                  <div style={{ fontSize: 12, color: C.accentMid, fontWeight: 600, letterSpacing: '0.05em', paddingTop: 2 }}>{step.label}</div>
                  <div className="cann-cascade-body" style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7 }}>{step.body}</div>
                </div>
              ))}
            </div>
            <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '18px 22px', marginTop: 20, borderLeft: `3px solid ${C.accentMid}` }}>
              <div style={{ fontSize: 10, color: C.accentDim, letterSpacing: '0.2em', marginBottom: 8 }}>FDA-APPROVED EVIDENCE</div>
              <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.8, margin: 0 }}>
                Epidiolex (pharmaceutical-grade CBD) is FDA-approved for Dravet syndrome and Lennox-Gastaut syndrome — rare, severe forms of childhood epilepsy. This represents the strongest regulatory validation of cannabinoid neuroprotection to date, with seizure reduction of 39–47% vs placebo in Phase 3 trials.
              </p>
            </div>
          </div>
        )}

        {/* 03 — Mental Health */}
        {active === 'mental' && (
          <div>
            <SectionHeader
              num="03"
              title="Mental Health Applications"
              sub="The endocannabinoid system directly regulates emotional memory, fear response, stress reactivity, and mood — making it a logical target for psychiatric intervention. Evidence quality varies by condition."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {MENTAL_HEALTH.map((item) => (
                <div key={item.condition} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '22px 26px', borderLeft: `3px solid ${item.color}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#e0e0e0', letterSpacing: '0.05em' }}>{item.condition}</div>
                    <div style={{ fontSize: 10, color: item.color, border: `1px solid ${item.color}44`, padding: '2px 10px', letterSpacing: '0.15em' }}>
                      EVIDENCE: {item.evidence.toUpperCase()}
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.8, margin: '0 0 12px' }}>{item.summary}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.citations.map((c) => (
                      <span key={c} style={{ fontSize: 10, color: C.textDim, background: '#111', border: `1px solid ${C.border}`, padding: '2px 8px', letterSpacing: '0.06em' }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 04 — Neuroplasticity */}
        {active === 'plasticity' && (
          <div>
            <SectionHeader
              num="04"
              title="Neuroplasticity"
              sub="The ECS is a core regulator of how the brain rewires itself. From synaptic pruning to new neuron formation, cannabinoid signaling shapes the brain's capacity to learn, adapt, and recover."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {PLASTICITY_POINTS.map((p) => (
                <div key={p.title} style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '20px 22px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.accentMid, letterSpacing: '0.05em', marginBottom: 10 }}>{p.title}</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '18px 22px', marginTop: 20, borderLeft: `3px solid ${C.gold}` }}>
              <div style={{ fontSize: 10, color: C.gold, letterSpacing: '0.2em', marginBottom: 8 }}>NUANCE — DOSE & TIMING MATTER</div>
              <p style={{ fontSize: 12, color: C.textMid, lineHeight: 1.8, margin: 0 }}>
                Chronic heavy THC use — particularly in adolescence — can impair neuroplasticity rather than enhance it, reducing hippocampal volume and impairing working memory. The same system that supports plasticity when modulated gently can be disrupted by chronic overstimulation. This is why research consistently distinguishes between acute therapeutic use and chronic recreational use.
              </p>
            </div>
          </div>
        )}

        {/* 05 — Pain & Inflammation */}
        {active === 'pain' && (
          <div>
            <SectionHeader
              num="05"
              title="Pain & Inflammation"
              sub="Pain modulation is one of the best-supported applications of cannabinoid medicine. The ECS regulates nociception at every level of the pain pathway — from peripheral sensory neurons to the brain's descending pain inhibition system."
            />
            {[
              { title: 'Peripheral Sensitization', body: 'Inflammatory pain begins when tissue damage activates immune cells that release prostaglandins and cytokines, sensitizing peripheral nociceptors. CB1 and CB2 receptors on peripheral sensory neurons and immune cells suppress this cascade — reducing the initial pain signal before it even reaches the spinal cord.' },
              { title: 'Spinal Gate Control', body: 'In the dorsal horn of the spinal cord, CB1 activation suppresses glutamate and substance P release from pain-transmitting primary afferent neurons. This "closes the gate" on ascending pain signals, reducing the intensity of what reaches the brain.' },
              { title: 'Central Descending Inhibition', body: 'The periaqueductal gray (PAG) and rostral ventromedial medulla (RVM) form the brain\'s descending pain inhibition system. Cannabinoid receptors in the PAG are densely expressed; CB1 activation here is one of the primary mechanisms underlying the analgesic effect of both endogenous and exogenous cannabinoids.' },
              { title: 'Neuroinflammatory Pain', body: 'In conditions like multiple sclerosis, neuropathic pain, and fibromyalgia, glial cells drive sustained neuroinflammation that amplifies pain. CB2 receptor activation suppresses microglial and astrocyte activation — reducing the central sensitization that makes these conditions so treatment-resistant.' },
            ].map((item, i, arr) => (
              <div key={item.title} style={{ border: `1px solid ${C.border}`, borderBottom: i < arr.length - 1 ? 'none' : `1px solid ${C.border}`, background: C.panel, padding: '20px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.accentMid, letterSpacing: '0.05em', marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* 06 — Clinical Data */}
        {active === 'clinical' && (
          <div>
            <SectionHeader
              num="06"
              title="Clinical Research Landscape"
              sub="The regulatory and clinical evidence base for cannabinoid medicine is rapidly expanding. Here is the current state of evidence by application."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
              {[
                { indication: 'Epilepsy (Dravet / LGS)', status: 'FDA-Approved', compound: 'CBD (Epidiolex)', level: 'A', color: C.accentMid },
                { indication: 'Chemotherapy-induced nausea', status: 'FDA-Approved', compound: 'THC (Dronabinol / Marinol)', level: 'A', color: C.accentMid },
                { indication: 'MS-related spasticity', status: 'EMA-Approved (EU)', compound: 'THC:CBD (Sativex / Nabiximols)', level: 'A', color: C.accentMid },
                { indication: 'PTSD', status: 'Phase 2/3 Trials', compound: 'THC, CBD', level: 'B', color: C.gold },
                { indication: 'Chronic neuropathic pain', status: 'Strong observational + RCT data', compound: 'THC:CBD', level: 'B', color: C.gold },
                { indication: 'Anxiety disorders (SAD)', status: 'Phase 2 Trials', compound: 'CBD', level: 'B', color: C.gold },
                { indication: 'Treatment-resistant depression', status: 'Emerging Phase 2', compound: 'CBD', level: 'C', color: C.teal },
                { indication: 'Alzheimer\'s / Neurodegeneration', status: 'Preclinical + Early Phase 1', compound: 'CBD, CBG', level: 'C', color: C.teal },
              ].map((row, i, arr) => (
                <div key={row.indication} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 60px', gap: 16, padding: '14px 20px', borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : 'none', background: C.panel, alignItems: 'center' }}>
                  <div style={{ fontSize: 12, color: '#e0e0e0' }}>{row.indication}</div>
                  <div style={{ fontSize: 10, color: C.textMid, letterSpacing: '0.08em' }}>{row.status}</div>
                  <div style={{ fontSize: 10, color: C.accentDim }}>{row.compound}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: row.color, textAlign: 'center', border: `1px solid ${row.color}44`, padding: '3px 0' }}>Level {row.level}</div>
                </div>
              ))}
            </div>
            <div style={{ border: `1px solid ${C.border}`, background: C.panel, padding: '14px 20px', marginTop: 16 }}>
              <p style={{ fontSize: 10, color: C.textDim, lineHeight: 1.75, margin: 0 }}>
                Evidence levels: <span style={{ color: C.accentMid }}>A = Regulatory approval / meta-analyzed RCTs</span> · <span style={{ color: C.gold }}>B = Multiple RCTs or strong observational data</span> · <span style={{ color: C.teal }}>C = Phase 1–2 / preclinical / emerging</span>
              </p>
            </div>
          </div>
        )}

        {/* 07 — Bibliography */}
        {active === 'bibliography' && (
          <div>
            <SectionHeader num="07" title="Bibliography" sub="All claims in this module are grounded in peer-reviewed research. Primary sources listed below." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {REFS.map((ref, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, padding: '12px 16px', border: `1px solid ${C.border}`, background: C.panel }}>
                  <div style={{ fontSize: 11, color: C.accentDim, minWidth: 24, paddingTop: 1 }}>{String(i + 1).padStart(2, '0')}</div>
                  <p style={{ fontSize: 11, color: C.textMid, lineHeight: 1.7, margin: 0 }}>{ref}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
