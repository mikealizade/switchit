import { useEffect, useState } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { SocialPost } from '@components/SocialPost/SocialPost'
import { Card } from '@components/Card/Card'
import { Hero } from '@components/Hero/Hero'
import * as S from '@styles/common.style'
import { socialPostsConfig, SocialPostConfig } from '@utils/constants'

export const PostToSocials = () => {
  const school = 'lse' //from db?
  const type = 'twitter' //from db?
  const socialTwitter = socialPostsConfig[school as keyof typeof socialPostsConfig]?.[type]

  return (
    <S.ColumnContainer>
      <S.Column>
        <Card column>
          {socialTwitter.map((postsArray, i) => {
            console.log('postsArray', postsArray)
            return <SocialPost key={i} post={postsArray.join('\n\n')} type='twitter' index={i} />
          })}
        </Card>
      </S.Column>
      <S.Column>
        <Card column>
          {socialTwitter.map((postsArray, i) => {
            console.log('postsArray', postsArray)
            return <SocialPost key={i} post={postsArray.join('\n\n')} type='facebook' index={i} />
          })}
        </Card>
      </S.Column>
      <S.Column>
        <Card column>
          {socialTwitter.map((postsArray, i) => {
            console.log('postsArray', postsArray)
            return <SocialPost key={i} post={postsArray.join('\n\n')} type='instagram' index={i} />
          })}
        </Card>
      </S.Column>
    </S.ColumnContainer>
  )
}

const Programs = (): JSX.Element => {
  // const { user: { sub = '' } = {}, isLoading = false } = useUser()

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <S.Content>
        <Hero type='programs' />
        <PostToSocials />
      </S.Content>
    </>
  )
}

export default Programs
