// ── Satanism Research Content ─────────────────────────────────────────────────

export interface TaxonomyEntry {
  id: string
  label: string
  founded: string
  keyFigures: string[]
  corePhilosophy: string
  psychProfile: string
  worldview: string
  tags: string[]
}

export interface RitualNeurosciencePanel {
  region: string
  role: string
  darkRitualEffect: string
  positiveRitualEffect: string
  neurotransmitter: string
}

export interface ReceptorEntry {
  system: string
  receptors: string
  baselineRole: string
  satanismMechanism: string
  chronicsEffects: string
  severity: 'high' | 'moderate' | 'low'
}

export interface DisorderEntry {
  id: string
  name: string
  correlation: string
  mechanism: string
  evidence: string
  evidenceLevel: 'strong' | 'moderate' | 'limited' | 'contested'
  citations: string[]
}

export interface GeneEntry {
  gene: string
  fullName: string
  mechanism: string
  satanismLink: string
  consequence: string
}

export interface RecoveryEntry {
  phase: string
  timeframe: string
  target: string
  intervention: string
  neurological: string
}

export interface SatanismReference {
  id: string
  citation: string
  relevance: string
}

// ── Section 1: Taxonomy ───────────────────────────────────────────────────────

export const TAXONOMY: TaxonomyEntry[] = [
  {
    id: 'theistic',
    label: 'Theistic / Ritual Satanism',
    founded: 'Pre-modern; formalized in various orders 19th–20th c.',
    keyFigures: ['Aleister Crowley (Thelema)', 'Howard Stanton Levey', 'Order of Nine Angles (O9A)'],
    corePhilosophy:
      'Literal belief in Satan as a real supernatural entity worthy of worship or alliance. Ritual practice is used to invoke demonic forces, gain power, or engage in transgressive spiritual experiences. Includes blood rituals, invocation of demonic hierarchies, and deliberate psychological deconditioning through fear and transgression.',
    psychProfile:
      'Adherents often present with high scores on sensation-seeking scales, power motivation, and anti-social ideation. Clinical literature documents elevated rates of trauma histories and dissociative tendencies. The appeal is frequently power-compensatory — individuals with perceived powerlessness are attracted to frameworks offering supernatural control.',
    worldview:
      'Dualistic inversion of Christian cosmology. Satan represents power, freedom from divine law, and material dominion. The universe is an arena of spiritual warfare where allegiance to dark forces confers advantage.',
    tags: ['Supernatural', 'Ritual', 'Dark Occult', 'Power-seeking'],
  },
  {
    id: 'laveyan',
    label: 'LaVeyan / Atheistic Satanism',
    founded: '1966 — Church of Satan, San Francisco',
    keyFigures: ['Anton Szandor LaVey', 'Peter H. Gilmore', 'Blanche Barton'],
    corePhilosophy:
      'Founded on The Satanic Bible (1969), LaVeyan Satanism is atheistic and materialist. "Satan" is a symbol of carnality, rational self-interest, and rejection of herd mentality. Humans are "their own gods." Rituals are psychodrama — deliberate emotional catharsis with no supernatural intent. Social Darwinism, Nietzschean individualism, and Epicurean hedonism are core tenets.',
    psychProfile:
      'Adherents score high on Openness to Experience (Big Five), Machiavellianism, and self-reported autonomy needs. Research by Laythe et al. (2011) found LaVeyan Satanists show elevated narcissistic personality features alongside above-average intelligence and critical-thinking disposition. Anti-authoritarian and counter-cultural identity is central.',
    worldview:
      'Strictly materialist. No afterlife, no guilt, no universal moral code. Strength, success, and carnal pleasure are virtues. Weakness, pity for the weak, and self-denial are vices. "Do unto others as they do unto you" — reciprocal retaliation replaces the Golden Rule.',
    tags: ['Atheistic', 'Individualist', 'Materialist', 'Psychodrama'],
  },
  {
    id: 'tst',
    label: 'The Satanic Temple (TST)',
    founded: '2012–2013',
    keyFigures: ['Lucien Greaves (Doug Mesner)', 'Malcolm Jarry'],
    corePhilosophy:
      'Non-theistic, politically activist organization using Satanic aesthetics to contest religious encroachment in public life via First Amendment litigation. Seven Tenets center on empathy, rationality, bodily autonomy, and scientific epistemology. Explicitly rejects LaVeyan philosophy as apolitical and elitist.',
    psychProfile:
      'Membership skews toward progressive political ideology, LGBTQ+ identity, trauma survivors of religious abuse, and those with strong anti-authoritarian disposition. Psychological attraction is often about reclaiming power over institutional religion rather than spiritual practice. Openness, agreeableness (among in-group), and political engagement are characteristic.',
    worldview:
      'Secular humanist core wrapped in provocative aesthetics. Satan as a literary rebel (Milton\'s Paradise Lost) challenging unjust authority. Ethical framework is consequentialist — actions judged by real-world harm, not divine command.',
    tags: ['Political Activism', 'Secular Humanist', 'Anti-theocracy', 'First Amendment'],
  },
  {
    id: 'luciferianism',
    label: 'Luciferianism',
    founded: 'Gnostic origins; modern formalization 20th–21st c.',
    keyFigures: ['Michael W. Ford', 'Jeremy Crow', 'Gnostic Luciferian traditions'],
    corePhilosophy:
      'Distinct from Satanism proper. Lucifer is the light-bearer (lux ferre), representing enlightenment, gnosis, and initiatory wisdom. Emphasis on self-deification through knowledge, discipline, and spiritual ascent rather than hedonism or transgression. Draws from Hermeticism, Gnosticism, and Kabbalah. The adversarial principle is internalized as a force of evolution.',
    psychProfile:
      'Adherents often demonstrate high intellectualism, mystical absorption, and spiritual curiosity. Less anti-social than Theistic Satanism; more parallels with esoteric/occult identity. Self-improvement and disciplined practice are valued, making the psychological profile closer to ascetic spiritual traditions than hedonistic ones.',
    worldview:
      'Dualistic but not inverted. Light and darkness are both necessary for growth. The self is a divine spark that can be cultivated toward gnosis. Opposition to dogma, materialism, and intellectual stagnation. Strong emphasis on personal sovereignty and esoteric knowledge.',
    tags: ['Gnostic', 'Esoteric', 'Light-bearer', 'Self-deification via Wisdom'],
  },
]

