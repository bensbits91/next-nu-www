import Layout from '../../components/Layout'
import MdxList from '../../components/MdxList'
import { getAllPosts } from '../../utils/api'

export default function WorkIndex({ posts }) {
  console.log('🚀 ~ Index ~ posts', posts);

  return (
    <Layout>
      <h1>Work</h1>
      <MdxList items={posts} />
    </Layout>
  )
}

export function getStaticProps() {

  const posts = getAllPosts([
    'title',
    'slug',
    'pageType'
  ]).filter(p => p.pageType === 'work')


  return {
    props: { posts },
  }

}
