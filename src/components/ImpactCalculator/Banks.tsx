import type { NextPage } from 'next'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { Div } from '@styles/common.style'
import { goodBanksConfig } from '@utils/data'

export const Banks: NextPage = (): JSX.Element => {
  const { currentJourney: { badBank, goodBank } = {} } = useGetCurrentJourney()
  const greenBank = goodBanksConfig[goodBank as keyof typeof goodBanksConfig]

  return (
    <Div>
      <S.Header>Current Bank</S.Header>
      <S.Bank defaultValue={badBank} placeholder='Not yet selected' disabled />
      <S.Header>New Bank</S.Header>
      <S.Bank defaultValue={greenBank?.fullName} placeholder='Not yet selected' disabled />
    </Div>
  )
}
