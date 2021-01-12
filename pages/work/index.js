import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Layout from '../../components/Layout'
import { workFilePaths, WORK_PATH } from '../../utils/workPaths'
import MdxList from '../../components/MdxList'

export default function Index({ work }) {
  return (
    <Layout>
      <h1>Work</h1>
      <MdxList files={work} list='work' />
    </Layout>
  )
}

export function getStaticProps() {
  const work = workFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(WORK_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { work } }
}
