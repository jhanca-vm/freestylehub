import { COLOR } from '@/lib/constant'
import useGroups from '@/lib/hooks/useGroups'
import styles from '@/styles/Groups.module.scss'
import type { CSSProperties } from 'react'
import type { Database } from '@/lib/supabase/database'

interface Props {
  freestylers: Array<Database['public']['Tables']['freestyler']['Row']>
  fms: string
}

export default function Groups({ freestylers, fms }: Props) {
  const { compareResults, getBattles, getPoints, reducer } = useGroups()
  const groupA = freestylers.filter(({ group }) => group === 'A')
  const groupB = freestylers.filter(({ group }) => group === 'B')
  const legend = [
    'Semifinales',
    'Batalla por semifinales',
    'Batalla por la permanencia',
    'Última oportunidad'
  ]

  return (
    <section
      className={styles.container}
      style={{ '--color': COLOR[fms] } as CSSProperties}
    >
      {[groupA, groupB].map((freestylers, index) => (
        <table className={styles.group} key={`${fms}-group-${index}`}>
          <thead>
            <tr>
              <th>{`Grupo ${index === 0 ? 'A' : 'B'}`}</th>
              <th>Batallas</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {[...freestylers].sort(compareResults).map(({ name, battles }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>
                  {battles.length || '-'}/
                  {Math.max(...freestylers.map(getBattles)) || '-'}
                </td>
                <td>{battles.map(getPoints).reduce(reducer, 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
      <ul className={styles.legend}>
        {legend.map(label => (
          <li key={`${fms}-${label}`}>
            <span />
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}
