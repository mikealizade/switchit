import type { NextPage } from 'next'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { goodBanksConfig } from '@utils/data'
import { Div } from '@styles/common.style'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'

export const Banks: NextPage = (): JSX.Element => {
  const { currentJourney: { badBank, goodBank } = {} } = useGetCurrentJourney()
  const greenBank = goodBanksConfig[goodBank as keyof typeof goodBanksConfig]

  console.log('greenBank', greenBank)

  return (
    <Div>
      <S.Header>Current Bank</S.Header>
      <S.Bank defaultValue={badBank} placeholder='Not yet selected' disabled />
      <S.Header>New Bank</S.Header>
      <S.Bank defaultValue={greenBank?.fullName} placeholder='Not yet selected' disabled />
    </Div>
  )
}
