import supabase from '$lib/supabase'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const [{ data: matchdays }, { data: transfers }] = await Promise.all([
    supabase.from('matchday').select('*').order('date').limit(3),
    supabase.from('transfer').select('*')
  ])

  return { matchdays: matchdays!, transfers: transfers! }
}
