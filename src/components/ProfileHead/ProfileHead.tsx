import type { NextPage } from 'next'
import Image from 'next/image'
import { RootState } from '@state/store'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDrawer } from '@hooks/useDrawer'
import { Loader } from '@components/Loader/Loader'
import * as S from '@components/ProfileHead/ProfileHead.style'
import { ProfileEllipsis } from '@modules/Profile/Profile.style'

export const ProfileHead: NextPage<{ points: number }> = ({ points = 0 }): JSX.Element => {
  const { toggleDrawer } = useDrawer()
  const {
    nickname = '',
    picture = '',
    profile: { summary: { location = '' } = {} } = {},
  } = useSelector((state: RootState) => state.user)

  return (
    <S.ProfileHead>
      <div>
        {!picture ? (
          <Loader />
        ) : (
          <>
            <Image src={picture} alt={nickname} width={132} height={132} unoptimized priority />
            <ProfileEllipsis onClick={toggleDrawer('profile')}>...</ProfileEllipsis>
          </>
        )}
      </div>
      <div>
        <S.Name>{nickname}</S.Name>
        <S.Location>{location}</S.Location>
        <S.Points>
          <FontAwesomeIcon size='sm' icon={faStar} />
          {points} points
        </S.Points>
      </div>
    </S.ProfileHead>
  )
}
