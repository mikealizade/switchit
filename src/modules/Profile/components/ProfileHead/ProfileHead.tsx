import type { NextPage } from 'next'
import Image from 'next/image'
import { RootState } from '@state/store'
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from '@components/Loader/Loader'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import { ProfileEllipsis } from '@modules/Profile/Profile.style'

export const ProfileHead: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    nickname = '',
    picture = '',
    location = '',
  } = useSelector((state: RootState) => state.user)

  return (
    <S.ProfileHead>
      <div className='picture'>
        {!picture ? (
          <Loader />
        ) : (
          <Image src={picture} alt={nickname} width={132} height={132} unoptimized priority />
        )}
      </div>
      <div>
        <S.Name>{nickname}</S.Name>
        <S.Location>{location}</S.Location>
      </div>
      <ProfileEllipsis onClick={() => dispatch(toggleDrawer('profile'))}>
        <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} className='profile' />
      </ProfileEllipsis>
    </S.ProfileHead>
  )
}
