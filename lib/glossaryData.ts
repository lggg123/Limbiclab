// ── Glossary: Functional Neurological Symptoms & Related Terms ───────────────

export interface GlossaryEntry {
  term: string;
  pronunciation?: string;
  category: GlossaryCategory;
  plainDefinition: string;
  clinicalDefinition: string;
  relatedTerms: string[];
  example?: string;
}

export type GlossaryCategory =
  | "Neuroanatomy"
  | "Symptom / Syndrome"
  | "Psychological Mechanism"
  | "Diagnostic Tool"
  | "Ideological / Psychosocial"
  | "Neurochemistry";

export const glossaryEntries: GlossaryEntry[] = [
  // ── Symptom / Syndrome ────────────────────────────────────────────────────
  {
    term: "Somatic",
    pronunciation: "soh-MAT-ik",
    category: "Symptom / Syndrome",
    plainDefinition:
      "Anything relating to the body (as opposed to the mind). A 'somatic symptom' is a physical symptom — pain, tremor, paralysis — that has a psychological origin rather than a purely structural or organic cause.",
    clinicalDefinition:
      "Derived from the Greek 'soma' (body). In psychiatry, somatic symptoms arise when psychological distress is 'converted' into physical experience. The nervous system genuinely produces the symptom — it is not faked — but no tissue damage or structural lesion accounts for it.",
    relatedTerms: ["Somatoform", "Somatization", "Functional Neurological Symptom", "Psychosomatic"],
    example:
      "A person under extreme stress develops real arm weakness with no neurological lesion on MRI. The weakness is somatic — physically real, psychologically driven.",
  },
  {
    term: "Somatization",
    pronunciation: "soh-mat-ih-ZAY-shun",
    category: "Symptom / Syndrome",
    plainDefinition:
      "The process by which emotional pain or psychological conflict gets expressed as physical symptoms in the body.",
    clinicalDefinition:
      "A defense mechanism where unprocessed affect bypasses conscious verbal processing and manifests as physical symptoms. The brain does not distinguish well between psychological threat and bodily threat; both activate the same stress-response circuitry.",
    relatedTerms: ["Somatic", "Conversion Disorder", "PNES", "Alexithymia"],
    example:
      "Someone who cannot consciously process grief may develop chronic chest pain or unexplained fatigue instead.",
  },
  {
    term: "PNES (Psychogenic Non-Epileptic Seizures)",
    pronunciation: "P-N-E-S",
    category: "Symptom / Syndrome",
    plainDefinition:
      "Seizure-like episodes — shaking, convulsing, losing responsiveness — that look like epilepsy but are caused by psychological distress, not abnormal electrical brain activity.",
    clinicalDefinition:
      "PNES are paroxysmal motor events lacking ictal EEG correlate. They represent a somatic discharge pathway for overloaded limbic activation. Unlike epileptic seizures, movements are often asynchronous, waxing-waning, and pelvic thrusting may occur. Normal prolactin post-event rules out epilepsy. Treated with psychotherapy (CBT/trauma-focused), not anticonvulsants.",
    relatedTerms: ["Somatic", "Functional Neurological Symptom", "Dissociation", "Limbic System", "Amygdala"],
    example:
      "A patient has weekly 'seizures.' Video-EEG monitoring shows no ictal discharge during the event. Diagnosis: PNES.",
  },
  {
    term: "Dissociation",
    pronunciation: "dih-SOH-see-AY-shun",
    category: "Psychological Mechanism",
    plainDefinition:
      "A mental disconnection — from your surroundings, memories, body, or sense of self — that the brain uses as an automatic escape hatch when reality feels too overwhelming.",
    clinicalDefinition:
      "Disruption in normal integration of consciousness, memory, identity, emotion, behavior, and perception. Ranges from mild (highway hypnosis, daydreaming) to severe (dissociative identity disorder, depersonalization). Neurobiologically, it involves prefrontal inhibition of limbic and subcortical arousal — the brain essentially 'mutes' threatening inputs.",
    relatedTerms: ["Depersonalization", "Derealization", "Dissociative Deafness", "Functional Neurological Symptom", "DES-II"],
    example:
      "During a traumatic event, someone feels as if they are 'watching themselves from outside their body.' Pain and fear are present but emotionally muted.",
  },
  {
    term: "Dissociative Deafness",
    pronunciation: "dih-SOH-see-ay-tiv DEF-ness",
    category: "Symptom / Syndrome",
    plainDefinition:
      "A functional loss of hearing — not caused by ear or nerve damage — where the brain selectively stops processing sound as a protective response to an overwhelming or threatening stimulus.",
    clinicalDefinition:
      "A subtype of Functional Neurological Symptom Disorder (FNSD) affecting auditory perception. The cochlea and auditory brainstem response (ABR) are structurally normal. Cortical suppression of Heschl's gyrus (primary auditory cortex, A1) occurs via top-down inhibitory signals from the DLPFC and ACC. fMRI demonstrates intact subcortical auditory processing with absent A1 activation.",
    relatedTerms: ["Dissociation", "Functional Neurological Symptom", "DLPFC", "Heschl's Gyrus", "Thalamus"],
    example:
      "A soldier returning from combat hears nothing when approached by a family member whose voice triggers traumatic associations, despite normal audiometry.",
  },
  {
    term: "Functional Neurological Symptom Disorder (FNSD)",
    pronunciation: "funk-SHUN-al",
    category: "Symptom / Syndrome",
    plainDefinition:
      "An umbrella diagnosis for neurological symptoms (weakness, paralysis, blindness, seizures, tremor) that are real and disabling but caused by how the brain is functioning, not by structural damage.",
    clinicalDefinition:
      "Formerly called 'Conversion Disorder.' DSM-5 diagnosis requires: incompatibility of neurological symptoms with recognized neurological disease; not explained by another medical/mental disorder; causing clinically significant distress or impairment. Positive clinical signs (Hoover's sign, tremor entrainment) establish the diagnosis. Not a diagnosis of exclusion — it has its own positive markers.",
    relatedTerms: ["PNES", "Somatic", "Dissociation", "Conversion Disorder"],
  },

  // ── Neuroanatomy ──────────────────────────────────────────────────────────
  {
    term: "Limbic System",
    category: "Neuroanatomy",
    plainDefinition:
      "The brain's emotional core — a set of interconnected structures that process emotions, memory, motivation, and the fight-or-flight response.",
    clinicalDefinition:
      "A phylogenetically older network including the hippocampus, amygdala, cingulate gyrus, thalamus, and hypothalamus. Responsible for emotional tagging of memories, threat appraisal, and autonomic regulation. Dysfunction predisposes to anxiety, PTSD, mood disorders, and somatic symptom disorders.",
    relatedTerms: ["Amygdala", "Hippocampus", "Thalamus", "HPA Axis", "Anterior Cingulate Cortex"],
  },
  {
    term: "Amygdala",
    pronunciation: "ah-MIG-dah-lah",
    category: "Neuroanatomy",
    plainDefinition:
      "The brain's threat detector. An almond-shaped structure that fires an alarm the moment it perceives danger — physical, social, or symbolic — triggering the full fight/flight/freeze response.",
    clinicalDefinition:
      "Paired subcortical nuclei in the medial temporal lobe. Critical for fear conditioning, emotional memory consolidation, and threat appraisal. Projects to hypothalamus (autonomic response), periaqueductal gray (freeze response), and nucleus accumbens (reward/aversion). Hyperactivation is a hallmark of PTSD, anxiety disorders, and BPD.",
    relatedTerms: ["Limbic System", "HPA Axis", "Hippocampus", "Prefrontal Cortex"],
    example:
      "The amygdala fires before conscious thought — you flinch from a loud noise before your cortex has identified what the noise was.",
  },
  {
    term: "Anterior Cingulate Cortex (ACC)",
    pronunciation: "AN-teer-ee-or SING-gyoo-lit",
    category: "Neuroanatomy",
    plainDefinition:
      "A brain region that monitors conflict between competing impulses or between expectation and reality, and coordinates the emotional and rational brain's responses to stress.",
    clinicalDefinition:
      "Sits at the interface of the limbic system and prefrontal cortex. Subdivided into affective (rostral) and cognitive (dorsal) components. Key functions: conflict monitoring, error detection, pain processing, emotion regulation, and motor control. Overactivation in PNES and dissociation; hypoactivation in psychopathy and certain antisocial traits.",
    relatedTerms: ["DLPFC", "Default Mode Network", "Amygdala", "Salience Network"],
  },
  {
    term: "DLPFC (Dorsolateral Prefrontal Cortex)",
    pronunciation: "dor-so-LAT-er-al pre-FRUN-tal",
    category: "Neuroanatomy",
    plainDefinition:
      "The brain's top-down control center — responsible for rational thought, working memory, and suppressing emotional or automatic responses when they're not appropriate.",
    clinicalDefinition:
      "Bilateral region of the lateral prefrontal cortex. Primary role in working memory, cognitive control, and executive regulation of limbic response. In dissociative deafness, the DLPFC sends inhibitory signals downward to the thalamus and auditory cortex, gating sensory input. Target of rTMS in treatment-resistant depression.",
    relatedTerms: ["Prefrontal Cortex", "Thalamus", "Dissociative Deafness", "Anterior Cingulate Cortex"],
  },
  {
    term: "Default Mode Network (DMN)",
    category: "Neuroanatomy",
    plainDefinition:
      "The brain's 'idle mode' network — active when you're daydreaming, thinking about yourself, remembering the past, or imagining the future. It is the neural substrate of your sense of self.",
    clinicalDefinition:
      "A large-scale intrinsic network comprising the medial prefrontal cortex, posterior cingulate cortex, precuneus, and angular gyrus. Active during self-referential thought, autobiographical memory, and mind-wandering. Disrupted in major depression (rumination), PTSD (intrusive memories), dissociation (self-fragmentation), and schizophrenia.",
    relatedTerms: ["Salience Network", "Anterior Cingulate Cortex", "Dissociation", "Ideological Friction"],
  },
  {
    term: "Salience Network",
    category: "Neuroanatomy",
    plainDefinition:
      "A brain network that decides what in your environment deserves your attention right now — it flags threats, novelty, and emotionally significant cues and switches your focus accordingly.",
    clinicalDefinition:
      "Core nodes: anterior insula and dorsal ACC. Acts as a switch between the Default Mode Network (internal focus) and the Central Executive Network (external task focus). Hyperactivation correlates with anxiety, PTSD, and chronic threat states. In ideological conflict, the salience network sustains threat activation even in neutral environments.",
    relatedTerms: ["Default Mode Network", "Anterior Cingulate Cortex", "Insula", "Amygdala"],
  },
  {
    term: "HPA Axis",
    pronunciation: "H-P-A",
    category: "Neurochemistry",
    plainDefinition:
      "The body's main stress-response highway: Hypothalamus → Pituitary gland → Adrenal glands. When activated, it releases cortisol — the primary stress hormone.",
    clinicalDefinition:
      "Hypothalamic-Pituitary-Adrenal axis. Under stress: hypothalamus releases CRH → pituitary releases ACTH → adrenal cortex releases cortisol. Chronic activation causes allostatic load: hippocampal atrophy, immune suppression, metabolic disorder, and heightened predisposition to dissociation and somatic symptoms.",
    relatedTerms: ["Cortisol", "Amygdala", "Hippocampus", "Allostatic Load", "Somatic"],
    example:
      "Chronic ideological or interpersonal conflict keeps the HPA axis mildly activated daily, gradually eroding hippocampal volume and emotion regulation capacity.",
  },
  {
    term: "Thalamus",
    pronunciation: "THAL-ah-mus",
    category: "Neuroanatomy",
    plainDefinition:
      "The brain's central relay station — nearly all sensory information (except smell) passes through it before reaching the cortex. It decides what gets 'let in' to conscious awareness.",
    clinicalDefinition:
      "A paired diencephalic structure. Each sensory modality has a dedicated thalamic nucleus (e.g., Medial Geniculate Nucleus for auditory, Lateral Geniculate Nucleus for visual). Top-down gating from the prefrontal cortex and ACC can suppress thalamic relay, producing functional sensory loss without peripheral damage — the mechanism in dissociative sensory syndromes.",
    relatedTerms: ["Medial Geniculate Nucleus", "DLPFC", "Dissociative Deafness", "Limbic System"],
  },

  // ── Psychological Mechanisms ──────────────────────────────────────────────
  {
    term: "Gray Rock Method",
    category: "Psychological Mechanism",
    plainDefinition:
      "A behavioral strategy where someone deliberately becomes as boring and unreactive as a gray rock — giving minimal responses, showing no emotion — to stop being a target for manipulation or provocation.",
    clinicalDefinition:
      "Adaptive in the context of narcissistic abuse or manipulation: by withholding emotional reactions, the person removes the 'reward' that sustains the antagonist's behavior. When pathologically internalized, it can merge with dissociative emotional numbness — the person loses the ability to distinguish chosen deactivation from involuntary emotional blunting.",
    relatedTerms: ["Dissociation", "Emotional Numbness", "Devaluation", "Ideological Friction"],
    example:
      "When asked provocative questions, the person gives flat, one-word answers and maintains neutral affect — neither engaging nor escalating.",
  },
  {
    term: "Devaluation",
    category: "Psychological Mechanism",
    plainDefinition:
      "A defense mechanism where someone mentally reduces another person's worth — seeing them as worthless, threatening, or subhuman — in order to protect themselves from fear, intimacy, or guilt.",
    clinicalDefinition:
      "A primitive defense common in borderline and narcissistic personality structures (object relations theory). Follows idealization in the 'splitting' cycle. Neurobiologically, devaluation involves suppression of mentalizing circuits (TPJ, mPFC) and heightened amygdala threat-tagging of the target person. Enables psychological distance from someone who feels threatening.",
    relatedTerms: ["Splitting", "Gray Rock Method", "Object Relations", "Amygdala"],
  },
  {
    term: "Allostatic Load",
    pronunciation: "al-oh-STAT-ik",
    category: "Psychological Mechanism",
    plainDefinition:
      "The cumulative physical 'wear and tear' on the body from chronic stress — the long-term cost the body pays for repeatedly activating its stress response.",
    clinicalDefinition:
      "Concept introduced by McEwen & Stellar (1993). Composed of primary mediators (cortisol, adrenaline, inflammatory cytokines), primary effects (blood pressure, immune function), and secondary outcomes (cardiovascular disease, hippocampal atrophy, depression). Chronic ideological conflict, trauma exposure, and sustained threat-appraisal states all elevate allostatic load.",
    relatedTerms: ["HPA Axis", "Cortisol", "Somatic", "Dissociation"],
  },
  {
    term: "Alexithymia",
    pronunciation: "ay-lex-ih-THY-mee-ah",
    category: "Psychological Mechanism",
    plainDefinition:
      "Difficulty identifying, describing, or understanding your own emotions — like being emotionally colorblind. Strongly associated with somatic symptoms.",
    clinicalDefinition:
      "From Greek: 'a' (without) + 'lexis' (word) + 'thymos' (emotion). Characterized by: difficulty identifying feelings, difficulty describing feelings to others, externally oriented thinking, poor imagination. Neurobiologically linked to reduced anterior insula connectivity and reduced DMN–interoceptive network coupling. Strong predictor of PNES and somatic symptom disorders.",
    relatedTerms: ["Somatization", "Insula", "Default Mode Network", "PNES"],
  },

  // ── Ideological / Psychosocial ────────────────────────────────────────────
  {
    term: "Ideological Friction",
    category: "Ideological / Psychosocial",
    plainDefinition:
      "The psychological tension and stress that arises when two belief systems a person holds — or is caught between — directly contradict each other at a deep level, making it impossible to fully commit to either.",
    clinicalDefinition:
      "A psychosocial stressor category. When core identity-level beliefs (religious, moral, political) are in sustained irreconcilable conflict, the Default Mode Network and Salience Network enter a chronic co-activation state. This perpetuates HPA axis arousal, disrupts executive function, and — in predisposed individuals — funnels into somatic or dissociative symptom pathways as the psyche's attempt to 'resolve' the unresolvable.",
    relatedTerms: ["Cognitive Dissonance", "Religious Trauma Syndrome", "Salience Network", "Default Mode Network", "Gray Rock Method"],
    example:
      "A person raised in strict Catholic doctrine who is simultaneously drawn to opposing belief systems may experience chronic guilt, somatic symptoms, and emotional numbing as the nervous system attempts to manage the contradiction.",
  },
  {
    term: "Cognitive Dissonance",
    pronunciation: "KOG-nih-tiv DIS-oh-nants",
    category: "Psychological Mechanism",
    plainDefinition:
      "The discomfort you feel when you hold two contradictory beliefs at once — or when your actions contradict your beliefs. The mind works hard to resolve or suppress the conflict.",
    clinicalDefinition:
      "Festinger (1957). Motivational state arising from holding two or more cognitions that are psychologically inconsistent. Resolution strategies: changing one belief, minimizing the importance of one cognition, adding a third reconciling cognition, or suppression/avoidance. Chronic unresolved dissonance activates the ACC (conflict monitoring) and contributes to anxiety and somatic load.",
    relatedTerms: ["Ideological Friction", "Anterior Cingulate Cortex", "Splitting", "Devaluation"],
  },
  {
    term: "Religious Trauma Syndrome (RTS)",
    category: "Ideological / Psychosocial",
    plainDefinition:
      "Psychological harm caused by leaving or being harmed within a high-control religious environment — including anxiety, depression, identity confusion, and difficulty trusting one's own judgment.",
    clinicalDefinition:
      "Coined by Dr. Marlene Winell. Shares features with PTSD: hypervigilance, avoidance, intrusive thoughts, emotional numbing. Caused by internalized supernatural threat schemas (divine punishment, eternal damnation) that cannot be rationally extinguished once conditioned. The amygdala responds to symbolic theological threats as if they were physical ones.",
    relatedTerms: ["Ideological Friction", "PTSD", "Amygdala", "HPA Axis", "Devaluation"],
  },
  {
    term: "Scrupulosity",
    pronunciation: "skroo-pyoo-LOS-ih-tee",
    category: "Ideological / Psychosocial",
    plainDefinition:
      "A form of OCD where the obsessions focus on religious fear — constant worry about sin, moral impurity, or divine punishment — causing compulsive praying, confession, or ritual behaviors.",
    clinicalDefinition:
      "OCD subtype with religious/moral obsessional content. ICD-11: 6B20. Involves intrusive thoughts about blasphemy, sexual sin, or moral failure, followed by compulsive neutralizing rituals. Orbitofrontal cortex (OFC)–striato-thalamic loop hyperactivity is the core neurocircuit. Responds to ERP (Exposure and Response Prevention) + SSRI.",
    relatedTerms: ["Religious Trauma Syndrome", "Ideological Friction", "Cognitive Dissonance", "Orbitofrontal Cortex"],
  },

  // ── Diagnostic Tools ─────────────────────────────────────────────────────
  {
    term: "fMRI (Functional MRI)",
    category: "Diagnostic Tool",
    plainDefinition:
      "A brain-scanning technique that tracks blood flow in real time to show which regions are active during a task or thought — essentially a live map of brain activity.",
    clinicalDefinition:
      "Measures BOLD (Blood Oxygen Level Dependent) signal as a proxy for neural activity. Temporal resolution ~2s, spatial resolution ~2–3mm. Used to identify active brain regions during tasks or at rest. In FNS research, fMRI demonstrates paradoxical patterns: active threat-processing circuits with suppressed sensory cortices during dissociative episodes.",
    relatedTerms: ["Neuroanatomy", "Dissociative Deafness", "Default Mode Network", "Amygdala"],
  },
  {
    term: "EEG / VEEG (Video-EEG)",
    category: "Diagnostic Tool",
    plainDefinition:
      "A test that records the brain's electrical activity via scalp electrodes. The 'Video' version records simultaneously on camera to match the patient's physical movements to the brain's signal — crucial for diagnosing PNES.",
    clinicalDefinition:
      "EEG: measures scalp electrical potentials at millisecond resolution. VEEG: simultaneous clinical and EEG monitoring. Key diagnostic for PNES: captures a habitual event and demonstrates absence of ictal discharge. Epileptic generalized tonic-clonic seizures produce characteristic high-amplitude rhythmic spiking; PNES shows movement artifact over a normal EEG background.",
    relatedTerms: ["PNES", "Epilepsy", "Functional Neurological Symptom"],
  },
  {
    term: "DES-II (Dissociative Experiences Scale)",
    category: "Diagnostic Tool",
    plainDefinition:
      "A questionnaire that measures how often someone experiences dissociative states — like feeling detached from their body, losing time, or feeling that familiar places feel strange.",
    clinicalDefinition:
      "28-item self-report scale (Bernstein & Putnam). Scores 0–100%; score above 30 indicates clinically significant dissociation; score above 40 suggests pathological dissociation or DID screening. Subscales: amnesia, depersonalization/derealization, absorption. Standard research and clinical screening instrument for dissociative disorders.",
    relatedTerms: ["Dissociation", "Depersonalization", "Derealization", "PNES"],
  },
  {
    term: "ABR (Auditory Brainstem Response)",
    category: "Diagnostic Tool",
    plainDefinition:
      "A hearing test that measures the brain's electrical response to sounds — from the ear all the way up through the brainstem — to check if the auditory pathway is structurally intact.",
    clinicalDefinition:
      "Objective audiological test; not dependent on patient cooperation or conscious response. Measures waves I–VII corresponding to cochlear nerve through inferior colliculus. Normal ABR in the setting of reported deafness indicates functional (not organic) auditory loss — key evidence for dissociative deafness diagnosis.",
    relatedTerms: ["Dissociative Deafness", "Thalamus", "Functional Neurological Symptom"],
  },
];

// ── Grouped by category ───────────────────────────────────────────────────────
export const categorizedGlossary = glossaryEntries.reduce<
  Record<GlossaryCategory, GlossaryEntry[]>
>(
  (acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    return acc;
  },
  {} as Record<GlossaryCategory, GlossaryEntry[]>
);

export const categoryOrder: GlossaryCategory[] = [
  "Symptom / Syndrome",
  "Psychological Mechanism",
  "Neuroanatomy",
  "Neurochemistry",
  "Ideological / Psychosocial",
  "Diagnostic Tool",
];
