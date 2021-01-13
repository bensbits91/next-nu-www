import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Index() {
    return (
        <>
            <Head>
                <title>Ben Brooks</title>
                <meta name='author' content='Ben Brooks'/>
            </Head>
            <Layout>
                <h1>Home Page</h1>
                <div>
                    <Link href='/skills'><a>Skills</a></Link>
                </div>
                <div>
                    <Link href='/work'><a>Work</a></Link>
                </div>
            </Layout>
        </>
    )
}