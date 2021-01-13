import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
import Nav from '../../components/Nav';
import Post from '../../components/Post';
import Related from '../../components/Related';
import { getPostBySlug, getAllPosts } from '../../utils/api'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function WorkPage({ post, mdxSource }) {
  console.log('🚀 ~ WorkPage ~ post', post);
  console.log('🚀 ~ WorkPage ~ mdxSource', mdxSource);

  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <div className='post-header'>
        <h1>{post.title}</h1>
        {post.description && (
          <p className='description'>{post.description}</p>
        )}
      </div>
      <main>
        <Post mdxSource={mdxSource} />

        <div>Skills</div>

        <Related items={post.skills.split(',')} list='skills' />

      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {

  let post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'skills',
  ])

  const mdxSource = await renderToString(post.content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
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
