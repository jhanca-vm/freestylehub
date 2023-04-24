import useLeagues from '@/lib/hooks/useLeagues'
import styles from '@/styles/modules/Schedule.module.scss'
import type { CSSProperties } from 'react'
import type { Matchday } from '@/lib/types'

interface Props {
  matchdays: Matchday[]
}

export default function Schedule({ matchdays }: Props) {
  const leagues = useLeagues()

  return (
    <section className={styles.container}>
      <h2>Próximas jornadas</h2>
      <span />
      <div className={styles.matchdays}>
        {matchdays.map(({ id, league, number, city, date, image }) => (
          <article
            className={styles[`fms-${leagues.get(league)}`]}
            style={{ '--image': `url('${image}')` } as CSSProperties}
            key={id}
          >
            <div>
              <p>FMS {league}</p>
              <p>Jornada {number}</p>
            </div>
            <div>
              <p>{city}</p>
              <p>{date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
