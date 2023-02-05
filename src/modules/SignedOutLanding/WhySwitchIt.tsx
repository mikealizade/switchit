import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const WhySwitchIt: NextPage = (): JSX.Element => {
  return (
    <S.PageSection>
      <S.HomePageHeader>Why Switch It?</S.HomePageHeader>
      <S.PageSubHeader>What is a green bank?</S.PageSubHeader>
      <S.Text>
        In 2021, 44 banks that had made {`'Net Zero'`} commitments invested over £120 billion in the
        100 biggest companies driving oil, gas, & coal expansion. So, what is the difference between
        a {`'Net Zero'`} bank and a truly green bank?
      </S.Text>
      <S.BlockButton>
        <Link href='/programs'>Read more</Link>
      </S.BlockButton>
    </S.PageSection>
  )
}
