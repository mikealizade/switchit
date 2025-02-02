import type { NextPage } from 'next'
import cs from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '@components/Navigation/Navigation.style'
import * as S from './SignedOutLanding.style'

export const navigation = [
  {
    text: 'Why Switch It Green?',
    route: '/why-switch-it-green',
  },
  {
    text: 'About',
    route: '/about',
  },
  {
    text: 'Students',
    route: '/students',
  },
  {
    text: 'Donate',
    route: '/donate',
  },
  {
    text: 'Sign In',
    route: '/api/auth/login',
  },
]

export const Navigation: NextPage = (): JSX.Element => {
  const { pathname } = useRouter()
  const isActive = (route: string): boolean => pathname === route || pathname.includes(route)

  return (
    <S.Nav>
      <Logo>
        <Link href='/'>
          <a>
            <Image src={'/images/logo_switchit_teal.svg'} alt='SwitchIt logo' width={62} height={33} />
          </a>
        </Link>
        <S.LogoName>
          <Link href='/'>Switch It Green</Link>
        </S.LogoName>
      </Logo>

      <S.Navigation>
        {navigation.map(({ text, route }: any) => (
          <li key={route}>
            <Link href={route}>
              <a className={cs({ ['active']: isActive(route) })}>{text}</a>
            </Link>
          </li>
        ))}
        <S.SignUp>
          <Link href='/api/auth/signup'>Get Started</Link>
        </S.SignUp>
      </S.Navigation>
    </S.Nav>
  )
}
