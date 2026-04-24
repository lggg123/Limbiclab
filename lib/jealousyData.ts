// ── Neurobiology of Jealousy — Deep Research Content ──────────────────────────

export const JEALOUSY_THESIS = {
  core: `Jealousy is not a character flaw — it is an evolved threat-detection system operating through the same neural architecture as physical danger processing. Romantic jealousy specifically activates a convergence of the social pain network (anterior cingulate cortex, insula), the reward deprivation circuit (nucleus accumbens, ventral tegmental area), and the threat-appraisal system (amygdala, prefrontal cortex). The result is a neurochemically unique state: simultaneous activation of the pain, grief, and rage circuits — a state with no direct pharmacological equivalent and which evolution has made extremely difficult to suppress voluntarily.`,
  evolutionaryLogic: `From a gene-propagation standpoint, jealousy solves a critical adaptive problem: detecting and responding to threats to exclusive access to a reproductive partner. Males face paternity uncertainty; females face resource withdrawal. Evolutionary psychologists predict — and cross-cultural data confirm — that male jealousy peaks on sexual infidelity cues while female jealousy peaks on emotional infidelity cues. This sex difference is partially mediated by differential vasopressin receptor distribution and testosterone-modulated amygdala reactivity, not cultural learning alone.`,
  distinction: `Jealousy must be distinguished from envy. Jealousy involves a triad: self, partner, and rival — a perceived threat to an existing relationship. Envy involves a dyad: self and another who possesses something desired. Neuroimaging confirms this distinction: jealousy activates anterior cingulate cortex (social pain) and amygdala (threat); envy activates anterior insula (visceral discomfort) and dorsal striatum (reward comparison). Both activate the PFC, but for different regulatory demands.`,
}

export const BRAIN_REGIONS = [
  {
    region: 'Anterior Cingulate Cortex (ACC)',
    color: '#8A0303',
    role: 'Social Pain Processing',
    mechanism: `The ACC, particularly the dorsal ACC (dACC), is the primary "social pain" region of the brain. Eisenberger et al. (2003) demonstrated that social exclusion activates dACC at the same intensity as physical pain — explaining why jealousy and heartbreak are experienced as genuinely painful rather than emotionally distressing. During jealousy induction paradigms, the dACC shows activation proportional to attachment anxiety scores. The ACC also performs conflict monitoring — detecting discrepancy between the expected state (exclusive relationship) and the perceived state (threat to exclusivity), generating the characteristic cognitive preoccupation and rumination of jealousy.`,
    clinicalNote: 'ACC hyperactivation is associated with prolonged grief, OCD rumination, and the intrusive thoughts characteristic of pathological jealousy. ACC lesions can reduce jealousy intensity but also impair all social pain processing.',
    citation: 'Eisenberger et al. (2003); Takahashi et al. (2006)',
  },
  {
    region: 'Amygdala',
    color: '#d4a017',
    role: 'Threat Appraisal & Rage Preparation',
    mechanism: `The amygdala performs rapid unconscious appraisal of rival threats. It activates before conscious awareness of the rival's presence, triggering the initial physical jealousy response (heart rate surge, muscle tension, attention capture). The lateral nucleus processes the rival-as-threat signal; the central nucleus triggers autonomic arousal; the basolateral complex encodes the threat with emotional salience, making the rival's face neurologically "unforgettable." Testosterone amplifies amygdala reactivity — higher-testosterone individuals show faster and more intense amygdala responses to romantic rivals, partly explaining individual variation in jealousy intensity.`,
    clinicalNote: 'Amygdala hyperreactivity combined with poor PFC regulation predicts rage-based jealousy violence. Antisocial personality disorder and borderline personality disorder — both associated with amygdala dysregulation — show elevated pathological jealousy rates.',
    citation: 'Bhatt et al. (2012); van Honk et al. (2011)',
  },
  {
    region: 'Nucleus Accumbens & VTA',
    color: '#2a9d9d',
    role: 'Reward Deprivation & Craving',
    mechanism: `The jealousy circuit includes the mesolimbic dopamine pathway (VTA → nucleus accumbens) — the same circuit implicated in addiction and romantic love. When a bonded partner's attention shifts to a rival, the dopamine system enters a state neurologically similar to reward withdrawal: low dopamine availability, reduced motivation, seeking behavior, and hypersensitivity to partner-related cues. This explains why jealous individuals cannot stop monitoring their partner — the dopamine system is attempting to restore lost reward. Neuroimaging studies show that jealousy-inducing stimuli selectively activate the caudate nucleus and putamen, the same regions activated by viewing a romantic partner's photograph.`,
    clinicalNote: 'The dopaminergic component of jealousy explains why it can become compulsive and addictive in quality — the monitoring, checking, and rumination produce small dopamine pulses that temporarily relieve the withdrawal state while reinforcing the behavior.',
    citation: 'Takahashi et al. (2006); Fisher et al. (2010)',
  },
  {
    region: 'Prefrontal Cortex (PFC)',
    color: '#7c3aed',
    role: 'Appraisal, Regulation & Attribution',
    mechanism: `The lateral and ventromedial PFC are responsible for appraising the reality of a jealousy threat (is this actually a threat?), regulating the emotional response, and attributing intentions to the rival and partner. Secure individuals with strong PFC-to-amygdala connectivity can perform accurate threat appraisal and down-regulate jealousy. Insecure individuals with weaker PFC regulation cannot distinguish genuine threats from benign partner behaviors, producing jealousy in response to innocuous cues. The right ventrolateral PFC is the key node for deliberate suppression of jealousy — damage to this region impairs the ability to voluntarily reduce jealous feelings.`,
    clinicalNote: 'Cognitive reappraisal of jealousy-inducing situations requires intact dorsolateral PFC function. Alcohol, stress, and sleep deprivation all impair dlPFC function and are associated with jealousy escalation in relationships.',
    citation: 'Ochsner et al. (2002); Harmon-Jones et al. (2009)',
  },
  {
    region: 'Anterior Insula',
    color: '#5a7a3a',
    role: 'Visceral Body Experience',
    mechanism: `The anterior insula receives interoceptive signals from the body and integrates them with emotional context. During jealousy, the insula encodes the gut-churn, nausea, chest tightness, and physical agitation characteristic of the emotion. Insula activation correlates with the felt intensity of jealousy more strongly than self-report does — suggesting insula signals are the bedrock of the experience. The insula also processes disgust — explaining why jealousy often includes a component of revulsion (disgust at the rival or at the imagined infidelity) alongside grief and rage.`,
    clinicalNote: 'Alexithymia (difficulty identifying body sensations) reduces conscious jealousy experience but not the physiological response — avoidant individuals often show strong insula activation to jealousy stimuli despite denying the emotion.',
    citation: 'Craig (2002); Bartels & Zeki (2004)',
  },
]