// ── Section 2: Ritual Neuroscience ───────────────────────────────────────────

export const RITUAL_NEUROSCIENCE: RitualNeurosciencePanel[] = [
  {
    region: 'Amygdala',
    role: 'Threat detection, fear encoding, emotional salience',
    darkRitualEffect:
      'Hyperactivation from dark imagery (skulls, blood, death symbols). Repeated activation consolidates fear memory traces, lowering the threat threshold over time via LTP (Long-Term Potentiation).',
    positiveRitualEffect:
      'Modulated by positive group ritual; reduced threat response with repeated exposure to safe community contexts. Oxytocin release downregulates amygdala reactivity.',
    neurotransmitter: 'Norepinephrine, CRF (corticotropin-releasing factor)',
  },
  {
    region: 'Prefrontal Cortex (PFC)',
    role: 'Executive function, moral reasoning, impulse inhibition, reality testing',
    darkRitualEffect:
      'Hypofrontality during intense fear/arousal states. Ritual contexts that induce altered states reduce PFC-mediated reality testing, making participants more susceptible to suggestion and identity dissolution.',
    positiveRitualEffect:
      'Meditation-based rituals increase PFC volume and gray matter density (Lazar et al., 2005). Enhanced top-down regulation of the amygdala.',
    neurotransmitter: 'Dopamine (D1/D2), serotonin (5-HT2A)',
  },
  {
    region: 'Hypothalamic-Pituitary-Adrenal (HPA) Axis',
    role: 'Stress hormone regulation; cortisol synthesis and release',
    darkRitualEffect:
      'Chronic activation from fear-based ritual leads to HPA dysregulation. Elevated baseline cortisol, blunted diurnal cortisol rhythm, and eventually adrenal fatigue. Associated with hippocampal volume reduction (McEwen, 2007).',
    positiveRitualEffect:
      'Community ritual and prayer lower cortisol and salivary alpha-amylase. Intercessory prayer studies show acute cortisol normalization.',
    neurotransmitter: 'Cortisol, ACTH, CRF',
  },
  {
    region: 'Default Mode Network (DMN)',
    role: 'Self-referential thought, narrative identity, spiritual experience',
    darkRitualEffect:
      'Occult ritual and identity-dissolution practices alter DMN coherence. The DMN is suppressed during intense ritual arousal and may reorganize around a new identity narrative (the Satanic "true self"). This can create persistent identity instability.',
    positiveRitualEffect:
      'Contemplative spiritual practice shows healthy DMN modulation — alternating between deactivation (present-moment focus) and integration (narrative coherence).',
    neurotransmitter: 'Serotonin (5-HT2A), glutamate, endogenous DMT-like compounds',
  },
  {
    region: 'Hippocampus',
    role: 'Memory consolidation, spatial navigation, stress regulation',
    darkRitualEffect:
      'Chronic cortisol elevation from fear-based practice causes dendritic atrophy and neurogenesis suppression in CA3 hippocampal subregion. Volume reduction correlates with trauma severity and is observed in PTSD populations (Bremner et al., 2003).',
    positiveRitualEffect:
      'Mindfulness and loving-kindness practices increase hippocampal volume and BDNF expression.',
    neurotransmitter: 'Cortisol (inhibitory), BDNF (protective), glutamate (excitotoxic at excess)',
  },
  {
    region: 'Ventral Striatum / Nucleus Accumbens',
    role: 'Reward, motivation, reinforcement learning',
    darkRitualEffect:
      'Power-rituals and transgressive acts activate dopaminergic reward pathways. The "high" of forbidden transgression mirrors substance reward mechanics — escalating tolerance requires increasingly extreme acts for equivalent dopamine release.',
    positiveRitualEffect:
      'Altruistic ritual behavior also activates the ventral striatum — "helper\'s high" is a documented dopaminergic phenomenon.',
    neurotransmitter: 'Dopamine (D1, D2, D3), endogenous opioids',
  },
]

