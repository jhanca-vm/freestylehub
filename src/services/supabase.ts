import { createClient } from '@supabase/supabase-js'
import type { Database } from './database'

const { SUPABASE_URL, SUPABASE_KEY } = process.env

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Environment variables are not defined')
}

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)

export default supabase
