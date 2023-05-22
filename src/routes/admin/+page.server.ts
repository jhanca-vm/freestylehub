import { JWT_SECRET } from '$env/static/private'
import { redirect } from '@sveltejs/kit'
import jwt from 'jsonwebtoken'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies }) => {
  const session = cookies.get('session') ?? ''

  jwt.verify(session, JWT_SECRET, error => {
    if (error) throw redirect(307, '/admin/login')
  })
}
