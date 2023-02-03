import type { NextPage } from 'next'
import Image from 'next/image'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/Button'
import * as S from '@components/Hero/Hero.style'
import { Post } from '@pages/dashboard'
import Draw from '../../../public/icons/icon_draw.svg'

export const DashboardHero: NextPage<{ post: Post }> = ({
  post: { id = '', title = '', summary = '' } = {},
}): JSX.Element => {
  const { push } = useRouter()

  const readBlogPost = (id: string) => () => {
    push(`/resources/article/${id}`)
  }

  return (
    <S.DashboardHero>
      <Image src={Draw} alt='' />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{summary}</S.Text>
      </S.Content>
      <Button type='button' onClick={readBlogPost(id)}>
        Find Out More
      </Button>
    </S.DashboardHero>
  )
}
