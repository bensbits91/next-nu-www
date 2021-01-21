import { getPostBySlug, getAllPosts } from '../../utils/api'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import SkillPostHeader from '../../components/SkillPostHeader'
import renderToString from 'next-mdx-remote/render-to-string'

export default function SkillPage({ post, mdxSource }) {
    const { slug, title, description } = post

    return (
        <>
            <Head>
                <title>Ben Brooks - Skills - {post.title}</title>
            </Head>
            <Layout>
                <SkillPostHeader slug={slug} title={title} description={description} />
                <main>
                    <Post mdxSource={mdxSource} />
                    {post.link &&
                        <div>
                            <Link href={post.link}>
                                <a>Learn more about {post.title}</a>
                            </Link>
                        </div>
                    }
                </main>
            </Layout>
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'slug',
        'description',
        'content',
        'link',
        'firstUsed',
        'lastUsed',
    ]),

        mdxSource = await renderToString(post.content, { scope: post })

    return {
        props: { post, mdxSource },
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug', 'pageType'])
        .filter(p => p.pageType === 'skills')

    return {
        paths: posts.map(post => {
            return {
                params: { ...post },
            }
        }),
        fallback: false,
    }
}
