import 'dayjs/locale/es'
import dayjs from 'dayjs'
import supabase from './supabase'
import type { Database } from './database'

export type Matchday = Database['public']['Tables']['matchday']['Row']

export async function getMatchdays() {
  const { data } = await supabase
    .from('matchday')
    .select('*')
    .order('date')
    .limit(3)

  const formatted = data?.map(({ date, ...rest }) => ({
    ...rest,
    date: dayjs(date).locale('es').format('ddd D MMMM')
  }))

  return formatted ?? []
}

export async function addMatchday(matchday: [Matchday]) {
  await supabase.from('matchday').insert(matchday)
}
