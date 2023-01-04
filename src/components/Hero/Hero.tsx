import type { NextPage } from 'next'
import Image from 'next/image'
import { heroConfig, HeroConfig } from './data'
import * as S from '@components/Hero/Hero.style'

export const Hero: NextPage<{ type: string }> = ({ type = '' }): JSX.Element => {
  return (
    <S.Hero>
      <Image
        src={`/icons/${heroConfig[type as keyof HeroConfig].icon}`}
        alt=''
        width={60}
        height={60}
      />
      <S.Content>
        <S.Title>{heroConfig[type as keyof HeroConfig].title}</S.Title>
        <S.Text>{heroConfig[type as keyof HeroConfig].text}</S.Text>
      </S.Content>
    </S.Hero>
  )
}
