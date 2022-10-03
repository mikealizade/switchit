import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { navigation, subNav } from 'src/utils/constants'
import logo from '../../../public/switchit_logo.png'
import * as S from '@components/navigation/Navigation.style'

type Nav = { text: string; route: string }

export const Navigation: NextPage = () => {
  return (
    <S.Nav>
      <S.Logo>
        <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        <span>Switch It</span>
      </S.Logo>

      <S.Navigation>
        {navigation.map(({ text, route }: Nav, i: number) => (
          <li key={route}>
            <Link href={route}>{text}</Link>
          </li>
        ))}
      </S.Navigation>

      <S.Navigation>
        {subNav.map(({ text, route }: Nav) => (
          <li key={route}>
            <Link href={route}>{text}</Link>
          </li>
        ))}
      </S.Navigation>
    </S.Nav>
  )
}
