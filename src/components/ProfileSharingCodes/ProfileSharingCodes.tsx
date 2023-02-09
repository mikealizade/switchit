import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import * as S from '@components/ProfileSharingCodes/ProfileSharingCodes.style'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useShareCode } from '@hooks/useShareCode'
import { RootState } from '@state/store'
import { ShareButton } from '@styles/common.style'

//<a href='sms:+18664504185?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...'> text msg

export const ProfileSharingCodes: NextPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)
  const shareCode = useShareCode()

  const {
    profile: { sharingCodes = [] },
  } = user

  const panels: [React.ReactNode, React.ReactNode] = [
    <S.Share key='1'>
      <ShareButton type='button' onClick={() => shareCode(5, 'add')}>
        Share
        <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
      </ShareButton>

      <S.SentCodes>
        <p>Sent</p>
        {sharingCodes.length}
      </S.SentCodes>
    </S.Share>,
    <>
      <p>
        Get the word out and earn points. {`It's`} a win-win. Share your unique referral link with
        your friends, classmates, or colleagues and watch your impact multiply.
      </p>
      <p>
        Earn points if your friends join; earn more points if they make the switch; and if your{' '}
        {`friends'`} friends switch? You guessed it - more points.
      </p>
    </>,
  ]

  return (
    <>
      <StyledTabs>
        <Tabs tabs={['Overview & History', 'How It Works']} panels={panels}></Tabs>
      </StyledTabs>
    </>
  )
}
