import { useState } from 'react'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import * as S from '@components/SharingCodes/SharingCodes.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'

type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }): JSX.Element => {
  return (
    <S.SharingCodes>
      <ProfileTitle>Sharing Codes</ProfileTitle>
      <S.TotalShared>
        {total}
        {/* <FontAwesomeIcon size='sm' icon={faPaperPlane} /> */}
        <FontAwesomeIcon size='lg' icon={faShareNodes} />
      </S.TotalShared>
    </S.SharingCodes>
  )
}
