import type { NextPage } from 'next'
import cs from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { SocialMediaLinks } from '@components/SocialMediaLinks/SocialMediaLinks'
import { toggleWebsiteNav } from '@state/nav/navSlice'
import { RootState } from '@state/store'
import * as S from './SignedOutLanding.style'
import logo from '../../../public/images/logo_switchit_teal.svg'

export const navigation = [
  {
    text: 'Why Switch It?',
    route: '/why-switch-it',
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
]

export const subNav = [
  {
    text: 'Sign In',
    route: '/api/auth/login',
  },
  {
    text: 'Get Started',
    route: '/signup',
  },
]

export const MobileNavigation: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const { isWebsiteNavOpen } = useSelector((state: RootState) => state.nav)
  const isActive = (route: string): boolean => pathname === route || pathname.includes(route)

  const toggleNav = () => {
    dispatch(toggleWebsiteNav())
  }

  return (
    <>
      <S.MobileNavHeader>
        <Link href='/'>
          <a>
            <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
          </a>
        </Link>
        {/* <S.LogoName>
          <Link href='/'>Switch It Green</Link>
        </S.LogoName> */}
        <S.CloseMenu onClick={toggleNav}>
          <Image
            src={`/icons/icon_${isWebsiteNavOpen ? 'close' : 'hamburger'}.svg`}
            alt='Close'
            width={isWebsiteNavOpen ? 28 : 32}
            height={isWebsiteNavOpen ? 19 : 32}
          />
        </S.CloseMenu>
      </S.MobileNavHeader>
      <S.MobileNav isNavOpen={isWebsiteNavOpen}>
        <S.MobileNavHeader>
          <div onClick={toggleNav}>
            <Link href='/'>
              <a>
                <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
              </a>
            </Link>
          </div>
          {/* <S.LogoName onClick={toggleNav}>
            <Link href='/'>Switch It Green</Link>
          </S.LogoName> */}
          <S.CloseMenu onClick={toggleNav}>
            <Image
              src={`/icons/icon_${isWebsiteNavOpen ? 'close' : 'hamburger'}.svg`}
              alt='Close'
              width={isWebsiteNavOpen ? 22 : 32}
              height={isWebsiteNavOpen ? 22 : 32}
            />
          </S.CloseMenu>
        </S.MobileNavHeader>
        <S.MobileNavigation>
          {navigation.map(({ text, route }: any) => (
            <li key={route} onClick={toggleNav}>
              <Link href={route}>
                <a className={cs({ ['active']: isActive(route) })}>{text}</a>
              </Link>
            </li>
          ))}
        </S.MobileNavigation>
        <S.MobileNSubnav>
          {subNav.map(({ text, route }: any) => (
            <li key={route} onClick={toggleNav}>
              <Link href={route}>{text}</Link>
            </li>
          ))}
        </S.MobileNSubnav>
        <SocialMediaLinks isMobileNav />
      </S.MobileNav>
    </>
  )
}
