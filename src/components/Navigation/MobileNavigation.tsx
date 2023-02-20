import type { NextPage } from 'next'
import cs from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from '@components/Navigation/Navigation.style'
import { useGetTotalPoints } from '@hooks/useGetTotalPoints'
import { toggleNav } from '@state/nav/navSlice'
import { RootState } from '@state/store'
import { Nav } from '@utils/types'
import { subNav, mobileNav } from './data'

export const MobileNavigation: NextPage = (): JSX.Element => {
  const { pathname, push } = useRouter()
  const dispatch = useDispatch()
  const { isNavOpen } = useSelector((state: RootState) => state.nav)
  const [current] = useState('')
  const isActive = (route: string): boolean => pathname === route || pathname.includes(route)
  const totalPoints = useGetTotalPoints()
  const { nickname = '', picture = '' } = useSelector((state: RootState) => state.user)

  const onToggleNav = () => {
    dispatch(toggleNav())
  }

  const logOut = () => {
    window.sessionStorage.clear()
    push('/api/auth/logout')
  }

  return (
    <>
      <S.MobileNav>
        <S.MobileNavigation>
          {mobileNav.map(({ route, icon, text, width, height }: Nav) => (
            <li key={route}>
              <Link href={`/${route}`}>
                <Image
                  src={`${icon}${isActive(route) ? '_on' : ''}.svg`}
                  alt={text}
                  width={width}
                  height={height}
                />
              </Link>
            </li>
          ))}
        </S.MobileNavigation>
      </S.MobileNav>

      <S.MobileSubNav isNavOpen={isNavOpen}>
        <S.Logo>
          <S.CloseMenu onClick={() => dispatch(toggleNav())}>
            <Image src='/icons/icon_close.svg' alt='Close' width={18} height={18} />
          </S.CloseMenu>
        </S.Logo>

        <S.Navigation>
          <li onClick={onToggleNav}>
            <Link href='/profile'>
              <S.MobileNavUser>
                <Image src={picture} alt={nickname} width={54} height={54} unoptimized />
                <S.MobileNavUserNames>
                  <S.UserName>{nickname}</S.UserName>
                  <S.UserPoints>
                    <Image src='/icons/icon_star_grey.svg' alt='' width={18} height={18} />
                    {totalPoints}
                  </S.UserPoints>
                </S.MobileNavUserNames>
              </S.MobileNavUser>
            </Link>
          </li>

          {subNav.map(({ text, route, icon }: Nav) => (
            <li key={route} onClick={onToggleNav}>
              <Link href={`/${route}`}>
                <a
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

          <li>
            <Link href='/api/auth/logout'>
              <S.LogoutLink
                onClick={logOut}
                style={{
                  backgroundImage: `url('/icons/icon_logout.svg`,
                  backgroundPosition: '11px',
                }}
              >
                Log out
              </S.LogoutLink>
            </Link>
          </li>
        </S.Navigation>
      </S.MobileSubNav>
    </>
  )
}
