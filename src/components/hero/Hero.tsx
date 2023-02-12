import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/Hero/Hero.style'
import { heroConfig, HeroConfig } from './data'

export const Hero: NextPage<{ type: string }> = ({ type = '' }): JSX.Element => {
  const hero = heroConfig[type as keyof HeroConfig]

  return (
    <S.Hero>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignSelf: `${hero.dimensions.alignSelf}`,
          width: `${hero.dimensions.width}px`,
          height: `${hero.dimensions.height}px`,
        }}
      >
        <Image
          src={`/images/${heroConfig[type as keyof HeroConfig].icon}`}
          alt=''
          width={hero.dimensions.width}
          height={hero.dimensions.height}
          objectFit='contain'
        />
      </div>
      <S.Content>
        <S.Title>{heroConfig[type as keyof HeroConfig].title}</S.Title>
        <S.Text>{heroConfig[type as keyof HeroConfig].text}</S.Text>
      </S.Content>
    </S.Hero>
  )
}
