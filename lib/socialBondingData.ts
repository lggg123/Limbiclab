// ── Social Bonding Circuits — Deep Research Content ───────────────────────────

export const BONDING_THESIS = {
  core: `Social bonding is not an emotion — it is a neurobiological program executed by a conserved mammalian circuit. The two principal molecular mediators are oxytocin and vasopressin, acting on brain regions including the nucleus accumbens, ventral tegmental area, amygdala, and prefrontal cortex to produce selective attachment, affiliative motivation, and reduced social anxiety. This circuit did not evolve for love — it evolved because social group membership was the primary survival strategy of our ancestors. Modern humans inherit this ancient machinery and run it through the complexity of language, culture, and extended consciousness.`,
  prairiVoleDiscovery: `The prairie vole (Microtus ochrogaster) is one of the rare mammalian species (~5%) that forms long-term pair bonds. Insel & Young (2001) demonstrated that the difference between monogamous prairie voles and promiscuous meadow voles lies not in oxytocin and vasopressin production but in the distribution of oxytocin receptors (OXTR) and vasopressin 1a receptors (AVPR1a) in the nucleus accumbens and ventral pallidum. Prairie voles have dense receptor fields in reward circuits; meadow voles do not. Mating in prairie voles triggers dopamine release in the nucleus accumbens simultaneously with oxytocin — this co-activation forges a conditioned bond between the partner and reward. This mechanism is conserved in humans.`,
  humanEvidence: `Human neuroimaging confirms the vole model. Bartels & Zeki (2000, 2004) demonstrated that viewing a romantic partner activates the VTA, caudate nucleus, and nucleus accumbens — the core reward circuit — in a pattern distinct from viewing close friends or attractive strangers. Simultaneously, viewing a romantic partner deactivates the lateral PFC (critical evaluation) and the amygdala (threat detection) — the neural signature of "trust." This combination — elevated reward + reduced vigilance — is the neurobiological definition of attachment.`,
}

export const OXYTOCIN_VASOPRESSIN = {
  oxytocinSystem: {
    source: 'Paraventricular nucleus (PVN) and supraoptic nucleus (SON) of the hypothalamus',
    release: 'Released during safe physical contact, breastfeeding, orgasm, birth, eye contact with infants, positive social interactions',
    centralEffects: [
      'Reduces amygdala fear response — lowers the perceived threat of social situations',
      'Enhances nucleus accumbens reward signaling — makes social contact intrinsically rewarding',
      'Increases trust and approach behavior toward in-group members',
      'Promotes social memory encoding (recognizing and remembering social partners)',
      'Reduces cortisol stress response during social stressors',
    ],
    paradox: 'Oxytocin is pro-social within a perceived in-group and simultaneously increases defensiveness and out-group hostility. It does not promote universal love — it promotes selective bonding and in-group/out-group discrimination. This explains how the same system that generates maternal love also underlies tribal exclusion.',
    receptorDistribution: 'OXTR is densely expressed in nucleus accumbens, amygdala, hippocampus, and anterior cingulate cortex. Variation in OXTR gene (rs53576 polymorphism) predicts differences in empathy, parental sensitivity, loneliness, and social bonding quality.',
  },
  vasopressinSystem: {
    source: 'PVN and lateral hypothalamus; also synthesized locally in amygdala and bed nucleus of the stria terminalis (BNST)',
    release: 'Released during social novelty, threat detection, competitive encounters, and sexual behavior — particularly in males',
    centralEffects: [
      'Promotes territorial behavior and mate-guarding',
      'Enhances social recognition memory',
      'Modulates anxiety in a context-dependent manner (pro-social in safe contexts; defensive in threatening contexts)',
      'Drives partner-preference formation and paternal care in pair-bonding species',
      'Interacts with testosterone to regulate dominance behavior',
    ],
    sexDifference: 'Vasopressin effects are strongly sexually dimorphic. In males, vasopressin promotes pair-bonding and mate-guarding via the ventral pallidum. In females, oxytocin is the dominant bonding mediator, while vasopressin modulates social stress responses. This difference is driven by gonadal hormone priming of the AVPR1a receptor field during development.',
    avpr1a: 'The length of the microsatellite repeat region upstream of the AVPR1a gene predicts pair-bonding propensity in voles and social bonding quality in humans. Men with the RS3 334 allele of AVPR1a show lower partner bonding scores, higher marital dissatisfaction, and higher rates of relationship dissolution — a direct behavioral consequence of receptor field variation.',
  },
}

