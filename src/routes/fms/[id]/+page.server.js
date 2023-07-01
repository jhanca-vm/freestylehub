import { error } from '@sveltejs/kit'
import { LEAGUES } from '$lib/constants'
import prisma from '$lib/prisma'

export async function load({ params }) {
  const name = LEAGUES.get(params.id)

  if (!name) throw error(404)

  const fms = await prisma.fMS.findUnique({
    where: { name },
    include: {
      freestylers: {
        include: {
          battleResults: { select: { battleId: true, points: true, ptb: true } }
        }
      }
    }
  })

  return { ...fms }
}
