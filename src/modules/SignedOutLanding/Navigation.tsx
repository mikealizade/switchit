import type { NextPage } from 'next'
import cs from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Logo } from '@components/Navigation/Navigation.style'
import { toggleNav } from '@state/nav/navSlice'
import { RootState } from '@state/store'
import { Nav } from '@utils/types'
// import { navigation, subNav } from './data'
import * as S from './SignedOutLanding.style'
import logo from '../../../public/images/logo_switchit_teal.svg'

export const navigation = [
  {
    text: 'Why Switch It?',
    route: 'why-switch-it',
  },
  {
    text: 'About',
    route: 'about',
  },
  {
    text: 'Students',
    route: 'students',
  },
  {
    text: 'Donate',
    route: 'donate',
  },
  {
    text: 'Sign In',
    route: '/api/auth/login',
  },
]

export const Navigation: NextPage = (): JSX.Element => {
  const { push } = useRouter()

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')
    const route = code ? `/signup?referralCode=${code}` : '/signup'

    push(route)
  }

  return (
    <S.Nav>
      <Logo>
        <Link href='/'>
          <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        </Link>
      </Logo>

      <S.Navigation>
        {navigation.map(({ text, route }: any) => (
          <li key={route}>
            <Link href={route}>{text}</Link>
          </li>
        ))}
        <S.SignUp>
          <Link href='/signup'>Get Started</Link>
        </S.SignUp>
      </S.Navigation>
    </S.Nav>
  )
}
