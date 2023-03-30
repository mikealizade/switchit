import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutHome.style'
import { BlockButton } from './SignedOutLanding.style'

export const TheSolution: NextPage = (): JSX.Element => {
  return (
    <S.TheSolution>
      <S.TheSolutionContent>
        <S.TheSolutionHeader>The Solution:</S.TheSolutionHeader>
        <S.TheSolutionSubHeader>Switch to a green bank & move your money out of fossil fuel support for good.</S.TheSolutionSubHeader>
        <S.TheSolutionText>
          We have ranked all UK current account providers against our stringent criteria and have identified a number of truly green banks
          you can trust.
        </S.TheSolutionText>
        <S.TextContainer mobileWidth={50} mobileMarginTop={30} marginTop={70}>
          <S.PinkLink>
            <Link href='/why-switch-it/article/what-is-green-banking'>What is a green bank?</Link>
          </S.PinkLink>
        </S.TextContainer>
        <BlockButton>
          <Link href='/why-switch-it/article/what-is-green-banking'>Learn more here</Link>
        </BlockButton>
      </S.TheSolutionContent>
    </S.TheSolution>
  )
}
