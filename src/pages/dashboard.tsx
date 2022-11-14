import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'
import { baseUrl } from '@utils/constants'

// export async function fetchPosts() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/findRandomPost`)
//   const random = await res.json()
//   const res1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/findFeaturedPost`)
//   const featured = await res1.json()

//   return [...random, ...featured]
// }

export async function getStaticProps() {
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
  imageUrl: string
  isFeatured: boolean
}

export type Posts = Array<Post>

const DashboardPage: NextPage<{ posts: Posts }> = ({ posts }) => {
  return <Dashboard data={{ posts }} />
}

export default DashboardPage
