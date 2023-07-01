/**
 * @typedef {{ battleId: number, points: number, ptb: number }} BattleResult
 */

/**
 * @typedef {import('@prisma/client').Freestyler & {
 *   battleResults: BattleResult[]
 * }} Freestyler
 */

import sumResult from './sumResult'

/** @param {BattleResult[]} opponentResults */
function hasBattleId(opponentResults) {
  /** @param {BattleResult} battleResult */
  return battleResult => {
    return opponentResults.some(({ battleId }) => {
      return battleId === battleResult.battleId
    })
  }
}

/** @param {Freestyler[]} freestylers */
export default function sortFreestylers(freestylers) {
  return [...freestylers].sort((a, b) => {
    const aTotalPoints = a.battleResults.reduce(sumResult('points'), 0)
    const bTotalPoints = b.battleResults.reduce(sumResult('points'), 0)

    if (aTotalPoints === bTotalPoints) {
      const aBattlePoints =
        a.battleResults.find(hasBattleId(b.battleResults))?.points || 0
      const bBattlePoints =
        b.battleResults.find(hasBattleId(a.battleResults))?.points || 0

      if (aBattlePoints === bBattlePoints) {
        const aTotalPTB = a.battleResults.reduce(sumResult('ptb'), 0)
        const bTotalPTB = b.battleResults.reduce(sumResult('ptb'), 0)

        return bTotalPTB - aTotalPTB
      }

      return bBattlePoints - aBattlePoints
    }

    return bTotalPoints - aTotalPoints
  })
}
