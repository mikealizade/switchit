import type { NextPage } from 'next'
import Image from 'next/image'
import { Ellipsis } from '@components/Ellipsis/Ellipsis'
import { Loader } from '@components/Loader/Loader'
import { useShareCode } from '@hooks/useShareCode'
import * as S from '@modules/Dashboard/components/SharingCodes/SharingCodes.style'
import { Title, ShareButton, Text } from '@styles/common.style'

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
        <>
          <S.TotalShared>
            {total} x
            <ShareButton small type='button' onClick={() => shareCode()}>
              Share
              <Image src={`/icons/icon_airplane.svg`} alt='' width={34} height={29} />
            </ShareButton>
          </S.TotalShared>
          <Text>Share Switch It to collect points and boost your impact.</Text>
        </>
      )}
    </S.SharingCodes>
  )
}
