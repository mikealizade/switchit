import type { NextPage } from 'next'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import * as S from './CompletedJourneyCard.style'

type CompletedJourneyCard = {
  name: string
  greenBank: {
    fullName: string
    latestGreenProject: string
  }
  switchingStepsCompleted: number
}

export const CompletedJourneyCard: NextPage<CompletedJourneyCard> = ({
  name,
  greenBank,
  switchingStepsCompleted,
}) => {
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const { formattedTotalSum } = useShuffleImpact()
  const journeySteps =
    currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
  const totalSteps = Object.keys(journeySteps).length / 2
  const maximisedSteps = totalSteps - journeySteps.confirmSwitch

  return (
    <S.CompletedJourneyCard>
      <S.DetailName>{name}</S.DetailName>
      <S.Detail>
        <S.DetailHeader>Green Account Opened</S.DetailHeader>
        <S.DetailText>{greenBank?.fullName}</S.DetailText>
        <S.DetailHeader>Latest Green Project Funded</S.DetailHeader>
        <S.DetailText>{greenBank?.latestGreenProject}</S.DetailText>
        <S.DetailHeader>Impact</S.DetailHeader>
        <S.DetailText>£{formattedTotalSum} switched</S.DetailText>
        <S.DetailHeader>Switching Steps Completed</S.DetailHeader>
        <S.DetailText>{switchingStepsCompleted}/5</S.DetailText>
        <S.DetailHeader>Maximising Steps Completed</S.DetailHeader>
        <S.DetailText>{maximisedSteps}/6</S.DetailText>
      </S.Detail>
    </S.CompletedJourneyCard>
  )
}
