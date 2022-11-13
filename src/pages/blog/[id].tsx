import type { NextPage } from 'next'
import Blog from '@modules/Blog/Blog'
import { useRouter } from 'next/router'
import { baseUrl } from '@utils/constants'
import { Posts, Post } from '@pages/dashboard'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/db/fetchBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const BlogPage: NextPage<{ posts: Posts }> = ({ posts = [] }): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(({ id: postId }: { id: string }) => postId === id) as Post

  return <Blog post={post} />
}

export default BlogPage
