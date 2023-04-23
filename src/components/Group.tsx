import useGroup from '@/lib/hooks/useGroup'
import leagues from '@/lib/utils/leagues'
import styles from '@/styles/modules/Group.module.scss'
import type { Freestyler } from '@/lib/types'

interface Props {
  name: 'A' | 'B'
  fms: string
  freestylers: Freestyler[]
}

export default function Group({ name, fms, freestylers }: Props) {
  const { compareResults, getBattles, getPoints, reducer } = useGroup()
  const sortedFreestylers = [...freestylers].sort(compareResults)

  return (
    <table className={`${styles.table} ${leagues.get(fms)}`}>
      <thead>
        <tr>
          <th>Grupo {name}</th>
          <th>Batallas</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        {sortedFreestylers.map(({ name, battles }) => (
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
  )
}
