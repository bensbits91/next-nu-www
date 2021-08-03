import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Index() {
    return (
        <>
            <Head>
                <title>SharePoint Apps by nuTandem</title>
            </Head>
            <Layout>
                <h1>Home Page</h1>
                {/* <div>
                    <Link href='/skills'><a>Skills</a></Link>
                </div> */}
                <div>
                    <Link href='/apps'><a>Apps</a></Link>
                </div>
            </Layout>
        </>
    )
}