import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com'

export async function getStaticProps() {
  const res = await fetch(`${server}/api/db/fetchBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const DashboardPage: NextPage = ({ posts }: any) => {
  return <Dashboard data={{ posts }} />
}

export default DashboardPage
