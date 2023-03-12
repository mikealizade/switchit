import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { BlockButton } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Post } from '@pages/dashboard'
import { Div, Text } from '@styles/common.style'
import { getArticleImageUrl } from '@utils/functions'
import * as S from './Article.style'

const metaDataConfig = {
  'the-problem': {
    title: 'How do Banks Contribute to Climate Change? | Switch It Green',
    description:
      'Banks are investing billions in fossil fuels, fuelling climate breakdown. Learn more about banks’ inadequate policies & how to use your account for good today.',
    backgroundPositionY: 'center',
  },
  'the-solution': {
    title: 'What is green banking? | Switch It Green',
    description:
      'Green banking means using your account to support a bank which doesn’t invest in fossil fuels. Learn how switching it green can help end fossil fuel financing.',
    backgroundPositionY: 'bottom',
  },
  'the-impact': {
    title: 'Why Should I Switch Banks? | Switch It Green',
    description:
      'Your switch to a green bank will help tackle climate breakdown. Find out how to make your switch count as part of our campaign against fossil fuel financing.',
    backgroundPositionY: 'bottom',
  },
  'get-involved': {
    title: 'How Do I Switch Banks? | Switch It Green',
    description:
      'Our Bank Switching Platform makes switching to a green bank as easy and impactful as possible. Follow our step-by-step guide & harness the power of your switch.',
    backgroundPositionY: 'center',
  },
}

const Article: NextPage<{ posts: Post[] }> = ({ posts = [] }) => {
  const {
    query: { id },
  } = useRouter()
  const { isTablet } = useMediaQuery()

  const {
    id: postId,
    text = '',
    // articleImageName = '',
    imageName = '',
    titleImageName = '',
    summary = '',
  } = posts.find(({ id: postId }: { id: string }) => postId === id) as Pick<
    Post,
    'id' | 'title' | 'text' | 'summary' | 'imageName' | 'titleImageName'
  >
  const article = metaDataConfig[id as keyof typeof metaDataConfig]
  const metaTitle = article?.title
  const metaDescription = article?.description
  const backgroundPositionY = article?.backgroundPositionY

  console.log('postId:', postId)
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.ImageContainer
          style={{
            backgroundImage: `url(${getArticleImageUrl(imageName)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '450px',
            backgroundPositionX: 'center',
            backgroundPositionY: backgroundPositionY,
            WebkitBackgroundSize: 'cover',
          }}
        >
          {isTablet && (
            <S.ImageTitle>
              <Image src={`/images/img_${titleImageName}.svg`} alt='' width={320} height={40} objectFit='contain' />
            </S.ImageTitle>
          )}
        </S.ImageContainer>
        <S.Article>
          <S.ArticleTitle>{summary}</S.ArticleTitle>

          <S.PostText dangerouslySetInnerHTML={{ __html: text }} />
          <BlockButton margin='40px 0 0'>
            <Link href='/api/auth/login'>Switch To A Green Bank</Link>
          </BlockButton>

          {postId === 'the-impact' && (
            <div style={{ marginTop: '50px' }}>
              <Text>
                <Link href='/why-switch-it/article/get-involved'>Click here for more information on switching banks.</Link>
              </Text>
            </div>
          )}

          {postId === 'get-involved' && (
            <div style={{ marginTop: '50px' }}>
              <Text>
                <Link href='/why-switch-it/article/the-problem'>Find out more about the link between banks and climate breakdown</Link> and{' '}
                <Link href='/why-switch-it/article/the-impact'>why you should switch to a green bank.</Link>
              </Text>
            </div>
          )}
        </S.Article>
      </SignedOutLayout>
    </>
  )
}

export default Article
