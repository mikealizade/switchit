import React from 'react'
import type { NextPage } from 'next'
import { Tabs as StylesTabs } from '@components/Tabs/Tabs.style'
import * as S from '@components/ProfileSharingCodes/ProfileSharingCodes.style'

import { Tabs } from '@components/Tabs/Tabs'

export const ProfileSharingCodes: NextPage = (): JSX.Element => {
  const onCancel = () => {
    //
  }

  const panels: [React.ReactNode, React.ReactNode] = [
    <S.Share key='1'>
      <S.ShareButton type='button' onClick={onCancel}>
        Share
      </S.ShareButton>

      <S.SentCodes>
        <p>Sent</p>
        {55}
      </S.SentCodes>
    </S.Share>,
    <>
      <p key='2'>
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
      <StylesTabs>
        <Tabs tabs={['Overview & History', 'How It Works']} panels={panels}></Tabs>
      </StylesTabs>
    </>
  )
}
