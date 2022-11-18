import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useFriends } from '@hooks/useFriends'
import { useUser } from '@auth0/nextjs-auth0'
import * as S from '@modules/Profile/components/SwitchingFriends/SwitchingFriends.style'
import { Title } from '@styles/common.style'

export const SwitchingFriends: NextPage = (): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const friends = useFriends()

  // useEffect(() => {
  //   sub && fetchFriends()
  // }, [sub])

  return (
    <S.SwitchingFriends>
      <Title>Switching Friends</Title>

      <S.Friends>
        {friends.map(({ nickname, picture }: { nickname: string; picture: string }) => (
          <S.Friend key={nickname}>
            <Image
              src={picture}
              alt={nickname}
              width={72}
              height={72}
              unoptimized
              title={nickname}
            />
          </S.Friend>
        ))}
      </S.Friends>
    </S.SwitchingFriends>
  )
}
