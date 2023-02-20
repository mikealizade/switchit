import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
  const { isWebsiteNavOpen } = useSelector((state: RootState) => state.nav)

  const toggleNav = () => {
    dispatch(toggleWebsiteNav())
  }

  return (
    <>
      <S.MobileNavHeader>
        <Link href='/'>
          <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
        </Link>
        <S.CloseMenu onClick={toggleNav}>
          <Image
            src={`/icons/icon_${isWebsiteNavOpen ? 'close' : 'hamburger'}.svg`}
            alt='Close'
            width={isWebsiteNavOpen ? 22 : 32}
            height={isWebsiteNavOpen ? 22 : 32}
          />
        </S.CloseMenu>
      </S.MobileNavHeader>
      <S.MobileNav isNavOpen={isWebsiteNavOpen}>
        <S.MobileNavHeader>
          <Link href='/'>
            <Image src={logo} alt='SwitchIt logo' width={62} height={33} />
          </Link>
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
              <Link href={route}>{text}</Link>
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
