// ── Schizophrenia — Deep Research Content ────────────────────────────────────
// Thesis: Schizophrenia onset is better explained by ethnic/religious persecution
// + GABA collapse than by genetic determinism alone. Genetics sets the floor;
// social stress, cultural persecution, and spiritual crisis pull the trigger.

// ── GWAS Risk Genes ───────────────────────────────────────────────────────────

export const GWAS_GENES = [
  {
    gene: 'ZNF804A',
    fullName: 'Zinc Finger Binding Protein 804A',
    color: '#2a9d9d',
    finding: 'One of the first genome-wide significant hits for schizophrenia. Associated with altered connectivity between prefrontal cortex and hippocampus.',
    mechanism: 'ZNF804A is a transcription factor regulating the expression of downstream genes involved in neurodevelopment and synaptic plasticity. Risk variants alter prefrontal-to-hippocampal functional connectivity — the exact circuit implicated in working memory deficits and reality-testing failures in schizophrenia.',
    ethnicNote: 'Effect sizes differ across European, East Asian, and African populations. The variant does not explain prevalence differences across ethnic groups — suggesting environment modifies risk substantially.',
    citation: 'Bergen et al. (2012) — Genome-wide association study of schizophrenia, Nature Genetics',
  },
  {
    gene: 'MHC (Chr. 6)',
    fullName: 'Major Histocompatibility Complex Region',
    color: '#8A0303',
    finding: 'The most replicated schizophrenia GWAS finding. Spans immunity, neurodevelopment, and synaptic plasticity genes — making a single causal gene difficult to isolate.',
    mechanism: 'MHC proteins perform "synaptic pruning" — they tag excess synaptic connections for elimination during adolescent brain development. Overactive MHC-driven pruning may strip too many synapses in the prefrontal cortex, producing the "cognitive poverty" of schizophrenia. Corriveau et al. (1998) showed MHC class I proteins regulate activity-dependent synapse elimination.',
    ethnicNote: 'MHC region shows extreme ethnic diversity — one of the most variable genomic regions across human populations. Stress-mediated immune activation (chronic persecution, displacement) upregulates MHC expression, potentially amplifying genetic predisposition in socially marginalized groups.',
    citation: 'Corriveau et al. (1998); Huh et al. (2000); Lee et al. (2012)',
  },
  {
    gene: 'NRGN',
    fullName: 'Neurogranin',
    color: '#d4a017',
    finding: 'Risk variant associated with reduced neurogranin expression in postmortem schizophrenia brains. Neurogranin is a postsynaptic calmodulin-binding protein in dendritic spines.',
    mechanism: 'Neurogranin regulates the availability of calmodulin — a calcium sensor critical to long-term potentiation (LTP). In the absence of calcium, neurogranin sequesters calmodulin, preventing synaptic plasticity. Reduced neurogranin means less regulated calmodulin availability, impairing LTP in hippocampal and cortical circuits — directly disrupting memory encoding and thought organization.',
    ethnicNote: 'NRGN expression is sensitive to cortisol. Chronic stress from racial discrimination or religious persecution elevates cortisol, suppressing NRGN transcription and compounding genetic risk.',
    citation: 'Lee et al. (2012) — Schizophrenia GWAS, Nature Genetics',
  },
  {
    gene: 'TCF4',
    fullName: 'Transcription Factor 4',
    color: '#7c3aed',
    finding: 'Basic helix-loop-helix transcription factor broadly expressed in the brain. Risk variants linked to schizophrenia and Pitt-Hopkins syndrome.',
    mechanism: 'TCF4 recognizes Ephrussi-box (E-box) binding sites (CANNTG) — motifs first identified in immunoglobulin enhancers. It plays a critical role in nervous system development, particularly in the formation of inhibitory interneuron circuits. Disruption of TCF4 targets during neurodevelopment can reduce PV-interneuron maturation — directly impairing the GABAergic inhibitory system. An intronic CTG repeat (10–37 units normally, >50 units in disease) can trigger Fuchs corneal dystrophy via a separate mechanism.',
    ethnicNote: 'TCF4 influences how inhibitory circuits form before birth. Environmental adversity during pregnancy (maternal stress from persecution, poverty, displacement) can epigenetically suppress TCF4 targets, meaning the ethnic environment shapes the genetic expression.',
    citation: 'Ripke et al. (2011); RefSeq Jul 2016',
  },
  {
    gene: 'MIR137',
    fullName: 'MicroRNA 137',
    color: '#5a7a3a',
    finding: 'MIR137 and its predicted target genes showed genome-wide significant association with schizophrenia (Ripke et al., 2011). A microRNA that regulates hundreds of downstream targets simultaneously.',
    mechanism: 'MIR137 post-transcriptionally silences genes involved in neuronal maturation, synaptic development, and dendritic morphology. Risk variants alter MIR137 expression level, triggering a cascade effect across its target network. Several MIR137 targets (CACNA1C, CSMD1, C10orf26, CNNM2, NT5C2) are themselves schizophrenia GWAS hits — meaning a single microRNA dysregulation can activate multiple risk pathways simultaneously.',
    ethnicNote: 'MicroRNAs are highly sensitive to environmental signals including cortisol, inflammation, and nutritional stress — all disproportionately elevated in persecuted ethnic and religious minorities.',
    citation: 'Ripke et al. (2011) — MIR137 in schizophrenia, Nature Genetics',
  },
]

