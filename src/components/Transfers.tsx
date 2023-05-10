import { COLOR } from '@/lib/constant'
import IconShieldFilled from './IconShieldFilled'
import IconShieldOff from './IconShieldOff'
import IconChevronsRight from './IconChevronsRight'
import styles from '@/styles/Transfers.module.scss'
import type { CSSProperties } from 'react'
import type { Database } from '@/lib/supabase/database'

interface Props {
  data: Array<Database['public']['Tables']['transfer']['Row']>
}

export default function Transfers({ data }: Props) {
  return (
    <section className={styles.container}>
      <h2>Traspasos y Fichajes</h2>
      <ul className={styles.list}>
        {[...data].reverse().map(({ id, from, freestyler, to }) => (
          <li key={`transfer-${id}`}>
            <p>{freestyler}</p>
            <div>
              <span
                style={
                  from
                    ? ({ '--color': COLOR[from] } as CSSProperties)
                    : undefined
                }
              >
                {from ? (
                  <>
                    <IconShieldFilled />
                    {`FMS ${from}`}
                  </>
                ) : (
                  <IconShieldOff />
                )}
              </span>
              <IconChevronsRight />
              <span style={{ '--color': COLOR[to] } as CSSProperties}>
                <IconShieldFilled />
                {`FMS ${to}`}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
