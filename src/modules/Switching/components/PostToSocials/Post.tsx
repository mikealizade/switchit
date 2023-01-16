import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Button } from '@components/Button/Button'
import { Buttons } from '@styles/common.style'
import * as S from './Post.style'

export type SocialPostProps = {
  type: string
  post: string
  index: number
}

const imageConfig = {
  twitter: ['img_socialpost.png'],
  instagramStories: ['img_socialpost.png'],
  instagramPosts: ['img_socialpost.png'],
}

export const Post: NextPage<SocialPostProps> = ({ post, type, index }): JSX.Element => {
  const [isDisabled, setEdit] = useState('false')
  const postRef = useRef<HTMLDivElement>(null)
  const image = imageConfig[type as keyof typeof imageConfig]?.[index]

  const onEdit = () => {
    setEdit('true')
  }

  const onPost = (type: string) => () => {
    const text = postRef.current!.innerText
    //TODO add correct url and hashtag,
    const links = {
      twitter: `http://twitter.com/share?text=${encodeURIComponent(
        text,
      )}&url=https://switchit.green&hashtags=switchit`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=https://switchit.green&quote=${encodeURIComponent(
        text,
      )}`,
    }

    window.open(links[type as keyof typeof links], '_blank', 'noreferrer')
  }

  return (
    <S.Post>
      <S.Container key={post}>
        <S.Content
          ref={postRef}
          contentEditable={isDisabled}
          suppressContentEditableWarning
          onBlur={() => setEdit('false')}
        >
          {post}
          {image && (
            <Image src={`/images/socialposts/${image}`} alt='' width={'100%'} height={60} />
          )}
        </S.Content>
        <Buttons align='right'>
          <Button mode='secondary' colour='blue' type='button' onClick={onEdit} size='small'>
            Edit
          </Button>
          <Button type='button' colour='blue' size='small' onClick={onPost(type)}>
            Post
          </Button>
        </Buttons>
      </S.Container>
    </S.Post>
  )
}
