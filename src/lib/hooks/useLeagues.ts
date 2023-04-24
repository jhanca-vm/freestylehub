import { LEAGUES } from '../utils/constant'

export default function useLeagues() {
  const leagues = new Map(LEAGUES)

  return leagues
}
