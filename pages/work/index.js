import Head from 'next/head'
import Layout from '../../components/Layout'
import MdxList from '../../components/MdxList'
import { getAllPosts } from '../../utils/api'

export default function WorkIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Work</title>
                <meta name='author' content='Ben Brooks' />
            </Head>
            <Layout>
                <h1>Work</h1>
                <MdxList items={posts} />
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
