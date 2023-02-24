import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from '@components/ProfileFriends/ProfileFriends.style'
import { RootState } from '@state/store'

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
    const filtered = friends.filter(
      ({ nickname, username }: { nickname: string; username: string }) =>
        nickname.toLowerCase().includes(value.toLowerCase()) ||
        username.toLowerCase().includes(value.toLowerCase()),
    )
    setFriends(filtered)
  }, [value, friends])

  if (!friends.length)
    return (
      <p>
        Invite friends to boost your impact and help us reach our goal of £7 billion divested in
        2023.
      </p>
    )

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
