import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import * as S from '@components/Hero/Hero.style'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { heroConfig, HeroConfig } from './data'

export const Hero: NextPage<{ type: string }> = ({ type = '' }): JSX.Element => {
  const hero = heroConfig[type as keyof HeroConfig]
  const { isMobile, isXMobile } = useMediaQuery()
  const [isLearningMore, setLearnMore] = useState(false)
  const width = isMobile ? hero.dimensions.mobileWidth : hero.dimensions.width
  const height = isMobile ? hero.dimensions.mobileHeight : hero.dimensions.height

  return (
    <S.Hero isLearningMore={isLearningMore}>
      {isXMobile && (
        <S.Image
          style={{
            position: 'relative',
            display: 'flex',
            alignSelf: `${hero.dimensions.alignSelf}`,
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <Image src={`/images/${heroConfig[type as keyof HeroConfig].icon}`} alt='' width={width} height={height} objectFit='contain' />
        </S.Image>
      )}
      <S.Content isLearningMore={isLearningMore}>
        <S.Title>{heroConfig[type as keyof HeroConfig].title}</S.Title>
        <S.Text>{heroConfig[type as keyof HeroConfig].text}</S.Text>
        <S.LearnMore onClick={() => setLearnMore(!isLearningMore)}>Learn {isLearningMore ? 'Less' : 'More'}</S.LearnMore>
      </S.Content>
    </S.Hero>
  )
}
