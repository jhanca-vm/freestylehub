import supabase from './supabase'
import type { Database } from './database'

export type Battle = [string, number]

export type Freestyler = Database['public']['Tables']['freestyler']['Row'] & {
  battles: Array<Battle>
}

export async function getFreestylersByFMS(fms: string) {
  const { data } = await supabase.from('freestyler').select('*').eq('fms', fms)

  return data as Freestyler[]
}
