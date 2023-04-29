import Head from 'next/head'
import { getMatchdays, type Matchday } from '@/services/matchday'
import { getTransfers, type Transfer } from '@/services/transfer'
import Layout from '@/components/Layout'
import Schedule from '@/components/Schedule'
import Transfers from '@/components/Transfers'
import type { GetServerSideProps, NextPage } from 'next'

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
