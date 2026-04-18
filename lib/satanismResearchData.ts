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

// ── Historical Case: The Trial of Peter ──────────────────────────────────────

export const PETER_CASE = {
  title: 'THE CASE OF PETER — ROME, c. 64–68 AD',
  subtitle: 'What we know. What was charged. What was real.',
  disclaimer: 'The primary source is the Acts of Peter (Actus Vercellenses), a 2nd–3rd century apocryphal text. It is not canonical scripture. Whether the specific events occurred as described is historically unverifiable. What is verified: Peter was executed in Rome under Nero, crucified upside down at his own request. The political and legal context below is historically grounded.',

  actors: [
    {
      name: 'Shimon bar Yona — Petros',
      role: 'Apostle; leader of the Christian community in Rome',
      note: 'The same Peter who received "the keys of the kingdom" and was called Satan by Yeshua in the same conversation. Tradition holds he arrived in Rome during Nero\'s reign and led the community there until his execution.',
    },
    {
      name: 'Agrippa',
      role: 'Roman Prefect of the City (Praefectus Urbi) under Nero',
      note: 'Not to be confused with King Agrippa of Judea. This Agrippa was the city prefect — effectively the chief of police and civil authority of Rome. He held four concubines (the Acts of Peter names the situation without naming all the women). When those concubines converted to chastity and refused him, he had both motive and institutional power to act.',
    },
    {
      name: 'Albinus',
      role: 'Amicus Caesaris — friend and associate of Nero Caesar',
      note: 'A man of direct imperial access. His wife Xanthippe heard Peter preach and converted to sexual chastity, withdrawing from conjugal relations with Albinus entirely. Albinus\'s complaint to Agrippa was what triggered the formal alliance against Peter. A man with a connection to Caesar who could not touch his own wife had every incentive to use political channels rather than domestic ones.',
    },
    {
      name: 'Xanthippe',
      role: 'Wife of Albinus; convert to chastity',
      note: 'Named explicitly in the Acts of Peter. Her conversion is the catalytic event — a wife of a Caesar-adjacent nobleman publicly withdrawing from marital relations was a social and political embarrassment that could not be ignored.',
    },
    {
      name: 'The Four Concubines of Agrippa',
      role: 'Concubines of the Prefect; converts to chastity',
      note: 'Their individual names are not recorded in surviving texts. Together with Xanthippe and at least one other woman (Agrippina in some manuscript traditions), the total count of women who converted to chastity and directly provoked the men\'s alliance against Peter varies between four and seven depending on the manuscript. Six is the most commonly cited figure in modern scholarship of the Acts.',
    },
    {
      name: 'Nero Caesar',
      role: 'Emperor of Rome (54–68 AD)',
      note: 'The Great Fire of Rome burned for six days in July 64 AD, destroying ten of Rome\'s fourteen districts. Nero needed a scapegoat. Christians — already socially isolated, meeting privately, and associated with apocalyptic fire imagery — were the politically convenient target. Tacitus (Annals XV.44) records this explicitly. The arson charge against Peter may have been a compound accusation: theological fire-preaching conflated with political fire-setting.',
    },
  ],

  theWomen: {
    heading: 'The Six Women — What Peter Actually Did',
    body: 'Peter preached that the body belonged to God, not to husbands or owners. In a Roman world where women — especially concubines — had no legal personhood independent of the men who owned them, this was not merely theological. It was economic disruption. A concubine who refused sexual access was a concubine who had ceased to function as property. Agrippa\'s four concubines did not need to file for divorce — there was no marriage to dissolve. What they did was simply refuse. Under Roman law, Agrippa had no clean legal remedy for a concubine who invoked religious conscience. Xanthippe\'s situation was different — she was a legal wife — but Albinus faced the same problem: Roman civil law offered divorce, but divorce was public humiliation for a man of his status. Neither man wanted the civil remedy. They wanted the man who caused it.',
    legalNote: 'The Latin concept of stuprum (sexual misconduct) could theoretically be applied in reverse — a Christian teacher inducing women to withhold conjugal relations could be framed as corrupting Roman morality. But this was legally thin. Charging Peter under the broader Neronian anti-Christian persecutions — which did not require specific evidence, only association — was far cleaner. The arson charge was the vehicle. The women were the motive.',
  },

  thePoliticalContext: {
    heading: 'Augustus, Julius, and the Legal Architecture of the Empire',
    augustusNote: 'Gaius Julius Caesar Octavianus — Augustus, "the Revered One" — was careful never to repeat his great-uncle\'s mistake. Julius Caesar called himself Dictator Perpetuo: dictator in perpetuity. It was the title that got him killed on the Ides of March, 44 BC. The Roman Senate and the aristocratic class could not tolerate the open destruction of the Republic\'s fiction. Augustus learned the lesson absolutely. He called himself Princeps — first citizen, not first ruler. He maintained every Republican institution while gutting them of actual power. He held authority without the title that declared it. The Republic existed on paper. The empire existed in fact. This was not stupidity. This was the most successful political architecture in Western history.',
    julianNote: 'Julius Caesar, by contrast, accumulated titles, refused to stand when the Senate approached him, and accepted divine honors while alive. He was brilliant militarily and administratively and politically obtuse in the specific way that brilliance without social intelligence produces. He could read a battlefield and could not read a room. The senatorial class murdered him for it. Augustus read both.',
    neroninanNote: 'By the time of Peter\'s execution under Nero (c. 64–68 AD), the Augustan framework was fifty years old. Nero had inherited the "first citizen" architecture but used it with the subtlety of Julius Caesar — which is to say, none. His persecution of Christians after the Great Fire was politically functional but historically crude: blame a minority, avoid accountability, consolidate fear. Within four years of Peter\'s death, Nero was dead by his own hand, the year of four emperors had begun, and the Augustan settlement was fracturing.',
    peterNote: 'Peter was executed inside this architecture. The charge — arson, sedition, corrupting Roman morality — was the Neronian state\'s chosen instrument. The real charge — that he convinced six women to withhold themselves from the men who owned them — was the charge that could not be spoken in court because it revealed too much about the men bringing it. Agrippa and Albinus needed Peter dead. Nero needed Christians culpable. The interests aligned.',
  },

  theExecution: {
    heading: 'The Crucifixion — Upside Down, By Request',
    body: 'Peter\'s execution by crucifixion is documented in Clement of Rome (c. 96 AD), Ignatius of Antioch, Origen, and Eusebius of Caesarea — making it one of the better-attested facts of early Christian history. The inversion — crucified with his head downward — Peter requested himself, according to Origen (as quoted by Eusebius, Ecclesiastical History III.1): judging himself unworthy to die in the same manner as his Lord. The cross of Peter is therefore not a symbol of defiance or opposition. It is a symbol of radical self-abasement — the same man who had been called Satan by Yeshua, who had denied him three times before the cock crowed, ending his life insisting he was not worthy of an upright death.',
    ironies: [
      'The man called "Satan" by Yeshua became the first Bishop of Rome and the theological foundation of the Catholic Church.',
      'The cross Peter chose out of humility became the primary symbol adopted by those who wish to oppose everything Peter believed.',
      'Agrippa and Albinus, who conspired against Peter to recover access to women they could not legally compel, are remembered only because Peter is remembered. History retained the accused and forgot the accusers.',
      'The charge of arson — used to execute Peter — was itself a projection: Nero, not the Christians, was widely believed in antiquity to have set or at least exploited the Great Fire. Tacitus records the rumor explicitly.',
    ],
  },

  sources: [
    'Acts of Peter (Actus Vercellenses) — 2nd–3rd century, apocryphal; Schneemelcher, W. (Ed.), New Testament Apocrypha, Vol. 2',
    'Tacitus — Annals XV.44 (on Nero\'s persecution of Christians post-fire)',
    'Eusebius of Caesarea — Ecclesiastical History III.1 (quoting Origen on Peter\'s inverted crucifixion)',
    'Clement of Rome — First Epistle to the Corinthians, 5.4 (earliest attestation of Peter\'s martyrdom in Rome)',
    'Suetonius — The Twelve Caesars: Nero, 16 (Christians as practitioners of a "new and maleficent superstition")',
    'Garnsey, P. & Saller, R. (1987). The Roman Empire: Economy, Society and Culture. University of California Press',
    'MacDonald, D.R. (1983). The Legend and the Apostle: The Battle for Paul in Story and Canon. Westminster Press',
  ],
}

