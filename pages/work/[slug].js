import { getPostBySlug, getAllPosts } from '../../utils/api'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import WorkPostHeader from '../../components/WorkPostHeader'
import ImageOpt from '../../components/ImageOpt'
import renderToString from 'next-mdx-remote/render-to-string'

const components = { ImageOpt }

export default function WorkPage({ post, mdxSource, skills }) {
    const { title, description } = post

    return (
        <>
            <Head>
                <title>Ben Brooks - Work - {title}</title>
            </Head>
            <Layout>
                <WorkPostHeader title={title} description={description} skills={skills} />
                <main>
                    <Post mdxSource={mdxSource} />
                </main>
            </Layout>

            <style jsx>{`
                h1 { margin-bottom: 0 }
                h2 { margin-bottom: 18px }
            `}</style>
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
        'image'
    ]),

        mdxSource = await renderToString(post.content, { components, scope: post }),

        skills = post.skills.split(',').map(s => {
            const skillSlug = s.trim()

            return {
                skillSlug: skillSlug,
                skillPage: getPostBySlug(skillSlug, ['title', 'pageType'])
            }
        })

    return {
        props: { post, mdxSource, skills },
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug', 'pageType'])
        .filter(p => p.pageType === 'work')

    return {
        paths: posts.map(post => {
            return {
                params: { ...post },
            }
        }),
        fallback: false,
    }
}
