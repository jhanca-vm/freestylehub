import useLeagues from '@/lib/hooks/useLeagues'
import IconShieldFilled from './icons/IconShieldFilled'
import IconShieldOff from './icons/IconShieldOff'
import IconChevronsRight from './icons/IconChevronsRight'
import styles from '@/styles/modules/Transfers.module.scss'
import type { Transfer } from '@/services/transfer'

interface Props {
  data: Transfer[]
}

export default function Transfers({ data }: Props) {
  const leagues = useLeagues()

  return (
    <section className={styles.container}>
      <h2>Traspasos y Fichajes</h2>
      <ul className={styles.list}>
        {data.map(({ id, from, freestyler, to }) => (
          <li key={`transfer-${id}`}>
            <span className={from ? leagues.get(from) : undefined}>
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
            <span className={leagues.get(to)}>
              <IconShieldFilled /> FMS {to}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