// ── 22q11.2 Deletion ──────────────────────────────────────────────────────────

export const DELETION_22Q = {
  overview: 'A deletion of chromosome 22q11.2 produces a 25-fold increase in schizophrenia risk — the largest known single genetic risk factor for the disorder. Also known as DiGeorge syndrome (DGS) or velo-cardio-facial syndrome (VCFS).',
  features: [
    'Craniofacial and cardiovascular abnormalities',
    'Immunodeficiency and hypocalcemia',
    'Short stature',
    'Cognitive dysfunction and intellectual disability',
    '~30% develop psychosis by adulthood',
  ],
  mouseModels: 'The orthologous region of the human 22q11.2 locus is located on mouse chromosome 16 with a high degree of conservation. Two long-range deletion models — the Df(16)A-/- model (Stark, 2008) and the LgDel/- model (Merscher et al., 2001) — lack the entire 1.5 Mb region on one chromosome, closely modeling the human deletion. These mice display impaired working memory and prepulse inhibition (PPI) of the acoustic startle, mirroring human 22q11.2 phenotypes.',
  prodhGene: 'PRODH — a promising candidate gene in the deleted region — encodes a mitochondrial enzyme that metabolizes L-proline, a putative neuromodulator of glutamate (Glu) and GABA neurotransmission. PRODH knockout mice show hyperactivity and sensorimotor gating deficits, linking the deletion to the glutamate-GABA imbalance at the core of schizophrenia pathophysiology.',
  thesis: 'The 22q11.2 model is instructive precisely because it shows that even with a hard genetic lesion, the psychosis penetrance is only ~30%. The other 70% do not develop schizophrenia despite the same deletion — pointing to environmental, developmental, and social factors as decisive modulators of phenotypic expression.',
  citation: 'Karayiorgou et al. (2010); Drew et al. (2011); Stark (2008); Merscher et al. (2001)',
}

// ── GABA System ───────────────────────────────────────────────────────────────

export const GABA_SYSTEM = {
  overview: 'In the neurobiology of schizophrenia, the GABA (Gamma-Aminobutyric Acid) system is increasingly seen as the missing link that explains why the dopamine and glutamate systems go haywire. GABA is not just a calming chemical — it is the brain\'s timing system. If dopamine is the gas pedal and glutamate is the engine, GABA is the brakes. In schizophrenia, the brakes are failing.',
  interneurons: 'The primary deficit is not a simple lack of GABA, but a structural and functional failure of PV-interneurons (parvalbumin-expressing neurons) — the specialized fast-firing cells responsible for synchronizing brain activity. Consistent postmortem findings show reduced GAD67 (glutamic acid decarboxylase, the enzyme that synthesizes GABA) in the prefrontal cortex. Without sufficient GABAergic "hits," the brain\'s gamma oscillations (30–80 Hz) collapse — and gamma is required for working memory and organized thought.',
  gammaCollapse: 'GABA interneurons act as the brain\'s metronome. They drive gamma oscillations that bind distributed neural assemblies into coherent percepts and thoughts. Without this synchronization, sensory information arrives but cannot be organized into meaningful context — producing hallucinations (unfiltered raw signal) and disorganized thinking (signal without structure).',
}

export const GABA_GENES = [
  {
    gene: 'GABRB2',
    description: 'Encodes the β2 subunit of the GABA-A receptor. Specific mutations alter how the receptor opens and closes — making inhibitory signaling less effective. Strongly linked to schizophrenia across multiple populations.',
  },
  {
    gene: 'ERBB4 / NRG1',
    description: 'These genes govern how GABA interneurons develop and form connections. Mutations produce a brain literally wired with fewer inhibitory connections from birth — a structural rather than functional deficit.',
  },
  {
    gene: 'CNVs (Copy Number Variations)',
    description: 'Microdeletions in genomic regions encoding GABA-related proteins reduce the blueprint available for building inhibitory circuits. The brain is not wired badly — it simply has less material to work with.',
  },
  {
    gene: 'GAD67 (GAD1)',
    description: 'The enzyme that synthesizes GABA from glutamate. Consistently reduced in schizophrenia postmortem studies — particularly in the prefrontal cortex. GAD67 deficiency is one of the most replicated findings in schizophrenia neuropathology.',
  },
]

