import Head from 'next/head'
import { LEAGUES } from '@/lib/utils/constant'
import { getFreestylers } from '@/lib/utils/supabase'
import Layout from '@/components/Layout'
import Groups from '@/components/Groups'
import type { GetServerSideProps, NextPage } from 'next'
import type { Freestyler } from '@/lib/types'
import { SWRConfig } from 'swr'

interface Props {
  name: string
  fallback: Record<string, Freestyler[]>
}

const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = params?.id as string
  const paths = LEAGUES.map(([, path]) => path)

  if (!paths.includes(id)) return { notFound: true }

  const [fms] = LEAGUES.find(([, path]) => path === id)!
  const freestylers = (await getFreestylers(fms)) as Freestyler[]

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
