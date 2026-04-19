// ── Bipolar Disorder — Deep Research Content ─────────────────────────────────
// Covers territory NOT in learnContent.ts: neuroimaging, circadian biology,
// lithium mechanism, extended genetics, creativity link, suicidality.

export interface BipolarSection {
  id: string
  title: string
  subtitle: string
}

// ── Neuroimaging ──────────────────────────────────────────────────────────────

export const NEUROIMAGING = [
  {
    region: 'Amygdala',
    finding: 'Bilateral amygdala hyperactivation during both manic and depressive phases. Volume enlargement in some studies, reduction in others — likely state-dependent.',
    mechanism: 'Impaired top-down PFC regulation of amygdala results in emotional dysregulation. During mania: threat and reward stimuli both over-activate amygdala. During depression: negative stimuli produce exaggerated amygdala response with blunted positive signal.',
    citation: 'Altshuler et al. (2010) — Amygdala hyperactivation in bipolar disorder, Biological Psychiatry',
    color: '#8A0303',
  },
  {
    region: 'Prefrontal Cortex (PFC)',
    finding: 'Hypofrontality — reduced gray matter volume and metabolic activity in ventrolateral and orbitofrontal PFC. More pronounced in Bipolar I than II.',
    mechanism: 'Reduced PFC volume impairs the inhibitory control of limbic structures. The PFC-amygdala circuit that normally suppresses emotional reactivity is structurally weakened. This creates the classic bipolar pattern: emotion drives behavior rather than behavior being guided by prefrontal evaluation.',
    citation: 'Strakowski et al. (2012) — Frontolimbic neural systems in bipolar disorder, Bipolar Disorders',
    color: '#2a9d9d',
  },
  {
    region: 'Hippocampus',
    finding: 'Volume reduction proportional to illness duration and number of depressive episodes. Manic episodes show less hippocampal impact than depressive ones.',
    mechanism: 'Chronic cortisol elevation during depressive phases suppresses hippocampal neurogenesis via BDNF downregulation. Each untreated depressive episode accelerates volume loss. Lithium treatment partially reverses this — lithium is the only mood stabilizer with documented neuroprotective effects on hippocampal volume.',
    citation: 'Nery et al. (2009) — Hippocampal volumes in bipolar disorder, Bipolar Disorders',
    color: '#d4a017',
  },
  {
    region: 'White Matter / Corpus Callosum',
    finding: 'Diffusion Tensor Imaging (DTI) consistently shows white matter microstructural abnormalities — reduced fractional anisotropy — in frontolimbic tracts.',
    mechanism: 'Impaired interhemispheric communication and disrupted corticolimbic connectivity. The uncinate fasciculus (connecting orbitofrontal cortex to amygdala/hippocampus) shows the most consistent abnormality. This tract is critical for emotional memory and impulse regulation.',
    citation: 'Benedetti et al. (2011) — White matter microstructure in bipolar disorder, Neuropsychopharmacology',
    color: '#7c3aed',
  },
  {
    region: 'Default Mode Network (DMN)',
    finding: 'Hyperconnectivity of the DMN during rest, especially in depression. Failure to deactivate DMN during cognitive tasks contributes to rumination.',
    mechanism: 'Inability to suppress self-referential thought during task performance is the neurological substrate of depressive rumination. In mania, the DMN shows a different dysregulation — hyper-activation contributing to grandiosity and self-referential ideation (the manic inflated self-concept has a DMN signature).',
    citation: 'Anticevic et al. (2013) — DMN disruption in bipolar disorder, Biological Psychiatry',
    color: '#5a0202',
  },
]

// ── Circadian Biology ─────────────────────────────────────────────────────────

