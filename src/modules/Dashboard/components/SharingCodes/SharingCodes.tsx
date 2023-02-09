import type { NextPage } from 'next'
import Image from 'next/image'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { Loader } from '@components/Loader/Loader'
import { useShareCode } from '@hooks/useShareCode'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Dashboard/components/SharingCodes/SharingCodes.style'
import { Title, ShareButton, Text } from '@styles/common.style'

type SharingCodesProps = { total: number }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total }): JSX.Element => {
  const shareCode = useShareCode()
  const { addPoints } = useUpdatePoints('sharingCodes')

  const onShareCode = () => {
    shareCode(5, 'add')
    addPoints(5)
  }

  return (
    <S.SharingCodes>
      <Title>
        Sharing Codes
        <Ellipsis section='sharingCodes' />
      </Title>
      {!total && isNaN(total) ? (
        <Loader />
      ) : (
        <>
          <S.TotalShared>
            {total} x
            <ShareButton small type='button' onClick={onShareCode}>
              Share
              <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
            </ShareButton>
          </S.TotalShared>
          <Text>Share your unique code to collect points & multiply your impact</Text>
        </>
      )}
    </S.SharingCodes>
  )
}
