import supabase from './supabase'
import type { Database } from './database'

export type Transfer = Database['public']['Tables']['transfer']['Row']

export async function getTransfers() {
  const { data } = await supabase.from('transfer').select('*')

  return data ?? []
}
