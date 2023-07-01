import prisma from '$lib/prisma'

export async function load() {
  const matchdays = await prisma.matchday.findMany({
    where: { battles: { none: {} } },
    orderBy: { date: 'asc' },
    take: 3
  })

  return { matchdays }
}
