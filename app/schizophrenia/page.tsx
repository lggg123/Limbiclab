import SchizophreniaDashboard from '@/components/schizophrenia/SchizophreniaDashboard'

export const metadata = {
  title: 'Schizophrenia — Deep Research | LimbicLab',
  description: 'GWAS genetics, GABA system collapse, 22q11.2 deletion, and the ethnic/religious persecution thesis. Why schizophrenia is more sociogenic than genetic determinism allows.',
  openGraph: {
    title: 'Schizophrenia — Deep Research | LimbicLab',
    description: 'GWAS genetics, GABA system collapse, social defeat hypothesis, and schizoaffective disorder.',
    url: 'https://limbiclab.xyz/schizophrenia',
  },
}

export default function SchizophreniaPage() {
  return <SchizophreniaDashboard />
}
