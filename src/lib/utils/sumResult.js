/**
 * @param {'points'|'ptb'} result
 */
export default function sumResult(result) {
  /**
   * @param {number} accumulator
   * @param {{ points: number, ptb: number }} battleResult
   */
  return (accumulator, battleResult) => accumulator + battleResult[result]
}
