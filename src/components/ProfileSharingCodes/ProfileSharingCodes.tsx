import React from 'react'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useShareCode } from '@hooks/useShareCode'
import { Tabs } from '@components/Tabs/Tabs'
import * as S from '@components/ProfileSharingCodes/ProfileSharingCodes.style'
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
      <ShareButton type='button' onClick={() => shareCode()}>
        Share
      </ShareButton>

      <S.SentCodes>
        <p>Sent</p>
        {sharingCodes.length}
      </S.SentCodes>
    </S.Share>,
    <>
      <p>
        Get the word out and earn points - a win win. Share your unique referral link with a friend,
        collegue, or family member and track your impact.
      </p>
      <p>
        Earn points if your friends join, earn more points if they switch, and if your friends
        friends switch? You guessed it. More points.
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
