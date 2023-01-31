import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'
import { baseUrl } from '@utils/constants'

// export async function getStaticPaths() {
//   // const res = await fetch(`${baseUrl}/api/db/findRandomPost`)
//   // const [post] = await res.json()
//   const paths = [{ id: '2' }].map(({ id }: { id: string }) => ({ params: { id } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps(context: any) {
//   const id = context.params.id

//   const res = await fetch(`${baseUrl}/api/db/findPost?id=${id}`)
//   const posts = await res.json()

//   return { props: { posts } }
// }

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
  isFeatured: boolean
}

export type Posts = Array<Post>

const DashboardPage: NextPage<{ posts: Posts }> = ({ posts = [] }) => {
  return <Dashboard data={{ posts }} />
}

export default DashboardPage
