import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useFriends } from '@hooks/useFriends'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@modules/Profile/components/SwitchingFriends/SwitchingFriends.style'
import { Title, Ellipsis } from '@styles/common.style'

export const SwitchingFriends: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const friends = useFriends() // replace with useSelector once friends available app wide?

  return (
    <S.SwitchingFriends>
      <Title>
        Switching Friends
        <Ellipsis onClick={() => dispatch(toggleDrawer('friends'))}>
          <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} />
        </Ellipsis>
      </Title>

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
