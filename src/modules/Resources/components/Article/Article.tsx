/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { useUpdateAwards } from '@hooks/useUpdateAwards'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Resources/components/Article/Article.style'
import { Post } from '@pages/dashboard'
import { Content } from '@styles/common.style'
import { getArticleImageUrl, toDateString } from '@utils/functions'
import { ArticleData, Data } from '../Articles/Articles.style'

const Article: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const {
    query: { id },
  } = useRouter()
  const { addPoints } = useUpdatePoints('resources')
  const updateAwards = useUpdateAwards('resources', 'resources')
  const {
    title = '',
    text = '',
    created = '',
    mins,
    points,
    imageName,
  } = posts.find(({ id: postId }: { id: string }) => postId === id) as Pick<
    Post,
    'title' | 'text' | 'created' | 'mins' | 'points' | 'imageName' | 'type'
  >

  useEffect(() => {
    const articlesRead = JSON.parse(window.localStorage.getItem('readArticles')!) ?? []

    if (!articlesRead.includes(id)) {
      updateAwards(25, 'add')
      addPoints(25)
      window.localStorage.setItem('readArticles', JSON.stringify([...articlesRead, id]))
    }
  }, [])

  return (
    <>
      <Head>
        <title>Switch It Green | Resources</title>
        <meta name='description' content='Switch to a green bank on our Green Banking Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <Content>
          <Card column rowGap={40}>
            <S.ArticleContent>
              <S.Article>
                <img src={getArticleImageUrl(imageName)} alt='' />
                <ArticleData align='right' small>
                  <Data>
                    <Image src={'/icons/icon_clock.svg'} alt='' width={20} height={20} />
                    {mins}min
                  </Data>
                  <Data>
                    <Image src={'/icons/icon_star_blue.svg'} alt='' width={20} height={20} />+{points}
                    pts
                  </Data>
                </ArticleData>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostText dangerouslySetInnerHTML={{ __html: text }} />
              </S.Article>
              <S.MoreArticles>
                <S.MoreArticlesHeader>More in Resources</S.MoreArticlesHeader>
                <S.ArticlesList>
                  {posts
                    .filter(({ id: articleId, type }) => type === 'app' && articleId !== id)
                    .map(({ id, title, imageName }) => {
                      return (
                        <S.MoreItem key={id}>
                          <S.ImageContainer>
                            <Link href={`/resources/article/${id}`}>
                              <a>
                                <Image src={getArticleImageUrl(imageName, false, true)} alt={title} width={82} height={82} />
                              </a>
                            </Link>
                          </S.ImageContainer>
                          <Link href={`/resources/article/${id}`}>
                            <S.Details>
                              <S.ArticleTitle>{title}</S.ArticleTitle>
                              <S.Date>{toDateString(created)}</S.Date>
                            </S.Details>
                          </Link>
                        </S.MoreItem>
                      )
                    })}
                </S.ArticlesList>
              </S.MoreArticles>
            </S.ArticleContent>
          </Card>
        </Content>
      </ErrorBoundary>
    </>
  )
}

export default Article
