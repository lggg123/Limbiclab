// ── Environmental Mental Disorders & Suicidal Tendencies ──────────────────────
// Covers: trauma spectrum, poverty/economic stressors, climate grief,
// urban density effects, racial trauma, ACEs, suicidology, and intervention.

// ── Stress-Response Axis ──────────────────────────────────────────────────────

export const HPA_AXIS = {
  overview: 'The hypothalamic-pituitary-adrenal (HPA) axis is the primary biological system through which environmental stressors are transduced into neurological and psychiatric disease. Chronic environmental stressors — poverty, violence, discrimination, climate threat — produce sustained cortisol elevation that structurally reshapes the brain over years.',
  cascade: [
    { step: '1', label: 'Stressor Perception', body: 'The prefrontal cortex and amygdala appraise a threat. The amygdala activates the hypothalamus via corticotropin-releasing hormone (CRH).' },
    { step: '2', label: 'Pituitary Activation', body: 'CRH signals the anterior pituitary to release adrenocorticotropic hormone (ACTH) into the bloodstream.' },
    { step: '3', label: 'Adrenal Response', body: 'ACTH reaches the adrenal glands, triggering cortisol release. Cortisol mobilizes glucose, suppresses immune function, and heightens alertness.' },
    { step: '4', label: 'Hippocampal Feedback', body: 'Cortisol normally feeds back to suppress further CRH release. In chronic stress, hippocampal glucocorticoid receptors downregulate — the feedback fails. The axis stays activated.' },
    { step: '5', label: 'Structural Damage', body: 'Sustained cortisol suppresses hippocampal neurogenesis, reduces BDNF, shrinks PFC gray matter, and enlarges the amygdala. These changes increase reactivity to future stressors — allostatic load accumulates.' },
  ],
}

// ── Environmental Risk Factors ────────────────────────────────────────────────

