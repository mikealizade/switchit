import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const TheImpact: NextPage = (): JSX.Element => {
  return (
    <S.TheImpact>
      <S.TheImpactContent>
        <S.TheImpactHeader>The Impact:</S.TheImpactHeader>
        <S.TheImpactSubHeader>
          Together, we will move £7 billion out of fossil fuel support this year.{' '}
        </S.TheImpactSubHeader>
        <S.TheImpactText>
          “Our switchers’ actions, at scale, will force banks to shift their policies towards those
          which support a more liveable future” <br />- Sophie Cowen, Co-Founder of Switch It Green
        </S.TheImpactText>
        <S.PinkLink href='/'>
          Find out how switching on our platform, alongside thousands of others, will help end
          fossil fuel financing.{' '}
        </S.PinkLink>
        <S.BlockButton>
          <Link href='/programs'>Read more</Link>
        </S.BlockButton>
      </S.TheImpactContent>
    </S.TheImpact>
  )
}
