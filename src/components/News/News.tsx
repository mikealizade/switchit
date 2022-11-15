import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/News/News.style'
import { Title } from '@styles/common.style'

export const News: NextPage = (): JSX.Element => {
  return (
    <S.News>
      <S.ResourcesTitle>
        <Image src={'/icons/icon_newspaper.svg'} alt='' width={45} height={45} />
        News
      </S.ResourcesTitle>

      <S.NewsList>
        <S.Item>
          <S.Download href='/resources/coach_routes.pdf' download='temp.pdf'>
            <S.Title>PDF title</S.Title>
            <S.Intro>
              Velit ex voluptate ea tempor laborum fugiat sunt laborum laborum exercitation minim.
            </S.Intro>
          </S.Download>
        </S.Item>
        <S.Item>
          <S.Download href='/resources/coach_routes.pdf' download='temp.pdf'>
            <S.Title>PDF title</S.Title>
            <S.Intro>
              Velit ex voluptate ea tempor laborum fugiat sunt laborum laborum exercitation minim.
            </S.Intro>
          </S.Download>
        </S.Item>
      </S.NewsList>
    </S.News>
  )
}
