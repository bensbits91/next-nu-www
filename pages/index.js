import Layout from '../components/Layout'
import Link from 'next/link'


export default function Index() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <div>
        <Link href='/skills'><a>Skills</a></Link>
      </div>
      <div>
        <Link href='/work'><a>Work</a></Link>
      </div>
    </Layout>
  )
}