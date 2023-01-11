import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Blog from '@modules/Blog/Blog'
import { Posts, Post } from '@pages/dashboard'
import { baseUrl } from '@utils/constants'

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const BlogPage: NextPage<{ posts: Posts }> = ({ posts }): JSX.Element => {
  const {
    query: { id },
  } = useRouter()
  const post = posts.find(({ id: postId }: { id: string }) => postId === id) as Post

  return <Blog post={post} />
}

export default BlogPage
