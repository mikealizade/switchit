import type { NextPage } from 'next'
import { useDrawer } from '@hooks/useDrawer'
import { useShareCode } from '@hooks/useShareCode'
import { Loader } from '@components/Loader/Loader'
import * as S from '@components/SharingCodes/SharingCodes.style'
import { ProfileTitle } from '@modules/Profile/Profile.style'
import { ShareButton } from '@styles/common.style'
import { Ellipsis } from '@styles/common.style'

type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }): JSX.Element => {
  const { toggleDrawer } = useDrawer()
  const shareCode = useShareCode()

  return (
    <S.SharingCodes>
      <ProfileTitle>
        Sharing Codes
        <Ellipsis onClick={toggleDrawer('sharingCodes')}>...</Ellipsis>
      </ProfileTitle>
      {!total ? (
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
