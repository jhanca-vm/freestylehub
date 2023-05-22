import type { BattleResults } from '@prisma/client'

export default function sumResult(
  key: 'points' | 'ptb',
  results: BattleResults[]
) {
  return results
    .map(result => result[key] ?? 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
