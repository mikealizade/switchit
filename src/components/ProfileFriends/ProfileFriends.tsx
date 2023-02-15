import type { NextPage } from 'next'
import React from 'react'
import * as S from '@components/ProfileFriends/ProfileFriends.style'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { Friends } from './Friends'

export const ProfileFriends: NextPage = (): JSX.Element => {
  const panels: [React.ReactNode, React.ReactNode] = [
    <S.FriendsFeed key='feed'>Feed content</S.FriendsFeed>,
    <S.FriendsContainer key='friends'>
      <Friends />
    </S.FriendsContainer>,
  ]

  return (
    <>
      <StyledTabs>
        <Tabs tabs={['Friends Feed', 'Friends']} panels={panels}></Tabs>
      </StyledTabs>
    </>
  )
}
