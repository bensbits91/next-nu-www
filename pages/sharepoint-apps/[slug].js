import { getPostBySlug, getAllPosts } from '../../utils/api';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import AppsPostHeader from '../../components/AppsPostHeader';
import ImageOpt from '../../components/ImageOpt';
import renderToString from 'next-mdx-remote/render-to-string';
import { skillsets } from '../../utils/skillsets';

const components = { ImageOpt };

export default function AppPage({ post, mdxSource }) {
    const { title, description, skills } = post

    return (
        <>
            <Head>
                <title>SharePoint Apps by nuTandem - {title}</title>
            </Head>
            <Layout>
                <AppsPostHeader title={title} description={description} skills={skills} />
                <main>
                    <Post mdxSource={mdxSource} />
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
    ]),

        mdxSource = await renderToString(post.content, { components, scope: post }),

        isSkillset = post.skills.split('_')[0] === 'skillset',

        skillset = isSkillset
            ? skillsets[post.skills.split('_')[1]]
            : post.skills,

        skills = skillset.split(',').map(s => {
            const skillSlug = s.trim()

            return {
                skillSlug: skillSlug,
                skillPage: getPostBySlug(skillSlug, ['title', 'pageType'])
            }
        })

    post.skills = skills

    return {
        props: { post, mdxSource },
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug', 'pageType'])
        .filter(p => p.pageType === 'app')

    return {
        paths: posts.map(post => {
            return {
                params: { ...post },
            }
        }),
        fallback: false,
    }
}
