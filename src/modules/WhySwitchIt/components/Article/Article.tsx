import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { BlockButton, ContentContainer } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Post } from '@pages/dashboard'
import { Text } from '@styles/common.style'
import { getArticleImageUrl } from '@utils/functions'
import * as S from './Article.style'

const metaDataConfig = {
  'how-do-banks-contribute-to-climate-change': {
    title: 'How do Banks Contribute to Climate Change? | Switch It Green',
    description: `Banks are investing billions in fossil fuels, fuelling climate breakdown. Learn more about banks' inadequate policies & how to use your account for good today.`,
    backgroundPositionY: 'center',
  },
  'what-is-green-banking': {
    title: 'What is green banking? | Switch It Green',
    description: `Green banking means using your account to support a bank which doesn't invest in fossil fuels. Learn how switching it green can help end fossil fuel financing.`,
    backgroundPositionY: 'bottom',
  },
  'why-should-I-switch-banks': {
    title: 'Why Should I Switch Banks? | Switch It Green',
    description:
      'Your switch to a green bank will help tackle climate breakdown. Find out how to make your switch count as part of our campaign against fossil fuel financing.',
    backgroundPositionY: 'bottom',
  },
  'how-to-switch-banks': {
    title: 'How Do I Switch Banks? | Switch It Green',
    description:
      'Our Green Banking Platform makes switching to a green bank as easy and impactful as possible. Follow our step-by-step guide & harness the power of your switch.',
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
    imageName = '',
    titleImageName = '',
    summary = '',
  } = (posts.find(({ id: postId }: { id: string }) => postId === id) as Pick<
    Post,
    'id' | 'title' | 'text' | 'summary' | 'imageName' | 'titleImageName'
  >) || {}
  const article = metaDataConfig[id as keyof typeof metaDataConfig]
  const metaTitle = article?.title
  const metaDescription = article?.description
  const backgroundPositionY = article?.backgroundPositionY
  const width = titleImageName === 'the_impact' ? 300 : 320
  const height = titleImageName === 'the_impact' ? 50 : 40

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
              <Image src={`/images/img_${titleImageName}.svg`} alt='' width={width} height={height} objectFit='contain' />
            </S.ImageTitle>
          )}
        </S.ImageContainer>
        <S.Article>
          <ContentContainer>
            <S.ArticleTitle>{summary}</S.ArticleTitle>

            <S.PostText dangerouslySetInnerHTML={{ __html: text }} />
            <BlockButton margin='40px 0 0'>
              <Link href='/api/auth/signup'>Switch To A Green Bank</Link>
            </BlockButton>

            {postId === 'why-should-I-switch-banks' && (
              <S.PostText style={{ marginTop: '50px' }}>
                <Text>
                  <Link href='/why-switch-it/article/how-to-switch-banks'>Click here for more information on switching banks.</Link>
                </Text>
              </S.PostText>
            )}

            {postId === 'how-to-switch-banks' && (
              <S.PostText style={{ marginTop: '50px' }}>
                <Text>
                  Find out more about{' '}
                  <Link href='/why-switch-it/article/how-do-banks-contribute-to-climate-change'>
                    the link between banks and climate breakdown
                  </Link>{' '}
                  and <Link href='/why-switch-it/article/why-should-I-switch-banks'>why you should switch to a green bank.</Link>
                </Text>
              </S.PostText>
            )}
          </ContentContainer>
        </S.Article>
      </SignedOutLayout>
    </>
  )
}

export default Article
