import SocialBondingDashboard from '@/components/social-bonding/SocialBondingDashboard'

export const metadata = {
  title: 'Social Bonding Circuits — Deep Research | LimbicLab',
  description: 'Oxytocin, vasopressin, mesolimbic reward, and the neuroscience of pair bonding. Prairie vole model, loneliness biology, and human variation in bonding propensity.',
  openGraph: {
    title: 'Social Bonding Circuits — Deep Research | LimbicLab',
    description: 'Oxytocin, vasopressin, nucleus accumbens, and the neurobiology of loneliness, pair bonding, and social reward.',
    url: 'https://limbiclab.xyz/social-bonding',
  },
}

export default function SocialBondingPage() {
  return <SocialBondingDashboard />
}
