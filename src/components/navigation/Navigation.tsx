import type { NextPage } from 'next'
import cs from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from '@components/Navigation/Navigation.style'
import { toggleNav } from '@state/nav/navSlice'
import { RootState } from '@state/store'
import { Nav } from '@utils/types'
import { navigation, subNav } from './data'
import logo from '../../../public/switchit_logo.png'

type MobileNav = Pick<Nav, 'text' | 'route' | 'icon'>

export const Navigation: NextPage = (): JSX.Element => {
  const { pathname, push } = useRouter()
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state: RootState) => state.nav)
  const [current, setHover] = useState('')
  const isActive = (route: string): boolean =>
    pathname === `/${route}` || pathname.includes(`/${route}`)

  const logOut = () => {
    window.sessionStorage.clear()
    push('/api/auth/logout')
  }

  return (
    <S.Nav isNavOpen={isNavOpen}>
      <S.Logo>
        <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        {/* <span>Switch It</span> */}
        <S.CloseMenu onClick={() => dispatch(toggleNav())}>
          <Image src='/icons/icon_close.svg' alt='Close' width={18} height={18} />
        </S.CloseMenu>
      </S.Logo>

      <S.Navigation>
        {navigation.map(({ text, route, icon }: MobileNav) => (
          <li key={route}>
            <Link href={`/${route}`}>
              <a
                onMouseEnter={() => setHover(route)}
                onMouseLeave={() => setHover('')}
                style={{
                  backgroundImage: `url(${icon}${
                    isActive(route) || current === route ? '_on' : ''
                  }.svg)`,
                }}
                className={cs(route, { ['active']: isActive(route) })}
              >
                {text}
              </a>
            </Link>
          </li>
        ))}
      </S.Navigation>

      <S.Navigation>
        {subNav.map(({ text, route }: Omit<MobileNav, 'icon'>) => (
          <li key={route}>
            <Link href={`/${route}`}>
              <a className={cs(route, { ['active']: isActive(route) })}>{text}</a>
            </Link>
          </li>
        ))}
        <li>
          <S.LogoutLink onClick={logOut}>Log out</S.LogoutLink>
        </li>
      </S.Navigation>
    </S.Nav>
  )
}
