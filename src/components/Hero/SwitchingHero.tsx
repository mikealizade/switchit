import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import * as S from '@components/Hero/Hero.style'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { getRandomInt } from '@utils/functions'
import { heroConfig, HeroConfig, heroTips } from './data'

export const SwitchingHero: NextPage<{ type: string; hasLoaded?: boolean }> = ({
  type = '',
  hasLoaded = false,
}): JSX.Element => {
  const isTipsLoaded = useRef(window.localStorage.getItem('isTipsLoaded'))
  const randomIndex = useRef(getRandomInt(0, heroTips.length - 1))
  const hero = heroConfig[type as keyof HeroConfig]
  const { isMobile } = useMediaQuery()
  const width = isMobile ? hero.dimensions.mobileWidth : hero.dimensions.width
  const height = isMobile ? hero.dimensions.mobileHeight : hero.dimensions.height

  useEffect(() => {
    if (isTipsLoaded.current !== 'true') {
      window.localStorage.setItem('isTipsLoaded', 'true')
    }
  }, [])

  return (
    <S.Hero>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignSelf: `${hero.dimensions.alignSelf}`,
          width: `${width}px`,
          height: `${height}px`,
          backgroundPositionY: `${hero.dimensions.backgroundPositionY}px`,
        }}
      >
        <Image
          src={`/images/${heroConfig[type as keyof HeroConfig].icon}`}
          alt=''
          width={width}
          height={height}
          objectFit='contain'
        />
      </div>
      <S.Content>
        {isTipsLoaded.current === 'true' ? (
          <>
            {hasLoaded ? (
              <>
                <S.Title>{heroTips[randomIndex.current].number}</S.Title>
                <S.Text>{heroTips[randomIndex.current].tip}</S.Text>
              </>
            ) : (
              <Image src={'/images/loader.svg'} alt='' width={170} height={60} />
            )}
          </>
        ) : (
          <>
            <S.Title>{hero.title}</S.Title>
            <S.Text>{hero.text}</S.Text>
          </>
        )}
      </S.Content>
    </S.Hero>
  )
}
