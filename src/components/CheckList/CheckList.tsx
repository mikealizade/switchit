import type { NextPage } from 'next'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import * as S from '@components/CheckList/CheckList.style'

export const CheckList: NextPage = (): JSX.Element => {
  return (
    <S.CheckList>
      <ProfileTitle>Switching Journey Check List</ProfileTitle>
      <ul>
        <li>Write your bank breakup letter</li>
      </ul>
    </S.CheckList>
  )
}
