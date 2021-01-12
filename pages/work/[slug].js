// import fs from 'fs'
// import matter from 'gray-matter'
// import hydrate from 'next-mdx-remote/hydrate'
// import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
// import path from 'path'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
// import { workFilePaths, WORK_PATH } from '../../utils/workPaths'
// import { skillsFilePaths, SKILLS_PATH } from '../../utils/skillPaths'
// import { postFilePaths, POST_PATH } from '../../utils/allPaths'

// import MDX from '@mdx-js/runtime'

import Post from '../../components/Post';

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
  // RelatedSkills: dynamic(() => import('../../components/RelatedSkills')),
  Head,
  // MDX: dynamic(() => import('@mdx-js/runtime')),
}

export default function WorkPage({ /* source, frontMatter */post }) {
  console.log('🚀 ~ WorkPage ~ post', post);
  // console.log('🚀 ~ WorkPage ~ source', source);
  // console.log('🚀 ~ WorkPage ~ frontMatter', frontMatter);

  // const content = hydrate(source, { components })

  // const skillSlugs = post.skills.split(',');
  // console.log('🚀 ~ WorkPage ~ skillSlugs', skillSlugs);

  return (
    <Layout>
      <header>
        <nav>
          <Link href='/'>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className='post-header'>
        <h1>{post.title}</h1>
        {post.description && (
          <p className='description'>{post.description}</p>
        )}
      </div>
      <main>
        {/* {post.content} */}

        <Post post={post} />




        {/* <div>Skills</div>
        {skillSlugs.map(s =>
          <div key={s.replace(/ /g, '')}>
            <Link href={`/skills/${s.trim()}`}>
              <a>{s.trim()}</a>
            </Link>
          </div>
        )} */}
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

  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'content',
  ])

  return {
    props: { post },
  }


  // const postFilePath = path.join(POST_PATH, `${params.slug}.mdx`)
  // const source = fs.readFileSync(postFilePath)

  // const { content, data } = matter(source)

  // const mdxSource = await renderToString(content, {
  //   components,
  //   // Optionally pass remark/rehype plugins
  //   mdxOptions: {
  //     remarkPlugins: [],
  //     rehypePlugins: [],
  //   },
  //   scope: data,
  // })

  // const asdfData = {...data, skillPaths: params.skillPaths}

  // return {
  //   props: {
  //     source: mdxSource,
  //     frontMatter: data,
  //     // frontMatter: asdfData,
  //     // skillPaths: params.skillPaths,
  //     // slug: params.slug
  //   },
  // }
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


  // const paths = postFilePaths
  //   // Remove file extensions for page paths
  //   .map((path) => path.replace(/\.mdx?$/, ''))
  //   // Map the path into the static paths object required by Next.js
  //   .map((slug) => ({
  //     params: {
  //       slug: slug,
  //     }
  //   }))

  // return {
  //   paths,
  //   fallback: false,
  // }
}