export const NEUROCHEMISTRY = [
  {
    molecule: 'Cortisol',
    color: '#8A0303',
    role: 'Stress Hormone / Threat Mobilization',
    jealousyEffect: 'Cortisol rises sharply during jealousy induction. In attachment-anxious individuals, the cortisol spike is larger and persists longer — reflecting HPA axis dysregulation. Chronic jealousy-related cortisol elevation contributes to hippocampal volume reduction (impairing memory accuracy and increasing paranoid appraisal), immune suppression, and cardiovascular risk. Cortisol also directly potentiates amygdala reactivity — creating a self-amplifying loop where stress increases jealousy, which increases stress.',
    citation: 'Schoebi & Randall (2015)',
  },
  {
    molecule: 'Testosterone',
    color: '#d4a017',
    role: 'Dominance & Rival Response',
    jealousyEffect: 'Testosterone rises in response to a romantic rival — a "challenge response" documented across mammalian species. Higher baseline testosterone predicts faster and more intense jealousy responses to infidelity cues in men. In women, testosterone is associated with jealousy focused on status and resources rather than sexual rivals. Testosterone amplifies amygdala reactivity and reduces PFC inhibitory control — the neurobiological mechanism underlying jealousy-driven aggression.',
    citation: 'van Honk et al. (2011); Buunk et al. (2008)',
  },
  {
    molecule: 'Oxytocin',
    color: '#2a9d9d',
    role: 'Bonding Hormone / In-group Bias',
    jealousyEffect: 'Oxytocin is frequently called the "love hormone" but its effects on jealousy are paradoxical. Intranasal oxytocin enhances bonding AND defensive jealousy — it increases the perceived value of the partner and therefore the perceived cost of losing them. Oxytocin also strengthens in-group favoritism and out-group suspicion, amplifying rival threat appraisal. De Dreu et al. (2012) demonstrated that oxytocin increases ethnocentric behavior and defensive aggression toward perceived out-group rivals.',
    citation: 'De Dreu et al. (2012); Scheele et al. (2012)',
  },
  {
    molecule: 'Serotonin',
    color: '#7c3aed',
    role: 'Threat Sensitivity & Rumination',
    jealousyEffect: 'Low serotonergic tone is associated with threat hypersensitivity, rumination, and obsessional thinking — the cognitive hallmarks of intense jealousy. SSRIs reduce jealousy in clinical populations, both by elevating serotonin and by directly reducing OCD-spectrum rumination. The 5-HTTLPR short allele (associated with lower serotonin transporter efficiency) predicts higher jealousy intensity and greater relationship insecurity.',
    citation: 'Stein et al. (1994); Bhatt et al. (2012)',
  },
  {
    molecule: 'Dopamine',
    color: '#5a7a3a',
    role: 'Reward Seeking / Compulsive Monitoring',
    jealousyEffect: 'During jealousy, the mesolimbic dopamine system shifts from reward-anticipation mode to reward-threat mode. The nucleus accumbens shows reduced tonic dopamine firing (loss of connection reward) combined with phasic bursts in response to partner-related cues (monitoring reward). This dopamine pattern is virtually identical to the early-stage withdrawal pattern in substance addiction — explaining why jealous individuals feel compelled to check phones, monitor partners, and seek reassurance despite knowing it worsens the state.',
    citation: 'Fisher et al. (2010); Aron et al. (2005)',
  },
]

