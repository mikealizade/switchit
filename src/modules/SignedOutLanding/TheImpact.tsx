import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutHome.style'
import { BlockButton } from './SignedOutLanding.style'

export const TheImpact: NextPage = (): JSX.Element => {
  return (
    <S.TheImpact>
      <S.TheImpactContent>
        <S.TheImpactHeader>The Impact:</S.TheImpactHeader>
        <S.TheImpactSubHeader>Together, we will move £7 billion out of fossil fuel support this year. </S.TheImpactSubHeader>
        <S.TheImpactText>
          “Our {`switchers'`} actions, at scale, will force banks to change policies in respond to consumer demand - shifting priorities
          away from environmentally destructive projects, and towards those that will support a sustainable future” <br />- Sophie Cowen,
          Co-Founder - Switch It Green
        </S.TheImpactText>
        <S.TextContainer mobileWidth={60}>
          <S.PinkLink marginTop={50}>
            <Link href='/why-switch-it/article/why-should-I-switch-banks'>
              Find out how switching through our platform, alongside thousands of others, will help end fossil fuel financing.
            </Link>
          </S.PinkLink>
        </S.TextContainer>
        <BlockButton>
          <Link href='/why-switch-it/article/why-should-I-switch-banks'>Read more</Link>
        </BlockButton>
      </S.TheImpactContent>
    </S.TheImpact>
  )
}
