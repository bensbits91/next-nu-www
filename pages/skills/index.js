import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Layout from '../../components/Layout'
import { skillsFilePaths, SKILLS_PATH } from '../../utils/skillPaths'
import MdxList from '../../components/MdxList'

export default function Index({ skills }) {
  return (
    <Layout>
      <h1>Skills</h1>
      <MdxList files={skills} list='skills' />
    </Layout>
  )
}

export function getStaticProps() {
  const skills = skillsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SKILLS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { skills } }
}