export const CIRCADIAN_GENES = [
  { gene: 'CLOCK',   function: 'Master circadian transcription factor', bipolarLink: 'CLOCK gene polymorphism (3111T/C) associated with manic episodes, reduced sleep need, and elevated mood. CLOCK knockout mice display hyperactivity, reduced anxiety, and increased reward-seeking — a rodent mania model.', evidence: 'Benedetti et al. (2003) — CLOCK gene T3111C and manic phase duration' },
  { gene: 'PER3',    function: 'Period circadian regulator 3 — paces 24-hour cycle', bipolarLink: 'PER3 variable-number tandem repeat (VNTR) polymorphism affects sleep architecture and chronotype. Bipolar patients show disrupted PER3 expression. Sleep deprivation can trigger manic episodes via acute PER3 dysregulation.', evidence: 'Nievergelt et al. (2006) — Circadian clock genes and bipolar disorder, Genes Brain Behavior' },
  { gene: 'TIMELESS', function: 'Circadian clock component; interacts with PER proteins', bipolarLink: 'TIMELESS variants associated with rapid cycling in Bipolar I. The rapid-cycling phenotype may represent an extreme circadian instability — the mood episodes are entrained to dysfunctional ultradian rhythms rather than the 24-hour light cycle.', evidence: 'Mansour et al. (2006) — TIMELESS and rapid cycling' },
  { gene: 'ARNTL (BMAL1)', function: 'Core clock gene; partner of CLOCK in the primary feedback loop', bipolarLink: 'ARNTL variants influence sleep duration and quality. Disruption of BMAL1 expression produces depressive-like behavior in animal models. Lithium stabilizes circadian rhythms partly by inhibiting GSK-3β, which phosphorylates BMAL1 and regulates its degradation.', evidence: 'Johansson et al. (2003) — ARNTL and bipolar disorder' },
]

export const CIRCADIAN_TEXT = {
  overview: 'Bipolar disorder is, at its core, a disorder of biological rhythm. The cycling between mania and depression is not random — it reflects dysregulation of the circadian system, the endogenous 24-hour biological clock that governs sleep, hormone release, body temperature, and neurotransmitter synthesis. Every neurotransmitter implicated in bipolar disorder — dopamine, serotonin, GABA, norepinephrine — has synthesis and release rates that are circadian-regulated.',
  lithiumMechanism: 'Lithium stabilizes circadian rhythms by inhibiting GSK-3β (glycogen synthase kinase-3 beta), a key kinase in the molecular clock. GSK-3β phosphorylates clock proteins (PER2, BMAL1) to regulate their degradation. Lithium slows this degradation, extending the circadian period. This circadian stabilization — not mood elevation — may be lithium\'s primary therapeutic mechanism. It explains why lithium is effective for both mania and depression: it stabilizes the oscillation rather than pushing it in one direction.',
  sleepDeprivation: 'Sleep deprivation is the most reliable manic trigger. 40-70% of manic episodes are preceded by significant sleep loss. Conversely, controlled sleep deprivation is an experimental antidepressant — a paradox that only makes sense if you understand that bipolar depression is not simply "low mood" but a specific phase of a biological oscillation. Disrupting the oscillation with sleep deprivation can shift the phase from depression to euthymia or mania.',
}

// ── Lithium Mechanism ─────────────────────────────────────────────────────────

export const LITHIUM_MECHANISMS = [
  {
    target: 'GSK-3β Inhibition',
    mechanism: 'Lithium directly inhibits glycogen synthase kinase-3 beta. GSK-3β is hyperactive in bipolar disorder, phosphorylating and destabilizing multiple proteins including clock proteins, β-catenin (Wnt signaling), and neurotrophic factors. GSK-3β inhibition is now considered lithium\'s primary mechanism of action.',
    consequence: 'Neuroprotection, circadian stabilization, reduced neuroinflammation, enhanced synaptic plasticity. GSK-3β is a convergence point for multiple bipolar pathways.',
  },
  {
    target: 'Inositol Depletion',
    mechanism: 'Lithium inhibits inositol monophosphatase (IMPase), depleting free inositol. This reduces phosphatidylinositol signaling (PI pathway) which is overactive in mania. The "inositol depletion hypothesis" (Berridge, 1989) was the first molecular explanation for lithium\'s mood-stabilizing effects.',
    consequence: 'Dampens hyperactive PI signaling in mania. May also explain teratogenic effects (inositol is required for fetal neural development).',
  },
  {
    target: 'BDNF Upregulation',
    mechanism: 'Lithium increases BDNF expression via ERK pathway activation and inhibition of BDNF-suppressing mechanisms. This is directly neuroprotective — reversing the hippocampal atrophy produced by depressive episodes.',
    consequence: 'Documented hippocampal volume preservation and partial restoration in lithium-treated patients. The only mood stabilizer with this effect.',
  },
  {
    target: 'Mitochondrial Function',
    mechanism: 'Emerging evidence that lithium stabilizes mitochondrial membrane potential and reduces mitochondrial-mediated apoptosis. Bipolar disorder shows mitochondrial dysfunction — increased oxidative stress markers, reduced Complex I activity.',
    consequence: 'Neuroprotection via anti-apoptotic signaling. May explain lithium\'s anti-suicidal properties which exceed its mood-stabilizing properties.',
  },
]

