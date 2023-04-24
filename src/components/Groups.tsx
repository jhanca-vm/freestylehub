import useLeagues from '@/lib/hooks/useLeagues'
import Group from './Group'
import styles from '@/styles/modules/Groups.module.scss'
import type { Freestyler } from '@/lib/types'
import useFetcher from '@/lib/hooks/useFetcher'

interface Props {
  fms: string
}

export default function Groups({ fms }: Props) {
  const leagues = useLeagues()
  const league = leagues.get(fms)
  const freestylers = useFetcher<Freestyler[]>(`/api/freestyler/${league}`)

  return (
    <section className={`${styles.container} ${league}`}>
      <Group name="A" freestylers={freestylers} />
      <Group name="B" freestylers={freestylers} />
    </section>
  )
}