export const NEUROPLASTICITY_NOTES = [
  'Repeated dark ritual exposure produces Hebbian consolidation of fear-threat networks — "neurons that fire together, wire together." After sustained exposure, threat appraisal becomes hyperactivated even in neutral contexts.',
  'Identity-dissolution rituals in Theistic Satanism may facilitate dissociative neurological states resembling those documented in Dissociative Identity Disorder (DID), where competing self-representations lose coherent integration.',
  'The fight-or-flight noradrenergic system (locus coeruleus → norepinephrine) is specifically activated by death imagery, blood symbolism, and threatening iconography — the same system engaged by predator exposure in animal models.',
  'Chronic HPA activation downregulates glucocorticoid receptors (NR3C1), impairing the negative feedback loop and sustaining elevated cortisol. This mechanism is also observed in early childhood trauma (Meaney, 2001).',
]

// ── Section 3: Neuroreceptors ─────────────────────────────────────────────────

export const RECEPTOR_MAP: ReceptorEntry[] = [
  {
    system: 'Dopamine',
    receptors: 'D1, D2, D3, D4',
    baselineRole: 'Reward prediction, motivation, executive function, pleasure anticipation',
    satanismMechanism:
      'Power-rituals, ego-gratification ceremonies, and forbidden transgression activate mesolimbic dopamine release. LaVeyan emphasis on personal achievement and dominance sustains a chronic dopaminergic reward loop around ego-projection.',
    chronicsEffects:
      'D2 receptor downregulation from chronic stimulation; reduced baseline reward sensitivity; motivational dysregulation; anhedonia between ritual "highs"; risk of dopaminergic addiction-like cycling.',
    severity: 'high',
  },
  {
    system: 'Norepinephrine / Noradrenaline',
    receptors: 'α1, α2, β1, β2',
    baselineRole: 'Arousal, alertness, fight-or-flight, attention, emotional encoding',
    satanismMechanism:
      'Dark symbolism, threatening imagery, and fear-inducing ritual contexts trigger locus coeruleus activation → norepinephrine surge. This produces heightened arousal that participants may misinterpret as spiritual/supernatural experience. High-arousal states enhance memory consolidation of ritual content.',
    chronicsEffects:
      'Chronic α1 activation: hypertension, sleep disruption, hypervigilance. Chronic β activation: sustained anxiety, cardiovascular stress. Sympathetic nervous system overdrive mimics generalized anxiety disorder.',
    severity: 'high',
  },
  {
    system: 'Serotonin (5-HT)',
    receptors: '5-HT1A, 5-HT2A, 5-HT2C',
    baselineRole: 'Mood regulation, impulse control, social behavior, sleep, appetite',
    satanismMechanism:
      '5-HT2A receptors mediate altered-state experiences; psychedelic-adjacent states during intense ritual may engage this pathway. Chronic social isolation (common in Theistic Satanism) reduces 5-HT synthesis. LaVeyan anti-empathy philosophy structurally undermines prosocial serotonergic reward.',
    chronicsEffects:
      'Serotonin depletion from chronic stress and isolation: depressive symptomatology, impulsivity, increased aggression. 5-HT1A downregulation: reduced stress resilience. Elevated suicidal ideation risk in isolated adherents.',
    severity: 'moderate',
  },
  {
    system: 'Cortisol / HPA Axis',
    receptors: 'Glucocorticoid receptor (GR/NR3C1), Mineralocorticoid receptor (MR)',
    baselineRole: 'Stress regulation, immune function, metabolism, circadian rhythm',
    satanismMechanism:
      'Fear-based ritual chronically activates CRF → ACTH → cortisol cascade. The NR3C1 gene promoter is methylated by sustained cortisol exposure, reducing GR expression and impairing feedback inhibition. Effectively, the stress response becomes constitutively active.',
    chronicsEffects:
      'Hippocampal atrophy, immune suppression, metabolic syndrome risk, cognitive impairment, and sleep architecture disruption. Indistinguishable neurologically from complex PTSD.',
    severity: 'high',
  },
  {
    system: 'Oxytocin',
    receptors: 'OXTR (oxytocin receptor)',
    baselineRole: 'Social bonding, trust, empathy, maternal behavior, in-group cohesion',
    satanismMechanism:
      'Tight in-group bonding within Satanic communities may produce oxytocin-mediated cohesion, but the LaVeyan explicit de-valuation of empathy and compassion structurally blocks oxytocin-driven prosocial behavior. The result is a paradox: strong in-group oxytocin with pathologically suppressed out-group empathy.',
    chronicsEffects:
      'Asymmetric oxytocin expression reinforces tribal dehumanization of out-groups. This neurochemical pattern is also observed in gang membership and high-control group dynamics.',
    severity: 'moderate',
  },
  {
    system: 'GABA / Glutamate',
    receptors: 'GABA-A, GABA-B, NMDA, AMPA',
    baselineRole: 'Inhibitory/excitatory balance, consciousness regulation, memory, anxiety modulation',
    satanismMechanism:
      'Ritual fasting, sleep deprivation, sensory overload, or psychedelic use (in some Theistic contexts) shift the GABA/glutamate balance toward excitation, producing altered-consciousness states that are attributed supernatural significance. NMDA receptor hypofunction can generate dissociative states.',
    chronicsEffects:
      'Disrupted inhibitory control, increased seizure susceptibility, dissociative episodes, reality-testing impairment. Glutamate excitotoxicity under chronic stress contributes to hippocampal damage.',
    severity: 'moderate',
  },
  {
    system: 'Endogenous Opioids',
    receptors: 'μ (mu), δ (delta), κ (kappa) opioid receptors',
    baselineRole: 'Pain modulation, euphoria, social reward, stress response',
    satanismMechanism:
      'Self-flagellation, scarification, and pain rituals documented in some Theistic Satanic practices trigger β-endorphin and dynorphin release via μ and κ receptors respectively. This produces acute euphoria and dissociation — a neurochemical reward that reinforces repeated pain-ritual behavior.',
    chronicsEffects:
      'Opioid receptor desensitization requiring escalating pain intensity; self-harm dysregulation; cross-sensitization with substance use; behavioral addiction pattern to pain-induced reward.',
    severity: 'high',
  },
]

