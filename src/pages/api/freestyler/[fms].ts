import { LEAGUES } from '@/lib/utils/constant'
import { getFreestylers } from '@/lib/utils/supabase'
import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async ({ query }, res) => {
  const result = LEAGUES.find(([, id]) => id === query.fms)

  if (!result) {
    res.status(404).end()
  } else {
    const freestyler = await getFreestylers(result[0])
    res.status(200).json(freestyler)
  }
}

export default handler
