// ── Case Analysis: Neuroscience of Functional Neurological Symptoms ──────────

export interface NeuroLogEntry {
  timestamp: string;
  system: string;
  event: string;
  severity: "info" | "warn" | "critical";
}

export interface SymptomCard {
  id: string;
  title: string;
  subtitle: string;
  icdCode: string;
  description: string;
  mechanism: string;
  brainRegions: string[];
  differentials: string[];
  glossaryTerms: string[];
}

export interface IdeologicalFramework {
  label: string;
  color: string;
  psychologicalVector: string;
  somaticImpact: string;
  shutOffMechanism: string;
  literatureRef: string;
}

export interface GlossaryTerm {
  term: string;
  plainEnglish: string;
  clinicalDefinition: string;
}

// ── Symptom Cards ─────────────────────────────────────────────────────────────

export const symptomCards: SymptomCard[] = [
  {
    id: "dissociative-deafness",
    title: "Dissociative Deafness",
    subtitle: "Functional Auditory Processing Breakdown",
    icdCode: "F44.6 — Dissociative Anaesthesia / Sensory Loss",
    description:
      "The subject maintains apparent visual engagement yet reports or demonstrates complete auditory non-processing. Auditory cortex (A1) activity is suppressed via top-down inhibition from the prefrontal cortex without any structural lesion in the auditory pathway.",
    mechanism:
      "The thalamo-cortical relay gates auditory input at the level of the medial geniculate nucleus. Under extreme psychological threat or dissociation, the anterior cingulate cortex (ACC) and DLPFC modulate this gate, producing functional deafness. fMRI studies show normal cochlear response with absent cortical activation in Heschl's gyrus.",
    brainRegions: ["Medial Geniculate Nucleus", "Heschl's Gyrus (A1)", "ACC", "DLPFC", "Thalamus"],
    differentials: [
      "Pure-tone audiometry: normal thresholds (rules out sensorineural loss)",
      "ABR (Auditory Brainstem Response): normal (rules out peripheral lesion)",
      "Malingering: distinguished via P300 ERP absence",
      "Selective attention deficit",
    ],
    glossaryTerms: [
      "Dissociation",
      "Dissociative Deafness",
      "Salience Network",
      "Default Mode Network (DMN)",
    ],
  },
  {
    id: "pnes",
    title: "Somatic Convulsions",
    subtitle: "PNES vs. Ideological Manifestations",
    icdCode: "F44.5 — Dissociative Convulsions (PNES)",
    description:
      "Psychogenic Non-Epileptic Seizures (PNES) are paroxysmal events resembling epileptic seizures without the ictal EEG correlate. They represent a somatization pathway where unprocessed psychological conflict bypasses linguistic encoding and manifests as motor output.",
    mechanism:
      "The limbic system — particularly the amygdala and hippocampus — becomes hyperactivated under psychological stress. The failure of prefrontal regulatory circuits to down-regulate this arousal results in a 'circuit breaker' effect: motor pathways are recruited to discharge accumulated affective tension. Unlike tonic-clonic seizures, PNES episodes often involve asynchronous, waxing-waning movements with preserved awareness.",
    brainRegions: [
      "Amygdala",
      "Hippocampus",
      "Anterior Cingulate Cortex",
      "Motor Cortex (M1)",
      "Insula",
      "Prefrontal Cortex",
    ],
    differentials: [
      "Epilepsy: VEEG shows no ictal discharge during event",
      "Prolactin elevation post-event: absent in PNES, raised in epilepsy",
      "Stiffening/arching (opisthotonos): often present in PNES",
      "Functional Movement Disorder (FMD)",
    ],
    glossaryTerms: [
      "PNES (Psychogenic Non-Epileptic Seizures)",
      "Somatic",
      "Functional Neurological Disorder (FND)",
      "HPA Axis",
    ],
  },
  {
    id: "ideological-friction",
    title: "Ideological Friction",
    subtitle: "Religious Schemas and Psychological Shut-Off",
    icdCode: "Z65.8 — Other Specified Psychosocial Circumstances",
    description:
      "Competing ideological frameworks — particularly those with high cosmological stakes such as Catholic doctrine vs. adversarial/Satanic schema — create chronic cognitive dissonance. When internalized, they generate a persistent threat-appraisal state that primes the nervous system for dissociative and somatic responses.",
    mechanism:
      "The brain's default mode network (DMN) integrates autobiographical memory, self-concept, and moral schema. Irreconcilable ideological conflict activates the salience network (anterior insula + ACC) while simultaneously suppressing the DMN's self-referential processing. The result is a 'gray rock' response — emotional flatness, perceptual narrowing, and somatic expression — as a survival-level defense mechanism.",
    brainRegions: [
      "Default Mode Network",
      "Anterior Insula",
      "Anterior Cingulate Cortex",
      "Amygdala",
      "Orbitofrontal Cortex",
    ],
    differentials: [
      "Scrupulosity (OCD variant with religious content)",
      "Religious trauma syndrome",
      "Pathological dissociation (DES-II > 30)",
      "Gray-rock response: adaptive vs. pathological differentiation",
    ],
    glossaryTerms: [
      "Ideological Friction",
      "Gray-Rock Response",
      "Affective Flattening",
      "Allostatic Load",
    ],
  },
];