export const REWARD_CIRCUITS = [
  {
    region: 'Ventral Tegmental Area (VTA)',
    color: '#2a9d9d',
    role: 'Dopamine Origination',
    bondingFunction: `The VTA contains the dopamine neurons that project to the nucleus accumbens (mesolimbic pathway) and prefrontal cortex (mesocortical pathway). Social bonding triggers phasic VTA dopamine bursts — the same activity pattern produced by food rewards, cocaine, and gambling wins. In pair-bonding species, the partner becomes neurologically encoded as a primary reward stimulus, triggering VTA activation on sight, smell, or contact. The intensity of early romantic love correlates with the density of VTA-to-accumbens connectivity measured by diffusion tensor imaging.`,
    citation: 'Aron et al. (2005); Fisher et al. (2006)',
  },
  {
    region: 'Nucleus Accumbens (NAc)',
    color: '#d4a017',
    role: 'Reward Encoding & Partner Preference',
    bondingFunction: `The NAc is where social bonds are formed at the circuit level. During mating in prairie voles, NAc dopamine D2 receptor activation in combination with oxytocin OXTR activation is necessary and sufficient for partner-preference formation. Block either receptor and the bond fails to form even after mating. In humans, NAc activation to a romantic partner's photograph predicts relationship longevity better than self-reported love does. The NAc also encodes the "wanting" drive toward the bonded partner — the motivation that sustains long-term relationships after novelty fades.`,
    citation: 'Young et al. (2001); Aron et al. (2005)',
  },
  {
    region: 'Ventral Pallidum',
    color: '#7c3aed',
    role: 'Bond Persistence & Mate-Guarding',
    bondingFunction: `The ventral pallidum (VP) is a critical output of the NAc and the primary site of AVPR1a expression in pair-bonding species. VP neurons are the "commitment circuit" — they sustain partner preference after novelty has passed. In prairie voles, VP lesions abolish established pair bonds. In humans, the VP is active during long-term attachment representations and deactivated during infatuation-phase love — consistent with its role in the stable maintenance phase rather than the novelty phase of bonding.`,
    citation: 'Insel & Young (2001); Lim & Young (2004)',
  },
  {
    region: 'Anterior Cingulate Cortex (ACC)',
    color: '#8A0303',
    role: 'Social Pain & Bond Salience',
    bondingFunction: `The ACC tracks the value of social bonds by processing the pain of their absence. Every separation from a bonded partner activates the ACC — generating a mild aversive state that motivates reunion. In strongly bonded individuals, the ACC activates more intensely during imagined separation, reflecting higher bond value. The ACC also performs social prediction error processing — detecting when a bonded partner behaves unexpectedly — and updating the internal social model accordingly.`,
    citation: 'Eisenberger et al. (2003); Shackman et al. (2011)',
  },
  {
    region: 'Amygdala',
    color: '#5a7a3a',
    role: 'Threat Reduction & Social Safety',
    bondingFunction: `Paradoxically, the presence of a bonded attachment figure reduces amygdala reactivity to all threats — not just social threats. This is the "social buffering" effect, documented across vertebrate species. A rat with a cage companion shows less HPA activation to a predator odor. A human child shows lower cortisol to a painful medical procedure in a parent's presence. The bonded partner's presence literally changes how the amygdala evaluates the threat environment — making the world neurologically safer. This buffering is OXTR-mediated in the amygdala basolateral complex.`,
    citation: 'Hostinar et al. (2014); DeVries et al. (2003)',
  },
]

export const LONELINESS_NEUROSCIENCE = {
  definitionDistinction: `Loneliness is not identical to social isolation. It is the subjective experience of inadequate social connection — a discrepancy between desired and actual social contact quality. This distinction matters neurobiologically: isolated individuals who feel socially satisfied show different neural profiles than socially active individuals who feel lonely. Loneliness is primarily an appraisal state, not a deprivation state, and its neural signature reflects threat-mode social processing more than simple social absence.`,
  neuralSignature: `Cacioppo & Hawkley's foundational research identified a distinct neural signature of loneliness: hyperactivation of threat-detection circuitry in response to social stimuli. Lonely individuals show elevated amygdala reactivity to social threat cues, increased midbrain vigilance to negative social information, and reduced reward-circuit activation to social approach. The brain in chronic loneliness is not in "social hunger" mode — it is in "social threat" mode: hyper-vigilant, defensive, and interpreting social information through a threat-biased lens.`,
  biologicalConsequences: `Chronic loneliness produces measurable biological damage through multiple pathways: (1) HPA hyperactivation — elevated cortisol contributing to hippocampal atrophy and immune dysregulation. (2) Inflammatory upregulation — loneliness predicts elevated IL-6, TNF-α, and C-reactive protein, independent of health behaviors. (3) Sympathetic nervous system hyperactivation — elevated overnight cortisol and catecholamines, contributing to cardiovascular disease risk. (4) Accelerated cellular aging — lonely individuals show shorter telomere length and faster epigenetic aging clocks. The mortality risk associated with loneliness is equivalent to smoking 15 cigarettes per day (Holt-Lunstad et al., 2015).`,
  socialPainCircuit: `The overlap between social pain and physical pain is not metaphorical. DeWall et al. (2010) demonstrated that acetaminophen (Tylenol) reduces social pain in an fMRI paradigm — social exclusion-induced ACC activation was attenuated after two weeks of daily acetaminophen use. Conversely, physical pain thresholds are higher in the presence of a bonded partner — the social buffering effect extends to nociception. These findings confirm that social bonding and physical safety share core neural infrastructure.`,
  rehabilitation: `Loneliness is not fixed by social quantity — it requires interventions that alter social appraisal (threat-mode processing of social stimuli). Cognitive-behavioral interventions targeting maladaptive social cognitions show larger effect sizes than interventions that simply increase social contact. Social skills training, mindfulness-based approaches that reduce threat-mode amygdala reactivity, and oxytocin augmentation protocols are all under investigation. Animal models suggest that early social isolation produces near-permanent alterations in OXTR and AVPR1a expression — underscoring the urgency of early-life social bonding.`,
}

