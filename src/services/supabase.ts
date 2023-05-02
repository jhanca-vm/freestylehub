import { createClient } from '@supabase/supabase-js'
import type { Database } from './database'

const { NEXT_PUBLIC_SUPABASE_URL, SUPABASE_KEY } = process.env

if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Environment variables are not defined')
}

const supabase = createClient<Database>(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_KEY)

export default supabase
