import Head from 'next/head'
import supabase from '@/lib/supabase'
import leagues from '@/lib/utils/leagues'
import Layout from '@/components/Layout'
import Group from '@/components/Group'
import styles from '@/styles/modules/FMS.module.scss'
import type { GetServerSideProps, NextPage } from 'next'
import type { Freestyler } from '@/lib/types'

interface Props {
  name: string
  freestylers: Freestyler[]
}

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string
  const paths = Array.from(leagues.values())

  if (!paths.includes(id)) return { notFound: true }

  const names = new Map(Array.from(leagues, ([name, path]) => [path, name]))
  const fms = names.get(id)
  const { data } = await supabase.from('freestyler').select('*').eq('fms', fms)

  return { props: { name: fms, freestylers: data } }
}

const FMS: NextPage<Props> = ({ name, freestylers }) => (
  <>
    <Head>
      <title>{`FMS ${name}`}</title>
    </Head>
    <Layout>
      <section className={styles.groups}>
        <Group
          name="A"
          fms={name}
          freestylers={freestylers.filter(({ group }) => group === 'A')}
        />
        <Group
          name="B"
          fms={name}
          freestylers={freestylers.filter(({ group }) => group === 'B')}
        />
      </section>
    </Layout>
  </>
)

export { FMS as default, getServerSideProps }
