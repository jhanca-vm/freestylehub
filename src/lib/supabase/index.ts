import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL } from '../constant'
import type { Database } from './database'

const { SUPABASE_KEY } = process.env

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Environment variables are not defined')
}

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)

export default supabase
