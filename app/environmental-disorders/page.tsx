import EnvironmentalDashboard from '@/components/environmental/EnvironmentalDashboard'

export const metadata = {
  title: 'Environmental Mental Disorders & Suicidal Tendencies | LimbicLab',
  description: 'How poverty, trauma, racial stress, climate change, and urban environments drive psychiatric illness and suicidality. Epigenetics, HPA axis, and evidence-based interventions.',
  openGraph: {
    title: 'Environmental Mental Disorders & Suicidal Tendencies | LimbicLab',
    description: 'Environmental psychiatry: ACEs, racial trauma, climate grief, urban density, and the neuroscience of suicidality.',
    url: 'https://limbiclab.com/environmental-disorders',
  },
}

export default function EnvironmentalDisordersPage() {
  return <EnvironmentalDashboard />
}
