import { error } from '@sveltejs/kit'
import { FMS } from '$lib/constants'
import supabase from '$lib/supabase'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const map = new Map(FMS)

  if (!map.has(params.id)) throw error(404, 'Not found')

  const name = map.get(params.id)!
  const { data } = await supabase.from('freestyler').select('*').eq('fms', name)

  return { name, freestylers: data! }
}
