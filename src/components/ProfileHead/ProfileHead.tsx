import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '@auth0/nextjs-auth0'
import me from '../../../public/me.jpg'
import * as S from '@components/ProfileHead/ProfileHead.style'

export const ProfileHead: NextPage<{ points: number }> = ({ points = 0 }): JSX.Element => {
  const { user: { sub = '', nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  return (
    <S.ProfileHead>
      <div>
        <Image src={picture} alt={nickname} width={132} height={132} unoptimized />
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
