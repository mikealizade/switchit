import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import * as S from '@styles/common.style'

export const Ellipsis: NextPage<{ section: string }> = ({ section }): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <S.Ellipsis onClick={() => dispatch(toggleDrawer(section))}>
      <Image src={'/icons/icon_ellipsis.svg'} alt='' width={25} height={25} />
    </S.Ellipsis>
  )
}
