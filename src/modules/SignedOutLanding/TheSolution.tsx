import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const TheSolution: NextPage = (): JSX.Element => {
  return (
    <S.TheSolution>
      <S.TheSolutionContent>
        <S.TheSolutionHeader>The Solution:</S.TheSolutionHeader>
        <S.TheSolutionSubHeader>
          Switch to a green bank & move your money out of fossil fuel support for good.
        </S.TheSolutionSubHeader>
        <S.TheSolutionText>
          We have ranked all UK current account providers against our stringent criteria and have
          identified a number of truly green banks you can trust.
        </S.TheSolutionText>
        <S.PinkLink href='/'>What is a green bank?</S.PinkLink>
        <S.BlockButton>
          <Link href='/programs'>Learn more here</Link>
        </S.BlockButton>
      </S.TheSolutionContent>
    </S.TheSolution>
  )
}
