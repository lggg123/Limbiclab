import AttachmentDashboard from '@/components/attachment-theory/AttachmentDashboard'

export const metadata = {
  title: 'Attachment Theory — Deep Research | LimbicLab',
  description: 'Bowlby, Ainsworth, and the neuroscience of attachment. Neural correlates, epigenetic mechanisms, and adult romantic attachment. Graduate-level research brief.',
  openGraph: {
    title: 'Attachment Theory — Deep Research | LimbicLab',
    description: 'Attachment styles, neural circuits, oxytocin system, epigenetics of early experience, and adult romantic bonding.',
    url: 'https://limbiclab.xyz/attachment-theory',
  },
}

export default function AttachmentTheoryPage() {
  return <AttachmentDashboard />
}
