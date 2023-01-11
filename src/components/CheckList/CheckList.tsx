import type { NextPage } from 'next'
import Image from 'next/image'
import * as S from '@components/CheckList/CheckList.style'
import { Title } from '@styles/common.style'
import Heart from '../../../public/icons/icon_brokenheart.svg'

export const CheckList: NextPage = (): JSX.Element => {
  return (
    <S.CheckList>
      <Title>Switching Journey Check List</Title>
      <S.CheckListItems>
        <li>
          <Image src={'/icons/icon_brokenheart.svg'} alt='' width={80} height={80} />
          Write your bank breakup letter
        </li>
      </S.CheckListItems>
    </S.CheckList>
  )
}
