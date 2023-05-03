import { useEffect, useState } from 'react'
import type { Session, SupabaseClient } from '@supabase/supabase-js'

export default function useSession(
  initialSession: Session | null,
  supabaseClient: SupabaseClient
) {
  const [session, setSession] = useState<Session | null>(initialSession)

  useEffect(() => {
    if (!initialSession) {
      const {
        data: { subscription }
      } = supabaseClient.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }
  }, [initialSession, supabaseClient.auth])

  return session
}
