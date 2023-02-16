import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const GetInvolved: NextPage = (): JSX.Element => {
  return (
    <S.GetInvolved>
      <S.GetInvolvedContent>
        <S.GetInvolvedHeader>Get Involved:</S.GetInvolvedHeader>
        <S.GetInvolvedSubHeader>
          Why use Switch It Green to switch to a green bank?
        </S.GetInvolvedSubHeader>
        <S.GetInvolvedList>
          <li>We’ve done the research so you don’t have to</li>
          <li>Switch alongside thousands of others in a collective push for change</li>
          <li>Maximise your switch with our ready-to-go lobbying features</li>
        </S.GetInvolvedList>
        <S.PinkLink href='/'>How do I switch banks?</S.PinkLink>
        <S.BlockButton>
          <Link href='/programs'>Learn more here</Link>
        </S.BlockButton>
      </S.GetInvolvedContent>
    </S.GetInvolved>
  )
}
