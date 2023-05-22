import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import prisma from '$lib/prisma'
import type { PageServerLoad } from './$types'

dayjs.extend(utc)

export const load: PageServerLoad = async () => {
  const name = { select: { name: true } }

  const [matchdays, transfers] = await Promise.all([
    prisma.matchday.findMany({
      where: { battles: { none: {} } },
      orderBy: { date: 'asc' },
      take: 3,
      include: { fms: name }
    }),
    prisma.transfer.findMany({
      select: { fromFMS: name, freestyler: name, toFMS: name }
    })
  ])

  return {
    matchdays: matchdays.map(({ date, ...rest }) => ({
      ...rest,
      date: dayjs.utc(date).format('YYYY-MM-DD')
    })),
    transfers: [...transfers].reverse()
  }
}
