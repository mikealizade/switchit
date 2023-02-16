import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const TheProblem: NextPage = (): JSX.Element => {
  return (
    <S.TheProblem>
      <S.TheProblemContent>
        <S.TheProblemHeader>The Problem:</S.TheProblemHeader>
        <S.TheProblemSubHeader>Your bank is funding oil pipelines.</S.TheProblemSubHeader>
        <S.TheProblemText>
          Since the Paris Agreement was signed, banks have pumped over £3.8 trillion into the fossil
          fuel industry.
        </S.TheProblemText>
        <S.PinkLink href='/'>How do banks contribute to climate change?</S.PinkLink>
        <S.BlockButton>
          <Link href='/programs'>Find out more</Link>
        </S.BlockButton>
      </S.TheProblemContent>
    </S.TheProblem>
  )
}
