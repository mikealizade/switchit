import type { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'
import * as S from '@components/ProfileFriends/ProfileFriends.style'
import { Tabs } from '@components/Tabs/Tabs'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { RootState } from '@state/store'
import { Friends } from './Friends'

export const ProfileFriends: NextPage = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user)

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
