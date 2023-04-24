import Head from 'next/head'
import { getMatchdays, getTransfers } from '@/lib/utils/supabase'
import Layout from '@/components/Layout'
import Schedule from '@/components/Schedule'
import Transfers from '@/components/Transfers'
import type { GetServerSideProps, NextPage } from 'next'
import type { Matchday, Transfer } from '@/lib/types'

interface Props {
  matchdays: Matchday[]
  transfers: Transfer[]
}

const getServerSideProps: GetServerSideProps<Props> = async () => {
  const [matchdays, transfers] = await Promise.all([
    getMatchdays(),
    getTransfers()
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
