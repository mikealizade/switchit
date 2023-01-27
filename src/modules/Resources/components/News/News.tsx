import type { NextPage } from 'next'
import Image from 'next/image'
import { ResourcesType } from '@modules/Resources/Resources'
import * as S from '@modules/Resources/components/News/News.style'
import { awsS3Uri } from '@utils/constants'

export const News: NextPage<{ resources: ResourcesType }> = ({ resources }): JSX.Element => {
  return (
    <S.News>
      <S.ResourcesTitle>
        <Image src={'/icons/icon_newspaper.svg'} alt='' width={45} height={45} />
        Articles
      </S.ResourcesTitle>

      <S.NewsList>
        {resources.map(({ id, title, summary, resource }) => {
          const resourceUri = `${awsS3Uri}/resources/pdfs/${resource}`

          return (
            <S.Item key={id}>
              <S.Download href={`${resourceUri}.pdf`} target='_blank' download={resource}>
                <S.Title>{title}</S.Title>
                <S.Intro>{summary}</S.Intro>
                <Image
                  src={`${resourceUri}.png`}
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
