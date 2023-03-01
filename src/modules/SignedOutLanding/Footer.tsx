import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SocialMediaLinks } from '@components/SocialMediaLinks/SocialMediaLinks'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { AnchorLink } from '@styles/common.style'
import * as S from './SignedOutLanding.style'

export const footerNav = [
  {
    text: 'Programs',
    route: '/students',
  },
  {
    text: 'About Us',
    route: '/about',
  },
  {
    text: 'Why Switch It?',
    route: '/why-switch-it',
  },
  {
    text: 'Contact Us',
    route: '/contact-us',
  },
]
export const footerSubNav = [
  {
    text: 'Disclaimer',
    route: 'disclaimer',
  },
  {
    text: 'Privacy Policy',
    route: 'privacy-policy',
  },
  {
    text: 'Terms & Conditions',
    route: 'terms',
  },
]

export const Footer: NextPage = (): JSX.Element => {
  const year = new Date().getUTCFullYear()
  const { isMobile } = useMediaQuery()
  const igWidth = isMobile ? 100 : 160

  return (
    <S.Footer>
      <S.FooterMain>
        <S.FooterNavContainer>
          <S.FooterNavHeader>Switch It Green</S.FooterNavHeader>
          <S.FooterNav>
            {footerNav.map(({ text, route }: any) => (
              <li key={route}>
                <Link href={route}>{text}</Link>
              </li>
            ))}
          </S.FooterNav>
        </S.FooterNavContainer>
        <S.Social>
          <S.InstagramFeed>
            <AnchorLink
              href='https://www.instagram.com/switchit.green'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={'/images/img_igfeed1.jpeg'} alt='' width={igWidth} height={igWidth} />
            </AnchorLink>
            <AnchorLink
              href='https://www.instagram.com/switchit.green'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={'/images/img_igfeed2.jpeg'} alt='' width={igWidth} height={igWidth} />
            </AnchorLink>
            <AnchorLink
              href='https://www.instagram.com/switchit.green'
              target='_blank'
              rel='noreferrer'
            >
              <Image src={'/images/img_igfeed3.jpeg'} alt='' width={igWidth} height={igWidth} />
            </AnchorLink>
          </S.InstagramFeed>
          <SocialMediaLinks />
        </S.Social>
      </S.FooterMain>
      <S.FooterSubnav>
        <S.Subnav>
          {footerSubNav.map(({ text, route }: any) => (
            <li key={route}>
              <Link href={route}>{text}</Link>
            </li>
          ))}
        </S.Subnav>
        <div>© {year} Switch It Green</div>
      </S.FooterSubnav>
    </S.Footer>
  )
}
