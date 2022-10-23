import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { navigation, subNav } from 'src/utils/constants'
import logo from '../../../public/switchit_logo.png'
import * as S from '@components/Navigation/Navigation.style'

type Nav = { text: string; route: string }

export const Navigation: NextPage = () => {
  const { pathname } = useRouter()
  const isActive = (path: string): string => (pathname === path ? 'active' : '')

  return (
    <S.Nav>
      <S.Logo href='/dashboard'>
        <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        <span>Switch It</span>
      </S.Logo>

      <S.Navigation>
        {navigation.map(({ text, route }: Nav) => (
          <li key={route}>
            <Link href={route}>
              <a className={isActive(route)}>{text}</a>
            </Link>
          </li>
        ))}
      </S.Navigation>

      <S.Navigation>
        {subNav.map(({ text, route }: Nav) => (
          <li key={route}>
            <Link href={route}>
              <a className={isActive(route)}>{text}</a>
            </Link>
          </li>
        ))}
      </S.Navigation>
    </S.Nav>
  )
}
