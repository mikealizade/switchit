import type { NextPage } from 'next'
import * as S from '@components/SocialPost/SocialPost.style'
import { Title } from '@styles/common.style'
import Image from 'next/image'
import { socialPostsConfig, SocialPostConfig } from '@utils/constants'

import { Button } from '@components/Button/Button'

export type SocialPost = {
  badge: string
  total: number
}

export const SocialPost: NextPage<{ school: string; type: string }> = ({
  school = '',
  type = '',
}): JSX.Element => {
  const social = socialPostsConfig[school as keyof typeof socialPostsConfig]?.[type]

  // const facebookText = socialPostsConfig[school].facebook
  // const instagramText = socialPostsConfig[school].instagram

  return (
    <S.SocialPost>
      <Image src={`/icons/icon_${type}.svg`} alt='' width={60} height={60} />
      {social.map((post: any, i: number) => (
        <S.Container key={post}>
          <S.Content>
            {post.map((para: string) => (
              <p key={para}>{para}</p>
            ))}
          </S.Content>
          <S.Buttons>
            <Button type='button' onClick={() => {}} size='small'>
              Edit
            </Button>
            <Button type='button' onClick={() => {}} size='small'>
              <a
                href={`http://twitter.com/share?text=${post.join(
                  ' ',
                )}&url=http://test.com&hashtags=#test`}
                target='_blank'
                rel='noreferrer'
              >
                Post
              </a>
            </Button>
          </S.Buttons>
        </S.Container>
      ))}
    </S.SocialPost>
  )
}
