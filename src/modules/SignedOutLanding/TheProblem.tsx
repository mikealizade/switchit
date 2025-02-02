import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutHome.style'
import { BlockButton } from './SignedOutLanding.style'

export const TheProblem: NextPage = (): JSX.Element => {
  return (
    <S.TheProblem>
      <S.TheProblemContent>
        <S.TheProblemHeader>The Problem:</S.TheProblemHeader>
        <S.TheProblemSubHeader>Your bank is funding oil pipelines.</S.TheProblemSubHeader>
        <S.TheProblemText>
          Since the Paris Agreement was signed, banks have pumped over £3.8 trillion into the fossil fuel industry.
        </S.TheProblemText>
        <S.TextContainer mobileWidth={50} mobileMarginTop={50} marginTop={70}>
          <S.PinkLink>
            <Link href='/why-switch-it/article/how-do-banks-contribute-to-climate-change'>How do banks contribute to climate change?</Link>
          </S.PinkLink>
        </S.TextContainer>
        <BlockButton>
          <Link href='/why-switch-it/article/how-do-banks-contribute-to-climate-change'>Find out more</Link>
        </BlockButton>
      </S.TheProblemContent>
    </S.TheProblem>
  )
}
