import type { NextPage } from 'next'
import { useDrawer } from '@hooks/useDrawer'
import { useShareCode } from '@hooks/useShareCode'
import { Loader } from '@components/Loader/Loader'
import { useDispatch } from 'react-redux'
import * as S from '@modules/Dashboard/components/SharingCodes/SharingCodes.style'
import { Title } from '@styles/common.style'
import { ShareButton, Ellipsis } from '@styles/common.style'
import { toggleDrawer } from '@state/drawer/drawerSlice'

type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }): JSX.Element => {
  // const { toggleDrawer } = useDrawer()
  const dispatch = useDispatch()
  const shareCode = useShareCode()

  return (
    <S.SharingCodes>
      <Title>
        Sharing Codes
        <Ellipsis onClick={() => dispatch(toggleDrawer('sharingCodes'))}>...</Ellipsis>
      </Title>
      {!total && isNaN(total) ? (
        <Loader />
      ) : (
        <S.TotalShared>
          {total} x{/* <FontAwesomeIcon size='sm' icon={faPaperPlane} /> */}
          <ShareButton small type='button' onClick={() => shareCode()}>
            Share
          </ShareButton>
        </S.TotalShared>
      )}
    </S.SharingCodes>
  )
}
