import Head from 'next/head'
import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
  type Session
} from '@supabase/auth-helpers-nextjs'
import useSession from '@/lib/hooks/useSession'
import LoginForm from '@/components/LoginForm'
import styles from '@/styles/modules/Admin.module.scss'
import type { GetServerSideProps, NextPage } from 'next'

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
      <main className={styles.container}>
        {session ? (
          <></>
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
