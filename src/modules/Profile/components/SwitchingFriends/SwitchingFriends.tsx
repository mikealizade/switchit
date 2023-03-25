import type { NextPage } from 'next'
import Image from 'next/image'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { useFriends } from '@hooks/useFriends'
import * as S from '@modules/Profile/components/SwitchingFriends/SwitchingFriends.style'
import { Title } from '@styles/common.style'

export const SwitchingFriends: NextPage = (): JSX.Element => {
  const friends = useFriends() // replace with useSelector once friends available app wide?

  return (
    <S.SwitchingFriends>
      <Title>
        Switching Friends
        <S.Total>+ {friends.length}</S.Total>
        <Ellipsis section='friends' />
      </Title>

      <S.Friends>
        {!friends.length ? (
          <p>
            Friends who sign up using your sharing code will be added here. Invite friends to boost your impact and help us reach our goal
            of £7 billion divested in 2023.
          </p>
        ) : (
          friends.map(({ nickname, picture }: { nickname: string; picture: string }) => (
            <S.Friend key={nickname}>
              <Image src={picture || '/icons/icon_noprofile.svg'} alt={nickname} width={72} height={72} unoptimized title={nickname} />
            </S.Friend>
          ))
        )}
      </S.Friends>
    </S.SwitchingFriends>
  )
}
