import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/Hero/Hero.style'
import { getRandomInt } from '@utils/functions'
import { heroConfig, HeroConfig, heroTips } from './data'

export const SwitchingHero: NextPage<{ type: string; hasLoaded?: boolean }> = ({
  type = '',
  hasLoaded = false,
}): JSX.Element => {
  const randomIndex = getRandomInt(0, heroTips.length - 1)

  return (
    <S.Hero>
      <Image
        src={`/icons/${heroConfig[type as keyof HeroConfig].icon}`}
        alt=''
        width={60}
        height={60}
      />
      <S.Content>
        {hasLoaded ? (
          <>
            <S.Title>Switching Tip #{randomIndex + 1}</S.Title>
            <S.Text>{heroTips[randomIndex]}</S.Text>
          </>
        ) : (
          'Loading...'
        )}

        {/* <S.Title>{heroConfig[type as keyof HeroConfig].title}</S.Title>
        <S.Text>{heroConfig[type as keyof HeroConfig].text}</S.Text> */}
      </S.Content>
    </S.Hero>
  )
}
