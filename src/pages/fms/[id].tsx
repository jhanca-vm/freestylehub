import { SWRConfig } from 'swr'
import { BANNERS, LEAGUES } from '@/lib/constant'
import { getFreestylersByFMS, type Freestyler } from '@/services/freestyler'
import MetaTags from '@/components/MetaTags'
import Layout from '@/components/Layout'
import Groups from '@/components/Groups'
import type { GetServerSideProps, NextPage } from 'next'

interface Props {
  id: string
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
      id,
      name: fms,
      fallback: { [`/api/freestyler/${id}`]: freestylers }
    }
  }
}

const FMS: NextPage<Props> = ({ id, name, fallback }) => (
  <>
    <MetaTags
      title={`FMS ${name}`}
      description={`Tablas de clasificación de los grupos de la FMS ${name}`}
      ogUrl={`/fms/${id}`}
      ogImage={BANNERS.get(id)![0]}
      twitterImage={BANNERS.get(id)![1]}
    />
    <Layout>
      <SWRConfig value={{ fallback }}>
        <Groups fms={name} />
      </SWRConfig>
    </Layout>
  </>
)

export { FMS as default, getServerSideProps }
