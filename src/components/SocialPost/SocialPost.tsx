import { useState, useRef } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/SocialPost/SocialPost.style'
import { Button } from '@components/Button/Button'

export type SocialPostProps = {
  type: string
  post: string
  index: number
}

const imageConfig = {
  twitter: ['img_socialpost.png'],
  facebook: ['img_socialpost.png'],
  instagram: ['img_socialpost.png'],
}

export const SocialPost: NextPage<SocialPostProps> = ({ post, type, index }): JSX.Element => {
  const [isDisabled, setEdit] = useState('false')
  const postRef = useRef<HTMLDivElement>(null)
  const image = imageConfig[type as keyof typeof imageConfig][index]

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

    window.open(links[type as keyof typeof links])
  }

  return (
    <S.SocialPost>
      {index === 0 && (
        <Image src={`/icons/icon_${type}.svg`} alt='' width={'100%'} height={'100%'} />
      )}
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
        <S.Buttons>
          <Button type='button' onClick={onEdit} size='small'>
            Edit
          </Button>
          <Button type='button' size='small' onClick={onPost(type)}>
            Post
          </Button>
        </S.Buttons>
      </S.Container>
    </S.SocialPost>
  )
}
