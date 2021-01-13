import renderToString from 'next-mdx-remote/render-to-string'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
// import Related from '../../components/Related'
import { getPostBySlug, getAllPosts } from '../../utils/api'

// const components = {
//     Head,
// }

export default function SkillPage({ post, mdxSource }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Skills - {post.title}</title>
                <meta name='author' content='Ben Brooks'/>
            </Head>
            <Layout>
                <div className="post-header">
                    <h1>{post.title}</h1>
                    {post.description && (
                        <p className='description'>{post.description}</p>
                    )}
                </div>
                <main>
                    <Post mdxSource={mdxSource} />
                    <div>
                        <Link href={post.link}>
                            <a>Learn more about {post.title}</a>
                        </Link>
                    </div>
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
    ])

    const mdxSource = await renderToString(post.content, {
        // components,
        // Optionally pass remark/rehype plugins
        // mdxOptions: {
        //     remarkPlugins: [],
        //     rehypePlugins: [],
        // },
        scope: post,
    })

    return {
        props: { post, mdxSource },
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: { ...post },
            }
        }),
        fallback: false,
    }

}
