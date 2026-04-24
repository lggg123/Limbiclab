import CannabisDashboard from '@/components/cannabis/CannabisDashboard'

export const metadata = {
  title: 'Cannabis & the Brain — Neuroscience Research | LimbicLab',
  description: 'How cannabis interacts with the endocannabinoid system, neuroprotection, mental health applications, neuroplasticity, and clinical evidence. Graduate-level neuroscience analysis.',
  openGraph: {
    title: 'Cannabis & the Brain — Neuroscience Research | LimbicLab',
    description: 'Endocannabinoid system, CB1/CB2 receptors, neuroprotection, PTSD, anxiety, and neuroplasticity — cited neuroscience research.',
    url: 'https://limbiclab.xyz/cannabis',
  },
}

export default function CannabisPage() {
  return <CannabisDashboard />
}