// ── Creativity & Bipolar ──────────────────────────────────────────────────────

export const CREATIVITY_DATA = {
  overview: 'The association between bipolar disorder and exceptional creative achievement is one of the most replicated findings in the psychology of creativity. The mechanism is not merely that hypomania feels productive — it is that the neurological profile of bipolar disorder shares features with divergent thinking, a core component of creative cognition.',
  studies: [
    { finding: 'Writers are 8x more likely to have bipolar disorder than the general population', citation: 'Andreasen (1987) — Iowa Writers\' Workshop study, American Journal of Psychiatry' },
    { finding: 'First-degree relatives of people with bipolar disorder show elevated creativity even without the disorder itself — suggesting shared genetic architecture', citation: 'Kyaga et al. (2013) — Creativity and psychiatric disease, Journal of Psychiatric Research' },
    { finding: 'Hypomania specifically (not full mania) enhances creative output: increased fluency of associations, reduced cognitive inhibition, elevated motivation, longer working hours', citation: 'Jamison (1993) — Touched with Fire: Manic-Depressive Illness and the Artistic Temperament' },
    { finding: 'The DARPP-32 gene (PPP1R1B) variant associated with bipolar disorder also enhances prefrontal dopamine function and working memory in healthy carriers — the same variant is associated with better cognitive flexibility', citation: 'Meyer-Lindenberg et al. (2007) — DARPP-32 and cognitive function, Nature Neuroscience' },
  ],
  notableIndividuals: [
    'Vincent van Gogh — Bipolar I with psychotic features (retrospective diagnosis)',
    'Virginia Woolf — Bipolar I; died by suicide 1941',
    'Ernest Hemingway — Bipolar II; died by suicide 1961',
    'Sylvia Plath — Bipolar depression; died by suicide 1963',
    'Robert Lowell — Bipolar I; multiple hospitalizations, continued writing through episodes',
    'Kay Redfield Jamison — Bipolar I; became the leading researcher of the bipolar-creativity link',
    'Friedrich Nietzsche — Probable Bipolar I with psychotic features; collapsed 1889',
    'Ludwig van Beethoven — Probable Bipolar I; cyclical productivity aligned with mood states',
  ],
  caveat: 'The creativity-bipolar link does not romanticize the disorder. The same individuals who produced exceptional work also suffered enormously — and the suicide rate in this group is dramatically elevated. The correlation is real; the implication that suffering is necessary for genius is false and harmful.',
}

// ── Suicidality in Bipolar ────────────────────────────────────────────────────

export const BIPOLAR_SUICIDALITY = {
  statistics: [
    { stat: '25–50%', desc: 'of people with bipolar disorder attempt suicide at least once' },
    { stat: '15–20x', desc: 'higher completed suicide rate vs. general population' },
    { stat: '60%', desc: 'of bipolar suicides occur during depressive or mixed episodes (not mania)' },
    { stat: 'Mixed states', desc: 'carry the highest per-episode suicide risk — dysphoric energy without inhibition' },
  ],
  mechanisms: [
    {
      name: 'Mixed State Lethality',
      body: 'Mixed episodes combine depressive hopelessness with manic energy and reduced impulse inhibition. The depressive phase alone rarely produces suicide — the person lacks the energy and motivation. The manic phase produces energy but also inflated self-concept that temporarily buffers hopelessness. The mixed state is lethal because it combines both: the cognitive content of depression (hopelessness, worthlessness) with the energy and impulsivity of mania. The PFC inhibitory system is overwhelmed.',
    },
    {
      name: 'Kindling and Suicidality',
      body: 'Each untreated mood episode structurally lowers the threshold for the next. Beyond mood episodes, repeated suicidal crises themselves show a kindling-like pattern: the neurological cost of surviving a suicidal crisis includes changes in HPA axis reactivity, serotonin transporter expression, and prefrontal-limbic connectivity that increase vulnerability to the next crisis. Untreated bipolar disorder has a progressive course in part because suicidality itself is neurologically sensitizing.',
    },
    {
      name: 'Lithium\'s Anti-Suicidal Effect',
      body: 'Lithium is the only psychotropic medication with a demonstrated specific anti-suicidal effect independent of its mood-stabilizing properties. Meta-analyses show lithium reduces suicide attempts by 60-80% compared to other mood stabilizers. The mechanism may involve serotonin system stabilization (lithium increases 5-HT synthesis), impulsivity reduction, or direct neurotrophic effects that preserve frontal lobe volume. Cipriani et al. (2013) Lancet meta-analysis is definitive.',
    },
  ],
  joinersTheory: {
    name: 'Interpersonal Theory of Suicide (Joiner, 2005)',
    components: [
      { name: 'Thwarted Belongingness', desc: 'The belief that one is not connected to others — that there is no place where one belongs. In bipolar disorder: social disruption from episodes, loss of relationships during mania, isolation during depression.' },
      { name: 'Perceived Burdensomeness', desc: 'The belief that one is a burden to others whose deaths would be a relief to them. In bipolar disorder: economic costs of treatment, damage to relationships during episodes, guilt during depressive phases.' },
      { name: 'Acquired Capability', desc: 'The ability to enact lethal self-harm — acquired through habituation to pain and fear of death through prior self-harm or other violent exposure. This is what separates ideation from attempt. Bipolar patients with prior attempts have acquired this capability.' },
    ],
  },
}

