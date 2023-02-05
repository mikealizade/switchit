import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const MainSection: NextPage = (): JSX.Element => {
  return (
    <S.MainSection border>
      <S.HomePageHeader>Feel powerless when it comes to climate breakdown?</S.HomePageHeader>
      <S.Text>We did too</S.Text>
      <S.Text>
        Withdraw £1.5m from fossil fuels support today, even if you have £0 in your account
      </S.Text>
      <S.BlockButton>
        <Link href='/'> Switch to a green bank</Link>
      </S.BlockButton>
    </S.MainSection>
  )
}