export const GABA_CIRCUIT_TABLE = [
  { component: 'GABA-A Receptors', normal: 'Rapidly inhibit "noise" signals', inSchizophrenia: 'Altered subunits (α2, β2) produce "leaky" inhibition — signals that should be filtered through' },
  { component: 'PV-Interneurons', normal: 'Synchronize brain waves via fast spiking', inSchizophrenia: 'Reduced in number and firing power — the metronome slows and stutters' },
  { component: 'Gamma Rhythms (30–80 Hz)', normal: 'Clear, organized perception and thought', inSchizophrenia: 'Chaotic, desynchronized — the substrate of hallucinations and disorganization' },
  { component: 'GAD67 Enzyme', normal: 'Synthesizes GABA from glutamate', inSchizophrenia: 'Markedly reduced in prefrontal cortex — less GABA produced at the site where it matters most' },
]

// ── Ethnic / Religious Persecution Thesis ────────────────────────────────────

export const PERSECUTION_THESIS = {
  coreArgument: 'Schizophrenia rates are not distributed uniformly across ethnic and religious populations — they cluster in groups experiencing social persecution, forced migration, identity suppression, and cultural marginalization. This distribution is not explained by genetics alone. It demands an environmental model where chronic social stress does not merely "trigger" latent genetic risk, but actively constructs the neurobiological substrate of psychosis.',
  stressGABALoop: 'Chronic social stress (persecution, surveillance, cultural invalidation, religious stigma) elevates cortisol and activates the HPA axis. Sustained cortisol elevation suppresses GAD67 transcription, reduces PV-interneuron density, and disrupts the GABAergic inhibitory system. A person may carry a GABRB2 variant and function normally until the cumulative load of ethnic persecution collapses the GABA circuit — at which point a psychotic break is not a genetic inevitability but a social injury expressed neurobiologically.',
  migrantData: 'First- and second-generation migrants — particularly those migrating from non-Western to Western countries — show 2–5x elevated schizophrenia rates compared to both their countries of origin and the majority population. Genetic admixture does not explain this gradient. The urbanization, discrimination, loss of cultural coherence, and "social defeat" hypothesis (Selten & Cantor-Graae, 2005) offers a more parsimonious explanation: chronic subordination and identity invalidation collapse the GABA circuit in predisposed individuals.',
  religiousDimension: 'Religious experience and psychotic experience share phenomenological territory — voices, visions, a sense of mission or persecution, altered selfhood. Many individuals diagnosed with schizophrenia report spiritual crises, religious preoccupation, or experiences dismissed as "delusions" that have direct cultural and theological parallels in their community of origin. The diagnostic category of "religious delusion" is applied disproportionately to patients whose religious framework is unfamiliar to the (typically Western, secular) clinician. The question of when a spiritual experience becomes a symptom is as much sociological as neurological.',
  socialDefeatHypothesis: 'The Social Defeat Hypothesis (Selten & Cantor-Graae, 2005) proposes that the experience of chronic social subordination — of being an outsider who cannot achieve status or belonging in the dominant social order — produces persistent mesolimbic dopamine sensitization. An abnormally sensitized dopamine system, when exposed to a stressor, floods subcortical circuits with salience signals that are not attached to actual environmental cues. The result is the core positive symptom of schizophrenia: aberrant salience, the experience that random stimuli carry personal meaning — the phenomenological core of paranoia and ideas of reference.',
  synthesisStatement: 'The genetic findings (ZNF804A, MHC, NRGN, TCF4, MIR137) do not describe a genetic destiny. They describe a set of neurobiological vulnerabilities — floor-level weaknesses in synaptic pruning, GABA synthesis, interneuron development, and prefrontal-hippocampal connectivity. Whether those vulnerabilities produce schizophrenia depends heavily on the social world the individual inhabits. Persecution, displacement, identity suppression, and spiritual crisis are not triggers that activate a pre-loaded disease — they are co-causes that build the disease alongside genetic predisposition.',
}

// ── Schizoaffective Disorder ──────────────────────────────────────────────────

