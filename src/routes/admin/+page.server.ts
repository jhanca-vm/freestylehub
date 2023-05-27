import { JWT_SECRET } from '$env/static/private'
import { fail, redirect } from '@sveltejs/kit'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import jwt from 'jsonwebtoken'
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types'

dayjs.extend(utc)

export const load: PageServerLoad = async ({ cookies }) => {
  const session = cookies.get('session') ?? ''

  jwt.verify(session, JWT_SECRET, error => {
    if (error) throw redirect(307, '/admin/login')
  })

  const [matchdays, freestylers] = await Promise.all([
    prisma.matchday.findMany({
      where: { date: { equals: dayjs.utc().startOf('d').toISOString() } },
      select: { id: true, city: true, fmsId: true }
    }),
    prisma.freestyler.findMany()
  ])

  return { matchdays, freestylers }
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData()

    try {
      await prisma.battle.create({
        data: {
          matchdayId: data.get('matchdayId') as string,
          results: {
            create: [
              {
                freestylerId: data.get('freestylerId1') as string,
                points: Number(data.get('points1')),
                ptb: Number(data.get('ptb1'))
              },
              {
                freestylerId: data.get('freestylerId2') as string,
                points: Number(data.get('points2')),
                ptb: Number(data.get('ptb2'))
              }
            ]
          }
        }
      })

      return { success: true }
    } catch {
      return fail(400, { error: true })
    }
  }
}