export const PATHOLOGICAL_JEALOUSY = {
  othellosyndrome: `Pathological jealousy (Othello syndrome, morbid jealousy) is characterized by an irrational, persistent belief in partner infidelity in the absence of adequate evidence. It is not a distinct diagnostic entity but a syndrome occurring across multiple psychiatric conditions: schizophrenia (delusions of infidelity), alcoholism (alcohol-related morbid jealousy), OCD (obsessional jealousy), borderline personality disorder, and traumatic brain injury affecting frontal lobe function. Prevalence in psychiatric populations ranges from 2–16%.`,
  neuralBasis: `Morbid jealousy involves breakdown of the PFC's threat-appraisal function — the filter that distinguishes genuine threat from perceived threat is disabled. In schizophrenia, dopamine dysregulation creates aberrant salience — ordinary partner behaviors acquire threatening significance. In OCD, the anterior cingulate cannot disengage from the threat-detection loop. In alcohol-related jealousy, chronic ethanol suppresses prefrontal regulation while sensitizing the amygdala, producing a permanently jealousy-prone state that persists even during sobriety.`,
  dangerRisk: `Pathological jealousy is one of the strongest predictors of intimate partner violence and partner homicide. Studies of homicide in domestic contexts consistently find delusional jealousy in 10–20% of perpetrators. The neural mechanism: amygdala-driven threat perception + impaired PFC regulation = action preparation without inhibition. This combination is most dangerous in individuals with antisocial personality features, testosterone dysregulation, and history of trauma.`,
  treatment: `Treatment depends on the underlying condition. Antipsychotics reduce delusional jealousy in schizophrenia. SSRIs reduce obsessional jealousy in OCD-spectrum presentations. Cognitive-behavioral therapy targeting jealousy-specific appraisal patterns has the strongest evidence base in non-psychotic populations. PFC-targeting neurostimulation (TMS to dlPFC) is experimental but promising for refractory cases.`,
}

export const JEALOUSY_REFS = [
  { authors: 'Eisenberger, N.I., Lieberman, M.D., & Williams, K.D.', year: 2003, title: 'Does rejection hurt? An fMRI study of social exclusion', journal: 'Science, 302, 290–292' },
  { authors: 'Takahashi, H., et al.', year: 2006, title: 'When your gain is my pain and your pain is my gain: Neural correlates of envy and schadenfreude', journal: 'Science, 323, 937–939' },
  { authors: 'Fisher, H.E., Brown, L.L., Aron, A., et al.', year: 2010, title: 'Reward, addiction, and emotion regulation systems associated with rejection in love', journal: 'Journal of Neurophysiology, 104, 51–60' },
  { authors: 'De Dreu, C.K.W., et al.', year: 2012, title: 'Oxytocin motivates non-cooperation in intergroup conflict', journal: 'PNAS, 109, 3, 1581–1586' },
  { authors: 'Scheele, D., et al.', year: 2012, title: 'Oxytocin modulates social distance between males and females', journal: 'Journal of Neuroscience, 32, 16074–16079' },
  { authors: 'van Honk, J., et al.', year: 2011, title: 'Testosterone and cortisol are associated with divergent empathic styles', journal: 'Psychoneuroendocrinology, 36, 794–802' },
  { authors: 'Harmon-Jones, E., et al.', year: 2009, title: 'The influence of threat and self-esteem on anger, jealousy, and cognitive processes', journal: 'Journal of Personality & Social Psychology, 97, 1–14' },
  { authors: 'Bhatt, M., et al.', year: 2012, title: 'Neural correlates of serotonergic modulation of social threat', journal: 'NeuroImage, 60, 386–395' },
  { authors: 'Stein, D.J., et al.', year: 1994, title: 'Serotonergic medications for sexual obsessions, sexual addictions, and paraphilias', journal: 'Journal of Clinical Psychiatry, 55, 384–391' },
]
