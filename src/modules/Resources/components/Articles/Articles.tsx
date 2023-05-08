/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ResourcesType } from '@modules/Resources/Resources'
import * as S from '@modules/Resources/components/Articles/Articles.style'
import { getArticleImageUrl } from '@utils/functions'

//TODO usee Next image

export const Articles: NextPage<{ resources: ResourcesType }> = ({ resources }): JSX.Element => {
  return (
    <S.Articles>
      <S.ResourcesTitle>Articles</S.ResourcesTitle>
      <S.ArticlesList>
        {resources
          .filter(({ type }) => type === 'app')
          .map(({ id, title, summary, mins, points, imageName }) => {
            return (
              <S.Item key={id}>
                <Link href={`/resources/article/${id}`}>
                  <img src={getArticleImageUrl(imageName)} alt='' />
                </Link>
                <S.ArticleLink>
                  <S.Title>{title}</S.Title>
                  <S.Intro>{summary}</S.Intro>
                </S.ArticleLink>

                <S.ArticleData>
                  <S.Data>
                    <Image src={'/icons/icon_clock.svg'} alt='' width={20} height={20} />
                    {mins}min
                  </S.Data>
                  <S.Data>
                    <Image src={'/icons/icon_star_blue.svg'} alt='' width={20} height={20} />+{points}pts
                  </S.Data>
                </S.ArticleData>
              </S.Item>
            )
          })}
      </S.ArticlesList>
    </S.Articles>
  )
}