// ── Section 4: Psychological Disorders ───────────────────────────────────────

export const DISORDERS: DisorderEntry[] = [
  {
    id: 'identity',
    name: 'Identity Disturbance (Adolescent)',
    correlation:
      'Adolescents are disproportionately represented in Satanic involvement. The identity formation period (Erikson\'s Identity vs. Role Confusion) makes teens vulnerable to totalistic identity frameworks.',
    mechanism:
      'Satanic identity provides a ready-made counter-identity that resolves adolescent role confusion through clear in-group/out-group structure, transgressive differentiation from family/religion, and a sense of special knowledge. This accelerated identity formation can interrupt normal developmental consolidation.',
    evidence:
      'Bourget & Gagnon (2002) documented adolescent involvement in occult practice associated with identity confusion, social withdrawal, and behavioral dysregulation. Lyons (1988) systematically analyzed adolescent Satanic involvement correlating with family dysfunction.',
    evidenceLevel: 'moderate',
    citations: ['Bourget & Gagnon (2002) JAAPL', 'Lyons (1988) — Adolescent Satanism'],
  },
  {
    id: 'did',
    name: 'Dissociative Identity Disorder (DID)',
    correlation:
      'A contested but documented intersection exists between severe ritualistic abuse (SRA) and DID. DID etiology requires severe repeated childhood trauma; some DID presentations include ritual abuse narratives.',
    mechanism:
      'Ritual contexts that deliberately induce terror, disorientation, and identity dissolution in children can trigger dissociative fragmentation as a protective mechanism. Separate identity states ("alters") may be trauma-organized around ritual content.',
    evidence:
      'Ross (1995) documented a subset of DID patients reporting ritual abuse histories. The scientific status of SRA remains contested — the FBI\'s Lanning Report (1992) found no corroborating evidence for organized ritual abuse networks, while clinical case literature documents the psychological sequelae regardless of objective verification.',
    evidenceLevel: 'contested',
    citations: ['Ross (1995) — Satanic Ritual Abuse', 'Lanning (1992) FBI Report', 'Putnam (1989) — Diagnosis and Treatment of MPD'],
  },
  {
    id: 'ptsd',
    name: 'PTSD from Ritual Abuse',
    correlation:
      'Whether Satanic Ritual Abuse (SRA) occurred as an organized phenomenon remains contested. However, PTSD symptomatology in individuals reporting such histories is well-documented and clinically real.',
    mechanism:
      'Trauma conditioning during ritually structured events produces fear-conditioned memories with ritual-specific triggers. Noradrenergic hyperactivation during trauma consolidates intrusive memories with extremely high emotional salience.',
    evidence:
      'Mulhern (1994) reviewed the SRA panic and its psychological aftermath. Van der Kolk (2014) in The Body Keeps the Score documents the neurological substrate of ritual-trauma PTSD. PTSD neuroimaging shows amygdala hyperreactivity and hippocampal hypoactivation consistent with all severe trauma presentations.',
    evidenceLevel: 'moderate',
    citations: ['Van der Kolk (2014) — The Body Keeps the Score', 'Mulhern (1994) — Satanism and Psychotherapy'],
  },
  {
    id: 'dark-triad',
    name: 'Dark Triad Personality Correlation',
    correlation:
      'Multiple studies find Dark Triad traits (narcissism, Machiavellianism, subclinical psychopathy) are over-represented among self-identified Satanists, particularly LaVeyan adherents.',
    mechanism:
      'LaVeyan philosophy explicitly valorizes narcissism ("Satanist is his own god"), Machiavellian social strategy ("stratagem"), and psychopathic disregard for guilt. The belief system functions as a permission structure for Dark Triad behavioral expression — normalizing rather than pathologizing these traits.',
    evidence:
      'Laythe et al. (2011) found Satanists scored significantly higher on narcissism and Machiavellianism scales. Pettigrew (2018) corroborated elevated psychopathy indicators in Theistic practitioners. The correlation is directional but causality is uncertain — Dark Triad individuals may self-select into Satanism rather than Satanism producing these traits.',
    evidenceLevel: 'strong',
    citations: ['Laythe et al. (2011) — Mental Health of Satanists', 'Pettigrew (2018) — Dark Triad and Occult'],
  },
  {
    id: 'depression',
    name: 'Depression & Suicidal Ideation',
    correlation:
      'Elevated rates of depression, hopelessness, and suicidal ideation are documented in occult-involved adolescent populations. Isolation, nihilistic worldview, and social stigma compound underlying vulnerabilities.',
    mechanism:
      'LaVeyan philosophy provides no transcendent meaning source — pleasure, power, and self are the only values. When these fail (inevitable in adolescence), there is no philosophical framework for resilience. The absence of transcendent meaning is a documented suicide risk factor (Frankl\'s logotherapy research base).',
    evidence:
      'Lowry (1994) in Journal of School Health linked occult involvement to depression scores. Rosenbaum (2018) documented elevated depression in adults with prior adolescent Satanic involvement. Suicidal ideation rates in occult-involved adolescent psychiatric inpatients exceed non-occult controls.',
    evidenceLevel: 'moderate',
    citations: ['Lowry (1994) JSH', 'Rosenbaum (2018) — Occult and Mental Health'],
  },
  {
    id: 'sram',
    name: '"Satanic Syndrome" (Šram, 2017)',
    correlation:
      'Šram (2017) proposed a Satanic Syndrome construct: a cluster of psychopathy, belief in pure evil, anti-social cognition, and dehumanization operating as an integrated psychological system.',
    mechanism:
      'The syndrome posits that psychopathic personality features interface with a cosmological belief system that frames cruelty as strength. The belief system provides narrative justification that reduces cognitive dissonance for anti-social acts, thereby increasing their likelihood and severity.',
    evidence:
      'Published in Current Issues in Personality Psychology, Šram (2017) used structural equation modeling to demonstrate that psychopathy predicted the Satanic Syndrome cluster with a path coefficient of β=0.67. Replication studies are limited; the construct is not formally included in diagnostic classification systems.',
    evidenceLevel: 'limited',
    citations: ['Šram (2017) — Current Issues in Personality Psychology, 5(2), 77–87'],
  },
  {
    id: 'bpd',
    name: 'Borderline Personality Disorder (BPD)',
    correlation:
      'BPD features — identity instability, fear of abandonment, emotional dysregulation, impulsivity — create vulnerability to high-intensity occult group involvement as a means of identity stabilization.',
    mechanism:
      'Splitting (black-and-white cognition), a core BPD defense, maps onto Satanic cosmological dualism. In-group idealization and out-group devaluation parallel BPD relational patterns. Rituals provide emotional regulation through controlled intensity rather than emotional processing.',
    evidence:
      'Clinical literature (Hicks, 1991) observed BPD features in occult-involved patients. Empirical studies specifically linking BPD to Satanism are sparse; the theoretical pathway is more documented than the epidemiological correlation.',
    evidenceLevel: 'limited',
    citations: ['Hicks (1991) — In Pursuit of Satan', 'Spanos (1996) — Multiple Identities and False Memories'],
  },
  {
    id: 'bpe',
    name: 'Belief in Pure Evil (BPE) Effect',
    correlation:
      'The psychological construct of Belief in Pure Evil — that some people are fundamentally evil, irredeemable, and deserve punishment — is strongly associated with support for retributive violence and dehumanization.',
    mechanism:
      'Theistic Satanism that frames enemies as cosmologically evil removes empathic restraints on violence. Russell & Gray (2011) showed BPE correlates with increased aggression endorsement and reduced rehabilitation support. The belief provides neurological permission to bypass empathic PFC-mediated inhibition of harm.',
    evidence:
      'Russell & Gray (2011) — Personality and Social Psychology Bulletin. Webster et al. (2014) linked BPE to increased sadistic behavior endorsement. The mechanism is well-studied outside Satanism specifically, with direct applicability.',
    evidenceLevel: 'strong',
    citations: ['Russell & Gray (2011) PSPB', 'Webster et al. (2014) — Aggression and BPE'],
  },
]

