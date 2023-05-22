import { JWT_SECRET } from '$env/static/private'
import { fail, redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '$lib/prisma'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
  const session = cookies.get('session')

  if (session) {
    jwt.verify(session, JWT_SECRET, error => {
      if (!error) throw redirect(303, '/admin')
    })
  }
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData()
    const username = data.get('username') as string
    const password = data.get('password') as string

    if (!username) return fail(400, { username, missing: true })

    const admin = await prisma.admin.findUnique({ where: { username } })

    if (!admin || !(await bcrypt.compare(password, admin.hash))) {
      return fail(401, { username, incorrect: true })
    }

    const token = jwt.sign(admin.username, JWT_SECRET)

    cookies.set('session', token)

    throw redirect(303, '/admin')
  }
}
