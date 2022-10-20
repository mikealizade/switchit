import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/ProfileHead/ProfileHead.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { EventType } from '@utils/types'
import me from '../../../public/me.jpg'

export const ProfileHead: NextPage = () => {
  const [isEditing, setEdit] = useState(false)
  const temp = 'We are the last people who can prevent catastrophe on the planet.'
  const [value, setValue] = useState(temp)

  const edit = () => {
    setEdit(!isEditing)
  }

  const save = () => {
    // save to db
    setEdit(false)
  }

  const updateField = ({ target: { value } }: EventType) => {
    setValue(() => value)
  }

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
          20 points
        </S.Points>
      </div>
    </S.ProfileHead>
  )
}
