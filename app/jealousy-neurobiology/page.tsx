import JealousyDashboard from '@/components/jealousy/JealousyDashboard'

export const metadata = {
  title: 'Neurobiology of Jealousy — Deep Research | LimbicLab',
  description: 'The neural circuits, neurochemistry, and evolutionary biology of jealousy. Social pain, reward deprivation, Othello syndrome, and pathological jealousy. Graduate-level research brief.',
  openGraph: {
    title: 'Neurobiology of Jealousy — Deep Research | LimbicLab',
    description: 'ACC, amygdala, nucleus accumbens, cortisol, testosterone, and the neuroscience of romantic jealousy and Othello syndrome.',
    url: 'https://limbiclab.xyz/jealousy-neurobiology',
  },
}

export default function JealousyNeurobiologyPage() {
  return <JealousyDashboard />
}
