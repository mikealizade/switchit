import type { NextPage } from 'next'
import Article from '@modules/Resources/components/Article/Article'
import { Posts } from '@pages/dashboard'
import { baseUrl } from '@utils/constants'

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findBlogPosts`)
  const posts = await res.json()

  return { props: { posts } }
}

const Page: NextPage<{ posts: Posts }> = ({ posts }): JSX.Element => {
  return <Article posts={posts} />
}

export default Page
