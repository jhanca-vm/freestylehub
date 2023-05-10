import 'dayjs/locale/es'
import dayjs from 'dayjs'
import style from '@/styles/Schedule.module.scss'
import type { CSSProperties } from 'react'
import type { Database } from '@/lib/supabase/database'
import { COLOR } from '@/lib/constant'

interface Props {
  matchdays: Array<Database['public']['Tables']['matchday']['Row']>
}

export default function Schedule({ matchdays }: Props) {
  return (
    <section className={style.container}>
      <h2>Próximas jornadas</h2>
      <span />
      <div className={style.matchdays}>
        {matchdays.map(({ id, image, fms, number, city, date }) => (
          <article
            key={id}
            style={
              {
                '--color': COLOR[fms],
                '--image': `url('${image}')`
              } as CSSProperties
            }
          >
            <div>
              <p>{`FMS ${fms}`}</p>
              <p>{`Jornada ${number}`}</p>
            </div>
            <div>
              <p>{city}</p>
              <time dateTime={date}>
                {dayjs(date).locale('es').format('ddd D MMMM')}
              </time>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
