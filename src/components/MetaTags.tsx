import Head from 'next/head'
import { BASE_URL } from '@/lib/constant'

interface Props {
  title: string
  description: string
  ogUrl?: string
  ogImage: string
  twitterImage: string
}

export default function MetaTags({
  title,
  description,
  ogUrl = '/',
  ogImage,
  twitterImage
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${BASE_URL}${ogUrl}`} />
      <meta
        property="og:image"
        content={`https://i.imgur.com/${ogImage}.jpg`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://i.imgur.com/${twitterImage}.jpg`}
      />
      <meta name="twitter:creator" content="@jhanca_vm" />
    </Head>
  )
}
