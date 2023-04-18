import Head from 'next/head'
import supabase from '@/lib/supabase'
import Layout from '@/components/Layout'
import Schedule from '@/components/Schedule'
import type { GetServerSideProps, NextPage } from 'next'
import type { Matchday } from '@/lib/types'

interface Props {
  matchdays: Matchday[]
}

const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await supabase
    .from('matchday')
    .select('*')
    .order('date')
    .limit(3)
    
  const matchdays = data as Matchday[]

  return { props: { matchdays } }
}

const Home: NextPage<Props> = ({ matchdays }) => (
  <>
    <Head>
      <title>FreestyleHub</title>
    </Head>
    <Layout>
      <Schedule matchdays={matchdays} />
    </Layout>
  </>
)

export { Home as default, getServerSideProps }
