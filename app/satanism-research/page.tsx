import type { Metadata } from 'next'
import SatanismResearchDashboard from '@/components/satanism-research/SatanismResearchDashboard'

export const metadata: Metadata = {
  title: 'Satanism — Neurological & Psychological Profile | LimbicLab',
  description:
    'Graduate-level academic analysis of Satanism across neuroscience, neurochemistry, epigenetics, psychology, and philosophy. Covers 4 taxonomic variants, 7 receptor systems, 8 psychological disorder correlates, and gene-level epigenetic mechanisms.',
}

export default function SatanismResearchPage() {
  return <SatanismResearchDashboard />
}
