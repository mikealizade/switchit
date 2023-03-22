import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from '@components/Hero/Hero.style'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { Post } from '@pages/dashboard'
import { RootState } from '@state/store'
import { heroConfig } from './data'

export const DashboardHero: NextPage<{ post: Post }> = (): JSX.Element => {
  const { isNewUser } = useSelector((state: RootState) => state.user)
  const [isExpanded, setLearnMore] = useState(false)
  const hero = heroConfig['dashboard']
  const title = isNewUser ? hero.newUserTitle : hero.activeUserTitle
  const text = isNewUser ? hero.newUserText : hero.activeUserText
  const { isXMobile } = useMediaQuery()

  return (
    <S.Hero className={isExpanded ? '' : 'hidden'}>
      {isXMobile && (
        <S.Image
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
        </S.Image>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.LearnMore onClick={() => setLearnMore(!isExpanded)}>Learn {isExpanded ? 'Less' : 'More'}</S.LearnMore>
      </S.Content>
    </S.Hero>
  )
}
