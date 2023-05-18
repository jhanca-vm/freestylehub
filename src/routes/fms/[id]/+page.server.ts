import { error } from '@sveltejs/kit'
import { FMS } from '$lib/constants'
import supabase from '$lib/supabase'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const map = new Map(FMS)

  if (!map.has(params.id)) throw error(404, 'Not found')

  const name = map.get(params.id)!

  const [{ data: freestylers }, { data: postseason }, { data: relegation }] =
    await Promise.all([
      supabase.from('freestyler').select('*').eq('fms', name),
      supabase.from('postseason').select('*').eq('fms', name).single(),
      supabase.from('relegation').select('*').eq('fms', name).single()
    ])

  return {
    name,
    freestylers: freestylers!,
    postseason: postseason!,
    relegation: relegation!
  }
}
