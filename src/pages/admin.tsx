import Head from 'next/head'
import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
  type Session
} from '@supabase/auth-helpers-nextjs'
import useSession from '@/lib/hooks/useSession'
import MatchdayForm from '@/components/forms/MatchdayForm'
import LoginForm from '@/components/forms/LoginForm'
import styles from '@/styles/modules/Admin.module.scss'
import type { GetServerSideProps, NextPage } from 'next'
import { FONT } from '@/lib/constant'

interface Props {
  initialSession: Session | null
}

const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const supabase = createServerSupabaseClient(ctx)
  const { data } = await supabase.auth.getSession()

  return { props: { initialSession: data.session } }
}

const Admin: NextPage<Props> = ({ initialSession }) => {
  const supabaseClient = createBrowserSupabaseClient()
  const session = useSession(initialSession, supabaseClient)

  return (
    <>
      <Head>
        <title>Admin | FreestyleHub</title>
      </Head>
      <main className={`${FONT.className} ${styles.container}`}>
        {session ? (
          <>
            <MatchdayForm />
          </>
        ) : (
          <section className={styles.form}>
            <LoginForm supabaseClient={supabaseClient} />
          </section>
        )}
      </main>
    </>
  )
}

export { Admin as default, getServerSideProps }
