import Head from 'next/head'
import supabase from '@/lib/supabase'
import Layout from '@/components/Layout'
import Schedule from '@/components/Schedule'
import Transfers from '@/components/Transfers'
import type { GetServerSideProps, NextPage } from 'next'
import type { Matchday, Transfer } from '@/lib/types'

interface Props {
  matchdays: Matchday[]
  transfers: Transfer[]
}

const getServerSideProps: GetServerSideProps = async () => {
  const [{ data: matchdays }, { data: transfers }] = await Promise.all([
    supabase.from('matchday').select('*').order('date').limit(3),
    supabase.from('transfer').select('*')
  ])

  return { props: { matchdays, transfers } }
}

const Home: NextPage<Props> = ({ matchdays, transfers }) => (
  <>
    <Head>
      <title>FreestyleHub</title>
    </Head>
    <Layout>
      <Schedule matchdays={matchdays} />
      <Transfers data={transfers} />
    </Layout>
  </>
)

export { Home as default, getServerSideProps }
