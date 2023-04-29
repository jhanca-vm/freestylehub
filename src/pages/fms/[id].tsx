import Head from 'next/head'
import { SWRConfig } from 'swr'
import { LEAGUES } from '@/lib/constant'
import { getFreestylersByFMS, type Freestyler } from '@/services/freestyler'
import Layout from '@/components/Layout'
import Groups from '@/components/Groups'
import type { GetServerSideProps, NextPage } from 'next'

interface Props {
  name: string
  fallback: Record<`/api/freestyler/${string}`, Freestyler[]>
}

const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = params?.id as string
  const paths = LEAGUES.map(([, path]) => path)

  if (!paths.includes(id)) return { notFound: true }

  const [fms] = LEAGUES.find(([, path]) => path === id)!
  const freestylers = await getFreestylersByFMS(fms)

  return {
    props: {
      name: fms,
      fallback: { [`/api/freestyler/${id}`]: freestylers }
    }
  }
}

const FMS: NextPage<Props> = ({ name, fallback }) => (
  <>
    <Head>
      <title>{`FMS ${name}`}</title>
    </Head>
    <Layout>
      <SWRConfig value={{ fallback }}>
        <Groups fms={name} />
      </SWRConfig>
    </Layout>
  </>
)

export { FMS as default, getServerSideProps }
