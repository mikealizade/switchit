import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useShareCode } from '@hooks/useShareCode'
import { Tabs } from '@components/Tabs/Tabs'
import * as S from '@components/ProfileFriends/ProfileFriends.style'
import { ShareButton } from '@styles/common.style'

type Friend = {
  userId: string
  nickname: string
  username: string
  picture: string
}

export const Friends: NextPage = (): JSX.Element => {
  const friends = useSelector((state: RootState) => state.friends)
  const [filteredFriends, setFriends] = useState(friends)
  const [value, setValue] = useState('')

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    setValue(value)
  }

  useEffect(() => {
    const filtered = friends.filter(({ nickname }: { nickname: string }) =>
      nickname.toLowerCase().includes(value.toLowerCase()),
    )
    setFriends(filtered)
  }, [value, friends])

  if (!friends.length) return <p>You are not connected with any friends</p>

  return (
    <>
      <S.FriendsSearchContainer>
        <S.FriendsSearch type='text' placeholder='Search...' value={value} onChange={onChange} />
        <Image src={'/icons/icon_magnify.svg'} alt='' width={18} height={18} />
      </S.FriendsSearchContainer>
      <>
        {friends.length && (
          <S.Connected>
            <Image src={'/icons/icon_connectedfriends.svg'} alt='' width={50} height={50} />
            <S.ConnectedTotal>{friends.length}</S.ConnectedTotal>
          </S.Connected>
        )}
      </>

      <S.Friends>
        {filteredFriends.length ? (
          filteredFriends.map(({ userId, nickname, username, picture }: Friend) => (
            <S.Item key={userId}>
              <Image
                src={picture}
                alt={nickname}
                width={45}
                height={45}
                unoptimized
                title={nickname}
              />
              <S.Names>
                <S.Name>{nickname}</S.Name>
                <S.Username>{username}</S.Username>
              </S.Names>
              <Image src={'/icons/icon_chevron_right_small.svg'} alt='' width={15} height={15} />
            </S.Item>
          ))
        ) : (
          <p>No results</p>
        )}
      </S.Friends>
    </>
  )
}

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
