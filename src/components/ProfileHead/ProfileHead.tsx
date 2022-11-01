import { useContext } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '@auth0/nextjs-auth0'
import { ProfileContext } from '@components/Layout/Layout'
import * as S from '@components/ProfileHead/ProfileHead.style'
import { Ellipsis } from '@styles/common.style'

export const ProfileHead: NextPage<{ points: number }> = ({ points = 0 }): JSX.Element => {
  const { user: { nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const { toggleDrawer, isDrawerOpen } = useContext(ProfileContext)

  return (
    <S.ProfileHead>
      <div>
        {picture && nickname && (
          <Image src={picture} alt={nickname} width={132} height={132} unoptimized />
        )}
        <Ellipsis onClick={() => toggleDrawer(!isDrawerOpen)}>...</Ellipsis>
      </div>
      <div>
        <S.Name>{nickname}</S.Name>
        <S.Location>London, UK</S.Location>
        <S.Points>
          <FontAwesomeIcon size='sm' icon={faStar} />
          {points} points
        </S.Points>
      </div>
    </S.ProfileHead>
  )
}