export const ENVIRONMENTAL_RISKS = [
  {
    category: 'Adverse Childhood Experiences (ACEs)',
    color: '#8A0303',
    overview: 'The ACE Study (CDC-Kaiser, 1995–1997) — over 17,000 participants — remains the foundational evidence base. ACE score (0–10) is linearly predictive of adult psychiatric and medical outcomes.',
    findings: [
      'ACE score ≥4: 4–12x increased risk of depression, anxiety, PTSD',
      'ACE score ≥6: 30-year reduction in life expectancy',
      'Physical abuse: 2x adult depression risk',
      'Sexual abuse: 4x PTSD risk; strongest single ACE predictor of suicidality',
      'Household substance abuse: 7x alcoholism risk in offspring',
      'Emotional neglect: 2.5x adult anxiety disorder risk — most commonly underreported',
    ],
    mechanism: 'ACEs dysregulate HPA axis development during critical windows. The developing brain learns threat salience based on early environment. High-ACE children develop permanently sensitized stress-response systems — biological hypervigilance that persists into adulthood as anxiety, PTSD, and inability to regulate the amygdala.',
    citation: 'Felitti, V.J. et al. (1998). Relationship of childhood abuse and household dysfunction to leading causes of death in adults. American Journal of Preventive Medicine 14(4).',
  },
  {
    category: 'Poverty & Economic Stressors',
    color: '#d4a017',
    overview: 'Poverty is not merely a social condition — it is a neurological one. Economic scarcity consumes cognitive bandwidth, elevates chronic stress hormones, and is associated with measurable structural brain differences in children.',
    findings: [
      'Living below poverty line: 2–3x higher rates of depression and anxiety',
      'Childhood poverty: smaller hippocampal and PFC volume (independent of genetics)',
      'Economic strain is the strongest single predictor of maternal depression',
      'Food insecurity doubles adolescent suicide attempt rates',
      'Each additional year of childhood poverty = 1.3% reduction in PFC surface area',
      'Income inequality (Gini coefficient) correlates with national suicide rates (r=0.71)',
    ],
    mechanism: 'Scarcity mindset research (Mullainathan & Shafir, 2013) shows poverty directly taxes working memory and executive function — not through personality or culture but through the cognitive load of managing scarcity under uncertainty. This is compounded by the physical effects of chronic stress hormones on hippocampal and prefrontal architecture.',
    citation: 'Hanson, J.L. et al. (2013). Family poverty affects the rate of human infant brain growth. PLOS ONE 8(12). | Mullainathan, S. & Shafir, E. (2013). Scarcity. Times Books.',
  },
  {
    category: 'Racial Trauma & Discrimination',
    color: '#7c3aed',
    overview: 'Racial discrimination is a chronic environmental stressor with measurable physiological and psychiatric consequences. The concept of "racial weathering" (Geronimus, 1992) describes accelerated biological aging in Black Americans due to cumulative discrimination exposure.',
    findings: [
      'Perceived discrimination predicts depression, anxiety, and psychosis onset',
      'Chronic racial stress elevates cortisol and inflammatory markers (IL-6, CRP)',
      'Black Americans show telomere shortening equivalent to 10+ years of biological aging',
      'Experiences of police violence predict PTSD symptoms in community members (not just direct victims)',
      'Microaggressions produce cumulative stress responses indistinguishable from acute trauma',
      'Internalized racism is an independent risk factor for suicidality in Black adolescents',
    ],
    mechanism: 'Hypervigilance to racial threat activates the amygdala and HPA axis chronically. The social threat detection system (designed for acute predator avoidance) runs continuously, producing the same allostatic wear as living in a chronic combat zone — with no clearly safe environment to retreat to.',
    citation: 'Geronimus, A.T. (1992). The weathering hypothesis. Ethnicity & Disease 2(3). | Williams, D.R. & Mohammed, S.A. (2009). Discrimination and racial disparities in health. Journal of Behavioral Medicine 32(1).',
  },
  {
    category: 'Climate Change & Ecological Grief',
    color: '#2a9d9d',
    overview: 'Climate change is emerging as a major environmental mental health risk — both through direct exposure (disasters, heat) and through the psychological burden of ecological awareness and anticipatory grief. "Solastalgia" (Albrecht, 2003) — distress from environmental change in one\'s home — is now a recognized clinical entity.',
    findings: [
      'Natural disaster survivors show PTSD rates of 30–40%',
      'Post-hurricane depression rates double within 6 months',
      'Climate anxiety affects ~68% of Americans (APA, 2020)',
      'Heat waves increase psychiatric emergency visits by 7–12%',
      'Each 1°C temperature increase associated with 0.7% increased suicide rate in US counties',
      'Climate grief is highest in young adults (18–34) — the generation inheriting the crisis',
    ],
    mechanism: 'Direct heat effects involve neuroinflammation and serotonin dysregulation (5-HT synthesis is temperature-sensitive). Psychological mechanisms: anticipatory grief, loss of future orientation, moral injury (knowing harm is occurring and feeling unable to stop it), and the collapse of cultural and ecological identity for people rooted in specific landscapes.',
    citation: 'Burke, M. et al. (2018). Global warming and human wellbeing. Nature Climate Change 8. | Clayton, S. et al. (2017). Mental health and our changing climate. APA/ecoAmerica.',
  },
  {
    category: 'Urban Density & Social Isolation',
    color: '#5a7aed',
    overview: 'Urban environments expose individuals to elevated sensory load, social comparison, and unpredictability. Meta-analyses consistently show ~40% higher psychosis incidence in cities vs. rural areas — even controlling for genetics and migration selection effects.',
    findings: [
      'Urban upbringing doubles schizophrenia risk (dose-response with years spent in cities)',
      'Social isolation increases all-cause mortality by 26% (equivalent to smoking 15 cigarettes/day)',
      'Loneliness activates the same brain circuits as physical pain (anterior cingulate cortex)',
      'Access to green space reduces depression rates by 30% independent of other factors',
      'Noise pollution above 65dB is an independent predictor of cardiovascular and psychiatric morbidity',
      'Social media passive use (scrolling without posting) increases depression; active use is neutral',
    ],
    mechanism: 'Urban environments chronically activate the threat-monitoring system without providing clear resolution. Social comparison (visible inequality, status competition) activates shame circuits in the medial PFC. The amygdala was designed for a village-scale social environment — it cannot safely model thousands of strangers, and operates in chronic low-grade threat mode.',
    citation: 'Lederbogen, F. et al. (2011). City living and urban upbringing affect neural social stress processing. Nature 474. | Holt-Lunstad, J. et al. (2015). Loneliness and social isolation as risk factors for mortality. Perspectives on Psychological Science 10(2).',
  },
]

// ── Suicidal Tendencies ───────────────────────────────────────────────────────

