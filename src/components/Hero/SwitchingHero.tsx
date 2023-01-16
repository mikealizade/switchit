import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import * as S from '@components/Hero/Hero.style'
import { getRandomInt } from '@utils/functions'
import { heroConfig, HeroConfig, heroTips } from './data'

export const SwitchingHero: NextPage<{ type: string; hasLoaded?: boolean }> = ({
  type = '',
  hasLoaded = false,
}): JSX.Element => {
  const isTipsLoaded = useRef(window.localStorage.getItem('isTipsLoaded'))
  const randomIndex = getRandomInt(0, heroTips.length - 1)
  const hero = heroConfig[type as keyof HeroConfig]

  useEffect(() => {
    if (isTipsLoaded.current !== 'true') {
      window.localStorage.setItem('isTipsLoaded', 'true')
    }
  }, [])

  return (
    <S.Hero>
      <Image
        src={`/icons/${hero.icon}`}
        alt=''
        width={60}
        height={60}
        // sizes='(max-width: 60em) 190px,
        //             (min-width: 28em) 45vw,
        //             100vw'
      />
      <S.Content>
        {isTipsLoaded.current === 'true' ? (
          <>
            {hasLoaded ? (
              <>
                <S.Title>{heroTips[randomIndex].number}</S.Title>
                <S.Text>{heroTips[randomIndex].tip}</S.Text>
              </>
            ) : (
              'Loading...'
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
