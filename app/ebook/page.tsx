import EbookUnlocker from '@/components/ebook/EbookUnlocker'

export const metadata = {
  title: 'The Neuroscience of the Dark — E-Book | LimbicLab',
  description: 'A graduate-level research synthesis on bipolar disorder, environmental trauma, belief systems, and the biology of extremity. Read online or download.',
  openGraph: {
    title: 'The Neuroscience of the Dark | LimbicLab',
    description: 'Bipolar disorder, environmental trauma, ritual neuroscience, suicidality, and the creative brain — a unified research synthesis.',
    url: 'https://limbiclab.xyz/ebook',
  },
}

export default function EbookPage() {
  return <EbookUnlocker />
}
