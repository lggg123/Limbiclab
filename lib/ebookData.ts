// ── LimbicLab E-Book: The Neuroscience of the Dark ───────────────────────────
// Chapters synthesizing bipolar, environmental disorders, satanism neuroscience,
// trauma, creativity, and suicidology into a unified research narrative.

export interface EbookChapter {
  id: string
  number: string
  title: string
  subtitle: string
  content: EbookBlock[]
  wordCount: number
}

export type EbookBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'stat'; label: string; value: string }
  | { type: 'citation'; text: string }

export const EBOOK_META = {
  title: 'The Neuroscience of the Dark',
  subtitle: 'A Research Synthesis on Bipolar Disorder, Environmental Trauma, Belief Systems, and the Biology of Extremity',
  author: 'LimbicLab Research',
  year: '2025',
  edition: '1st Edition',
  description: 'A graduate-level synthesis spanning computational psychiatry, trauma neuroscience, the biology of religious and occult belief systems, and the neuroscience of creativity and suicidality. For researchers, clinicians, and intellectually serious readers.',
  totalChapters: 5,
}

export const EBOOK_CHAPTERS: EbookChapter[] = [
  {
    id: 'ch1',
    number: 'I',
    title: 'The Oscillating Brain',
    subtitle: 'Bipolar Disorder as Biological Rhythm Disorder',
    wordCount: 1100,
    content: [
      { type: 'quote', text: 'The cyclical nature of bipolar illness is not metaphor. It is molecular clock machinery running on dysregulated time.', attribution: 'Francis Benedetti, 2003' },
      { type: 'paragraph', text: 'Bipolar disorder is not a mood problem in the colloquial sense. It is a disorder of biological rhythm — a failure of the molecular clock system that governs every oscillating process in the body: sleep, hormone release, body temperature, neurotransmitter synthesis. The cycling between mania and depression reflects the dysregulation of endogenous biological rhythms, not simply good days and bad ones.' },
      { type: 'heading', text: 'The Molecular Clock' },
      { type: 'paragraph', text: 'Every cell in the body contains a molecular clock: a transcription-translation feedback loop built from the CLOCK, BMAL1, PER, and CRY genes. This loop takes approximately 24 hours to complete. The suprachiasmatic nucleus (SCN) in the hypothalamus coordinates the body\'s thousands of individual cellular clocks into the unified circadian rhythm we experience as the sleep-wake cycle, hunger, and mood variation across the day.' },
      { type: 'paragraph', text: 'In bipolar disorder, this system is structurally dysregulated. Genome-wide association studies have repeatedly identified clock genes — CLOCK, PER3, TIMELESS, ARNTL/BMAL1 — among the strongest genetic associations with bipolar risk. The CLOCK gene polymorphism T3111C is associated with longer manic episodes, reduced need for sleep, and elevated mood. CLOCK knockout mice — the animal model of this mutation — display hyperactivity, reduced anxiety, increased reward-seeking, and sensitivity to disruption: a rodent phenotype that maps directly onto human hypomania.' },
      { type: 'heading', text: 'Lithium as Clock Medicine' },
      { type: 'paragraph', text: 'The mechanism through which lithium — discovered as a mood stabilizer in 1949 by John Cade, empirically before its molecular targets were understood — operates has been gradually decoded over the past three decades. Its primary target is not a neurotransmitter receptor but a kinase: GSK-3β (glycogen synthase kinase-3 beta). GSK-3β phosphorylates clock proteins including PER2 and BMAL1, triggering their degradation and shortening the circadian period. Lithium inhibits GSK-3β, slowing this degradation and extending the period of the molecular clock.' },
      { type: 'paragraph', text: 'This is why lithium works for both mania and depression: it does not push the mood in either direction, but stabilizes the oscillation. The metaphor is not a drug that lifts or lowers mood but a metronome that regularizes rhythm. The circadian stabilization hypothesis explains what a pure neurochemical account of bipolar disorder cannot: why the same molecule prevents both poles.' },
      { type: 'stat', label: 'Suicide reduction with lithium', value: '60–80%' },
      { type: 'paragraph', text: 'Lithium also has documented neuroprotective effects. It upregulates BDNF (brain-derived neurotrophic factor), partially reversing the hippocampal atrophy that accumulates with each untreated depressive episode. It stabilizes mitochondrial membrane potential and reduces oxidative stress. And it is the only psychotropic with a demonstrated, specific anti-suicidal effect independent of its mood-stabilizing properties — an effect that may operate through serotonin system stabilization or direct preservation of frontal lobe volume.' },
      { type: 'heading', text: 'The Neuroimaging of Bipolar Disorder' },
      { type: 'paragraph', text: 'Structural MRI consistently reveals a frontolimbic pattern: enlarged, hyperactivated amygdalae; reduced gray matter in the ventrolateral and orbitofrontal prefrontal cortex; and hippocampal volume reduction proportional to illness duration and depressive episode count. Diffusion Tensor Imaging (DTI) reveals white matter microstructural abnormalities — reduced fractional anisotropy — throughout frontolimbic tracts, particularly the uncinate fasciculus connecting orbitofrontal cortex to amygdala and hippocampus.' },
      { type: 'paragraph', text: 'The functional signature is equally consistent: PFC hypofrontality with amygdala hyperactivation, a pattern that describes the core phenomenology of the disorder — emotions that are too large, too fast, and inadequately regulated by cognitive evaluation. The system that normally allows humans to slow down and think before acting is structurally compromised. The system that amplifies emotional response is structurally enlarged and hyperactivated.' },
      { type: 'citation', text: 'Strakowski, S.M. et al. (2012). Frontolimbic neural circuitry in bipolar disorder. Bipolar Disorders 14(2). | Benedetti, F. et al. (2003). CLOCK gene T3111C and manic episode duration. American Journal of Psychiatry.' },
    ],
  },
  {
    id: 'ch2',
    number: 'II',
    title: 'The Weathered Brain',
    subtitle: 'Environmental Stress, Epigenetics, and the Neuroscience of Poverty and Trauma',
    wordCount: 1200,
    content: [
      { type: 'quote', text: 'The body keeps the score. The genome keeps it longer.', attribution: 'After Bessel van der Kolk, 2014; Rachel Yehuda, 2016' },
      { type: 'paragraph', text: 'There is a persistent cultural mythology that psychiatric illness exists independently of environment — that the brain, like an isolated computer, either has the right hardware or it does not. This mythology has been systematically dismantled over the past three decades by convergent evidence from epidemiology, neuroimaging, stress biology, and epigenetics. The brain is not a fixed machine. It is a learning organ that encodes its history into its own structure.' },
      { type: 'heading', text: 'The ACE Architecture' },
      { type: 'paragraph', text: 'The Adverse Childhood Experiences (ACE) Study, initiated by Vincent Felitti and Robert Anda at Kaiser Permanente from 1995 to 1997, followed over 17,000 adults and established the most comprehensive dose-response relationship in psychiatric epidemiology: the higher the ACE score (abuse, neglect, household dysfunction, witnessing violence), the worse every health outcome measured — depression, anxiety, PTSD, substance use disorder, cardiovascular disease, cancer, and mortality.' },
      { type: 'stat', label: 'ACE score ≥4: fold-increase in depression risk', value: '4–12×' },
      { type: 'paragraph', text: 'The mechanism is biological, not merely social. ACEs dysregulate HPA axis development during critical developmental windows. The child\'s brain, designed to calibrate its threat-sensitivity to the actual level of danger in its early environment, learns that the world is dangerous, unpredictable, or that adults cannot be trusted to provide safety. This learning is instantiated neurologically: permanently sensitized HPA axis, enlarged amygdala, reduced hippocampal volume, decreased PFC gray matter, and elevated inflammatory markers. These are not psychological dispositions — they are structural changes visible on MRI.' },
      { type: 'heading', text: 'The Epigenetics of Inherited Trauma' },
      { type: 'paragraph', text: 'The most remarkable finding in this literature is that environmental trauma can be epigenetically inherited. Rachel Yehuda\'s research on Holocaust survivors and their offspring demonstrated altered methylation patterns on the FKBP5 gene — a stress-response regulator — in both generations. The children of Holocaust survivors, who did not experience the Holocaust directly, showed epigenetic marks consistent with stress-sensitized HPA axis regulation. The trauma was biologically transmitted.' },
      { type: 'paragraph', text: 'The mechanism involves DNA methylation (addition of methyl groups to cytosine residues at CpG sites near gene promoters) and histone modification (acetylation and deacetylation of histone proteins that control DNA accessibility). Early adversity produces hypermethylation of the glucocorticoid receptor gene (NR3C1), impairing the negative feedback loop that normally shuts off cortisol release. The HPA axis stays activated longer after stress exposure, producing cumulative neurological damage.' },
      { type: 'heading', text: 'Poverty as a Neurological Condition' },
      { type: 'paragraph', text: 'Sendhil Mullainathan and Eldar Shafir\'s research program on scarcity demonstrated that poverty is not merely uncomfortable — it is cognitively taxing in ways that go beyond opportunity cost. Financial scarcity directly occupies working memory. Experiments showed that priming low-income individuals with thoughts about a financial crisis produced a 13-point IQ deficit on subsequent cognitive tests. The same scarcity manipulation had no effect on affluent individuals. The poor are not cognitively impaired — they are operating with reduced cognitive bandwidth because managing scarcity consumes that bandwidth as an ongoing tax.' },
      { type: 'paragraph', text: 'This is compounded by the physical effects of chronic cortisol elevation on brain architecture. Jill Hanson\'s neuroimaging studies of infants from birth to 24 months showed that family poverty directly reduced the rate of brain growth — not through nutrition alone, but through the cortisol load produced by stress in caregivers, transmitted through physical contact, vocal tone, and attunement quality. Each year of childhood poverty reduces PFC surface area by approximately 1.3%.' },
      { type: 'citation', text: 'Felitti, V.J. et al. (1998). Relationship of ACEs to adult disease. American Journal of Preventive Medicine 14(4). | Yehuda, R. et al. (2016). Holocaust exposure and intergenerational FKBP5 methylation. Biological Psychiatry 80(5). | Mullainathan, S. & Shafir, E. (2013). Scarcity. Times Books.' },
    ],
  },
  {
    id: 'ch3',
    number: 'III',
    title: 'The Ritual Brain',
    subtitle: 'Neuroscience of Belief, Ceremony, and Altered States in Satanic Practice',
    wordCount: 1050,
    content: [
      { type: 'quote', text: 'Ritual is not magic. It is neurochemistry operating through cultural form.', attribution: 'LimbicLab Research Synthesis' },
      { type: 'paragraph', text: 'The neuroscience of religious and occult ritual practice is not a fringe topic. It is one of the most active areas of cognitive science, spanning neurotheology (Andrew Newberg), the psychology of disgust and moral cognition (Jonathan Haidt), and the psychopharmacology of altered states. What happens in the brain during intense ceremonial practice — and specifically during the inverted ceremonial forms associated with Satanic practice — can be analyzed with the same scientific vocabulary as any other neurological event.' },
      { type: 'heading', text: 'The Autonomic Architecture of Ritual' },
      { type: 'paragraph', text: 'Ritual practice — across all traditions — exploits the autonomic nervous system\'s capacity for arousal modulation. High-stimulation rituals (drumming, chanting, physical movement, extreme sensory input) activate the sympathetic system, producing norepinephrine and dopamine release, pupil dilation, increased heart rate, and the hyperactive alertness associated with awe, terror, and ecstasy. Low-stimulation rituals (meditation, slow breathing, darkness, silence) activate the parasympathetic system, reducing default mode network activity and producing the dissolution of self-boundaries associated with mystical experience.' },
      { type: 'paragraph', text: 'Satanic ritual practice exploits both poles and their interaction. High-arousal elements — the invocation, the dramatic ceremonial form, the use of darkness and light, the transgressive content — activate sympathetic arousal. The subsequent ritual structure then frames this arousal within an interpretive system that attributes its source to supernatural contact. This is not deception — it is the standard mechanism through which any intense ritual modulates meaning.' },
      { type: 'heading', text: 'Disgust, Transgression, and Neurological Encoding' },
      { type: 'paragraph', text: 'Jonathan Haidt\'s moral psychology research identified disgust as one of the foundational moral emotions — evolutionarily ancient, operating through the insula and basal ganglia, activated by contamination cues (bodily fluids, waste, death) and extended through cultural learning to moral violations. Satanic ritual practice frequently incorporates disgust-eliciting elements deliberately. The neurological effect is potent: disgust responses are among the most strongly encoded memories, resistant to extinction, and capable of fundamentally reorienting threat-appraisal systems.' },
      { type: 'paragraph', text: 'This is why Satanic ritual can produce lasting psychological effects in participants — including trauma responses. The same encoding power that makes religious ritual transformatively meaningful makes transgressive ritual capable of producing lasting neurological disruption when performed in coercive or psychologically vulnerable contexts.' },
      { type: 'heading', text: 'Nero, Peter, and the Political Theology of 666' },
      { type: 'paragraph', text: 'The number 666 in the Book of Revelation (13:18) is not mysticism. It is gematria — the ancient Near Eastern practice of encoding names as numbers. Neron Kesar (Nero Caesar in Greek transliterated to Hebrew) sums to 666 via standard Hebrew gematria: nun (50) + resh (200) + vav (6) + nun (50) + koph (100) + samech (60) + resh (200) = 666. The author of Revelation was encoding a political critique of the emperor who had ordered Peter\'s execution and launched the first Roman persecution of Christians in 64 CE.' },
      { type: 'paragraph', text: 'This encoding tradition — using numerical equivalents of names to make politically dangerous claims deniably — is the context in which the entire "beast" imagery of Revelation should be read. It is not prediction of a future Antichrist. It is a first-century political document written in the coded language of Jewish apocalypticism, identifying Nero as the embodiment of imperial anti-divine power.' },
      { type: 'citation', text: 'Bauckham, R. (1993). The Climax of Prophecy. T&T Clark. | Aune, D.E. (1998). Revelation 6–16. Word Biblical Commentary Vol. 52B. | Haidt, J. (2001). The emotional dog and its rational tail. Psychological Review 108(4).' },
    ],
  },
  {
    id: 'ch4',
    number: 'IV',
    title: 'The Lethal Intersection',
    subtitle: 'When Bipolar Disorder, Trauma, and Environmental Stress Converge in Suicidality',
    wordCount: 1000,
    content: [
      { type: 'quote', text: 'The suicidal state is not a decision. It is a neurological state — one with identifiable antecedents, traceable mechanisms, and often a short duration if survived.', attribution: 'LimbicLab Research Synthesis' },
      { type: 'paragraph', text: 'Suicidality does not have a single cause. It is the convergence of biological vulnerability (bipolar disorder, PTSD, depression), environmental stress (poverty, isolation, trauma), and a specific psychological state characterized by Thomas Joiner\'s triad: thwarted belongingness, perceived burdensomeness, and acquired capability for lethal self-harm. Understanding the neuroscience of this convergence is not academic — it is the prerequisite for effective intervention.' },
      { type: 'heading', text: 'The Mixed State: Maximum Lethality' },
      { type: 'paragraph', text: 'In bipolar disorder, the period of maximum suicide risk is not the depressive phase — it is the mixed state, in which depressive cognitive content (hopelessness, worthlessness, death ideation) coexists with the energy, agitation, and reduced impulse inhibition of a manic or hypomanic state. The depressive phase alone is rarely lethal: the person lacks the motivation and psychomotor activation to act. The manic phase produces energy but also temporarily inflates self-concept, buffering against suicidal ideation. The mixed state strips away both buffers simultaneously.' },
      { type: 'stat', label: 'Bipolar suicides occurring during mixed or depressive states', value: '60%' },
      { type: 'paragraph', text: 'This is compounded by the kindling phenomenon: each untreated mood episode lowers the threshold for the next. And suicidal crises themselves kindle — the neurological residue of surviving a suicidal crisis includes altered serotonin transporter expression, changed HPA axis reactivity, and modified prefrontal-limbic connectivity that increases vulnerability to the next crisis. Untreated bipolar disorder has a progressive course partly because suicidality is itself neurologically sensitizing.' },
      { type: 'heading', text: 'Environmental Acceleration' },
      { type: 'paragraph', text: 'When bipolar disorder or PTSD occurs in the context of poverty, social isolation, or racial trauma, the environmental stressors continuously load the HPA axis — maintaining cortisol elevation, suppressing hippocampal neurogenesis, reducing PFC gray matter, and heightening amygdala reactivity. The effect is bidirectional: the psychiatric disorder makes the person more vulnerable to environmental stressors, and the environmental stressors accelerate the progression of the disorder. This is the neuroscience of disparity — not merely a social observation but a biological mechanism.' },
      { type: 'paragraph', text: 'Economic shocks have measurable population-level effects on suicide rates. The 2008 financial crisis produced a 4.2% increase in global suicide rates. In Greece, austerity measures drove suicide rates up 35% between 2008 and 2011. These are not statistical abstractions — they are the aggregate of individual neurological crises, each with its own history of bipolar kindling, ACE scores, and HPA axis dysregulation, suddenly tipped over a threshold by the removal of economic stability and purpose.' },
      { type: 'heading', text: 'The Case for Means Restriction' },
      { type: 'paragraph', text: 'The most counterintuitive finding in suicidology is the effectiveness of means restriction. The suicidal state is often brief — minutes to hours of peak intensity. If lethal means are unavailable during that window, many people survive and never re-attempt. The detoxification of domestic gas in the UK in the 1960s produced a permanent 30% reduction in suicide rates — not displacement to other methods, but actual reduction. This demonstrates that suicidality is not inevitably determined: the timing and availability of means interacts with the biological state to determine outcomes.' },
      { type: 'citation', text: 'Joiner, T.E. (2005). Why People Die by Suicide. Harvard University Press. | Chang, S.S. et al. (2013). Economic crisis and rising suicide rates. BMJ 347. | Hawton, K. (2007). Restricting access to methods of suicide. Crisis 28(S1).' },
    ],
  },
  {
    id: 'ch5',
    number: 'V',
    title: 'The Creative Brain',
    subtitle: 'Genius, Suffering, and the Neurological Architecture of Artistic Extremity',
    wordCount: 900,
    content: [
      { type: 'quote', text: 'It is not that suffering produces genius. It is that the same neurological architecture that produces one can produce the other.', attribution: 'After Kay Redfield Jamison, 1993' },
      { type: 'paragraph', text: 'The association between bipolar disorder and exceptional creative achievement is one of the most replicated and most misunderstood findings in psychology. It is replicated: Nancy Andreasen\'s study of the Iowa Writers\' Workshop found writers to be eight times more likely to have bipolar disorder than the general population. Simon Kyaga\'s Swedish registry study of 1.2 million individuals found elevated creativity in first-degree relatives of bipolar patients — sharing genetic architecture without meeting clinical diagnostic criteria. It is misunderstood: the association does not mean that suffering produces genius, or that treatment diminishes creative capacity.' },
      { type: 'heading', text: 'Divergent Thinking and the Bipolar Phenotype' },
      { type: 'paragraph', text: 'The neurological mechanism of the creativity-bipolar link is not mysterious. Divergent thinking — the generation of multiple, loosely related associative responses from a single stimulus — is the cognitive operation most associated with creative output. Hypomania (the milder form of mania, without psychosis) specifically enhances divergent thinking: it increases the fluency of associations, reduces cognitive inhibition (the filtering process that normally prevents irrelevant ideas from reaching consciousness), elevates motivation, and extends the period of engaged work.' },
      { type: 'paragraph', text: 'The DARPP-32 gene variant (PPP1R1B) associated with bipolar disorder also enhances prefrontal dopamine function and working memory in healthy carriers — the same variant is associated with better cognitive flexibility. The genetic architecture of bipolar disorder is not simply pathological. It carries cognitive advantages in heterozygous form, which may explain why it has been maintained in the human population at 2.4% prevalence despite the fitness costs of severe mood episodes.' },
      { type: 'heading', text: 'The Population of Extremity' },
      { type: 'paragraph', text: 'The list of individuals who created transcendent work and died by suicide or lived with documented severe mental illness reads as a catalog of the 19th and 20th century\'s most significant cultural figures: Van Gogh (Bipolar I with psychotic features), Virginia Woolf (Bipolar I, died 1941), Hemingway (Bipolar II, died 1961), Sylvia Plath (bipolar depression, died 1963), Robert Lowell (Bipolar I, continued writing through multiple hospitalizations), Nietzsche (probable Bipolar I with psychotic features, collapse 1889). The pattern is not coincidence. It is neuroscience.' },
      { type: 'paragraph', text: 'Kay Redfield Jamison — herself a Bipolar I researcher who wrote Touched with Fire and An Unquiet Mind — makes the essential point: the correlation between bipolar disorder and creative achievement is real. The implication that suffering is necessary for genius, or that treatment should be avoided to preserve creative capacity, is false and has killed people. The evidence shows that treatment — particularly lithium — stabilizes creative capacity rather than eliminating it, while reducing the risk of the depressive phases that produce no creative work at all, only suffering and structural brain damage.' },
      { type: 'stat', label: 'Writers with bipolar disorder vs. general population rate', value: '8×' },
      { type: 'paragraph', text: 'The synthesis of this book\'s five chapters is this: the neuroscience of human extremity — of bipolar disorder, environmental trauma, occult practice, suicidality, and creative genius — is not five separate topics. It is one topic. It is the biology of the brain at its edges. The same systems that mediate ecstasy mediate terror. The same architecture that enables transcendent pattern-recognition enables psychosis. The same oscillation that drives creative hypomania drives suicidal mixed states. Understanding these systems does not reduce them. It makes intervention possible.' },
      { type: 'citation', text: 'Andreasen, N.C. (1987). Creativity and mental illness. American Journal of Psychiatry 144(10). | Jamison, K.R. (1993). Touched with Fire. Free Press. | Kyaga, S. et al. (2013). Mental illness and creativity. Journal of Psychiatric Research 47(1).' },
    ],
  },
]
