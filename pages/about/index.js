import Head from 'next/head';
import Layout from '../../components/Layout';
import AboutBlock from '../../components/about/AboutBlock';
import { getAllPosts } from '../../utils/api';
import renderToString from 'next-mdx-remote/render-to-string';
import { standardMetaTitle } from '../../utils/strings';
import styles from '../../components/about/AboutBlock.module.scss';

export default function AboutIndex({ posts }) {
    return (
        <>
            <Head>
                <title>{standardMetaTitle} | About</title>
            </Head>
            <Layout>
                <h1>About Us</h1>
                <div key='about-how' className={styles.timelineGroup}>
                    <h2>Our Methods</h2>
                    <div className='container'>
                        {posts.filter(p => p.pageType === 'how').map(post => <AboutBlock post={post} />)}
                    </div>
                </div>
                <div key='about-more' className={styles.timelineGroup}>
                    <h2>More About nuTandem</h2>
                    <div className='container'>
                        {posts.filter(p => p.pageType === 'about').map(post => <AboutBlock post={post} />)}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const posts = getAllPosts([
        'slug',
        'link',
        'title',
        'pageType',
        'content',
        'order',
    ]).filter(p => p.pageType === 'about' || p.pageType === 'how'),

        convertMdxToHtml = posts.map(async post => {
            post.htmlContent = await renderToString(post.content);
            return post;
        });

    await Promise.all(convertMdxToHtml).then(_ => {
        posts.sort((a, b) => a.order - b.order);
    });


    return {
        props: { posts }
    };
};