// ── Section 5: Soul / Metaphysical ───────────────────────────────────────────

export const METAPHYSICAL_PANELS = [
  {
    id: 'fromm',
    thinker: 'Erich Fromm',
    framework: 'Necrophilic vs. Biophilic Orientation',
    analysis:
      'In The Heart of Man (1964) and The Anatomy of Human Destructiveness (1973), Fromm delineated the biophilic character — oriented toward life, growth, and creativity — from the necrophilic character, drawn to death, decay, power over life, and destruction. Fromm argued necrophilia arises not from innate evil but from structural conditions: chronic powerlessness, emotional desert, and the failure of love in early development.',
    satanismRelevance:
      'LaVeyan Satanism\'s exaltation of power, contempt for vulnerability, and disdain for compassion fits Fromm\'s necrophilic profile. Theistic Satanism, with its ritual engagement with death symbolism, blood, and decay, maps even more directly. The Satanic Temple\'s more humanistic orientation would be categorized closer to biophilic. Fromm would diagnose Satanic attraction in many cases as a compensatory necrophilic turn — not chosen freely, but determined by unlived life.',
    divergence:
      'Traditional spiritual frameworks universally orient toward biophilic values — life, growth, care, and transcendence. The empirical wellbeing literature consistently validates biophilic orientation as protective against depression, suicidality, and anti-social behavior.',
  },
  {
    id: 'jung',
    thinker: 'Carl Gustav Jung',
    framework: 'Shadow Archetype — Worship vs. Integration',
    analysis:
      'Jung\'s Shadow represents the unconscious repository of repressed, denied, and unintegrated aspects of the self — primarily negative (aggression, lust, envy) but also positive qualities suppressed by social conformity. Jung argued the individuation process requires confronting, not worshipping or annihilating, the Shadow.',
    satanismRelevance:
      'Satanism, from a Jungian lens, represents the Shadow made explicit — a conscious identification with the repressed material that culture labels "evil." LaVeyan Satanism is a literalized Shadow inflation: the repressed hedonism, aggression, and narcissism are not integrated but crowned. This is what Jung called "Shadow possession" — not liberation but a different form of unconscious domination, now by the Shadow rather than the Persona.',
    divergence:
      'Authentic Jungian individuation requires holding the tension between Persona and Shadow — neither suppressing the Shadow (neurosis) nor being possessed by it (psychopathy/inflation). True integration produces a unified Self that contains aggression without being driven by it. Satanic worship of the Shadow bypasses this integration entirely.',
  },
  {
    id: 'selfworship',
    thinker: 'Comparative Philosophy of Self',
    framework: 'Self-Worship (LaVey) vs. Self-Transcendence — Divergent Wellbeing Trajectories',
    analysis:
      'LaVey\'s "man as his own god" doctrine is structurally identical to what Maslow classified as the arrest of development at esteem needs — never reaching self-actualization because the self has been declared the terminal value. Self-transcendence (Maslow\'s later fifth level) — contributing to something beyond the self — is the documented predictor of the highest wellbeing.',
    satanismRelevance:
      'The psychological literature consistently demonstrates that self-focused hedonic pursuit produces diminishing returns on life satisfaction (Kahneman & Deaton, 2010). Eudaimonic wellbeing — meaning, purpose, contribution — far outperforms hedonistic self-maximization. LaVeyan philosophy structurally eliminates eudaimonic pathways by framing sacrifice and contribution as weakness.',
    divergence:
      'Meta-analyses of spirituality and wellbeing (Koenig, 2012) demonstrate robust protective effects of transcendence-oriented belief against depression, anxiety, and suicidality. The inverse of LaVeyan philosophy predicts better psychological outcomes at the population level.',
  },
]