export const SUICIDOLOGY = {
  overview: 'Suicide is the intersection of biology, psychology, and environment. No single factor predicts it. The environmental contribution is substantial — economic crises produce population-level suicide spikes, natural disasters trigger waves of PTSD-driven suicidality, and social isolation transforms ideation into lethal action.',

  epidemiology: [
    { stat: '800,000+', desc: 'deaths by suicide globally each year — one every 40 seconds' },
    { stat: '2nd', desc: 'leading cause of death globally for ages 15–29' },
    { stat: '25:1', desc: 'ratio of attempts to completions — for every death, 25 survived attempts' },
    { stat: '90%', desc: 'of completed suicides had a diagnosable psychiatric condition at time of death' },
    { stat: '54%', desc: 'of US suicides had no known mental health condition — environmental stressors were primary' },
    { stat: '3x', desc: 'higher male completion rate despite higher female attempt rate — method lethality difference' },
  ],

  environmentalPredictors: [
    {
      name: 'Economic Shocks',
      body: 'The 2008 financial crisis produced a measurable 4.2% increase in global suicide rates. In Greece, austerity measures drove suicide rates up 35% between 2008–2011. Unemployment increases individual suicide risk by 20–30%. The mechanism is not simply poverty — it is loss of status, purpose, and future orientation simultaneously.',
      citation: 'Chang, S.S. et al. (2013). Was the economic crisis 1997–1998 responsible for rising suicide rates? BMJ 347.',
    },
    {
      name: 'Contagion & Social Modeling',
      body: 'Suicide clusters — spatiotemporally linked suicides — are a real phenomenon. The Werther effect: media coverage of suicide increases imitation (especially when high-profile individuals die). The reverse (Papageno effect) also exists: coverage of resilience and survival is protective. Platforms that allow romanticization of suicide have measurably increased rates in vulnerable populations.',
      citation: 'Niederkrotenthaler, T. et al. (2010). Role of media reports in completed and prevented suicide. British Journal of Psychiatry 197(3).',
    },
    {
      name: 'Means Restriction',
      body: 'The single most effective environmental suicide prevention intervention is means restriction — reducing access to lethal means. The detoxification of domestic gas in the UK in the 1960s produced a permanent 30% reduction in suicide rates. Bridge barriers reduce bridge suicides without displacement to other methods — demonstrating that the suicidal state is often time-limited and impulsive rather than inevitable.',
      citation: 'Hawton, K. (2007). Restricting access to methods of suicide. Crisis 28(S1).',
    },
    {
      name: 'Social Integration',
      body: 'Durkheim\'s 1897 typology of suicide identified "egoistic suicide" (insufficient social integration) and "anomic suicide" (insufficient social regulation/disrupted norms) as sociologically driven. A century of subsequent research confirms: social integration — family bonds, community belonging, religious participation — is protective. Isolation is the final common pathway in environmental suicidality.',
      citation: 'Durkheim, E. (1897). Le Suicide. Translated by Spaulding, J.A. & Simpson, G. (1951). Free Press.',
    },
  ],

  warningSignsACT: {
    title: 'The ACT Warning Sign Framework',
    acknowledge: 'Acknowledge — take any mention of suicide seriously, do not minimize, do not argue',
    care: 'Care — show genuine concern, reduce isolation in the moment, stay present',
    tell: 'Tell — involve a trusted adult, mental health professional, or call 988',
    signs: [
      'Talking or writing about wanting to die or to kill oneself',
      'Looking for ways to kill oneself (searching online, acquiring means)',
      'Talking about being a burden to others',
      'Increasing use of alcohol or drugs',
      'Withdrawing from activities and social contact',
      'Extreme mood swings — from desperate to suddenly calm (may indicate decision has been made)',
      'Giving away prized possessions',
      'Saying goodbye as though it will be the last time',
    ],
  },

  protectiveFactors: [
    'Strong social support and sense of belonging',
    'Access to quality mental health care',
    'Reasons for living — children, pets, religious beliefs, future plans',
    'Problem-solving and emotional regulation skills',
    'Cultural and religious beliefs that discourage suicide',
    'Means restriction in the environment',
    'Connection to a healthcare provider',
  ],
}

// ── Epigenetics of Environmental Stress ──────────────────────────────────────

export const EPIGENETICS = {
  overview: 'Environmental stressors do not merely trigger psychiatric symptoms — they write those stressors into the genome via epigenetic modification. These changes can persist across cell division and, in some cases, across generations. The molecular mechanism of intergenerational trauma is now being decoded.',
  mechanisms: [
    {
      name: 'DNA Methylation',
      body: 'Stress and trauma alter methylation patterns on CpG sites near stress-response genes (NR3C1/glucocorticoid receptor, FKBP5, BDNF). Holocaust survivors and their offspring show altered NR3C1 methylation — the trauma is biologically inherited. Early adversity produces hypermethylation of the glucocorticoid receptor gene, impairing HPA axis feedback and locking in heightened stress reactivity.',
      citation: 'Yehuda, R. et al. (2016). Holocaust exposure induced intergenerational effects on FKBP5 methylation. Biological Psychiatry 80(5).',
    },
    {
      name: 'Histone Modification',
      body: 'Chronic stress alters histone acetylation and deacetylation patterns in hippocampal and PFC neurons. These chromatin-level changes alter the accessibility of stress-related genes, effectively setting the sensitivity of the stress-response system based on environmental history. HDAC (histone deacetylase) inhibitors are being investigated as therapeutic interventions for trauma.',
      citation: 'Tsankova, N.M. et al. (2006). Sustained hippocampal chromatin regulation in a mouse model of depression. Nature Neuroscience 9(4).',
    },
    {
      name: 'microRNA Expression',
      body: 'Environmental stressors alter miRNA profiles — small non-coding RNA molecules that post-transcriptionally regulate gene expression. Stress-responsive miRNAs regulate serotonin transporter expression, BDNF signaling, and neuroinflammatory pathways. Altered miRNA signatures are detectable in blood following trauma — potential biomarkers for PTSD.',
      citation: 'Bhatt, S. et al. (2020). MicroRNAs as biomarkers of post-traumatic stress disorder. Neuroscience & Biobehavioral Reviews 114.',
    },
  ],
}

