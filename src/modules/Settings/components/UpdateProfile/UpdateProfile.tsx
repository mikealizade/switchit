import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { RootState } from '@state/store'
import { Button } from '@components/Button/Button'
import * as S from '@modules/Settings/Settings.style'

export const UpdateProfile: NextPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const {
    nickname = '',
    picture = '',
    email = '',
    sub = '',
  } = useSelector((state: RootState) => state.user)

  const uploadProflePicture = () => {
    //
  }

  return (
    <S.UpdateProfile>
      {picture && <Image src={picture} alt={nickname} width={50} height={50} unoptimized />}
      <S.NameEmail>
        <S.Name>{nickname}</S.Name>
        <S.Email>{email}</S.Email>
      </S.NameEmail>
      <Button type='button' mode='primary' onClick={uploadProflePicture}>
        Update Profile Picture
      </Button>
    </S.UpdateProfile>
  )
}
