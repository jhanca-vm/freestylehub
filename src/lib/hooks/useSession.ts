import { useEffect, useState } from 'react'
import type { Session, SupabaseClient } from '@supabase/supabase-js'

export default function useSession(
  initialSession: Session | null,
  supabaseClient: SupabaseClient
) {
  const [session, setSession] = useState<Session | null>(initialSession)

  useEffect(() => {
    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabaseClient.auth])

  return session
}