// ── Intervention Evidence ──────────────────────────────────────────────────────

export const INTERVENTIONS = [
  {
    name: 'Trauma-Focused CBT (TF-CBT)',
    level: 'Level I Evidence',
    color: '#2a9d9d',
    body: 'Most evidence-based intervention for childhood trauma and PTSD. Includes psychoeducation, relaxation, affective regulation, cognitive coping, trauma narrative, and conjoint sessions. Effect size d=0.9 for PTSD symptoms. Effective across ethnic groups and trauma types.',
  },
  {
    name: 'EMDR (Eye Movement Desensitization & Reprocessing)',
    level: 'Level I Evidence',
    color: '#2a9d9d',
    body: 'WHO-recommended for PTSD. Bilateral stimulation during trauma recall accelerates natural memory reconsolidation. Faster than TF-CBT for single-incident trauma. Works by allowing traumatic memories to be reprocessed without re-traumatization.',
  },
  {
    name: 'DBT (Dialectical Behavior Therapy)',
    level: 'Level I for Suicidality',
    color: '#d4a017',
    body: 'Developed by Marsha Linehan (herself a survivor) for borderline personality disorder and chronic suicidality. Reduces suicide attempts by 50% vs. treatment as usual. Core skills: mindfulness, distress tolerance, emotional regulation, interpersonal effectiveness.',
  },
  {
    name: 'Safety Planning Intervention (Stanley-Brown)',
    level: 'Level II Evidence',
    color: '#d4a017',
    body: 'Collaboratively developed written plan that identifies warning signs, coping strategies, social contacts, and crisis resources. Even brief completion in emergency departments reduces suicidal behavior by 43% at 6-month follow-up vs. referral only.',
  },
  {
    name: 'Community-Level Means Restriction',
    level: 'Population-Level Evidence',
    color: '#7c3aed',
    body: 'Policy interventions — bridge barriers, reduced-pack analgesic sales, firearm storage laws — show 15–30% reductions in suicide rates for targeted methods without displacement. Population-level effect exceeds individual therapeutic interventions for scale of impact.',
  },
]

// ── Bibliography ───────────────────────────────────────────────────────────────

export const ENV_REFS = [
  'Felitti, V.J. et al. (1998). Relationship of childhood abuse to adult disease. American Journal of Preventive Medicine 14(4).',
  'Geronimus, A.T. (1992). The weathering hypothesis and the health of African-American women. Ethnicity & Disease 2(3).',
  'Hanson, J.L. et al. (2013). Family poverty affects infant brain growth. PLOS ONE 8(12).',
  'Holt-Lunstad, J. et al. (2015). Loneliness and social isolation as risk factors for mortality. Perspectives on Psychological Science 10(2).',
  'Lederbogen, F. et al. (2011). City living affects neural social stress processing. Nature 474.',
  'Mullainathan, S. & Shafir, E. (2013). Scarcity: Why Having Too Little Means So Much. Times Books.',
  'Yehuda, R. et al. (2016). Holocaust exposure and intergenerational FKBP5 methylation. Biological Psychiatry 80(5).',
  'Burke, M. et al. (2018). Global warming and human wellbeing. Nature Climate Change 8.',
  'Niederkrotenthaler, T. et al. (2010). Media reports and completed vs. prevented suicide. British Journal of Psychiatry 197(3).',
  'Hawton, K. (2007). Restricting access to methods of suicide. Crisis 28(S1).',
  'Chang, S.S. et al. (2013). Economic crisis and rising suicide rates. BMJ 347.',
  'Tsankova, N.M. et al. (2006). Hippocampal chromatin regulation in depression model. Nature Neuroscience 9(4).',
  'Williams, D.R. & Mohammed, S.A. (2009). Discrimination and racial health disparities. Journal of Behavioral Medicine 32(1).',
  'Durkheim, E. (1897/1951). Suicide: A Study in Sociology. Free Press.',
  'Clayton, S. et al. (2017). Mental health and our changing climate. APA & ecoAmerica.',
]
