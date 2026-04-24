// ── Attachment Theory — Deep Research Content ─────────────────────────────────

export const ATTACHMENT_THESIS = {
  core: `Attachment is not sentiment — it is a biologically conserved survival system. Bowlby's control systems theory proposed that infants are born with an innate behavioral system that maintains proximity to a caregiver as a strategy against predation and environmental threat. Five decades of neuroscience have confirmed this: attachment behavior is governed by overlapping circuits in the amygdala, hypothalamus, and prefrontal cortex, modulated by oxytocin and corticotropin-releasing factor (CRF). Attachment style — secure, anxious, avoidant, or disorganized — reflects the calibration of these circuits in early life, and that calibration persists into adulthood as a stable neural signature.`,
  bowlbyFrame: `Bowlby drew on ethology (Lorenz's imprinting studies), psychoanalysis (object relations), and control systems theory to propose that infants use caregivers as a "secure base" for exploration and a "safe haven" in times of threat. He argued this was not a learned behavior but an evolved biological system — as fundamental as feeding or reproduction. His four phases of attachment (preattachment, attachment-in-the-making, clear-cut attachment, goal-corrected partnership) map directly onto the maturation of the HPA axis and prefrontal-limbic connectivity.`,
  ainssworthExtension: `Mary Ainsworth's Strange Situation Procedure (1978) operationalized Bowlby's theory and identified three initial attachment patterns — later expanded to four with the addition of disorganized attachment (Main & Solomon, 1986). Critically, the pattern predicts not just infant behavior but adult romantic relationships, immune function, stress reactivity, and vulnerability to psychopathology across the lifespan.`,
}

export const ATTACHMENT_STYLES = [
  {
    id: 'secure',
    label: 'SECURE',
    color: '#2a9d9d',
    prevalence: '~55–65% of adults',
    core: 'Caregiver was consistently responsive and available. The child learned that distress signals reliably produce comfort.',
    neuralProfile: 'Lower amygdala reactivity to social threat cues. Stronger prefrontal modulation of the stress response. Higher oxytocin receptor density in nucleus accumbens and anterior cingulate cortex. HPA axis regulation is efficient — cortisol rises appropriately under stress and returns to baseline quickly.',
    adultBehavior: 'Comfortable with intimacy and autonomy. Can tolerate separation without threat activation. Expresses needs directly. Conflict-resolution oriented rather than avoidant or escalatory.',
    psychopathologyRisk: 'Lowest risk for all Axis I disorders. Resilience buffer against trauma-induced PTSD. Secure base in romantic partners reduces allostatic load under life stress.',
    citation: 'Ainsworth et al. (1978); Mikulincer & Shaver (2007)',
  },
  {
    id: 'anxious',
    label: 'ANXIOUS / PREOCCUPIED',
    color: '#d4a017',
    prevalence: '~15–20% of adults',
    core: 'Caregiver was inconsistently responsive — sometimes available, sometimes not. The child learned to hyperactivate attachment signals (cry louder, cling harder) to maximize the chance of response.',
    neuralProfile: 'Chronically elevated amygdala reactivity. Right-lateralized threat-processing bias. Elevated baseline cortisol and slow HPA recovery. Down-regulated prefrontal inhibition of limbic arousal. Hyperreactive dopamine system — reward anticipation is heightened but reward receipt is muted, producing a perpetual seeking state.',
    adultBehavior: 'Preoccupation with relationship security. High vigilance for signs of rejection or abandonment. Protest behaviors when separation occurs (anger, crying, escalation). Difficulty self-soothing. Prone to jealousy and rumination.',
    psychopathologyRisk: 'Elevated risk for generalized anxiety disorder, borderline personality disorder, depression (especially dysthymia), and somatic symptom disorders. Strong predictor of suicidality following relationship dissolution.',
    citation: 'Fraley & Shaver (1997); Maier et al. (2020)',
  },
  {
    id: 'avoidant',
    label: 'AVOIDANT / DISMISSING',
    color: '#7c3aed',
    prevalence: '~20–25% of adults',
    core: 'Caregiver was consistently rejecting or emotionally unavailable when distress was expressed. The child learned to deactivate the attachment system — suppress distress signals — to maintain proximity without triggering rejection.',
    neuralProfile: 'Suppressed amygdala activation to attachment-relevant stimuli during conscious processing, but heightened activation during implicit (unconscious) tasks — indicating active cortical suppression rather than genuine low reactivity. Elevated right prefrontal EEG asymmetry at rest. Blunted oxytocin release in response to physical contact. Elevated cortisol despite reported low distress — the "hidden" stress response.',
    adultBehavior: 'Values autonomy and self-reliance. Discomfort with closeness or dependency. Minimizes emotional expression. Can appear emotionally unavailable or cold. Compulsively self-sufficient under stress.',
    psychopathologyRisk: 'Risk for alexithymia, narcissistic personality disorder, and somatization. Chronic suppression-related allostatic load contributes to cardiovascular disease risk. Partners of dismissing adults show elevated anxiety symptoms.',
    citation: 'Dozier & Kobak (1992); Fraley et al. (2015)',
  },
  {
    id: 'disorganized',
    label: 'DISORGANIZED / FEARFUL',
    color: '#8A0303',
    prevalence: '~10–15% general; 40–80% in maltreated populations',
    core: 'The caregiver was simultaneously the source of comfort and the source of fear. This creates an irresolvable approach-avoidance conflict — the "fright without solution" state described by Main & Hesse (1990).',
    neuralProfile: 'Profoundly dysregulated HPA axis — early trauma alters CRF receptor expression permanently. Reduced hippocampal volume (cortisol neurotoxicity). Deficient prefrontal-amygdala connectivity. Dissociative neural states observable under mild social stress. Epigenetic methylation of NR3C1 (glucocorticoid receptor gene) reduces stress resilience lifelong.',
    adultBehavior: 'Simultaneous desire for closeness and terror of it. Dissociative episodes under relational stress. Alternating idealization and devaluation of partners. Difficulty with emotional regulation. High chaotic relational patterns.',
    psychopathologyRisk: 'Strongest predictor of borderline personality disorder, complex PTSD, dissociative disorders, and psychotic episodes under stress. Children of disorganized adults show the same pattern at above-chance rates — the neurobiological template transmits across generations via epigenetic and behavioral pathways.',
    citation: 'Main & Solomon (1986); van IJzendoorn et al. (1999); Tyrka et al. (2012)',
  },
]

