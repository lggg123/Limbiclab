import BipolarDashboard from '@/components/bipolar/BipolarDashboard'

export const metadata = {
  title: 'Bipolar Disorder — Deep Research | LimbicLab',
  description: 'Neuroimaging, circadian biology, lithium mechanism, genetics, creativity link, and suicidality in bipolar disorder. Graduate-level computational psychiatry analysis.',
  openGraph: {
    title: 'Bipolar Disorder — Deep Research | LimbicLab',
    description: 'Neuroimaging, circadian biology, lithium mechanism, genetics, creativity link, and suicidality in bipolar disorder.',
    url: 'https://limbiclab.xyz/bipolar',
  },
}

export default function BipolarPage() {
  return <BipolarDashboard />
}
