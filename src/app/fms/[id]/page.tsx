import { notFound } from 'next/navigation'
import { FMS } from '@/lib/constant'
import supabase from '@/lib/supabase'
import Groups from '@/components/Groups'
import type { Metadata } from 'next'

interface Props {
  params: { id: string }
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fms = FMS[params.id]

  return {
    title: `FMS ${fms}`,
    description: `Tablas de clasificación de los grupos de la FMS ${fms}`
  }
}

export default async function FMSPage({ params }: Props) {
  const fms = FMS[params.id]

  if (!fms) notFound()

  const { data } = await supabase.from('freestyler').select('*').eq('fms', fms)

  return <Groups freestylers={data ?? []} fms={fms} />
}