export const SCHIZOAFFECTIVE = {
  definition: 'Schizoaffective disorder sits at the diagnostic intersection of schizophrenia and bipolar/depressive disorders. A patient must meet criteria for a schizophrenic episode AND a major mood episode (manic, depressive, or mixed) simultaneously or in close temporal proximity — with psychotic symptoms persisting for at least two weeks in the absence of prominent mood symptoms.',
  subtypes: [
    {
      name: 'Bipolar Type',
      description: 'Includes manic or mixed episodes alongside psychotic features. Often presents with grandiosity that is difficult to distinguish from mood-congruent psychosis. Grandiose religious or messianic content is especially common. Better prognosis than schizophrenia proper.',
      color: '#d4a017',
    },
    {
      name: 'Depressive Type',
      description: 'Psychotic features occur exclusively during depressive episodes, or persist after mood resolution. Negative symptoms (flat affect, avolition, alogia) overlap heavily with depressive symptoms, making differential diagnosis difficult. Worse functional prognosis than bipolar type.',
      color: '#8A0303',
    },
  ],
  diagnosticChallenge: 'The core diagnostic challenge is temporal — the clinician must establish that psychosis persists independently of mood episodes. In practice, this requires longitudinal observation across multiple episodes. Cross-sectional diagnosis (a single hospitalization) frequently produces diagnostic errors. Many patients cycle through schizophrenia, schizoaffective, and bipolar diagnoses across multiple providers.',
  neurobiology: 'Schizoaffective disorder likely represents a neurobiological overlap zone rather than a discrete disease entity. Neuroimaging shows white matter abnormalities intermediate between schizophrenia and bipolar disorder. The genetic architecture partially overlaps with both conditions — particularly CACNA1C (bipolar) and ZNF804A (schizophrenia). The GABA deficit seen in schizophrenia is also present in schizoaffective disorder, but the circadian rhythm disruption characteristic of bipolar is co-expressed.',
  ethnicReligiousDimension: 'The bipolar subtype of schizoaffective disorder is disproportionately diagnosed in individuals presenting with religiously-themed grandiosity or persecution. A patient who believes they have a divine mission while also experiencing paranoid surveillance often receives this diagnosis. The question worth asking: is the divine mission a symptom, or is the persecution real and the mission a culturally coherent response to it? In communities with robust prophetic traditions — Pentecostal, charismatic, African independent church, or indigenous spiritual frameworks — the phenomenological content of "grandiose delusions" and genuine spiritual leadership overlaps considerably. The diagnosis becomes a power judgment about whose cosmology is authorized.',
  treatmentLandscape: 'Treatment typically combines antipsychotic medication (for psychotic features) with mood stabilizers or antidepressants (for mood features). Lithium and valproate are used for bipolar type; SSRIs cautiously in depressive type (risk of precipitating mania or activating psychosis). Long-term prognosis is intermediate — worse than bipolar disorder alone, better than schizophrenia alone. Psychosocial interventions addressing identity, community belonging, and cultural support are underutilized but critical, particularly given the ethnic and religious dimensions of the condition.',
  openQuestions: [
    'Is schizoaffective disorder a distinct entity, or the overlap tail of schizophrenia and bipolar distributions?',
    'Does the GABA deficit differ quantitatively or qualitatively between bipolar-type and depressive-type schizoaffective disorder?',
    'How much of the "religious delusion" content in schizoaffective presentations reflects genuine spiritual experience pathologized by a secular diagnostic system?',
    'Could targeted GABAergic treatments (GABA-A positive allosteric modulators) address the psychotic features more precisely than broad-spectrum dopamine blockade?',
    'What role does chronic social defeat play in converting a mood disorder trajectory into a schizoaffective one?',
  ],
}

// ── References ────────────────────────────────────────────────────────────────

export const SCHIZ_REFS = [
  { authors: 'Bergen et al.', year: 2012, title: 'Genome-wide association study of schizophrenia', journal: 'Nature Genetics' },
  { authors: 'Lee et al.', year: 2012, title: 'Schizophrenia GWAS risk loci', journal: 'Nature Genetics' },
  { authors: 'Ripke et al.', year: 2011, title: 'Genome-wide association study implicates MIR137 in schizophrenia', journal: 'Nature Genetics' },
  { authors: 'Corriveau et al.', year: 1998, title: 'Regulation of class I MHC gene expression in the developing and mature CNS', journal: 'Neuron' },
  { authors: 'Huh et al.', year: 2000, title: 'Functional requirement for class I MHC in CNS development and plasticity', journal: 'Science' },
  { authors: 'Karayiorgou et al.', year: 2010, title: '22q11.2 microdeletions: linking DNA structural variation to brain dysfunction and schizophrenia', journal: 'Nature Reviews Neuroscience' },
  { authors: 'Stark et al.', year: 2008, title: 'Altered brain microRNA biogenesis contributes to phenotypic deficits in a 22q11-deletion mouse model', journal: 'Nature Genetics' },
  { authors: 'Merscher et al.', year: 2001, title: 'TBX1 is responsible for cardiovascular defects in velo-cardio-facial/DiGeorge syndrome', journal: 'Cell' },
  { authors: 'Li et al.', year: 2008, title: 'PRODH2 is a hydroxyproline dehydrogenase', journal: 'Biochemistry' },
  { authors: 'Selten & Cantor-Graae', year: 2005, title: 'Social defeat: risk factor for schizophrenia', journal: 'British Journal of Psychiatry' },
  { authors: 'Hurst', year: 2009, title: 'MHC and mate choice in mice', journal: 'Advances in the Study of Behavior' },
]
