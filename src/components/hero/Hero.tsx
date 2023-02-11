import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/Hero/Hero.style'
import { heroConfig, HeroConfig } from './data'

export const Hero: NextPage<{ type: string }> = ({ type = '' }): JSX.Element => {
  const objectFit = type === 'programs' ? 'cover' : 'contain'

  return (
    <S.Hero type={type}>
      <Image
        src={`/icons/${heroConfig[type as keyof HeroConfig].icon}`}
        alt=''
        width={60}
        height={60}
        objectFit={objectFit}
      />
      <S.Content>
        <S.Title>{heroConfig[type as keyof HeroConfig].title}</S.Title>
        <S.Text>{heroConfig[type as keyof HeroConfig].text}</S.Text>
      </S.Content>
    </S.Hero>
  )
}