// ── Extended Gene Profile ─────────────────────────────────────────────────────

export const BIPOLAR_GENES_EXTENDED = [
  { gene: 'CACNA1C', description: 'Calcium channel gene. The strongest single-gene association in genome-wide studies. Encodes the α1C subunit of the L-type voltage-gated calcium channel. Regulates calcium signaling in neurons critical for dopamine release and synaptic plasticity.', relevance: 'rs1006737 risk variant increases calcium influx, hyperactivating dopamine neurons. Lithium and valproate both modulate calcium channel function.' },
  { gene: 'ANK3', description: 'Ankyrin-G — scaffolding protein at the axon initial segment. Critical for action potential generation and GABAergic synapse clustering.', relevance: 'Risk variants disrupt action potential threshold, potentially explaining the episodic nature of bipolar disorder — episodes may reflect sudden threshold shifts in neural excitability.' },
  { gene: 'DGKH', description: 'Diacylglycerol kinase eta — key enzyme in the lithium-sensitive phosphatidylinositol signaling pathway.', relevance: 'Discovered in the first large bipolar GWAS (Baum et al., 2008). Links directly to lithium\'s inositol depletion mechanism — DGKH variants may modulate the degree of PI pathway dysregulation.' },
  { gene: 'RIMS1', description: 'Regulating synaptic membrane exocytosis 1 — controls neurotransmitter vesicle release at presynaptic terminals.', relevance: 'Rare variants in RIMS1 are among the strongest single-gene risk factors found via exome sequencing. Suggests impaired neurotransmitter release kinetics as a specific mechanism.' },
  { gene: 'ODZ4 (TENM4)', description: 'Teneurin transmembrane protein 4 — involved in axonal guidance and synapse formation during development.', relevance: 'GWAS-identified risk locus. Suggests a neurodevelopmental component to bipolar susceptibility — the circuitry that will later express bipolar disorder may be laid down incorrectly during brain development.' },
]

// ── Bibliography ──────────────────────────────────────────────────────────────

export const BIPOLAR_REFS = [
  'Altshuler, L.L. et al. (2010). Amygdala hyperactivation in Bipolar I vs. II. Biological Psychiatry 67(5).',
  'Anticevic, A. et al. (2013). Default mode network disruption in bipolar disorder. Biological Psychiatry.',
  'Benedetti, F. et al. (2003). CLOCK gene T3111C polymorphism and manic episode duration. American Journal of Psychiatry.',
  'Berridge, M.J. (1989). The Albert Lasker Medical Award: Inositol trisphosphate, calcium, lithium, and cell signaling. JAMA.',
  'Cipriani, A. et al. (2013). Lithium in the prevention of suicide in mood disorders. Lancet 381(9869).',
  'Jamison, K.R. (1993). Touched with Fire. Free Press.',
  'Joiner, T.E. (2005). Why People Die by Suicide. Harvard University Press.',
  'Kyaga, S. et al. (2013). Mental illness, suicide and creativity. Journal of Psychiatric Research 47(1).',
  'Strakowski, S.M. et al. (2012). Frontolimbic neural circuitry in bipolar disorder. Bipolar Disorders 14(2).',
  'Nery, F.G. et al. (2009). Hippocampal volumes in bipolar disorder. Bipolar Disorders 11(3).',
]
