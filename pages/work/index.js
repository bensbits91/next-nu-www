import Head from 'next/head'
import Layout from '../../components/Layout'
import MdxList from '../../components/MdxList'
import { getAllPosts } from '../../utils/api'

export default function WorkIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Work</title>
            </Head>
            <Layout>
                <section>
                    <h1>Work</h1>
                    <MdxList items={posts} />
                </section>
            </Layout>
        </>
    )
}

export function getStaticProps() {
    const posts = getAllPosts([
        'title',
        'slug',
        'pageType'
    ]).filter(p => p.pageType === 'work')

    return {
        props: { posts }
    }
}
