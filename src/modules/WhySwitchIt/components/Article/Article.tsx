import type { NextPage } from 'next'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BlockButton } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Post } from '@pages/dashboard'
import { getArticleImageUrl } from '@utils/functions'
import * as S from './Article.style'

const Article: NextPage<{ posts: Post[] }> = ({ posts = [] }) => {
  console.log('posts', posts)

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

  console.log('articleImageName', articleImageName)
  return (
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
  )
}

export default Article