export const NEURAL_CORRELATES = {
  amygdala: `The amygdala acts as the central alarm system of attachment. It detects cues of caregiver absence or unresponsiveness and initiates behavioral protest (crying, seeking). In secure individuals, PFC-to-amygdala inhibitory projections rapidly dampen alarm states once proximity is restored. In anxiously attached individuals, this inhibition is weaker — the alarm continues ringing even after proximity is restored. In dismissing individuals, conscious amygdala activation is suppressed by prefrontal control, but the subcortical stress response continues covertly. fMRI studies by Gillath et al. (2005) showed that insecure attachment is associated with reduced deactivation of amygdala and insula during separation imagery — the limbic system cannot fully "let go" of threat.`,
  prefrontalCortex: `The medial prefrontal cortex (mPFC), particularly the ventromedial PFC and anterior cingulate cortex (ACC), performs top-down regulation of attachment-related emotional states. Secure base activation in adulthood (imagining a supportive partner) selectively reduces amygdala reactivity in fMRI — this mechanism is the neural basis of "internalized secure base," the concept that secure relationships become internal regulatory resources. The ACC specifically tracks social prediction errors — mismatches between expected and received care — and updates the internal working model accordingly. Chronic mismatch (inconsistent caregiving) produces ACC hyperactivation and perpetual social-prediction-error signaling.`,
  hypothalamusOxytocinSystem: `The paraventricular nucleus (PVN) of the hypothalamus is the primary source of central oxytocin. During safe physical contact with an attachment figure, PVN neurons release oxytocin into the bloodstream and into limbic brain regions simultaneously. Central oxytocin release in the amygdala, nucleus accumbens, and bed nucleus of the stria terminalis produces: (1) reduced fear-circuit activation, (2) enhanced reward-circuit signaling, and (3) attenuated cortisol stress response. Critically, early attachment quality predicts oxytocin receptor (OXTR) gene methylation — secure attachment is associated with less OXTR methylation and higher receptor availability. Neglect or abuse hypermethylates OXTR in the amygdala, reducing the calming effect of social contact for the remainder of the lifespan.`,
  insula: `The insula integrates interoceptive body signals with emotional context. Attachment behaviors are heavily interoceptive — physical sensation of caregiver warmth, heartbeat synchrony, skin contact — and the insula tracks all of these. In insecure adults, insula activation to social rejection is elevated compared to secure adults, suggesting that rejection is literally felt more intensely in the body. Anterior insula activation during partner-separation imagery correlates with attachment anxiety scores across multiple studies.`,
}

