import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import cs from 'classnames'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { navigation, subNav } from 'src/utils/constants'
import logo from '../../../public/switchit_logo.png'
import * as S from '@components/Navigation/Navigation.style'
import { useState } from 'react'

type Nav = { text: string; route: string; icon?: string }

export const Navigation: NextPage = (): JSX.Element => {
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  const { pathname } = useRouter()
  const [current, setHover] = useState('')
  const isActive = (route: string): boolean =>
    pathname === `/${route}` || pathname.includes(`/${route}`)

  return (
    <S.Nav>
      <S.Logo href='/dashboard'>
        <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        <span>Switch It</span>
      </S.Logo>

      <S.Navigation>
        {navigation.map(({ text, route, icon }: Nav) => (
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
        {subNav.map(({ text, route }: Nav) => (
          <li key={route}>
            <Link href={route}>
              <a className={cs(route, { ['active']: isActive(route) })}>{text}</a>
            </Link>
          </li>
        ))}
        {sub ? (
          <li>
            <Link href='/api/auth/logout'>Log out</Link>
          </li>
        ) : (
          <li>
            <Link href='/api/auth/login'>Log in</Link>
          </li>
        )}
      </S.Navigation>
    </S.Nav>
  )
}
