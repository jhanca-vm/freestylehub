import sumResult from './sumResult'
import type { BattleResults, Freestyler } from '@prisma/client'

function hasBattleId(opponentResults: BattleResults[]) {
  return (battleResults: BattleResults) => {
    return opponentResults.some(({ battleId }) => {
      return battleId === battleResults.battleId
    })
  }
}

export default function sortFreestylers(
  freestylers: (Freestyler & { battleResults: BattleResults[] })[]
) {
  return [...freestylers].sort((a, b) => {
    const aTotalPoints = sumResult('points', a.battleResults)
    const bTotalPoints = sumResult('points', b.battleResults)

    if (aTotalPoints === bTotalPoints) {
      const aBattlePoints =
        a.battleResults.find(hasBattleId(b.battleResults))?.points ?? 0
      const bBattlePoints =
        b.battleResults.find(hasBattleId(a.battleResults))?.points ?? 0

      if (aBattlePoints === bBattlePoints) {
        const aPTB = sumResult('ptb', a.battleResults)
        const bPTB = sumResult('ptb', b.battleResults)

        return bPTB - aPTB
      }

      return bBattlePoints - aBattlePoints
    }

    return bTotalPoints - aTotalPoints
  })
}
