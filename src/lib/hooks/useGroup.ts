import type { Battle, Freestyler } from '@/services/freestyler'

export default function useGroup() {
  const getPoints = ([, points]: Battle) => points
  const getBattles = ({ battles }: Freestyler) => battles.length

  const reducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue
  }

  const compareResults = (a: Freestyler, b: Freestyler) => {
    let aPoints = a.battles.map(getPoints).reduce(reducer, 0)
    let bPoints = b.battles.map(getPoints).reduce(reducer, 0)

    if (aPoints === bPoints) {
      aPoints = a.battles.find(([name]: Battle) => name === b.name)?.[1] ?? 0
      bPoints = b.battles.find(([name]: Battle) => name === a.name)?.[1] ?? 0

      return aPoints - bPoints
    }

    return bPoints - aPoints
  }

  return { getPoints, getBattles, reducer, compareResults }
}
