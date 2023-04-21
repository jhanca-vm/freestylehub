import useGroup from '@/lib/hooks/useGroup'
import leagues from '@/lib/utils/leagues'
import varibles from '@/styles/modules/variables.module.scss'
import styles from '@/styles/modules/Group.module.scss'
import type { Freestyler } from '@/lib/types'

interface Props {
  name: 'A' | 'B'
  fms: string
  freestylers: Freestyler[]
}

export default function Group({ name, fms, freestylers }: Props) {
  const { compareResults, getBattles, getPTB, getPoints, reducer } = useGroup()
  const sortedFreestylers = [...freestylers].sort(compareResults)

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Grupo {name}</th>
            <th>Batallas</th>
            <th>PTB</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {sortedFreestylers.map(({ name, results }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>
                {results.length || '-'}/
                {Math.max(...freestylers.map(getBattles)) || '-'}
              </td>
              <td>{results.map(getPTB).reduce(reducer, 0) || '-'}</td>
              <td>{results.map(getPoints).reduce(reducer, 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        th,
        tbody tr:first-of-type {
          color: ${varibles[`color-${leagues.get(fms)}`]};
        }
      `}</style>
    </>
  )
}
