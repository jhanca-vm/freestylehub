import { LEAGUES } from '@/lib/constant'
import { getFreestylersByFMS, type Freestyler } from '@/services/freestyler'
import type { NextApiHandler } from 'next'

const handler: NextApiHandler<Freestyler[]> = async ({ query }, response) => {
  const result = LEAGUES.find(([, id]) => id === query.fms)

  if (!result) {
    response.status(404).end()
  } else {
    const [fms] = result
    const freestyler = await getFreestylersByFMS(fms)

    response.status(200).json(freestyler)
  }
}

export default handler
