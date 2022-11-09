import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useFriends } from '@hooks/useFriends'
import { useUser } from '@auth0/nextjs-auth0'
import * as S from '@components/SwitchingFriends/SwitchingFriends.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'

export const SwitchingFriends: NextPage = (): JSX.Element => {
  const { user: { sub = '' } = {} } = useUser()
  const [pals, fetchFriends] = useFriends()

  useEffect(() => {
    sub && fetchFriends()
  }, [sub])

  return (
    <S.SwitchingFriends>
      <ProfileTitle>Switching Friends</ProfileTitle>

      <S.Friends>
        {pals.map(({ nickname, picture }: { nickname: string; picture: string }) => (
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