export const PAIR_BONDING_VS_PROMISCUITY = {
  geneticBasis: `The primary neurobiological difference between pair-bonding and promiscuous mating strategies is not motivational — it is receptor-field architecture. The same molecules (oxytocin, vasopressin, dopamine) are present in both strategies; what differs is where the receptors are densest. Dense OXTR and AVPR1a expression in the nucleus accumbens and ventral pallidum creates the conditions for partner-specific reward — the partner triggers reward; others do not. Absent this receptor architecture, sexual reward is non-specific and pair bonds do not form.`,
  humanVariation: `Humans are unusual — we show high individual variation in pair-bonding propensity, consistent with a population-level polymorphic mating strategy. AVPR1a repeat polymorphisms, OXTR rs53576 variation, and dopamine receptor (DRD4) gene variants all independently predict adult attachment style, sexual risk behavior, and pair-bonding quality. This genetic variation is not random drift — it likely represents an evolutionarily stable strategy polymorphism, with both high-bonding and low-bonding reproductive strategies coexisting under frequency-dependent selection.`,
  neuroplasticity: `The bonding circuit is experience-dependent. Early attachment relationships shape OXTR and AVPR1a expression. Repeated sexual behavior with the same partner progressively strengthens VTA-to-NAc connectivity for that partner-specific reward. Conversely, repeated sexual behavior with multiple partners may attenuate partner-specific reward encoding. The circuit shows both genetic predisposition and neuroplastic modification — meaning pair-bonding propensity is neither fully heritable nor fully learned.`,
}

export const BONDING_REFS = [
  { authors: 'Insel, T.R. & Young, L.J.', year: 2001, title: 'The neurobiology of attachment', journal: 'Nature Reviews Neuroscience, 2, 129–136' },
  { authors: 'Bartels, A. & Zeki, S.', year: 2000, title: 'The neural basis of romantic love', journal: 'NeuroReport, 11, 3829–3834' },
  { authors: 'Bartels, A. & Zeki, S.', year: 2004, title: 'The neural correlates of maternal and romantic love', journal: 'NeuroImage, 21, 1155–1166' },
  { authors: 'Aron, A., et al.', year: 2005, title: 'Reward, motivation, and emotion systems associated with early-stage intense romantic love', journal: 'Journal of Neurophysiology, 94, 327–337' },
  { authors: 'Young, L.J., et al.', year: 2001, title: 'Increased affiliative response to vasopressin in mice expressing the V1a receptor from a monogamous vole', journal: 'Nature, 400, 766–768' },
  { authors: 'Lim, M.M. & Young, L.J.', year: 2004, title: 'Vasopressin-dependent neural circuits underlying pair bond formation', journal: 'Neuroscience, 125, 35–45' },
  { authors: 'Cacioppo, J.T. & Hawkley, L.C.', year: 2009, title: 'Perceived social isolation and cognition', journal: 'Trends in Cognitive Sciences, 13, 447–454' },
  { authors: 'Holt-Lunstad, J., Smith, T.B., Baker, M., et al.', year: 2015, title: 'Loneliness and social isolation as risk factors for mortality', journal: 'Perspectives on Psychological Science, 10, 227–237' },
  { authors: 'DeWall, C.N., et al.', year: 2010, title: 'Acetaminophen reduces social pain: Behavioral and neural evidence', journal: 'Psychological Science, 21, 931–937' },
  { authors: 'Hostinar, C.E., Sullivan, R.M., & Gunnar, M.R.', year: 2014, title: 'Psychobiological mechanisms underlying the social buffering of the HPA axis', journal: 'Psychological Bulletin, 140, 256–282' },
  { authors: 'Fisher, H.E., Aron, A., & Brown, L.L.', year: 2006, title: 'Romantic love: A mammalian brain system for mate choice', journal: 'Philosophical Transactions of the Royal Society B, 361, 2173–2186' },
]