// ── Ideological Framework Comparison ─────────────────────────────────────────

export const ideologicalFrameworks: IdeologicalFramework[] = [
  {
    label: "Catholic Schema",
    color: "#8B0000",
    psychologicalVector:
      "Guilt-mediated identity regulation. The self is perpetually adjudicated against an absolute moral standard. Internalized sin schemas activate threat appraisal even in absence of external stressor.",
    somaticImpact:
      "Chronic low-grade HPA axis activation. Predisposes to somatization via unconditioned moral-physiological pairing (physical penance as emotional regulation).",
    shutOffMechanism:
      "Dissociation framed as 'spiritual protection' — the subject may interpret perceptual narrowing as divine shielding, reinforcing the behavior.",
    literatureRef: "Exline et al. (2000) — Religious Struggle as a Predictor of Somatization",
  },
  {
    label: "Adversarial / Satanic Schema",
    color: "#008080",
    psychologicalVector:
      "Radical autonomy and devaluation as self-protective philosophy. External relationships are appraised through a lens of leverage and threat, accelerating devaluation cycles.",
    somaticImpact:
      "Sympathetic hyperarousal channeled into performance rather than collapse. Motor agitation, hypervigilance, and somatic expression as assertion of agency.",
    shutOffMechanism:
      "Gray-rock defense enacted as ideology — indifference is not a symptom but a doctrine. This schema pathologizes engagement itself, making responsiveness feel like submission.",
    literatureRef:
      "Schouten & Silver (1988) — Not Really Satanism: Pseudo-Satanic Ritual and Hypnotic States",
  },
];

// ── Neural Log Feed ───────────────────────────────────────────────────────────

export const neuroLogEntries: NeuroLogEntry[] = [
  {
    timestamp: "T+00:00",
    system: "AMYGDALA",
    event: "Threat appraisal initiated. Limbic arousal threshold crossed. Fight/flight/freeze cascade triggered.",
    severity: "warn",
  },
  {
    timestamp: "T+00:03",
    system: "THALAMUS",
    event: "Sensory gating engaged. Auditory relay (MGN) receiving inhibitory signal from DLPFC. Functional hearing suppression underway.",
    severity: "critical",
  },
  {
    timestamp: "T+00:07",
    system: "ACC",
    event: "Conflict monitoring maxed. Irreconcilable schema conflict detected in DMN. Salience network override active.",
    severity: "critical",
  },
  {
    timestamp: "T+00:12",
    system: "MOTOR CORTEX",
    event: "Affective discharge pathway recruitment. Non-voluntary motor activation detected — consistent with PNES motor signature.",
    severity: "warn",
  },
  {
    timestamp: "T+00:18",
    system: "INSULA",
    event: "Interoceptive amplification. Subject experiencing heightened somatic awareness. Body boundary dysregulation noted.",
    severity: "warn",
  },
  {
    timestamp: "T+00:24",
    system: "PFC",
    event: "Executive down-regulation failure. Emotion regulation circuits offline. Dissociative buffer engaged.",
    severity: "critical",
  },
  {
    timestamp: "T+00:31",
    system: "HPA AXIS",
    event: "Cortisol surge. Chronic ideological stress priming confirmed. Allostatic load elevation documented.",
    severity: "warn",
  },
  {
    timestamp: "T+00:40",
    system: "DMN",
    event: "Self-referential loop disrupted. Autobiographical continuity interrupted. Dissociative identity fragmentation risk elevated.",
    severity: "critical",
  },
  {
    timestamp: "T+00:52",
    system: "BRAINSTEM",
    event: "Autonomic stabilization attempt. Vagal tone decreased. Parasympathetic recovery pending.",
    severity: "info",
  },
  {
    timestamp: "T+01:05",
    system: "HIPPOCAMPUS",
    event: "Memory consolidation inhibited. Stress hormones impairing hippocampal LTP. Episodic encoding compromised.",
    severity: "info",
  },
];

