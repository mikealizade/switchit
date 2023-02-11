import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '@components/Loader/Loader'
import { ProfileEllipsis } from '@modules/Profile/Profile.style'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { RootState } from '@state/store'

export const ProfileHead: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    nickname = '',
    picture = '',
    location = '',
  } = useSelector((state: RootState) => state.user)

  return (
    <S.ProfileHead>
      <S.Picture>
        {!picture ? (
          <Loader />
        ) : (
          <Image src={picture} alt={nickname} width={132} height={132} priority />
        )}
      </S.Picture>
      <S.UserDetails>
        <S.Name>{nickname}</S.Name>
        <S.Location>{location}</S.Location>
      </S.UserDetails>
      <ProfileEllipsis onClick={() => dispatch(toggleDrawer('profile'))}>
        <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} className='profile' />
      </ProfileEllipsis>
    </S.ProfileHead>
  )
}
