import type { NextPage } from 'next'
import Link from 'next/link'
import { SocialMediaLinks } from '@components/SocialMediaLinks/SocialMediaLinks'
import * as S from './SignedOutLanding.style'

export const footerNav = [
  {
    text: 'Programs',
    route: 'programs',
  },
  {
    text: 'The Company',
    route: 'the-company',
  },
  {
    text: 'Why Switch',
    route: 'why-switch',
  },
  {
    text: 'Contact Us',
    route: 'contact-us',
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
    text: 'T&Cs',
    route: 'terms',
  },
]

export const Footer: NextPage = (): JSX.Element => {
  const year = new Date().getUTCFullYear()

  return (
    <S.Footer>
      <S.FooterMain>
        <S.FooterNavContainer>
          <S.FooterNavHeader>Switch It</S.FooterNavHeader>
          <S.FooterNav>
            {footerNav.map(({ text, route }: any) => (
              <li key={route}>
                <Link href={route}>{text}</Link>
              </li>
            ))}
          </S.FooterNav>
        </S.FooterNavContainer>
        <S.Social>
          <S.InstagramFeed></S.InstagramFeed>
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
