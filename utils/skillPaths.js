import fs from 'fs'
import path from 'path'

export const SKILLS_PATH = path.join(process.cwd(), 'posts/skills')

export const skillsFilePaths = fs
  .readdirSync(SKILLS_PATH)
  .filter((path) => /\.mdx?$/.test(path))