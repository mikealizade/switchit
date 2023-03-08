import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'
import { baseUrl } from '@utils/constants'

export async function getServerSideProps() {
  //ultimately combine queries
  const res = await fetch(`${baseUrl}/api/db/findRandomPost`)
  const random = await res.json()
  const res1 = await fetch(`${baseUrl}/api/db/findFeaturedPost`)
  const featured = await res1.json()
  const posts = [...random, ...featured]

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
  points: string
  mins: string
  imageName: string
  articleImageName?: string
  titleImageName?: string
  isFeatured: boolean
  type: string
}

export type Posts = Array<Post>

const DashboardPage: NextPage<{ posts: Posts }> = ({ posts = [] }) => {
  return <Dashboard data={{ posts }} />
}

export default DashboardPage
