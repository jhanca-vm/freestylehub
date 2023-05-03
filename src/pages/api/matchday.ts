import { addMatchday } from '@/services/matchday'
import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (request, response) => {
  switch (request.method) {
    case 'POST':
      await addMatchday(request.body)
      response.status(201).end()
    default:
      response.status(405).end()
  }
}

export default handler