export const EPIGENETIC_MECHANISMS = [
  {
    gene: 'NR3C1',
    name: 'Glucocorticoid Receptor Gene',
    mechanism: 'Methylation of the NR3C1 promoter in the hippocampus reduces glucocorticoid receptor expression, impairing cortisol feedback inhibition of the HPA axis. Weaver et al. (2004) demonstrated in rats that low maternal licking/grooming produces high NR3C1 methylation → lifelong HPA hyperreactivity. This methylation pattern is reversible in rodents via HDAC inhibitor treatment, but in humans appears to stabilize early in development.',
    humanEvidence: 'McGowan et al. (2009) found significantly higher NR3C1 methylation in hippocampus of suicide completers with childhood abuse histories compared to controls — confirming the rat model extends to humans.',
    color: '#8A0303',
  },
  {
    gene: 'OXTR',
    name: 'Oxytocin Receptor Gene',
    mechanism: 'Methylation of the OXTR promoter in peripheral blood and brain tissue reduces oxytocin receptor availability. Higher OXTR methylation correlates with lower social connectedness, reduced empathy scores, and increased callous-unemotional traits in children who experienced early neglect.',
    humanEvidence: 'Dadds et al. (2014) found OXTR methylation predicts child attachment insecurity above and beyond parenting quality — suggesting genetic × epigenetic interaction.',
    color: '#2a9d9d',
  },
  {
    gene: 'BDNF',
    name: 'Brain-Derived Neurotrophic Factor',
    mechanism: 'BDNF Val66Met polymorphism reduces activity-dependent BDNF secretion. Met allele carriers show increased amygdala reactivity, reduced hippocampal volume, and greater anxiety — all markers of insecure attachment. Early adversity suppresses BDNF expression via methylation independently of genetic background.',
    humanEvidence: 'Gatt et al. (2009): BDNF Val66Met interacts with childhood adversity to predict adult attachment anxiety and depression risk.',
    color: '#d4a017',
  },
  {
    gene: 'SLC6A4',
    name: 'Serotonin Transporter Gene (5-HTTLPR)',
    mechanism: 'The short (s) allele of 5-HTTLPR is associated with greater amygdala reactivity and poorer emotion regulation. In combination with low caregiver sensitivity, s-allele carriers show higher rates of disorganized attachment — demonstrating classic gene × environment interaction at the attachment system level.',
    humanEvidence: 'Lyons-Ruth et al. (2009): 5-HTTLPR short allele × maternal disrupted communication predicts disorganized infant attachment in high-risk samples.',
    color: '#7c3aed',
  },
]

export const ADULT_ATTACHMENT_NEUROSCIENCE = {
  romanticBonding: `Adult romantic attachment activates the same neural circuitry as infant-caregiver attachment. Bartels & Zeki (2004) demonstrated that viewing photographs of romantic partners selectively activated medial insula, anterior cingulate cortex, putamen, and caudate nucleus — overlapping extensively with the mother-infant attachment circuit identified by the same group. Notably, romantic love deactivated the lateral prefrontal cortex — the brain's critical evaluation system — producing the well-documented reduction in analytical thinking about partners characteristic of early attachment.`,
  separationDistress: `Separation from an attachment figure activates the same anterior cingulate cortex regions implicated in physical pain — explaining the phenomenology of heartbreak as genuinely painful rather than metaphorical. Eisenberger et al. (2003) demonstrated that social exclusion activates the dorsal ACC and anterior insula — the same circuit activated by physical pain. Attachment theory predicts that more insecure individuals will show stronger ACC activation to separation cues, a prediction confirmed by neuroimaging.`,
  internalWorkingModels: `Bowlby's concept of "internal working models" — mental representations of self and attachment figures that guide expectations and behavior — has been partially operationalized as activity in the default mode network (DMN). The DMN, which includes mPFC, posterior cingulate cortex, and lateral temporal cortex, is most active during self-referential and social cognition. Insecure individuals show hyperactivation of these regions when processing attachment-relevant scenarios and slower disengagement — consistent with the clinical observation of rumination about relationships in insecure adults.`,
}

export const ATTACHMENT_REFS = [
  { authors: 'Bowlby, J.', year: 1969, title: 'Attachment and Loss, Vol. 1: Attachment', journal: 'Basic Books' },
  { authors: 'Ainsworth, M.D.S., Blehar, M.C., Waters, E., & Wall, S.', year: 1978, title: 'Patterns of Attachment', journal: 'Lawrence Erlbaum' },
  { authors: 'Main, M. & Solomon, J.', year: 1986, title: 'Discovery of a new, insecure-disorganized/disoriented attachment pattern', journal: 'In Yogman & Brazelton (Eds.), Affective Development in Infancy' },
  { authors: 'Weaver, I.C.G., et al.', year: 2004, title: 'Epigenetic programming by maternal behavior', journal: 'Nature Neuroscience, 7, 847–854' },
  { authors: 'Gillath, O., Bunge, S.A., Shaver, P.R., et al.', year: 2005, title: 'Attachment-style differences in the ability to suppress negative thoughts', journal: 'NeuroImage, 28, 835–847' },
  { authors: 'Bartels, A. & Zeki, S.', year: 2004, title: 'The neural correlates of maternal and romantic love', journal: 'NeuroImage, 21, 1155–1166' },
  { authors: 'McGowan, P.O., et al.', year: 2009, title: 'Epigenetic regulation of the glucocorticoid receptor in human brain', journal: 'Nature Neuroscience, 12, 342–348' },
  { authors: 'Eisenberger, N.I., Lieberman, M.D., & Williams, K.D.', year: 2003, title: 'Does rejection hurt? An fMRI study of social exclusion', journal: 'Science, 302, 290–292' },
  { authors: 'Mikulincer, M. & Shaver, P.R.', year: 2007, title: 'Attachment in Adulthood', journal: 'Guilford Press' },
  { authors: 'Fraley, R.C. & Shaver, P.R.', year: 1997, title: 'Adult attachment and the suppression of unwanted thoughts', journal: 'Journal of Personality & Social Psychology, 73, 1080–1091' },
]
