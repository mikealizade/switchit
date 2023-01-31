import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import * as S from '@modules/Dashboard/components/Blog/Blog.style'
import { ArticleData, Data } from '@modules/Resources/components/Articles/Articles.style'
import { Div, Title } from '@styles/common.style'
import { getArticleImageUrl } from '@utils/functions'

export type Blog = {
  id: string
  title: string
  summary: string
  mins: string
  points: string
  imageName: string
}

export const Blog: NextPage<{ data: Blog[] }> = ({ data = [] }): JSX.Element => {
  const [{ id = '', title = '', summary = '', mins = '', points = '', imageName = '' } = {}] = data

  console.log('data', data)
  console.log('getArticleImageUrl(imageName, true)', getArticleImageUrl(imageName, true))

  return (
    <S.BlogContainer>
      <Link href={`/resources/article/${id}`}>
        <S.BlogItem>
          <Title>
            Latest Resources
            <Image src={'/icons/icon_chevron_right.svg'} alt='' width={25} height={25} />
          </Title>
          <S.Details>
            <Image src={getArticleImageUrl(imageName, true)} alt='' width={136} height={177} />
            <Div flex={1}>
              <h3>{title}</h3>
              <S.Summary>{summary}</S.Summary>
              <ArticleData small>
                <Data>
                  <Image src={'/icons/icon_clock.svg'} alt='' width={20} height={20} />
                  {mins}min
                </Data>
                <Data>
                  <Image src={'/icons/icon_star_blue.svg'} alt='' width={20} height={20} />+{points}
                  pts
                </Data>
              </ArticleData>
            </Div>
          </S.Details>
        </S.BlogItem>
      </Link>
    </S.BlogContainer>
  )
}
