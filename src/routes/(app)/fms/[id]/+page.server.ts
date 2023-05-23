import { error } from '@sveltejs/kit'
import { FMS } from '$lib/constants'
import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const map = new Map(FMS)

  if (!map.has(params.id)) throw error(404, 'Not found')

  const name = map.get(params.id)!

  const { freestylers, matchdays } = await prisma.fMS
    .findUnique({
      where: { name },
      select: {
        freestylers: { include: { battleResults: true } },
        matchdays: { where: { battles: { none: {} } } }
      }
    })
    .then(data => data!)

  return {
    name,
    freestylers,
    matchdays: matchdays.map(matchday => ({ ...matchday, fms: { name } }))
  }
}
