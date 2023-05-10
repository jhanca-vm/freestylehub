import supabase from '@/lib/supabase'
import Schedule from '@/components/Schedule'
import Transfers from '@/components/Transfers'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'FreestyleHub',
  description:
    'Mantente al día con toda la información acerca de las jornadas, fechas, ' +
    'grupos y traspasos de todas las FMS.'
}

export default async function Home() {
  const [{ data: matchdays }, { data: transfers }] = await Promise.all([
    supabase.from('matchday').select('*').order('date').limit(3),
    supabase.from('transfer').select('*')
  ])

  return (
    <>
      <Schedule matchdays={matchdays ?? []} />
      <Transfers data={transfers ?? []} />
    </>
  )
}
