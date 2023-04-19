import formatDate from '@/lib/utils/formatDate'
import backgrounds from '@/styles/modules/backgrounds.module.scss'
import styles from '@/styles/modules/Schedule.module.scss'
import type { Matchday } from '@/lib/types'

interface Props {
  matchdays: Matchday[]
}

export default function Schedule({ matchdays }: Props) {
  return (
    <section className={styles.container}>
      <h2>Próximas jornadas</h2>
      <span />
      <div className={styles.matchdays}>
        {matchdays.map(({ id, league, number, city, date, image }) => (
          <article key={id}>
            <div>
              <p>FMS {league}</p>
              <p>Jornada {number}</p>
            </div>
            <div>
              <p>{city}</p>
              <p>{formatDate(date)}</p>
            </div>
            <style jsx>{`
              article {
                background: ${backgrounds['bg-gradient']},
                  ${backgrounds[`bg-${id.substring(0, 3)}`]},
                  url('${image}') center;
                background-size: cover;
              }
            `}</style>
          </article>
        ))}
      </div>
    </section>
  )
}
