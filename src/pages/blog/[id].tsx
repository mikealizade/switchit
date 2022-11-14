import type { NextPage } from 'next'
import Blog from '@modules/Blog/Blog'
import { useRouter } from 'next/router'
import { baseUrl } from '@utils/constants'
import { Posts, Post } from '@pages/dashboard'

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

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const BlogPage: NextPage<{ posts: Posts }> = ({ posts }): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
  const post = posts.find(({ id: postId }: { id: string }) => postId === id) as Post

  return <Blog post={post} />
}

export default BlogPage
