import renderToString from 'next-mdx-remote/render-to-string'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import { getPostBySlug, getAllPosts } from '../../utils/api'
import ItemIcon from '../../components/ItemIcon'
import { colors } from '../../utils/cssvars'

export default function SkillPage({ post, mdxSource }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Skills - {post.title}</title>
            </Head>
            <Layout>
                <div className='post-header'>
                    <div className='row'>

                        <div className='col-9 col-12-medium'>
                            <h1>{post.title}</h1>
                            {post.description && (
                                <p className='description'>{post.description}</p>
                            )}
                        </div>

                        <div className='col-3 col-12-medium'>
                            <ItemIcon slug={post.slug} size='12em' color={colors.mainPink} />
                        </div>

                    </div>
                </div>
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