// ── Section 6: Gene Expression & Epigenetics ─────────────────────────────────

export const GENE_ENTRIES: GeneEntry[] = [
  {
    gene: 'FKBP5',
    fullName: 'FK506 Binding Protein 5',
    mechanism:
      'FKBP5 encodes a co-chaperone that regulates glucocorticoid receptor (GR) sensitivity. Stress-induced cortisol increases FKBP5 expression, which inhibits GR signaling — creating a feedback loop that sustains the stress response.',
    satanismLink:
      'Chronic fear-state induction from dark ritual or SRA-type trauma upregulates FKBP5. Klengel et al. (2013) demonstrated that childhood trauma produces demethylation of FKBP5 CpG sites, creating stable epigenetic programming of heightened stress reactivity.',
    consequence:
      'Permanent upward calibration of stress reactivity. Individuals with FKBP5 polymorphisms (rs1360780) and childhood trauma exposure show dramatically elevated PTSD risk. This epigenetic change is heritable across generations (transgenerational epigenetic inheritance).',
  },
  {
    gene: 'NR3C1',
    fullName: 'Nuclear Receptor Subfamily 3 Group C Member 1 (Glucocorticoid Receptor)',
    mechanism:
      'NR3C1 encodes the glucocorticoid receptor (GR), which binds cortisol and mediates the feedback inhibition of the HPA axis. Methylation of the NR3C1 promoter (exon 1F) reduces GR expression, impairing the shutdown signal.',
    satanismLink:
      'Meaney (2001) demonstrated that early adversity produces NR3C1 methylation in hippocampal tissue. SRA survivors and those exposed to chronic ritual fear would be expected to show this epigenetic signature, analogous to other severe childhood trauma populations.',
    consequence:
      'Sustained HPA hyperactivity; reduced capacity to terminate stress responses; elevated allostatic load; hippocampal neurogenesis suppression; vulnerability to stress-related psychopathology.',
  },
  {
    gene: 'BDNF',
    fullName: 'Brain-Derived Neurotrophic Factor',
    mechanism:
      'BDNF supports neuronal survival, synaptic plasticity, and hippocampal neurogenesis. Chronic stress suppresses BDNF via glucocorticoid-mediated transcriptional repression and epigenetic silencing (promoter methylation).',
    satanismLink:
      'Chronic cortisol elevation from sustained fear-based practice reduces BDNF. The Val66Met polymorphism (rs6265) moderates this effect — Met carriers show amplified BDNF suppression under stress and elevated depression/anxiety risk.',
    consequence:
      'Reduced hippocampal neurogenesis; impaired memory consolidation and extinction of fear memories; antidepressant resistance; accelerated hippocampal atrophy. BDNF suppression is a common molecular pathway between chronic stress and major depressive disorder.',
  },
  {
    gene: 'SLC6A4',
    fullName: 'Serotonin Transporter Gene (5-HTT)',
    mechanism:
      'SLC6A4 encodes the serotonin reuptake transporter. The 5-HTTLPR polymorphism (short allele) produces reduced transcriptional efficiency, lower serotonin transporter expression, and elevated synaptic serotonin with downstream receptor desensitization.',
    satanismLink:
      'Individuals with short-allele 5-HTTLPR exposed to chronic stress show dramatically elevated depression risk (Caspi et al., 2003). Chronic social isolation and adversarial worldview in Satanic practice compounds this genetic vulnerability.',
    consequence:
      'Gene × environment interaction driving depression, anxiety, and increased sensitivity to social rejection. LaVeyan philosophy\'s anti-empathy stance may paradoxically worsen serotonergic resilience by eliminating prosocial reward pathways.',
  },
  {
    gene: 'IL-6 / TNF-α',
    fullName: 'Interleukin-6 / Tumor Necrosis Factor Alpha (Inflammatory Cytokines)',
    mechanism:
      'Inflammatory cytokines are upregulated by chronic psychological stress via NF-κB transcription factor activation. IL-6 and TNF-α cross the blood-brain barrier and act as depressogens — directly inducing depressive behavioral phenotypes.',
    satanismLink:
      'Chronic fear, social conflict, and adversarial vigilance — all features of sustained Satanic worldview enactment — are independent predictors of elevated IL-6 and TNF-α. Inflammatory gene expression has been measured as elevated in individuals with high trait hostility and low social support.',
    consequence:
      'Neuroinflammation; sickness behavior (fatigue, anhedonia, social withdrawal); accelerated cellular aging (telomere shortening); elevated cardiovascular risk; treatment-resistant depression linked to elevated IL-6 baseline.',
  },
]

