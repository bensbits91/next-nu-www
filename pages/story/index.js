import Head from 'next/head'
// import Link from 'next/link'
import Layout from '../../components/Layout'

export default function StoryIndex() {
    return (
        <>
            <Head>
                <title>Ben Brooks - Story</title>
            </Head>
            <Layout>
                <h1>My Story</h1>
                <div>
                    Story...
                </div>
            </Layout>
        </>
    )
}