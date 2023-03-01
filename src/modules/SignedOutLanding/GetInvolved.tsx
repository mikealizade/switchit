import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutHome.style'
import { BlockButton } from './SignedOutLanding.style'

export const GetInvolved: NextPage = (): JSX.Element => {
  return (
    <S.GetInvolved>
      <S.GetInvolvedContent>
        <S.GetInvolvedHeader>Get Involved:</S.GetInvolvedHeader>
        <S.GetInvolvedSubHeader>
          Why use Switch It Green to switch to a green bank?
        </S.GetInvolvedSubHeader>
        <S.GetInvolvedList>
          <li>
            {`We've`} done the research so you {`don't`} have to
          </li>
          <li>Switch alongside thousands of others in a collective push for change</li>
          <li>Maximise the impact of your switch with our ready-to-go lobbying features</li>
        </S.GetInvolvedList>
        <S.PinkLink>
          <Link href='/why-switch-it/article/get-involved'>How do I switch banks?</Link>
        </S.PinkLink>
        <BlockButton>
          <Link href='/why-switch-it/article/get-involved'>Learn more here</Link>
        </BlockButton>
      </S.GetInvolvedContent>
    </S.GetInvolved>
  )
}
