import Head from 'next/head'
import Layout from '../../components/Layout'
import MdxList from '../../components/MdxList'
import { getAllPosts } from '../../utils/api'

export default function SkillIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Skills</title>
            </Head>
            <Layout>
                <section>
                    <h1>Skills</h1>
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
        'pageType',
        'skillType',
        'love',
        'level',
        'firstUsed',
        'lastUsed',
        'icon',
    ]).filter(p => p.pageType === 'skills')

    return {
        props: { posts }
    }
}
