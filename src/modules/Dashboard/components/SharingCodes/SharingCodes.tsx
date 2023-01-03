import type { NextPage } from 'next'
import Image from 'next/image'
import { useShareCode } from '@hooks/useShareCode'
import { Loader } from '@components/Loader/Loader'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import * as S from '@modules/Dashboard/components/SharingCodes/SharingCodes.style'
import { Title } from '@styles/common.style'
import { ShareButton } from '@styles/common.style'

type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }): JSX.Element => {
  const shareCode = useShareCode()

  return (
    <S.SharingCodes>
      <Title>
        Sharing Codes
        <Ellipsis section='sharingCodes' />
      </Title>
      {!total && isNaN(total) ? (
        <Loader />
      ) : (
        <S.TotalShared>
          {total} x
          <ShareButton small type='button' onClick={() => shareCode()}>
            Share
            <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
          </ShareButton>
        </S.TotalShared>
      )}
    </S.SharingCodes>
  )
}
