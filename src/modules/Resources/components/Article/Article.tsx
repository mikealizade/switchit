import type { NextPage } from 'next'
import Tooltip from '@mui/material/Tooltip'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ErrorBoundary } from 'react-error-boundary'
import { Card } from '@components/Card/Card'
import { Fallback } from '@components/Fallback/Fallback'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Resources/components/Article/Article.style'
import { Post } from '@pages/dashboard'
import { getArticleImageUrl } from '@utils/functions'
import { ArticleData, Data, ShareArticle } from '../Articles/Articles.style'

const Article: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const {
    // pathname,
    query: { id },
  } = useRouter()
  const { addPoints } = useUpdatePoints()
  const {
    title = '',
    text = '',
    created = '',
    mins,
    points,
    imageName,
  } = posts.find(({ id: postId }: { id: string }) => postId === id) as Pick<
    Post,
    'title' | 'text' | 'created' | 'mins' | 'points' | 'imageName'
  >
  const whatsAppUrl =
    'https://wa.me/?text=Hey%20there!%20Read%20this%20article%20fron%20SwitchIt%20'
  const url = `${whatsAppUrl}${process.env.NEXT_PUBLIC_BASE_URL}/resources/article/${id}`

  console.log('posts', posts)

  const onShareArticle = () => {
    addPoints(25)
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <Card column rowGap={40}>
            <S.ArticleContent>
              <S.Article>
                <Image src={getArticleImageUrl(imageName)} alt='' width={730} height={410} />
                <ArticleData align='right' small>
                  <Data>
                    <Image src={'/icons/icon_clock.svg'} alt='' width={20} height={20} />
                    {mins}min
                  </Data>
                  <Data>
                    <Image src={'/icons/icon_star_blue.svg'} alt='' width={20} height={20} />+
                    {points}
                    pts
                  </Data>
                  <Data>
                    <Tooltip title='Share Article' placement='top' arrow>
                      <ShareArticle onClick={onShareArticle}>
                        <Image
                          src={'/icons/icon_airplane_pink.svg'}
                          alt=''
                          width={19}
                          height={16}
                        />
                      </ShareArticle>
                    </Tooltip>
                  </Data>
                </ArticleData>
                <S.PostTitle>{title}</S.PostTitle>
                {/* <S.PostDate>{created.substring(0, 15)}</S.PostDate> */}
                <S.PostText dangerouslySetInnerHTML={{ __html: text }} />
              </S.Article>
              <S.MoreArticles>
                <S.MoreArticlesHeader>More in Resources</S.MoreArticlesHeader>
                <S.ArticlesList>
                  {posts.map(({ id, title, imageName }) => {
                    return (
                      <S.MoreItem key={id}>
                        <S.ImageContainer>
                          <Link href={`/article/${id}`}>
                            <Image
                              src={getArticleImageUrl(imageName)}
                              alt={title}
                              width={82}
                              height={82}
                            />
                          </Link>
                        </S.ImageContainer>
                        <Link href={`/resources/article/${id}`}>
                          <S.Details>
                            <S.ArticleTitle>{title}</S.ArticleTitle>
                            <S.Date>{created.substring(0, 15)}</S.Date>
                          </S.Details>
                        </Link>
                      </S.MoreItem>
                    )
                  })}
                </S.ArticlesList>
              </S.MoreArticles>
            </S.ArticleContent>
          </Card>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Article
