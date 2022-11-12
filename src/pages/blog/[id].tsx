import type { NextPage } from 'next'
import Blog from '@modules/Blog/Blog'
import { useRouter } from 'next/router'

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com'
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/db/fetchBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const BlogPage: NextPage = ({ posts }: any) => {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(({ id: postId }: { id: string }) => postId === id)
  console.log('id', id)

  return <Blog post={post} />
}

export default BlogPage