// ── Section 7: Recovery ───────────────────────────────────────────────────────

export const RECOVERY_PHASES: RecoveryEntry[] = [
  {
    phase: 'Phase 1: Safety & Stabilization',
    timeframe: '0–6 months',
    target: 'HPA axis, amygdala hyperreactivity, sleep architecture',
    intervention: 'Trauma-informed therapy, safety planning, sleep hygiene, social reconnection',
    neurological:
      'Reduction in baseline cortisol; normalization of diurnal cortisol rhythm; restoration of slow-wave and REM sleep (BDNF production occurs primarily during REM); initial amygdala desensitization through graded safe exposure.',
  },
  {
    phase: 'Phase 2: Trauma Processing',
    timeframe: '6–24 months',
    target: 'Fear memory consolidation, hippocampal function, narrative identity',
    intervention: 'EMDR (Eye Movement Desensitization & Reprocessing), Trauma-Focused CBT (TF-CBT), somatic therapies',
    neurological:
      'EMDR has demonstrated fMRI evidence of reduced amygdala activation and increased hippocampal-prefrontal coherence post-treatment (Pagani et al., 2012). Fear memory reconsolidation is disrupted and narrative integration is restored via hippocampal-cortical binding.',
  },
  {
    phase: 'Phase 3: Identity Reconstruction',
    timeframe: '12–36 months',
    target: 'DMN coherence, prefrontal executive function, moral identity',
    intervention: 'ACT (Acceptance & Commitment Therapy), meaning-making therapy, community reintegration, Jungian integration work',
    neurological:
      'Default Mode Network coherence normalizes as a stable identity narrative re-emerges. PFC gray matter density increases with sustained therapeutic engagement. DMN-task-positive network reciprocity is restored, reducing ruminative self-focus.',
  },
  {
    phase: 'Phase 4: Neurochemical Restoration',
    timeframe: '6–18 months concurrent',
    target: 'Dopamine, serotonin, BDNF, oxytocin, HPA axis',
    intervention: 'Aerobic exercise (BDNF, dopamine), prosocial behavior (oxytocin, serotonin), purposeful activity (dopamine), nature exposure (cortisol reduction), nutrition (tryptophan-rich for serotonin)',
    neurological:
      'Exercise is the most evidence-based BDNF elevator — 30 min aerobic activity acutely elevates BDNF by 200–300%. Prosocial behavior restores oxytocin-serotonin coupling. Purposeful goal pursuit re-establishes healthy mesolimbic dopaminergic tone without transgressive reward escalation.',
  },
  {
    phase: 'Phase 5: Long-Term Resilience',
    timeframe: '2–5+ years',
    target: 'Epigenetic remodeling, NR3C1 methylation reversal, FKBP5 normalization',
    intervention: 'Sustained mindfulness practice, stable prosocial community, transcendence-oriented meaning framework',
    neurological:
      'Epigenetic changes from trauma are partially reversible. Mindfulness meditation produces measurable FKBP5 demethylation changes (Kaliman et al., 2014). Telomere length stabilization observed with sustained meditation practice. Long-term meaningful social integration is the strongest predictor of full recovery across molecular and psychological markers.',
  },
]

// ── Bibliography ──────────────────────────────────────────────────────────────

