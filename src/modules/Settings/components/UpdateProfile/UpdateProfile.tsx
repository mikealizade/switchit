import type { NextPage } from 'next'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import * as S from '@modules/Settings/Settings.style'
import { RootState } from '@state/store'
import { FileUploader } from './FileUploader'

export const UpdateProfile: NextPage = (): JSX.Element => {
  const { nickname = '', picture = '', email = '' } = useSelector((state: RootState) => state.user)

  return (
    <S.UpdateProfile>
      <S.PictureContainer>
        <Image src={picture || '/icons/icon_noprofile.svg'} alt={nickname} width={50} height={50} />
        <S.NameEmail>
          <S.Name>{nickname}</S.Name>
          <S.Email>{email}</S.Email>
        </S.NameEmail>
      </S.PictureContainer>

      <S.ButtonContainer>
        <FileUploader />
      </S.ButtonContainer>
    </S.UpdateProfile>
  )
}
