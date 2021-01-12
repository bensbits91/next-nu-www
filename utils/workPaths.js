import fs from 'fs'
import path from 'path'


export const WORK_PATH = path.join(process.cwd(), 'posts/work')

export const workFilePaths = fs
  .readdirSync(WORK_PATH)
  .filter((path) => /\.mdx?$/.test(path))
