import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@components/Button/Button'
import speechBubbles from '../../../public/speech_bubbles.png'
import { Post } from '@pages/dashboard'
import { useRouter } from 'next/router'
import * as S from '@components/Hero/Hero.style'

export const Hero: NextPage<{ post: Post }> = ({
  post: { id = '', title = '', summary = '' } = {},
}): JSX.Element => {
  const { replace } = useRouter()

  const readBlogPost = (id: string) => () => {
    replace(`/blog/${id}`)
  }

  return (
    <S.Hero>
      <Image src={speechBubbles} alt='' />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{summary}</S.Text>
      </S.Content>
      <Button type='button' onClick={readBlogPost(id)}>
        Find Out More
      </Button>
    </S.Hero>
  )
}
