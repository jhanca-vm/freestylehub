import 'dayjs/locale/es'
import dayjs from 'dayjs'
import { createClient } from '@supabase/supabase-js'
import type { Freestyler, Matchday, Transfer } from '../types'

const { SUPABASE_URL, SUPABASE_KEY } = process.env

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Environment variables are not defined')
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export async function getMatchdays() {
  const { data } = await supabase
    .from('matchday')
    .select('*')
    .order('date')
    .limit(3)

  const matchdays = data as Matchday[]

  return matchdays.map(({ date, ...rest }) => ({
    ...rest,
    date: dayjs(date).locale('es').format('ddd D MMMM')
  }))
}

export async function getTransfers() {
  const { data } = await supabase.from('transfer').select('*')

  return data as Transfer[]
}

export async function getFreestylers(fms: string) {
  const { data } = await supabase.from('freestyler').select('*').eq('fms', fms)

  return data as Freestyler[] | null
}
