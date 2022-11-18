import type { NextPage } from 'next'
import Image from 'next/image'
import { RootState } from '@state/store'
import { useSelector, useDispatch } from 'react-redux'
import { useDrawer } from '@hooks/useDrawer'
import { Loader } from '@components/Loader/Loader'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import { ProfileEllipsis } from '@modules/Profile/Profile.style'

import { toggleDrawer } from '@state/drawer/drawerSlice'

export const ProfileHead: NextPage = (): JSX.Element => {
  // const { toggleDrawer } = useDrawer()
  const dispatch = useDispatch()
  const {
    nickname = '',
    picture = '',
    location = '',
    // username = '',
  } = useSelector((state: RootState) => state.user)
  // const {
  //   toggleDrawer
  // } = useSelector((state: RootState) => state.user)

  return (
    <S.ProfileHead>
      <div>
        {!picture ? (
          <Loader />
        ) : (
          <>
            <Image src={picture} alt={nickname} width={132} height={132} unoptimized priority />
            <ProfileEllipsis onClick={() => dispatch(toggleDrawer('profile'))}>...</ProfileEllipsis>
          </>
        )}
      </div>
      <div>
        <S.Name>{nickname}</S.Name>
        <S.Location>{location}</S.Location>
        {/* <S.Location>{username}</S.Location> */}
        {/* <S.Points>
          <FontAwesomeIcon size='sm' icon={faStar} />
          {points} points
        </S.Points> */}
      </div>
    </S.ProfileHead>
  )
}
