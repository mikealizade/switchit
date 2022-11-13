import type { NextPage } from 'next'
import { Title } from '@styles/common.style'
import * as S from '@components/Blog/Blog.style'
import { useRouter } from 'next/router'

export type Blog = {
  id: string
  title: string
  summary: string
}

export const Blog: NextPage<{ data: Blog[] }> = ({ data = [] }): JSX.Element => {
  const [{ id, title = '', summary = '' }] = data
  const { replace } = useRouter()

  const readBlogPost = (id: string) => () => {
    replace(`/blog/${id}`)
  }

  return (
    <S.BlogContainer>
      <Title>News & Blog</Title>
      <S.BlogItem onClick={readBlogPost(id)}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </S.BlogItem>
    </S.BlogContainer>
  )
}
