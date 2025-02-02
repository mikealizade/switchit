import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from '@hooks/useMediaQuery'
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
    username,
  } = useSelector((state: RootState) => state.user)
  const { isMobile } = useMediaQuery()
  const imageSize = isMobile ? 105 : 156

  return (
    <S.ProfileHead>
      <S.Picture>
        <Image
          src={picture || '/icons/icon_noprofile.svg'}
          alt={nickname}
          width={imageSize}
          height={imageSize}
          priority
        />
      </S.Picture>
      <S.UserDetails>
        <S.Name>{nickname}</S.Name>
        <S.Location>{location}</S.Location>
        <S.Username>{username}</S.Username>
      </S.UserDetails>
      <ProfileEllipsis onClick={() => dispatch(toggleDrawer('profile'))}>
        <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} className='profile' />
      </ProfileEllipsis>
    </S.ProfileHead>
  )
}
