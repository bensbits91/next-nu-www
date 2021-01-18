import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import Related from '../../components/Related'
import { getPostBySlug, getAllPosts } from '../../utils/api'
import ImageOpt from '../../components/ImageOpt'

export default function WorkPage({ post, mdxSource, skills }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Work - {post.title}</title>
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
                    {post.image &&
                        <><div className='img-wrap-small'>
                            <ImageOpt path={post.image} sizeSet='small' />
                        </div>
                        <div className='img-wrap-mid'>
                            <ImageOpt path={post.image} sizeSet='mid' />
                        </div>
                        <div className='img-wrap-full'>
                            <ImageOpt path={post.image} sizeSet='full' />
                        </div></>
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
        'skills',
        'image'
    ]),

        mdxSource = await renderToString(post.content, { scope: post }),

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
