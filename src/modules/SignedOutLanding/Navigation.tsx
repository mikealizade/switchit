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
import logo from '../../../public/switchit_logo.png'

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
  // const { pathname, push } = useRouter()
  // const dispatch = useDispatch()
  // const { isNavOpen } = useSelector((state: RootState) => state.nav)
  // const [current, setHover] = useState('')
  // const isActive = (route: string): boolean =>
  //   pathname === `/${route}` || pathname.includes(`/${route}`)
  const { replace } = useRouter()

  const onSignUp = () => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('referralCode')
    const route = code ? `/signup?referralCode=${code}` : '/signup'

    replace(route)
  }

  return (
    <S.Nav>
      <Logo>
        <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        {/* <span>Switch It</span> */}
      </Logo>

      <S.Navigation>
        {navigation.map(({ text, route }: any) => (
          <li key={route}>
            <Link href={route}>{text}</Link>
          </li>
        ))}
        <li onClick={onSignUp}>Sign Up</li>
      </S.Navigation>
    </S.Nav>
  )
}
