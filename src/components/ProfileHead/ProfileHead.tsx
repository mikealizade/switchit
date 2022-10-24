import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/ProfileHead/ProfileHead.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import me from '../../../public/me.jpg'

export const ProfileHead: NextPage<{ points: number }> = ({ points = 0 }): JSX.Element => {
  return (
    <S.ProfileHead>
      <div>
        <Image src={me} alt='Mike' width={132} height={132} unoptimized />
      </div>
      <div>
        <S.Name>Mike Alizade</S.Name>
        <S.Location>London, UK</S.Location>
        <S.Points>
          <FontAwesomeIcon size='sm' icon={faStar} />
          {points} points
        </S.Points>
      </div>
    </S.ProfileHead>
  )
}
