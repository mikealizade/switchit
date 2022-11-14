import type { NextPage } from 'next'
import Blog from '@modules/Blog/Blog'
import { useRouter } from 'next/router'
// import { baseUrl } from '@utils/constants'
import { Posts, Post } from '@pages/dashboard'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/findRandomPost`)
  const [post] = await res.json()
  // const paths = posts.map(({ id }: { id: string }) => ({ params: { id } }))

  return {
    paths: {
      id: post?.id,
    },
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  const id = context.params.id

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/db/findPost?id=${id}`)
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
