import type { Metadata } from 'next'
import PsychologicalProfile from '@/components/psychological-profile/PsychologicalProfile'

export const metadata: Metadata = {
  title: 'Psychological Profile | Limbiclab',
  description: 'Forensic psychological profile — Calculated Indifference analysis.',
}

export default function ProfilePage() {
  return <PsychologicalProfile />
}
