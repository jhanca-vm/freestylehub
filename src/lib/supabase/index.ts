import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './database'

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY)

export default supabase
