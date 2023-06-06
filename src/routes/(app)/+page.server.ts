import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const name = { select: { name: true } }

  const [matchdays, transfers] = await Promise.all([
    prisma.matchday.findMany({
      where: { battles: { none: {} } },
      orderBy: { date: 'asc' },
      take: 6,
      include: { fms: name }
    }),
    prisma.transfer.findMany({
      select: { fromFMS: name, freestyler: name, toFMS: name }
    })
  ])

  return { matchdays, transfers: [...transfers].reverse() }
}