// ── Primary Source: The Yeshua Declaration ────────────────────────────────────

export const PETER_VERSE = {
  reference: 'Matthew 16:23 · Mark 8:33',
  speaker: 'Yeshua (Jesus of Nazareth)',
  addressee: 'Shimon bar Yona — Simon Peter',
  context:
    'Peter had just confessed Yeshua as the Messiah (v.16), then rebuked him for predicting his own death and resurrection. Yeshua turned and addressed Peter directly — using the name "Satan" not as an epithet of ultimate evil, but in its original Aramaic meaning: adversary, one who opposes the divine will. The same Peter who received "the keys of the kingdom" moments earlier is addressed as the adversarial principle the moment he places human reasoning above divine purpose.',

  aramaic: {
    script: 'ܗܦܟ ܕܝܢ ܘܐܡܪ ܠܦܛܪܘܣ ܙܠ ܠܒܣܬܪܝ ܣܛܢܐ ܡܫܩܠܐ ܐܢܬ ܠܝ ܡܛܠ ܕܠܐ ܡܬܪܥܐ ܐܢܬ ܡܕܡ ܕܐܠܗܐ ܐܠܐ ܕܒܢܝ̈ ܐܢܫܐ',
    transliteration: 'Hapak din w-amar l-Petros: Zel l-batri Satana — maskla ant li, metul d-la metraa ant meddem d-Alaha, ela d-bnay nasha.',
    wordBreakdown: [
      { aramaic: 'ܙܠ',     roman: 'Zel',      meaning: 'Go / Get' },
      { aramaic: 'ܠܒܣܬܪܝ', roman: "l'batri",  meaning: 'behind me' },
      { aramaic: 'ܣܛܢܐ',   roman: 'Satana',   meaning: 'Adversary / Satan' },
      { aramaic: 'ܡܫܩܠܐ',  roman: 'maskla',   meaning: 'stumbling block / snare' },
      { aramaic: 'ܐܢܬ',    roman: 'ant',      meaning: 'you are' },
      { aramaic: 'ܠܝ',     roman: 'li',       meaning: 'to me / for me' },
      { aramaic: 'ܡܛܠ',    roman: 'metul',    meaning: 'because' },
      { aramaic: 'ܐܠܗܐ',   roman: 'Alaha',    meaning: 'God (Aramaic form of Elohim)' },
      { aramaic: 'ܒܢܝ̈ ܐܢܫܐ', roman: 'bnay nasha', meaning: 'sons of men / human concerns' },
    ],
    source: 'Peshitta — Eastern Aramaic New Testament (standard text of Syriac Christianity)',
  },

  english:
    'But he turned and said to Peter: "Get behind me, Satan — you are a stumbling block to me, because you are not thinking of the things of God, but of the things of men."',

  linguisticNote:
    'The word ܣܛܢܐ (Satana) in Aramaic derives from the root ܣܛܢ (s-ṭ-n), meaning "to oppose," "to obstruct," or "to be an adversary." It is a function — not a name. Yeshua did not address Peter as a demonic entity; he addressed the adversarial orientation Peter had adopted in that moment: placing self-preservation and human comfort above divine will. The same root passes through Hebrew שָּׂטָן (śāṭān) into Greek Σατανᾶς (Satanas) and then into Latin and English as "Satan." The Aramaic original reveals what later traditions obscured: Satan is first and foremost a posture of opposition to God, accessible to any person — including the one who holds the keys.',

  theologicalSignificance:
    'This verse establishes that the "Satanic" disposition is not the exclusive domain of demonic beings or occult practitioners. Yeshua identified it in his closest disciple, in a moment of genuine human love and concern. The inversion of Peter\'s cross — the symbol of his martyrdom, adopted by those who wish to invert and mock what Peter stood for — is thus doubly ironic: Peter himself was called Satan, and his cross became the emblem of opposition to the faith he died defending.',

  inversionNote:
    'Saint Peter requested to be crucified upside-down, judging himself unworthy to die in the same manner as Yeshua. His inverted cross is therefore a symbol of humility, not defiance. Its adoption as a Satanic symbol represents a second-order inversion: taking a gesture of self-abasement before God and reframing it as proud opposition to God. The neuroscience of symbol inversion is well-documented: appropriating sacred symbols and reversing their meaning is a high-impact transgression strategy — it maximizes amygdala and PFC disruption in observers who carry the original sacred association.',
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

// ── Nero / 666 / Roman Constitution ──────────────────────────────────────────

export const NERO_666 = {
  title: 'NERO, 666, AND THE ROMAN CONSTITUTION',
  subtitle: 'Was the Emperor the final judge? Two men whose names sum to 666 — separated by 1,500 years of institutional power.',

  neroJudge: {
    heading: 'Was Nero the Final Judge of Peter?',
    verdict: 'Most likely yes — by administrative sanction, not personal decree.',
    body: 'Peter was not a Roman citizen. Under Roman law (the Lex Iulia de vi publica et privata, codified under Augustus), a Roman citizen could appeal a capital sentence to the Emperor (provocatio ad Caesarem — the right Paul exercised in Acts 25:11). Peter, as a Galilean Jew and non-citizen, had no such right. Agrippa, as Praefectus Urbi (city prefect), held the delegated imperium to execute non-citizens for capital offenses within the city without requiring the Emperor\'s personal signature on the warrant. However — the Neronian persecution of Christians was a state policy, not Agrippa\'s private initiative. Tacitus (Annals XV.44) is explicit: Nero identified Christians as the arsonists and ordered their punishment. Peter\'s execution under that edict was Nero\'s policy executed by Agrippa\'s office. The final authority was the Emperor. The final hand was the prefect.',
    legalMechanism: 'The senatus consultum (Senate decree) of 64 AD that sanctioned the Christian persecution gave Agrippa the legal cover. Nero\'s imperium proconsulare — inherited from Augustus\'s constitutional settlement — was the ultimate source of the authority. In the Augustan constitution, all delegated power flowed from the Princeps. Agrippa could not have executed Peter against Nero\'s wishes. Whether he needed to request permission specifically or acted under standing orders is not documented.',
  },

  neroGematria: {
    heading: 'NERO CAESAR = 666 — Hebrew Gematria',
    method: 'Gematria is the practice of assigning numerical values to letters. In Hebrew, each letter has a fixed numerical value. The name "Neron Kesar" (נרון קסר — the Hebrew/Aramaic transliteration of "Nero Caesar") sums to 666. This is the dominant scholarly explanation for the Number of the Beast in Revelation 13:18, supported by Adela Yarbro Collins (Harvard), David Aune (Notre Dame), and the majority of critical New Testament scholarship.',
    note: 'A variant spelling — "Nero Kesar" (נרו קסר, dropping the final Nun) — sums to 616, which is the number found in the oldest surviving manuscript of Revelation (Papyrus 115, Oxyrhynchus). Both 666 and 616 point to the same man.',
    letters: [
      { letter: 'נ', roman: 'Nun',    value: 50,  word: 'Neron' },
      { letter: 'ר', roman: 'Resh',   value: 200, word: 'Neron' },
      { letter: 'ו', roman: 'Waw',    value: 6,   word: 'Neron' },
      { letter: 'נ', roman: 'Nun',    value: 50,  word: 'Neron' },
      { letter: 'ק', roman: 'Qoph',   value: 100, word: 'Kesar' },
      { letter: 'ס', roman: 'Samekh', value: 60,  word: 'Kesar' },
      { letter: 'ר', roman: 'Resh',   value: 200, word: 'Kesar' },
    ],
    total: 666,
    sources: ['Yarbro Collins, A. (1976). The Combat Myth in the Book of Revelation. Harvard', 'Aune, D.E. (1998). Revelation 6–16. Word Biblical Commentary Vol. 52B', 'Bauckham, R. (1993). The Climax of Prophecy. T&T Clark'],
  },

  popGematria: {
    heading: 'VICARIUS FILII DEI = 666 — Latin Numeral Calculation',
    method: 'Latin uses letters as numerals (Roman numerals). "Vicarius Filii Dei" — "Vicar of the Son of God" — when its letters that double as Roman numerals are summed, produces 666. This calculation has been used since the Reformation (first prominently by Andreas Helwig, 1612) to identify the papacy with the Beast of Revelation.',
    controversy: 'CRITICAL NOTE: "Vicarius Filii Dei" is NOT a standard papal title. The actual title is "Vicarius Christi" (Vicar of Christ). "Vicarius Filii Dei" appears in the Donatio Constantini (Donation of Constantine) — an 8th-century document proven to be a forgery by Lorenzo Valla in 1440. The calculation is valid arithmetic. The premise — that this is an official papal title — is historically false. What remains true: the institutional claim of the papacy to be "Vicar of the Son of God" in any functional sense does carry this numerical weight when mapped to Latin numerals.',
    letters: [
      { letter: 'V', value: 5,   word: 'VICARIUS' },
      { letter: 'I', value: 1,   word: 'VICARIUS' },
      { letter: 'C', value: 100, word: 'VICARIUS' },
      { letter: 'A', value: 0,   word: 'VICARIUS' },
      { letter: 'R', value: 0,   word: 'VICARIUS' },
      { letter: 'I', value: 1,   word: 'VICARIUS' },
      { letter: 'U', value: 5,   word: 'VICARIUS' },
      { letter: 'S', value: 0,   word: 'VICARIUS' },
      { letter: 'F', value: 0,   word: 'FILII'    },
      { letter: 'I', value: 1,   word: 'FILII'    },
      { letter: 'L', value: 50,  word: 'FILII'    },
      { letter: 'I', value: 1,   word: 'FILII'    },
      { letter: 'I', value: 1,   word: 'FILII'    },
      { letter: 'D', value: 500, word: 'DEI'      },
      { letter: 'E', value: 0,   word: 'DEI'      },
      { letter: 'I', value: 1,   word: 'DEI'      },
    ],
    subtotals: [
      { word: 'VICARIUS', total: 112 },
      { word: 'FILII',    total: 53  },
      { word: 'DEI',      total: 501 },
    ],
    total: 666,
    sources: ['Helwig, A. (1612). Antichristus Romanus', 'Valla, L. (1440). De falso credita et ementita Constantini donatione (Donation of Constantine as forgery)', 'Froom, L.E. (1950). The Prophetic Faith of Our Fathers. Review and Herald'],
  },

  romanConstitution: {
    heading: 'THE ROMAN CONSTITUTION — THE LEGAL ARCHITECTURE THAT KILLED PETER',
    overview: 'Rome had no single written constitutional document. What scholars call the "Roman Constitution" was an accumulation of precedent, statute, custom (mos maiorum — the way of the ancestors), and senatorial decree built over seven centuries. By Nero\'s reign it had been partially dismantled and largely weaponized. Peter was executed inside this architecture — specifically inside the gap between its Republican ideals and its imperial reality.',
    pillars: [
      {
        name: 'Mos Maiorum — The Way of the Ancestors',
        latin: 'mos maiorum',
        description: 'The unwritten customs and traditions that governed Roman public life before statutory law. It included respect for the Senate, the rotation of magistracies, the prohibition of a standing army inside the city walls (hence Caesar\'s Rubicon crossing as an act of war), and the principle that no man should hold perpetual extraordinary power. Augustus honored it rhetorically while destroying it functionally. Nero discarded even the rhetoric.',
      },
      {
        name: 'SPQR — Senatus Populusque Romanus',
        latin: 'Senatus Populusque Romanus',
        description: 'The Senate and the People of Rome. The constitutional fiction that Rome was governed by the collective wisdom of the Senate and the sovereign will of the people. By 64 AD this was largely theater. The Senate voted Nero divine honors. The people received bread and circuses. Neither had meaningful power. The Princeps had absolute power dressed in Republican costume.',
      },
      {
        name: 'Imperium — The Source of All Authority',
        latin: 'imperium proconsulare maius',
        description: 'The supreme executive power — the right to command armies, execute criminals, and override lesser magistrates. Augustus held imperium proconsulare maius (greater proconsular power) across all provinces simultaneously, making him constitutionally superior to every other official in the empire. This power was transmitted to his successors. Nero\'s authority to persecute Christians derived directly from this Augustan inheritance — the "first citizen" architecture functioning exactly as designed, now turned toward mass execution.',
      },
      {
        name: 'Lex Iulia de Vi — The Law on Violence',
        latin: 'Lex Iulia de vi publica et privata',
        description: 'Passed under Julius Caesar and refined under Augustus. Defined illegal uses of force, including unauthorized execution of Roman citizens. The citizen\'s right of appeal (provocatio) to the Emperor was protected here — which is why Paul could appeal to Caesar. Peter, as a non-citizen peregrinus (foreigner), had no such protection. The same legal framework that protected Paul could not protect Peter.',
      },
      {
        name: 'Senatus Consultum — Senate Decrees',
        latin: 'senatus consultum ultimum',
        description: 'Emergency decrees by the Senate granting magistrates extraordinary powers. The Neronian Christian persecutions were enabled by senatorial sanction — the Senate formally endorsed the identification of Christians as responsible for the Great Fire. This gave Agrippa\'s actions the full weight of constitutional authority. Peter was not lynched. He was executed by the state, under law, with full institutional backing.',
      },
      {
        name: 'Provocatio — The Right of Appeal',
        latin: 'provocatio ad populum / ad Caesarem',
        description: 'The ancient right of a Roman citizen to appeal a capital sentence to the popular assembly (Republic) or the Emperor (Empire). Paul used this right. Peter could not. The provocatio was the single constitutional protection that might have saved Peter — and he did not qualify for it. His legal status as a Galilean provincial non-citizen placed him entirely at the mercy of the prefect\'s delegated imperium.',
      },
    ],
    conclusion: 'The Roman Constitution did not fail Peter. It functioned exactly as the imperial version was designed to function: the Emperor\'s policy, administered through the prefect\'s imperium, sanctioned by the Senate, against a man with no citizen\'s rights of appeal. Augustus\'s "first citizen" architecture — the one that survived because it was not called dictatorship — produced the legal machinery that executed the man whose inverted cross now symbolizes opposition to everything Rome and the Church built together.',
  },

  neroAsGod: {
    heading: 'NERO BEYOND JULIUS — NOT DICTATOR, BUT GOD',
    body: 'Julius Caesar was assassinated for calling himself Dictator Perpetuo. Augustus survived by calling himself merely the first citizen. Nero surpassed both — not by taking a title, but by receiving one: Deus. God. The eastern provinces of the empire — Egypt, Syria, Asia Minor — had traditions of ruler worship stretching back to the Pharaohs and Alexander. In these provinces, Nero was publicly addressed as θεὸς (theos) — God. Coins minted in Alexandria bore his image with the radiate crown of the sun god Sol Invictus. The Greek inscription on some coins reads ΝΕΡΩΝ ΚΛΑΥΔΙΟΣ ΚΑΙΣΑΡ — Neron Claudius Caesar — beneath divine iconography. Julius Caesar had himself deified posthumously by the Senate. Augustus accepted divine honors in the East while carefully refusing them in Rome. Nero accepted them everywhere. He did not merely hold the power of life and death over every person in the empire — including Peter. He held, in the institutional theology of the Roman East, the status of a living god. Peter was not executed by a dictator. He was executed by a man the empire worshipped as divine. The collision was therefore not merely political — it was cosmological: the man called Satan by Yeshua meeting his death at the hands of the man whose name summed, in Hebrew, to 666.',
    caesarComparison: [
      {
        name: 'Gaius Julius Caesar',
        title: 'Dictator Perpetuo',
        fate: 'Assassinated March 15, 44 BC — 23 stab wounds, Senate floor',
        error: 'Named the power openly. The Roman aristocracy could not tolerate explicit monarchy. Calling yourself dictator in perpetuity was a declaration that the Republic was dead. The senatorial class murdered him for the honesty.',
      },
      {
        name: 'Gaius Octavius — Augustus',
        title: 'Princeps (First Citizen)',
        fate: 'Died peacefully of natural causes, August 14 AD, age 75',
        error: 'Had no political error. Named the power nothing while holding everything. The most successful political architect in Roman history. His settlement lasted, in modified form, for four centuries.',
      },
      {
        name: 'Nero Claudius Caesar Augustus Germanicus',
        title: 'Princeps + Deus (God) in the Eastern Provinces',
        fate: 'Declared public enemy by the Senate, 68 AD. Fled Rome. Killed himself with a dagger, reportedly saying: "What an artist dies with me."',
        error: 'Surpassed Augustus by accepting divine status while alive — in the West as well as East. Murdered his own mother (Agrippina the Younger). Executed senators. Destroyed the Augustan fiction of the Principate through naked excess. The Senate — impotent against Augustus — finally broke against Nero because he gave them no face-saving fiction to shelter behind. He was not assassinated. He was simply abandoned by everyone, including his own guards.',
      },
    ],
  },
}

// ── Section 8: Rituals ────────────────────────────────────────────────────────

export type RitualCategory = 'hate' | 'sense' | 'seance' | 'invocation' | 'pact' | 'sabbat' | 'necromantic' | 'mass'
export type DangerLevel = 'extreme' | 'high' | 'moderate' | 'low'

export interface RitualSense {
  sense: string
  stimulus: string
  neurological: string
}

export interface RitualEntry {
  id: string
  name: string
  category: RitualCategory
  tradition: string
  dangerLevel: DangerLevel
  overview: string
  historicalOrigin: string
  howPerformed: string[]
  sensoricProfile: RitualSense[]
  neurologicalEffects: string
  psychologicalFunction: string
  documentedHarms: string
  evidenceLevel: 'strong' | 'moderate' | 'limited' | 'contested'
  sources: string[]
  tags: string[]
}

export const RITUALS: RitualEntry[] = [
  {
    id: 'black-mass',
    name: 'The Black Mass',
    category: 'mass',
    tradition: 'Theistic Satanism / Historical Occultism',
    dangerLevel: 'high',
    overview:
      'The Black Mass is a deliberate inversion of the Catholic Tridentine Mass — every sacred element is perverted, reversed, or desecrated. Its documented history dates to 17th-century France. It functions as a structured deconstruction of the participant\'s internalized Judeo-Christian moral framework through ritualized transgression.',
    historicalOrigin:
      'Documented in the Affair of the Poisons (France, 1678–82) involving Catherine Monvoisin and reportedly performed for Madame de Montespan, mistress of Louis XIV. Crowley revived versions in the 20th century (Liber XV, the Gnostic Mass). LaVey incorporated psychodramatic elements. Contemporary O9A (Order of Nine Angles) practitioners conduct more extreme versions.',
    howPerformed: [
      'Ritual space is prepared inversely: altar faces West (toward the setting/dying sun) rather than East. A large inverted pentagram is displayed.',
      'A "celebrant" plays the role of priest in black vestments or robes. A chalice (typically containing wine, occasionally blood in extreme variants) stands in for the Eucharist chalice.',
      'The Lord\'s Prayer, Creed, and liturgical prayers are recited backward or in deliberate inversion. Latin phrases are reversed phonetically or semantically.',
      'Desecration of consecrated hosts (Eucharist wafers) is the ritual climax in the traditional form — regarded as the ultimate transgression against Catholicism.',
      'Sexual elements are frequently incorporated (historically; the celebrant\'s altar was a naked woman\'s body). In some variants, animal sacrifice or blood-letting concludes the rite.',
      'The rite closes with an invocation of Satan or demonic entities, an oath of allegiance, and dismissal of participants.',
    ],
    sensoricProfile: [
      { sense: 'Vision', stimulus: 'Inverted crosses, black candles, skulls, blood-red décor, inverted pentagram', neurological: 'Amygdala activation via threat-appraisal circuits; sustained dark imagery conditions threat-default perceptual set' },
      { sense: 'Audition', stimulus: 'Backward speech, chanting in minor keys, bells tolled at the tritone (historically "diabolus in musica"), silence punctuated by sudden sound', neurological: 'Auditory cortex processes backward speech as novel/threatening; tritone activates mild acoustic startle reflex and noradrenergic arousal' },
      { sense: 'Olfaction', stimulus: 'Sulfur (brimstone), black copal incense, decay-adjacent scents, sometimes blood', neurological: 'Olfaction bypasses the thalamus and directly activates the amygdala and hippocampus via the olfactory bulb — the most primitive and emotionally loaded sensory pathway; sulfur odor is a documented fear-conditioned stimulus' },
      { sense: 'Taste', stimulus: 'Bitter herbs, wine, salt, sometimes blood', neurological: 'Gustatory cortex (insula) cross-activates with disgust circuitry; deliberate use of disgust-inducing tastes elevates cortisol and prepares participants for transgressive psychological territory' },
      { sense: 'Touch', stimulus: 'Cold stone or metal surfaces, rough ritual robes, physical prostration, sometimes scarification', neurological: 'Somatosensory cortex activation; cold/pain stimuli trigger noradrenergic release; physical prostration activates the dorsal vagal complex, inducing submission-state phenomenology' },
    ],
    neurologicalEffects:
      'The Black Mass is neurologically engineered — whether intentionally or through historical refinement — to maximize the disruption of the participant\'s moral-cognitive baseline. Inverted liturgy engages the PFC\'s cognitive dissonance circuitry, generating psychological discomfort that is then metabolized as "liberation." High arousal from transgression activates the mesolimbic dopamine system (transgression = reward). Olfactory sulfur directly activates amygdala fear memory. The cumulative effect across all senses is an altered state approximating drug-induced ego dissolution — the participant\'s internalized Catholic superego is structurally assaulted on every sensory channel simultaneously.',
    psychologicalFunction:
      'Primary function is identity deconstruction followed by re-inscription of a new identity. Participants who have internalized Catholic guilt are brought to the psychological edge of their most fundamental prohibitions, then cross them. If the experience is survived without immediate catastrophic consequence, it creates a powerful counter-conditioning effect against the original religious moral framework. Secondary function: group cohesion through shared transgression — the social psychology of in-group bonding is powerfully activated by collective law-breaking (shared deviance bonds).',
    documentedHarms:
      'Historical documentation includes psychological crisis, acute psychotic breaks in pre-disposed individuals, and trauma in coerced participants. Contemporary clinical literature documents PTSD-spectrum presentations in individuals who participated involuntarily. The desecration element specifically targets Catholic trauma survivors, making this ritual potentially re-traumatizing at a foundational level.',
    evidenceLevel: 'moderate',
    sources: ['Mandrou, R. (1968). Magistrats et Sorciers en France', 'Crowley, A. (1913). Liber XV — The Gnostic Mass', 'LaVey, A.S. (1969). The Satanic Rituals', 'Introvigne, M. (2016). Satanism: A Social History'],
    tags: ['Theistic', 'Inversion', 'Catholic', 'Transgression', 'Historical', 'Sense Manipulation'],
  },

  {
    id: 'destruction-ritual',
    name: 'Destruction Ritual (The Hex / Curse)',
    category: 'hate',
    tradition: 'LaVeyan Satanism / Theistic Satanism',
    dangerLevel: 'moderate',
    overview:
      'The Destruction Ritual is one of the three formal ritual types codified by Anton LaVey in The Satanic Bible (1969). It is a directed emotional working — a structured ceremony of hate — intended to bring harm, misfortune, or death to a specific enemy. LaVey framed it as "focused emotional catharsis channeled toward a target." In Theistic Satanism, it carries literal belief in demonic agency.',
    historicalOrigin:
      'Roots in ancient curse tablets (defixiones) documented across Greece, Rome, and Egypt (5th century BCE onward). Medieval European cursing magic (maleficium) served similar functions. LaVey systematized it philosophically: the destruction ritual is the formal enactment of "Do unto others as they do unto you — but do it first." O9A\'s "insight roles" sometimes include directed harm as spiritual practice.',
    howPerformed: [
      'The chamber is prepared with black candles arranged in an inverted pentagram configuration. The target\'s name, photograph, effigy (wax doll/poppet), or personal object is placed centrally on the altar.',
      'The ritualist enters a state of maximum emotional intensity — the emotion of hatred, contempt, and desire for the target\'s destruction must be fully inhabited, not intellectualized. LaVey explicitly warns that half-hearted emotion produces no effect.',
      'The Invocation of Destruction is recited — a formal address to Satan/the demonic hierarchy, specifying the target, the transgression, and the desired outcome.',
      'The target\'s effigy or symbol may be stabbed, burned, or destroyed. Blood may be drawn from the ritualist as an offering.',
      'Some practitioners write the target\'s name on parchment in blood or red ink, burn it, and scatter the ashes at a crossroads or the target\'s threshold.',
      'The ritual closes with a formal declaration: "It is done. So it is." The emotional state is then deliberately released and the matter surrendered to the demonic.',
    ],
    sensoricProfile: [
      { sense: 'Vision', stimulus: 'Target\'s photograph or effigy, black candles, inverted symbols, written curses', neurological: 'Visual cortex activates target-specific threat appraisal; sustained visual focus on target face activates fusiform face area + amygdala threat circuit, intensifying emotional activation' },
      { sense: 'Audition', stimulus: 'Invocation spoken aloud with maximum emotional intensity, silence, bell tolled at end', neurological: 'Self-generated vocalization activates Broca\'s area and motor cortex; speaking hatred aloud increases emotional salience via auditory feedback loop to limbic system' },
      { sense: 'Olfaction', stimulus: 'Black candle smoke, sulfur, iron (from blood)', neurological: 'Iron/blood scent activates atavistic predator-signaling circuits; paired with intense negative emotion, creates powerful conditioned olfactory-hatred association' },
      { sense: 'Touch', stimulus: 'Burning or stabbing target effigy, heat from candles, blood-letting', neurological: 'Physical destruction of effigy engages motor cortex and may reduce cognitive inhibition on aggression via motor-emotional coupling; pain from blood-letting spikes norepinephrine and endorphin release simultaneously' },
      { sense: 'Interoception', stimulus: 'Sustained rage state, elevated heart rate, physical trembling', neurological: 'Sustained emotional arousal elevates cortisol and epinephrine; interoceptive awareness of the body\'s rage state is interpreted as confirmation of ritual efficacy, creating a biofeedback loop' },
    ],
    neurologicalEffects:
      'The destruction ritual is essentially a formalized procedure for maximally activating the threat-aggression circuit: amygdala → hypothalamus → periaqueductal gray → sympathetic nervous system. The ritual structure — preparation, invocation, climax, release — mirrors the neurological arousal cycle. The deliberate inhabiting of pure hatred produces one of the highest cortisol and norepinephrine spikes achievable through psychological means alone. LaVey\'s claim that the emotional release is cathartic is neurologically contested: catharsis theory has been largely refuted (Bushman, 2002) — expressing aggression tends to increase rather than decrease aggression pathways. Chronic use of destruction rituals likely sensitizes rather than purges the anger network.',
    psychologicalFunction:
      'Explicit function: directed aggression with perceived supernatural agency. The sensation that hatred has been given cosmic force provides psychological relief from powerlessness. Implicit function: the ritual externalizes responsibility — by directing harm through supernatural channels, the practitioner maintains ego-syntonic self-image ("I didn\'t harm them; the universe did"). This is a formalized externalization of locus of control for aggression.',
    documentedHarms:
      'For the ritualist: chronic activation of hatred circuitry has documented physical health consequences (elevated inflammatory markers, cardiovascular risk, immune suppression). No reliable evidence exists that destruction rituals cause harm to targets through supernatural means. Documented secondary harms: ritualists have committed actual physical violence against targets following ritual intensification of hatred, using the ritual narrative as psychological permission.',
    evidenceLevel: 'moderate',
    sources: ['LaVey, A.S. (1969). The Satanic Bible — Book of Belial', 'Bushman, B.J. (2002). Does venting anger feed or extinguish the flame? Personality and Social Psychology Bulletin', 'Stratford, L. (1988). Satan\'s Underground (SRA survivor account)'],
    tags: ['LaVeyan', 'Hate Ritual', 'Directed Aggression', 'Cursing', 'Catharsis'],
  },

  {
    id: 'seance',
    name: 'Séance / Necromantic Communication Ritual',
    category: 'seance',
    tradition: 'Theistic Satanism / Luciferianism / Spiritualism (distinct but overlapping)',
    dangerLevel: 'moderate',
    overview:
      'The séance (from French séance — "sitting") is a ritual attempt to communicate with the dead or with discarnate entities. In Satanic and dark occult contexts, séances specifically target demonic intelligences, deceased figures of power, or the practitioner\'s own ancestors for forbidden knowledge. The neurological literature documents clear altered-state and dissociative phenomena during séance conditions.',
    historicalOrigin:
      'Spiritualist séances were mainstreamed in 19th-century America following the Fox Sisters (1848). Dark occult séances diverged from Spiritualism by explicitly targeting demonic or malevolent entities. John Dee and Edward Kelley\'s Enochian communication sessions (1582–1587) — arguably the most documented pre-modern necromantic séance series — produced the Enochian language system. Aleister Crowley\'s Amalantrah Working and Liber 418 continue this tradition.',
    howPerformed: [
      'Participants form a circle, typically with linked hands, in near-total darkness or candlelight only. The circle is understood as both a protective boundary and a resonance chamber.',
      'A "medium" or lead practitioner enters a light trance state via rhythmic breathing, chanting, or hyperventilation. In dark séances, the trance is deepened using sleep deprivation, fasting, or entheogenic substances in some traditions.',
      'The target entity is named and invited. In Satanic variants this may be a specific demon (named from the Goetia or Ars Goetia hierarchies), a deceased occultist, or Satan himself.',
      'Communication is sought through: automatic writing (the medium writes without conscious control), planchette/Ouija board movement, direct vocalization by the medium, or physical phenomena (table movement, rappings — historically associated with ideomotor effect).',
      'The séance may include mirrors as "spirit gates" (black mirrors or obsidian scrying surfaces), which focus participant gaze and facilitate dissociation through Ganzfeld-like conditions.',
      'Closing the session involves formally dismissing the entity, breaking the circle, and grounding participants through food, light, and physical sensation.',
    ],
    sensoricProfile: [
      { sense: 'Vision', stimulus: 'Near darkness, single candle or black mirror, prolonged darkness adaptation, mirror gazing', neurological: 'Ganzfeld effect from uniform visual field causes visual cortex to generate endogenous imagery (hallucinations); dark adaptation shifts retinal processing; mirror-gazing produces facial pareidolia — perceived faces that activate the fusiform face area without external face stimulus' },
      { sense: 'Audition', stimulus: 'Silence punctuated by rappings, chanting, breathing sounds of others, sudden sounds interpreted as entity communication', neurological: 'Sensory deprivation of auditory field causes auditory cortex to generate endogenous sounds; hypnagogic auditory hallucinations are well-documented in low-stimulation environments; sudden sounds in silence generate disproportionate startle and significance-attribution' },
      { sense: 'Proprioception', stimulus: 'Linked hands creating physical feedback loop, stillness, dissociation from body position', neurological: 'Shared physical contact elevates oxytocin within the circle; prolonged stillness disrupts normal proprioceptive calibration; the ideomotor effect (unconscious movement) is misattributed to external agency during dissociative states' },
      { sense: 'Interoception', stimulus: 'Hyperventilation (some traditions), held breath, altered breathing patterns', neurological: 'Hyperventilation reduces CO2 and causes cerebral vasoconstriction, producing tingling, light-headedness, and visual changes — all misattributed to supernatural phenomena; breath-holding elevates CO2 and produces altered consciousness via carbonic acid CNS effects' },
    ],
    neurologicalEffects:
      'The séance environment is a scientifically tractable altered-state induction system. Darkness + silence = sensory deprivation → endogenous hallucination generation (well-documented in perceptual isolation research, Lilly, 1956; Mason & Brady, 2009). Shared physical contact elevates oxytocin → group bonding and reduced critical skepticism. The ideomotor effect (Carpenter, 1852; replicated across 150+ years of research) explains planchette and automatic writing movement without supernatural agency: unconscious motor impulses below conscious awareness produce movement that is genuinely experienced as externally driven. Hyperventilation produces genuine neurological symptoms (cerebral hypoxia, paresthesia) that are then attributed to spirit contact.',
    psychologicalFunction:
      'The séance externalizes internal unconscious material onto a supernatural framework. The messages received through automatic writing or entity communication are produced by the practitioner\'s own unconscious — the séance is essentially an elaborate projection system. Psychologically, this can function as a form of unconscious self-consultation or, in pathological cases, as an externalization of internal persecutory voices consistent with psychotic symptomatology.',
    documentedHarms:
      'Dissociative episodes following intense séance participation are documented clinically. Ouija board and automatic writing have been linked in case literature to the adoption of "entity alter" identities, consistent with dissociative identity formation. Particularly vulnerable are individuals with pre-existing dissociative tendencies, trauma histories, or psychotic spectrum vulnerabilities.',
    evidenceLevel: 'moderate',
    sources: ['Carpenter, W.B. (1852). On the Influence of Suggestion in Modifying and Directing Muscular Movement — Ideomotor Effect', 'Mason, O.J., & Brady, F. (2009). The psychotomimetic effects of short-term sensory deprivation. Journal of Nervous and Mental Disease', 'Wiseman, R. (2011). Paranormality. Macmillan'],
    tags: ['Séance', 'Necromantic', 'Spirit Communication', 'Dissociation', 'Sensory Deprivation'],
  },

  {
    id: 'sense-ritual',
    name: 'Sense Ritual (LaVeyan Sensorium)',
    category: 'sense',
    tradition: 'LaVeyan Satanism',
    dangerLevel: 'low',
    overview:
      'LaVey explicitly theorized a neurological basis for ritual efficacy in The Satanic Bible (1969) and The Satanic Rituals (1972). He identified the "Five Sense Conditioners" as the operational mechanism of all effective ritual: each sense must be deliberately engaged with specific stimuli to shift the practitioner\'s emotional state from ordinary consciousness into the "emotional sounding board" required for ritual to work. This is functionally equivalent to modern state-dependent learning theory.',
    historicalOrigin:
      'LaVey\'s sense ritual theory drew explicitly on psychology — specifically, the Pavlovian conditioning tradition and Gestalt psychology. He understood ritual as emotional technology: structured sensory environments that reliably produce target emotional states. His framework predates but parallels neuroscience findings on multi-sensory emotion induction. The Church of Satan\'s primary rituals (Compassion, Destruction, Lust) all use the same sense-conditioning protocol.',
    howPerformed: [
      'SIGHT (candles): Black candles are used exclusively — black absorbs all light frequencies, creating visual contrast and solemnity. The number and arrangement of candles signals the ritual type. The practitioner stares into the flame to induce mild visual trance via fixation.',
      'SOUND (bell + music): A Tibetan-style bell is struck to mark ritual boundaries (opening/closing). Appropriate music is selected to induce the target emotional state — LaVey recommended music matching the desired mood (martial for anger, seductive for lust, funereal for destruction). Silence is used strategically as acoustic contrast.',
      'SMELL (incense): Specific incense blends are assigned to each ritual type. Dragon\'s blood resin for power and protection, musk for lust, wormwood for destruction. The olfactory-amygdala pathway makes scent the most efficient emotional state-inducer available.',
      'TASTE (chalice): Wine, elixirs, or potions are consumed as both physical and symbolic acts. The taste triggers gustatory-emotional memory associations and marks the transition into ritual consciousness.',
      'TOUCH (ritual robe): A specific garment worn only during ritual creates a conditioned tactile trigger — over time, donning the robe becomes a conditioned stimulus that automatically shifts emotional state toward ritual-readiness, parallel to the effect of a uniform on psychological role-adoption.',
    ],
    sensoricProfile: [
      { sense: 'Vision', stimulus: 'Black candles, darkness, focused flame gaze, ritual symbols', neurological: 'Foveal fixation on candle flame inhibits saccadic eye movement, reducing PFC activity and inducing mild trance via hypnagogic convergence; darkness activates melanopsin pathways affecting circadian and mood-regulating systems' },
      { sense: 'Audition', stimulus: 'Bell strikes, emotionally congruent music, silence', neurological: 'Music activates limbic system and mesolimbic dopamine; emotionally matching music to desired ritual state is a form of mood induction confirmed across 200+ studies in music psychology; silence contrast amplifies subsequent stimuli' },
      { sense: 'Olfaction', stimulus: 'Ritual-specific incense', neurological: 'Olfactory bulb projects directly to amygdala and entorhinal cortex without thalamic relay — the fastest and most direct route to emotional memory. Conditioned olfactory stimuli produce rapid, reliable emotional state shifts documented in fear conditioning research (Herz, 2007)' },
      { sense: 'Taste', stimulus: 'Wine, ritual herbs', neurological: 'Gustatory insula activates; moderate ethanol lowers PFC inhibition; bitter compounds from ritual herbs (absinthe, wormwood, rue) engage adenosine receptor pathways affecting alertness' },
      { sense: 'Touch', stimulus: 'Ritual robe, physical objects, temperature', neurological: 'Conditioned tactile stimuli can reliably elicit emotional states after repeated pairing — classical conditioning applied to proprioceptive/tactile channels; role-adoption via costume is documented in social psychology (Putting on the Cloak studies, Adam & Galinsky, 2012)' },
    ],
    neurologicalEffects:
      'LaVey\'s sense ritual is the most scientifically defensible element of Satanic practice. Multi-sensory emotion induction is documented across neuroscience and psychology: each sense activates distinct limbic pathways that collectively shift the individual\'s emotional state. The five-sense protocol effectively creates a total-environment emotional induction chamber. From a neuroscience perspective, this is a sophisticated application of state-dependent memory and conditioning — the ritual state becomes a trained neurological configuration reliably accessible through the same sensory cues.',
    psychologicalFunction:
      'The sense ritual functions as a psychological state-change technology. By reliably inducing the target emotional state (lust, rage, sorrow), it enables the practitioner to access emotional material that is unavailable in ordinary inhibited consciousness. The ritual provides both permission and mechanism for full emotional inhabiting. LaVey\'s framework essentially psychologizes magic: the "supernatural" effect is the neurological effect of focused emotional state on attention, motivation, and subsequent behavior.',
    documentedHarms:
      'The sense ritual proper carries minimal direct harm risk when conducted by adults voluntarily. Indirect risks: conditioning the self to associate extreme emotional states (rage, lust) with specific sensory cues can create maladaptive emotional triggers in daily life. The practice can also be used manipulatively to condition others through environmental control.',
    evidenceLevel: 'strong',
    sources: ['LaVey, A.S. (1969). The Satanic Bible — Book of Belial: Ritualistic Use of the Senses', 'Herz, R.S. (2007). The Scent of Desire. William Morrow', 'Adam, H., & Galinsky, A.D. (2012). Enclothed cognition. Journal of Experimental Social Psychology', 'Husain, G., et al. (2002). Effects of musical tempo and mode on arousal, mood, and spatial abilities. Music Perception'],
    tags: ['LaVeyan', 'Sense Conditioning', 'Emotional Technology', 'State Induction', 'Pavlovian'],
  },

  {
    id: 'blood-pact',
    name: 'Blood Pact Ritual',
    category: 'pact',
    tradition: 'Theistic Satanism / Medieval Occultism',
    dangerLevel: 'extreme',
    overview:
      'The Blood Pact is a formal covenant between a human practitioner and Satan or a specific demonic entity, signed in the practitioner\'s blood. It represents the ultimate identity-commitment ritual: the total surrender of the self to a demonic patron in exchange for power, knowledge, or fulfillment of a specific desire. Historically it was the most feared and sought ritual in Western occultism.',
    historicalOrigin:
      'Earliest documented pacts appear in Christian apocrypha — the Theophilus legend (6th century) is the archetypal Western pact narrative. Faust legend (16th century, Marlowe and Goethe) established the cultural template. Historical inquisition records (Malleus Maleficarum, 1487) describe pact ceremonies. More recent: O9A traditions involve formal oaths of allegiance to demonic entities, sometimes sealed in blood.',
    howPerformed: [
      'A formal pact document is prepared — handwritten on parchment, specifying the terms: what is offered (soul, loyalty, years of life) and what is requested (power, wealth, knowledge, destruction of enemies).',
      'The practitioner opens a vein or cuts the palm to produce blood, which is used to sign the document. Blood symbolically binds the biological self — not merely the conscious will — to the agreement.',
      'The pact is read aloud at a crossroads (traditional liminal space associated with demonic activity) or before an altar, at midnight, during a new moon or specific astrological configuration.',
      'The signed document is burned — in some traditions, the ashes are scattered at the crossroads; in others, preserved as a binding artifact.',
      'Some traditions require the practitioner to renounce their baptism, reject all protective spiritual affiliations, and verbally invite total demonic possession of their person.',
      'Modern O9A variants involve seven-fold initiatory paths where blood pact elements are embedded across multiple initiations over years.',
    ],
    sensoricProfile: [
      { sense: 'Pain/Interoception', stimulus: 'Self-inflicted incision, blood flow', neurological: 'Acute pain triggers β-endorphin and enkephalin release via μ-opioid receptors — producing dissociative analgesia and euphoria; adrenaline spike simultaneously activates sympathetic system; the combination creates a powerful neuroendocrine state uniquely associated with this ritual act' },
      { sense: 'Vision', stimulus: 'Own blood, written pact, flames consuming the document', neurological: 'Sight of own blood activates complex threat/fear circuitry with simultaneous self-preservation and self-harm conflict; burning document engages visual cortex and episodic memory encoding — the image is neurologically impressed with maximal emotional salience' },
      { sense: 'Touch', stimulus: 'Blood warmth, pen on parchment, flame heat', neurological: 'Physical sensation during signing engages somatosensory cortex and proprioceptive pathways, grounding the psychological commitment in bodily experience — making it neurologically more "real" than a purely cognitive decision' },
    ],
    neurologicalEffects:
      'The blood pact is neurologically a maximal commitment ritual. Behavioral economics research (Ariely et al.) demonstrates that signing a document dramatically increases commitment follow-through — the physical act of signing engages implicit memory systems that monitor consistency with signed commitments. When the signature is in blood with associated pain (endorphin release) and extreme emotional arousal (noradrenergic/dopaminergic spike), the neurological encoding of the commitment is as strong as the brain is capable of producing outside of trauma. The identity reorganization following a blood pact may be equivalent in neurological terms to a conversion experience — a sudden, total, and lasting restructuring of self-concept.',
    psychologicalFunction:
      'The blood pact serves as a final bridge-burning mechanism: it makes return to previous identity psychologically impossible within the belief framework. The irreversibility (reinforced by supernatural stakes) eliminates ambivalence and produces the unequivocal identity commitment that group dynamics research identifies as the most powerful predictor of sustained group membership. The pain element adds physical memory — the body literally carries the mark of the covenant.',
    documentedHarms:
      'Direct: self-harm injury, infection, blood-borne pathogen transmission. Psychological: identity foreclosure and cult-like commitment making exit extremely difficult. Severe cases documented in forensic literature where individuals committed serious crimes they attributed to fulfilling pact obligations to demonic entities. The combination of religious delusion, blood ritual, and pain-conditioning is documented in several violent offender profiles.',
    evidenceLevel: 'limited',
    sources: ['Stephens, W.O. (2002). Demon Lovers: Witchcraft, Sex, and the Crisis of Belief. University of Chicago Press', 'Introvigne, M. (2016). Satanism: A Social History', 'Ariely, D. (2008). Predictably Irrational — commitment and self-signaling research'],
    tags: ['Pact', 'Blood', 'Identity Commitment', 'Theistic', 'Self-Harm', 'Irreversibility'],
  },

  {
    id: 'sabbat',
    name: 'The Sabbat (Dark Gathering Ritual)',
    category: 'sabbat',
    tradition: 'Theistic Satanism / Witchcraft / O9A',
    dangerLevel: 'high',
    overview:
      'The Sabbat is a collective dark ritual gathering, historically associated with witches\' meetings and now practiced in various forms across Theistic Satanism and the O9A. It combines group altered-state induction, collective invocation, physical ecstasy (dancing, chanting, feasting), and initiatory ceremonies. The Sabbat\'s neurological power derives from group synchrony effects — neurological phenomena unique to collective ritual that exceed anything achievable in solitary practice.',
    historicalOrigin:
      'Historical Sabbat accounts come primarily from Inquisition torture-extracted confessions (Grand Sabbat at Blokula, etc.) — their factual content is unreliable. However, collective dark ritual gatherings have been documented in O9A texts (the Hebdomadry tradition), in certain Theistic Satanic orders, and in LaVey\'s original Church of Satan rituals, which were explicitly social ceremonies conducted in the Black House, San Francisco.',
    howPerformed: [
      'Participants gather at a liminal location — traditionally crossroads, forests, or caves; modern variants use private ritual chambers.',
      'The Sabbat typically occurs at astrologically significant times: Walpurgisnacht (April 30), Samhain (October 31), winter and summer solstices.',
      'Collective chanting and drumming are used to induce synchronized trance. Rhythmic percussion at 4–7 Hz entrains theta brainwaves via neural entrainment.',
      'The Feast: ritual consumption of food and drink — symbolically transgressive foods, wine, sometimes substances in extreme traditions. The shared meal activates collective oxytocin bonding.',
      'Dancing and physical ecstasy build to an emotional peak — the climax of the Sabbat — at which point collective invocation is performed with all participants in maximum arousal state.',
      'Initiations, pact renewals, and sexual rites may be incorporated in extreme variants. The Sabbat concludes with collective exhaustion and grounding.',
    ],
    sensoricProfile: [
      { sense: 'Audition', stimulus: 'Collective drumming at theta frequency (4–7 Hz), chanting, call-and-response', neurological: 'Neural entrainment: the auditory cortex synchronizes firing to rhythmic beat frequency; 4-7 Hz drumming drives theta brainwave entrainment across the group, producing collective altered states and reducing PFC inhibitory control' },
      { sense: 'Proprioception', stimulus: 'Rhythmic dancing, collective movement, physical contact', neurological: 'Synchronous movement between individuals activates mirror neuron systems and elevates oxytocin; the social pain threshold is elevated during synchronized movement (Dunbar, 2012) — group members feel collective euphoria and reduced individual pain sensitivity' },
      { sense: 'Vision', stimulus: 'Firelight (flickering at 8–12 Hz), darkness beyond the firelight, collective ritual imagery', neurological: 'Firelight flickering can entrain alpha brainwaves; the contrast between lit center and dark periphery creates a perceptual "ritual world" vs. "outside world" boundary that reinforces cognitive separation from ordinary reality' },
      { sense: 'Olfaction', stimulus: 'Incense, fire smoke, body heat of others, night air', neurological: 'Collective olfactory environment creates shared neurological anchoring — participants\' amygdalas are simultaneously activated by the same olfactory stimuli, contributing to group synchrony and memory encoding' },
    ],
    neurologicalEffects:
      'The Sabbat produces neurological effects impossible to replicate in solitary practice. Synchronized movement elevates pain thresholds and elevates oxytocin across the group (Dunbar et al., 2012 — evolutionary psychology of synchronized movement). Collective drumming at theta frequencies produces group-wide brainwave entrainment — participants literally synchronize their neural oscillations, producing a group-level altered state. Research on collective effervescence (Durkheim) has been neurologically validated: shared ritual arousal produces what Whitehouse (2004) calls "high-arousal" ritual effects — extreme emotional intensity encoding the experience in episodic memory with extraordinary salience and durability.',
    psychologicalFunction:
      'The Sabbat is primarily a group cohesion and identity-bonding ritual. The shared altered state creates a collective identity experience that transcends individual psychology — participants feel genuinely merged with the group at a neurological level. This is the primary mechanism of high-control group membership: after a Sabbat-type experience, leaving the group means losing access to a neurological state that has become deeply valued. The Sabbat is also an initiation amplifier: commitments made during collective high-arousal are neurologically encoded with greater durability than those made in ordinary consciousness.',
    documentedHarms:
      'Group disinhibition: individual moral constraints are reduced in group ritual contexts (deindividuation). Acts that would not be committed alone become possible in collective high-arousal states. Documented in cult literature. Coercive initiation elements in some Sabbats constitute assault. The extreme oxytocin-driven in-group bonding creates corresponding out-group dehumanization.',
    evidenceLevel: 'moderate',
    sources: ['Dunbar, R.I.M., et al. (2012). Performance of music elevates pain threshold and positive affect. Evolutionary Psychology', 'Whitehouse, H. (2004). Modes of Religiosity. AltaMira Press', 'Rouget, G. (1985). Music and Trance. University of Chicago Press'],
    tags: ['Collective', 'Sabbat', 'Group Ritual', 'Neural Entrainment', 'Oxytocin', 'Theta Wave'],
  },

  {
    id: 'invocation',
    name: 'Demonic Invocation / Goetic Summoning',
    category: 'invocation',
    tradition: 'Theistic Satanism / Goetia / Theurgic Occultism',
    dangerLevel: 'high',
    overview:
      'Goetic invocation is the ritual summoning of specific named demons from the classical demonological hierarchies — primarily the Ars Goetia (72 demons of Solomon), the Pseudomonarchia Daemonum, or the Grimorium Verum. Each demon has a specific sigil, title, rank, and domain of power. The invocation aims to compel the demon\'s presence and service. In Satanic practice, this is the highest-stakes ritual: a direct confrontation with a claimed malevolent supernatural intelligence.',
    historicalOrigin:
      'Solomonic magic traditions (Key of Solomon, 13th century) codified the 72 demon hierarchies. The Lesser Key of Solomon (Lemegeton, 17th century) remains the primary operational text. Crowley\'s Moonchild (1929) and Liber 418 document extended Goetic workings. Contemporary O9A and Temple of Set practitioners maintain active Goetic traditions. The Ars Goetia names include Bael, Agares, Vassago, Gamigin... through to Vine, Bifrons, and Decarabia.',
    howPerformed: [
      'Triangle of Manifestation: a triangle is inscribed on the floor outside the protective circle. The demon is summoned to appear within the triangle — never within the circle where the practitioner stands.',
      'The demon\'s sigil (unique geometric symbol) is inscribed on a brass or copper plate and placed within the triangle. The practitioner gazes at the sigil to "charge" it with concentrated attention.',
      'The Conjuration is spoken — a formal command using the demon\'s name, titles, and binding language derived from Solomonic tradition. It is repeated in escalating intensity if the demon does not appear.',
      'Evidence of presence is typically auditory (voices, sounds), visual (distortions, shadows), temperature changes (cold spots — cold is classically demonic in occult tradition), or psychological (thoughts/images attributed to the entity).',
      'The practitioner gives their request or command. The demon\'s compliance is secured through formal license — binding language from the Solomonic tradition that the demon is compelled to obey.',
      'The demon is formally dismissed through a dismissal conjuration and the circle is closed. Failure to properly close is considered extremely dangerous within the tradition.',
    ],
    sensoricProfile: [
      { sense: 'Vision', stimulus: 'Sigil gazing, darkness, smoke, scrying mirror, candle flame', neurological: 'Extended sigil gazing produces after-image effects and visual hypersaturation at the sigil\'s geometric form; combined with low-light and incense smoke, induces pareidolic perception of shapes in smoke/shadows misattributed to demonic manifestation' },
      { sense: 'Audition', stimulus: 'Silence, own voice reciting conjurations, expectation of response', neurological: 'Hyper-vigilant auditory attention in silence produces auditory pareidolia — the brain\'s pattern-recognition systems generate perceived sounds from background noise; expectation priming (knowing a demon should speak) dramatically increases false-positive auditory detection' },
      { sense: 'Temperature', stimulus: 'Cold sensations classically associated with demonic presence', neurological: 'Heightened attention and anxiety increase sensitivity to ambient temperature changes; vasomotor effects of fear response (peripheral vasoconstriction to redirect blood to core) create genuine subjective sensations of cold attributable to fear physiology, not supernatural cause' },
    ],
    neurologicalEffects:
      'Goetic invocation is a structured procedure for maximizing the conditions under which the brain generates hallucinations and misattributes them to external agents. The sigil-gazing produces controlled visual hallucination conditions (after-images, visual persistence). The extreme fear-arousal state activates threat-detection hypersensitivity — at peak cortisol and norepinephrine, the brain\'s signal-to-noise detection threshold is dramatically lowered, meaning random sensory events (sounds, drafts, shadows) are experienced as highly meaningful signals. This is the neuroscience of why people "see" and "hear" things during intense ritual: the ritual creates optimal neurological conditions for pattern-detection false positives.',
    psychologicalFunction:
      'Invocation serves the psychological function of externalizing inner psychological material onto a powerful supernatural figure. The demon contacted is consistently described as embodying qualities the practitioner fears, desires, or wishes to deploy. This is functionally identical to active imagination (Jung\'s technique) but without the integrative intent — the material is not processed and integrated but attributed to and commanded as an external intelligence.',
    documentedHarms:
      'Acute psychotic breaks following intense Goetic workings are documented in occult literature and clinical case reports. The fear arousal system pushed to sustained maximum activation can trigger genuine psychotic episodes in predisposed individuals. The belief structure (demonic contracts, possession, failure to close) creates chronic paranoid ideation. Documented in forensic psychiatry as a context for psychotic violence.',
    evidenceLevel: 'limited',
    sources: ['Peterson, J.H. (Ed.). (2001). The Lesser Key of Solomon. Weiser Books', 'Reed, G. (1988). The Psychology of Anomalous Experience. Prometheus Books', 'Sutter, J.D., et al. (2014). Paranormal belief and psychopathology. Journal of Nervous and Mental Disease'],
    tags: ['Goetia', 'Invocation', 'Demonology', 'Hallucination', 'Psychosis Risk', 'Theistic'],
  },
]

export const RITUAL_DANGER_NOTE = `Danger levels reflect the assessed psychological and physical harm potential based on clinical literature, forensic documentation, and neurological mechanisms. "Extreme" indicates documented irreversible psychological or physical harm. "High" indicates significant risk of trauma, psychosis, or self-harm. "Moderate" indicates manageable risk in consenting adults with psychological stability. "Low" indicates minimal direct harm risk. All ratings are clinical assessments, not supernatural evaluations.`
