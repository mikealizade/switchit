import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'
import { baseUrl } from '@utils/constants'

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/db/fetchBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

export type Post = {
  id: string
  created: string
  title: string
  summary: string
  text: string
  authorId: string
  tags: Array<string>
  expiry: string
  imageUrl: string
}

export type Posts = Array<Post>

const DashboardPage: NextPage<{ posts: Posts }> = ({ posts }) => {
  return <Dashboard data={{ posts }} />
}

export default DashboardPage
