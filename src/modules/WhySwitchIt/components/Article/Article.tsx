import type { NextPage } from 'next'
// import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BlockButton } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Post } from '@pages/dashboard'
import { getArticleImageUrl } from '@utils/functions'
import * as S from './Article.style'

const metaDataConfig = {
  'the-problem': {
    title: 'How do Banks Contribute to Climate Change? | Switch It Green',
    description:
      'Banks are investing billions in fossil fuels, fuelling climate breakdown. Learn more about banks’ inadequate policies & how to use your account for good today.',
  },
  'the-solution': {
    title: 'What is green banking? | Switch It Green',
    description:
      'Green banking means using your account to support a bank which doesn’t invest in fossil fuels. Learn how switching it green can help end fossil fuel financing.',
  },
  'the-impact': {
    title: 'Why Should I Switch Banks? | Switch It Green',
    description:
      'Your switch to a green bank will help tackle climate breakdown. Find out how to make your switch count as part of our campaign against fossil fuel financing.',
  },
  'get-involved': {
    title: 'How Do I Switch Banks? | Switch It Green',
    description:
      'Our Bank Switching Platform makes switching to a green bank as easy and impactful as possible. Follow our step-by-step guide & harness the power of your switch.',
  },
}

const Article: NextPage<{ posts: Post[] }> = ({ posts = [] }) => {
  const {
    query: { id },
  } = useRouter()
  const {
    title = '',
    text = '',
    articleImageName = '',
    summary = '',
  } = posts.find(({ id: postId }: { id: string }) => postId === id) as Pick<
    Post,
    'title' | 'text' | 'summary' | 'articleImageName'
  >
  const metaTitle = metaDataConfig[id as keyof typeof metaDataConfig]?.title
  const metaDescription = metaDataConfig[id as keyof typeof metaDataConfig]?.description

  console.log('id', id)

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
            backgroundImage: `url(${getArticleImageUrl(articleImageName)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '700px',
          }}
        >
          {/* <Image
          src={getArticleImageUrl(articleImageName)}
          alt=''
          width={730}
          height={410}
          objectFit='cover'
        /> */}
          <S.ImageTitle>{title}</S.ImageTitle>
        </S.ImageContainer>
        <S.Article>
          <S.ArticleTitle>{summary}</S.ArticleTitle>

          <S.PostText dangerouslySetInnerHTML={{ __html: text }} />
          <BlockButton>
            <Link href='/api/auth/login'>Switch To A Green Bank</Link>
          </BlockButton>
        </S.Article>
      </SignedOutLayout>
    </>
  )
}

export default Article
