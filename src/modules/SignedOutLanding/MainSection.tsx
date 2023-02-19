import type { NextPage } from 'next'
import Link from 'next/link'
import * as S from './SignedOutHome.style'
import { Text, BlockButton } from './SignedOutLanding.style'

export const MainSection: NextPage = (): JSX.Element => {
  return (
    <S.MainSection>
      <S.MainSectionContent>
        <S.HomePageHeader>Feel powerless when it comes to climate breakdown?</S.HomePageHeader>
        <Text>We did too</Text>
        <S.TextContainer mobileWidth={90}>
          <Text>
            Withdraw £1.5m from fossil fuel support today, even if you have £0 in your account
          </Text>
        </S.TextContainer>
        <BlockButton>
          <Link href='/api/auth/signup'> Switch to a green bank</Link>
        </BlockButton>
        <S.SpeechBubble>
          <S.SpeechBubbleText>
            {`We've`} got the info on your {`bank's`} fossil fuel credentials.
          </S.SpeechBubbleText>
        </S.SpeechBubble>
      </S.MainSectionContent>
    </S.MainSection>
  )
}
