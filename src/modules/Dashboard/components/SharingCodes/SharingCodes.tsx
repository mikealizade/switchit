import type { NextPage } from 'next'
import Image from 'next/image'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { Loader } from '@components/Loader/Loader'
import { useShareCode } from '@hooks/useShareCode'
import { useUpdatePoints } from '@hooks/useUpdatePoints'
import * as S from '@modules/Dashboard/components/SharingCodes/SharingCodes.style'
import { Title, ShareButton, Text } from '@styles/common.style'

type SharingCodesProps = { total: number; hasEllipsis?: boolean }

export const SharingCodes: NextPage<SharingCodesProps> = ({ total, hasEllipsis }): JSX.Element => {
  const shareCode = useShareCode()
  const { addPoints } = useUpdatePoints('sharingCodes')

  const onShareCode = () => {
    shareCode(5, 'add')
    addPoints(5)
  }

  return (
    <S.SharingCodes>
      <Title>
        Sharing Code
        {hasEllipsis && <Ellipsis section='sharingCodes' />}
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
          <Text>Invite friends to Switch It Green using your unique sharing code to collect points and multiply your impact</Text>
        </>
      )}
    </S.SharingCodes>
  )
}
