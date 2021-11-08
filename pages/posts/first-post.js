import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
          </h2>
           <h2>
        <Link href="/posts/alerts">
          <a>Go to Alerts</a>
        </Link>
      </h2>
    </Layout>
  )
}