export const BIBLIOGRAPHY: SatanismReference[] = [
  { id: 'bremner2003', citation: 'Bremner, J.D. (2003). Long-term effects of childhood abuse on brain and neurobiology. Child and Adolescent Psychiatric Clinics of North America, 12(2), 271–292.', relevance: 'Hippocampal volume reduction in trauma/PTSD' },
  { id: 'caspi2003', citation: 'Caspi, A., et al. (2003). Influence of life stress on depression: Moderation by a polymorphism in the 5-HTT gene. Science, 301(5631), 386–389.', relevance: '5-HTTLPR × stress → depression' },
  { id: 'fromm1964', citation: 'Fromm, E. (1964). The Heart of Man: Its Genius for Good and Evil. Harper & Row.', relevance: 'Necrophilic vs. biophilic orientation' },
  { id: 'fromm1973', citation: 'Fromm, E. (1973). The Anatomy of Human Destructiveness. Holt, Rinehart & Winston.', relevance: 'Structural roots of destructive character' },
  { id: 'jung1951', citation: 'Jung, C.G. (1951). Aion: Researches into the Phenomenology of the Self. CW 9ii. Princeton University Press.', relevance: 'Shadow archetype, Self, individuation' },
  { id: 'kaliman2014', citation: 'Kaliman, P., et al. (2014). Rapid changes in histone deacetylases and inflammatory gene expression in expert meditators. Psychoneuroendocrinology, 40, 96–107.', relevance: 'Epigenetic effects of meditation' },
  { id: 'klengel2013', citation: 'Klengel, T., et al. (2013). Allele-specific FKBP5 DNA demethylation mediates gene–childhood trauma interactions. Nature Neuroscience, 16(1), 33–41.', relevance: 'FKBP5 epigenetics and childhood trauma' },
  { id: 'koenig2012', citation: 'Koenig, H.G. (2012). Religion, Spirituality, and Health: The Research and Clinical Implications. ISRN Psychiatry.', relevance: 'Spirituality as protective against depression/anxiety' },
  { id: 'lanning1992', citation: 'Lanning, K.V. (1992). Investigator\'s Guide to Allegations of "Ritual" Child Abuse. FBI Behavioral Science Unit.', relevance: 'FBI forensic analysis of SRA allegations' },
  { id: 'laythe2011', citation: 'Laythe, B., et al. (2011). The mental health of self-identified Satanists. Mental Health, Religion & Culture, 14(6), 601–617.', relevance: 'Dark Triad, psychological profiles of Satanists' },
  { id: 'lazar2005', citation: 'Lazar, S.W., et al. (2005). Meditation experience is associated with increased cortical thickness. NeuroReport, 16(17), 1893–1897.', relevance: 'Positive ritual effects on PFC neuroplasticity' },
  { id: 'lavey1969', citation: 'LaVey, A.S. (1969). The Satanic Bible. Avon Books.', relevance: 'Primary LaVeyan doctrinal source' },
  { id: 'mcewan2007', citation: 'McEwen, B.S. (2007). Physiology and neurobiology of stress and adaptation: Central role of the brain. Physiological Reviews, 87(3), 873–904.', relevance: 'HPA axis dysregulation and hippocampal damage' },
  { id: 'meaney2001', citation: 'Meaney, M.J. (2001). Maternal care, gene expression, and the transmission of individual differences in stress reactivity across generations. Annual Review of Neuroscience, 24, 1161–1192.', relevance: 'NR3C1 methylation and epigenetic transmission of stress' },
  { id: 'pagani2012', citation: 'Pagani, M., et al. (2012). Neurobiological correlates of EMDR monitoring — an EEG study. PLOS ONE, 7(9), e45753.', relevance: 'EMDR neuroimaging evidence' },
  { id: 'putnam1989', citation: 'Putnam, F.W. (1989). Diagnosis and Treatment of Multiple Personality Disorder. Guilford Press.', relevance: 'DID clinical framework' },
  { id: 'ross1995', citation: 'Ross, C.A. (1995). Satanic Ritual Abuse: Principles of Treatment. University of Toronto Press.', relevance: 'SRA clinical treatment approach' },
  { id: 'russell2011', citation: 'Russell, B.L., & Gray, K. (2011). Moral typecasting: Divergent perceptions of moral agents and moral patients. PSPB.', relevance: 'Belief in Pure Evil and behavioral consequences' },
  { id: 'sram2017', citation: 'Šram, I. (2017). Psychopathy, the Satanic Syndrome, and the belief in pure evil. Current Issues in Personality Psychology, 5(2), 77–87.', relevance: 'Satanic Syndrome construct, psychopathy pathway' },
  { id: 'vanderkolk2014', citation: 'Van der Kolk, B. (2014). The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma. Viking.', relevance: 'Neurobiological basis of trauma and ritual PTSD' },
  { id: 'webster2014', citation: 'Webster, R.J., et al. (2014). The relationship between belief in pure evil and support for torture. Personality and Individual Differences, 65, 101–105.', relevance: 'BPE effect on dehumanization and aggression' },
]

export const EVIDENCE_CAVEAT = `IMPORTANT METHODOLOGICAL NOTE: Research specifically on Satanism and neuroscience is sparse. Section 4 draws partly from the "Satanic Panic" era (1980s–1990s), during which many SRA claims were later found to be products of suggestive therapeutic techniques and moral panic rather than verified events (Lanning, 1992). The neurological and epigenetic mechanisms described are well-established in the general trauma and stress literature; their application to Satanic-specific contexts is extrapolated from those foundations. Where studies directly sample Satanists (e.g., Laythe et al., 2011; Šram, 2017), sample sizes are small. Readers should treat this as a theoretical framework and clinical hypothesis generator, not definitive epidemiology.`
