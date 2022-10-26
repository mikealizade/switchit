import type { NextPage } from 'next'
import Image from 'next/image'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import * as S from '@components/CheckList/CheckList.style'
import Heart from '../../../public/icons/icon_brokenheart.svg'

export const CheckList: NextPage = (): JSX.Element => {
  return (
    <S.CheckList>
      <ProfileTitle>Switching Journey Check List</ProfileTitle>
      <S.CheckListItems>
        <li>
          <Image src={'/icons/icon_brokenheart.svg'} alt='' width={80} height={80} />
          Write your bank breakup letter
        </li>
      </S.CheckListItems>
    </S.CheckList>
  )
}
