import leagues from '@/lib/utils/leagues'
import IconShieldFilled from './IconShieldFilled'
import IconShieldOff from './IconShieldOff'
import IconChevronsRight from './IconChevronsRight'
import variables from '@/styles/modules/variables.module.scss'
import styles from '@/styles/modules/Transfers.module.scss'
import type { Transfer } from '@/lib/types'

interface Props {
  data: Transfer[]
}

export default function Transfers({ data }: Props) {
  return (
    <section>
      <h2 className={styles.heading}>Traspasos y Fichajes</h2>
      <ul className={styles.list}>
        {data.map(({ id, from, freestyler, to }) => (
          <li key={`transfer-${id}`}>
            <span>
              {from ? (
                <>
                  <IconShieldFilled /> FMS {from}
                </>
              ) : (
                <IconShieldOff />
              )}
            </span>
            <IconChevronsRight />
            <span>{freestyler}</span>
            <IconChevronsRight />
            <span>
              <IconShieldFilled /> FMS {to}
            </span>
            <style jsx>{`
              span:first-of-type {
                color: ${from
                  ? variables[`color-${leagues.get(from)}`]
                  : variables.default};
              }

              span:last-of-type {
                color: ${variables[`color-${leagues.get(to)}`]};
              }
            `}</style>
          </li>
        ))}
      </ul>
    </section>
  )
}
