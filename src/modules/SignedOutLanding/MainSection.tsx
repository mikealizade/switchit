import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutLanding.style'

export const MainSection: NextPage = (): JSX.Element => {
  return (
    <S.MainSection>
      <S.MainSectionContent>
        <S.HomePageHeader>Feel powerless when it comes to climate breakdown?</S.HomePageHeader>
        <S.Text>We did too</S.Text>
        <S.Text>
          Withdraw £1.5m from fossil fuels support today, even if you have £0 in your account
        </S.Text>
        <S.BlockButton margin='30px 0 0'>
          <Link href='/'> Switch to a green bank</Link>
        </S.BlockButton>
        <S.SpeechBubble>
          <S.SpeechBubbleText>
            We’ve got the info on your bank’s fossil fuel credentials.
          </S.SpeechBubbleText>
        </S.SpeechBubble>
      </S.MainSectionContent>
    </S.MainSection>
  )
}
