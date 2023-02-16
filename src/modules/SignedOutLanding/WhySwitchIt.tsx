import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const WhySwitchIt: NextPage = (): JSX.Element => {
  return (
    <S.WhySwitchIt>
      <S.WhySwitchItContent>
        <S.WhySwitchItHeader>Why Switch It?</S.WhySwitchItHeader>
        <S.WhySwitchItSubHeader>What is green banking?</S.WhySwitchItSubHeader>
        <S.WhySwitchItText>
          In 2021, 44 banks that had made ‘Net Zero’ commitments invested over £120 billion in the
          100 biggest companies driving oil, gas, & coal expansion. So, what is the difference
          between a ‘Net Zero’ bank and a truly green bank?
        </S.WhySwitchItText>

        <S.BlockButton>
          <Link href='/'>Read more</Link>
        </S.BlockButton>
      </S.WhySwitchItContent>
    </S.WhySwitchIt>
  )
}
