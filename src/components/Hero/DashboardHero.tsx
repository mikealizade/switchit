import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import * as S from '@components/Hero/Hero.style'
import { Post } from '@pages/dashboard'
import { RootState } from '@state/store'
import { heroConfig } from './data'

export const DashboardHero: NextPage<{ post: Post }> = (): JSX.Element => {
  const { isNewUser } = useSelector((state: RootState) => state.user)
  const hero = heroConfig['dashboard']
  const title = isNewUser ? hero.newUserTitle : hero.activeUserTitle
  const text = isNewUser ? hero.newUserText : hero.activeUserText

  return (
    <S.Hero>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignSelf: `${hero.dimensions.alignSelf}`,
          width: `${hero.dimensions.width}px`,
          height: `${hero.dimensions.height}px`,
          backgroundPositionY: `${hero.dimensions.backgroundPositionY}px`,
        }}
      >
        <Image src={`/images/${hero.icon}`} alt='' width={205} height={224} objectFit='cover' />
      </div>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.Content>
    </S.Hero>
  )
}
