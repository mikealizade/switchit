import { useState } from 'react'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import * as S from '@components/SharingCodes/SharingCodes.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'

export type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }) => {
  return (
    <S.SharingCodes>
      <ProfileTitle>Sharing Codes</ProfileTitle>
      <S.TotalShared>
        <FontAwesomeIcon size='sm' icon={faShareNodes} />
        {total}
        <FontAwesomeIcon size='sm' icon={faPaperPlane} />
      </S.TotalShared>
    </S.SharingCodes>
  )
}
