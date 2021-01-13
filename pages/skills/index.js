import Layout from '../../components/Layout'
import MdxList from '../../components/MdxList'
import { getAllPosts } from '../../utils/api'
import Nav from '../../components/Nav'

export default function SkillIndex({ posts }) {
  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <h1>Skills</h1>
      <MdxList items={posts} />
    </Layout>
  )
}

export function getStaticProps() {

  const posts = getAllPosts([
    'title',
    'slug',
    'pageType'
  ]).filter(p => p.pageType === 'skills')


  return {
    props: { posts },
  }

}
