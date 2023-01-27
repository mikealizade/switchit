import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ResourcesType } from '@modules/Resources/Resources'
import * as S from '@modules/Resources/components/Articles/Articles.style'
import { awsS3Uri } from '@utils/constants'

export const Articles: NextPage<{ resources: ResourcesType }> = ({ resources }): JSX.Element => {
  return (
    <S.Articles>
      <S.ResourcesTitle>Articles</S.ResourcesTitle>

      <S.ArticlesList>
        {resources.map(({ id, title, summary, resource, mins, points }) => {
          const resourceUri = `${awsS3Uri}/resources/pdfs/${resource}`

          return (
            <S.Item key={id}>
              <Link href={`/resources/article/${id}`}>
                <S.ArticleLink>
                  <Image
                    src={`${resourceUri}.png`}
                    alt=''
                    width='100%'
                    height='100%'
                    objectFit='contain'
                  />
                  <S.Title>{title}</S.Title>
                  <S.Intro>{summary}</S.Intro>
                </S.ArticleLink>
              </Link>

              <S.ArticleData>
                <S.Data>
                  <Image src={'/icons/icon_clock.svg'} alt='' width={20} height={20} />
                  {mins}min
                </S.Data>
                <S.Data>
                  <Image src={'/icons/icon_star_blue.svg'} alt='' width={20} height={20} />+{points}
                  pts
                </S.Data>
              </S.ArticleData>
            </S.Item>
          )
        })}
      </S.ArticlesList>
    </S.Articles>
  )
}
