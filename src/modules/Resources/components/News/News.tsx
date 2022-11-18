import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@modules/Resources/components/News/News.style'
import { ResourcesType } from '@modules/Resources/Resources'

export const News: NextPage<{ resources: ResourcesType }> = ({ resources }): JSX.Element => {
  return (
    <S.News>
      <S.ResourcesTitle>
        <Image src={'/icons/icon_newspaper.svg'} alt='' width={45} height={45} />
        News
      </S.ResourcesTitle>

      <S.NewsList>
        {resources.map(({ id, title, summary, resource }) => {
          return (
            <S.Item key={id}>
              <S.Download href={`/resources/${resource}`} download={resource}>
                <S.Title>{title}</S.Title>
                <S.Intro>{summary}</S.Intro>
                <Image
                  src={'/resources/resource_pdf.png'}
                  alt=''
                  width='100%'
                  height='100%'
                  objectFit='contain'
                />
              </S.Download>
            </S.Item>
          )
        })}
      </S.NewsList>
    </S.News>
  )
}
