import renderToString from 'next-mdx-remote/render-to-string'
// import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import Related from '../../components/Related'
import { getPostBySlug, getAllPosts } from '../../utils/api'

// const components = {
//     // Head,
// }

export default function WorkPage({ post, mdxSource, skills }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Work - {post.title}</title>
                <meta name='author' content='Ben Brooks'/>
            </Head>
            <Layout>
                <div className='post-header'>
                    <h1>{post.title}</h1>
                    {post.description && (
                        <p className='description'>{post.description}</p>
                    )}
                </div>
                <main>
                    <Post mdxSource={mdxSource} />
                    <h2>Skills</h2>
                    <Related items={skills} />
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
        'skills',
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

    const skills = post.skills.split(',').map(s => {
        const skillSlug = s.trim()

        return {
            skillSlug: skillSlug,
            skillPage: getPostBySlug(skillSlug, ['title'])
        }
    })


    return {
        props: { post, mdxSource, skills },
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
