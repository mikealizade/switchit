import type { NextPage } from 'next'
import { Title } from '@styles/common.style'
import * as S from '@components/Blog/Blog.style'
import { ReplayCircleFilled } from '@mui/icons-material'
import { useRouter } from 'next/router'

export type Blog = {
  id: number
  title: string
  summary: number
}

export const Blog: NextPage<{ data: Blog[] }> = ({ data = [] }): JSX.Element => {
  const [{ id, title = '', summary = '' }] = data
  const { replace } = useRouter()

  // console.log('blog', blog)

  const readBlogPost = (id: number) => () => {
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
