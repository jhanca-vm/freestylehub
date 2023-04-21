import type { Freestyler } from '@/lib/types'

type Result = [number, number]

export default function useGroup() {
  const getPoints = ([points]: Result) => points
  const getPTB = ([, ptb]: Result) => ptb
  const getBattles = ({ results }: Freestyler) => results.length

  const reducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue
  }

  const compareResults = (a: Freestyler, b: Freestyler) => {
    const aPoints = a.results.map(getPoints).reduce(reducer, 0)
    const aPTB = a.results.map(getPTB).reduce(reducer, 0)
    const bPoints = b.results.map(getPoints).reduce(reducer, 0)
    const bPTB = b.results.map(getPTB).reduce(reducer, 0)

    return aPoints === bPoints ? bPTB - aPTB : bPoints - aPoints
  }

  return { getPoints, getPTB, getBattles, reducer, compareResults }
}
