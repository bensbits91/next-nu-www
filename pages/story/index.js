import Head from 'next/head'
import Layout from '../../components/Layout'
import StoryBlock from '../../components/StoryBlock'
import { getAllPosts, getSkillPostsFor } from '../../utils/api'
import renderToString from 'next-mdx-remote/render-to-string'
import dayjs from 'dayjs'

export default function StoryIndex({ posts }) {
    return (
        <>
            <Head>
                <title>Ben Brooks - Story</title>
            </Head>
            <Layout>
                <h1>My Story</h1>
                <div key='professional-experience' className='timeline-group'>
                    <h2>Professional Experience</h2>
                    <div className='container'>
                        {posts.filter(p => p.pageType === 'job').map(post => <StoryBlock post={post} />)}
                    </div>
                </div>
                <div key='education' className='timeline-group'>
                    <h2>Education</h2>
                    <div className='container'>
                        {posts.filter(p => p.pageType === 'school').map(post => <StoryBlock post={post} />)}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = getAllPosts([
        'slug',
        'org',
        'link',
        'title',
        'dateStart',
        'dateEnd',
        'skills',
        'pageType',
        'content',
    ]).filter(p => p.pageType === 'job' || p.pageType === 'school')

    const convertMdxToHtml = posts.map(async post => {
        post.htmlContent = await renderToString(post.content)
        return post
    })
    await Promise.all(convertMdxToHtml).then(_ => {
        posts.sort((a, b) => b.dateEnd === 'Present' || dayjs(b.dateEnd) > dayjs(a.dateEnd) ? 1 : -1)

        for (let i = 0; i < posts.length; i++) {
            if (posts[i].skills) {
                posts[i].skills = getSkillPostsFor(posts[i].skills)
            }
        }
    })


    return {
        props: { posts }
    }
}