// ── Indifference Metric ───────────────────────────────────────────────────────

export const indifferenceMetric = {
  label: "Emotional Indifference Index",
  score: 87, // 0-100
  classification: "Severe",
  description:
    "Composite score derived from affective flattening (PANSS N1), dissociative tendency (DES-II subscale), and social engagement withdrawal. Score above 80 indicates pathological gray-rock presentation.",
  subscores: [
    { label: "Affective Flattening", value: 91 },
    { label: "Dissociative Tendency", value: 84 },
    { label: "Social Withdrawal", value: 88 },
    { label: "Somatic Expression", value: 79 },
  ],
};

// ── Plain-English + Clinical Glossary ───────────────────────────────────────

export const caseGlossaryTerms: GlossaryTerm[] = [
  {
    term: "Somatic",
    plainEnglish:
      "A mental or emotional issue showing up in the body (for example, pain, shaking, or numbness).",
    clinicalDefinition:
      "Relating to the body (soma). In psychiatry and neurology, somatic expression refers to psychological distress presenting as physical symptoms.",
  },
  {
    term: "Ideological Friction",
    plainEnglish:
      "Stress created when a person holds two belief systems that clash and cannot be easily reconciled.",
    clinicalDefinition:
      "Persistent cognitive-affective conflict between competing moral or identity schemas, often increasing salience network activity and defensive coping responses.",
  },
  {
    term: "PNES (Psychogenic Non-Epileptic Seizures)",
    plainEnglish:
      "Seizure-like episodes that are real and distressing, but are not caused by the electrical brain activity seen in epilepsy.",
    clinicalDefinition:
      "Paroxysmal events resembling epileptic seizures without ictal EEG correlates, typically classified under functional neurological disorder / dissociative convulsions.",
  },
  {
    term: "Dissociation",
    plainEnglish:
      "A state where attention, memory, identity, or awareness partly disconnects as a protective response to stress.",
    clinicalDefinition:
      "A disruption in the normal integration of consciousness, memory, perception, affect regulation, and sense of self.",
  },
  {
    term: "Dissociative Deafness",
    plainEnglish:
      "The person appears physically able to hear, but the brain functionally blocks or fails to process sound.",
    clinicalDefinition:
      "A functional sensory symptom in which auditory input is not consciously processed despite intact peripheral hearing pathways.",
  },
  {
    term: "Functional Neurological Disorder (FND)",
    plainEnglish:
      "A condition where nervous system functioning is disrupted, causing real symptoms without structural damage that explains them.",
    clinicalDefinition:
      "A disorder of brain network function characterized by motor, sensory, or seizure-like symptoms incongruent with recognized structural neurological disease.",
  },
  {
    term: "Gray-Rock Response",
    plainEnglish:
      "A coping style where someone becomes emotionally flat, minimal, and unresponsive to reduce conflict or threat.",
    clinicalDefinition:
      "A low-reactivity interpersonal strategy that may be adaptive in hostile environments but can become maladaptive when rigidly generalized.",
  },
  {
    term: "Affective Flattening",
    plainEnglish:
      "Reduced outward emotional expression, such as less facial movement, voice tone, or emotional range.",
    clinicalDefinition:
      "A negative-symptom dimension marked by diminished emotional expressivity across facial, vocal, and gestural channels.",
  },
  {
    term: "Salience Network",
    plainEnglish:
      "The brain system that decides what is important or threatening right now.",
    clinicalDefinition:
      "A large-scale network centered on the anterior insula and ACC that detects behaviorally relevant stimuli and coordinates attentional switching.",
  },
  {
    term: "Default Mode Network (DMN)",
    plainEnglish:
      "The brain network active during self-reflection, memory, and internal thought.",
    clinicalDefinition:
      "A distributed network including medial prefrontal and posterior cingulate regions involved in self-referential processing and autobiographical memory.",
  },
  {
    term: "HPA Axis",
    plainEnglish:
      "The hormone stress system linking the brain and adrenal glands.",
    clinicalDefinition:
      "The hypothalamic-pituitary-adrenal endocrine axis regulating cortisol release and stress adaptation.",
  },
  {
    term: "Allostatic Load",
    plainEnglish:
      "The wear-and-tear on the body and brain from chronic stress.",
    clinicalDefinition:
      "The cumulative physiological burden from repeated or prolonged activation of stress-response systems.",
  },
];
