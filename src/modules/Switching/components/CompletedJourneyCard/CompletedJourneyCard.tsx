import type { NextPage } from 'next'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import * as S from './CompletedJourneyCard.style'

type CompletedJourneyCard = {
  journeyType: string
  name: string
  greenBank: {
    fullName: string
    latestGreenProject: string
  }
}

const noBankAccountSwitchingingStepsTotal = 3
const noBankAccountMaximisingStepsTotal = 4
const readyToSwitchSwitchingingStepsTotal = 5
const readyToSwitchMaximisingStepsTotal = 6

export const CompletedJourneyCard: NextPage<CompletedJourneyCard> = ({
  journeyType,
  name,
  greenBank,
}) => {
  const { formattedTotalSum } = useShuffleImpact()
  const isNoBankAccount = journeyType === journeyTypes.noBankAccount
  const journeySteps = isNoBankAccount ? noBankAccountSteps : steps
  const totalSteps = Object.keys(journeySteps).length / 2
  const maximisingStepsCompleted = totalSteps - journeySteps.confirmSwitch
  const switchingStepsCompleted = totalSteps - maximisingStepsCompleted
  const switchingStepsTotal = isNoBankAccount
    ? noBankAccountSwitchingingStepsTotal
    : readyToSwitchSwitchingingStepsTotal
  const maximisingStepsTotal = isNoBankAccount
    ? noBankAccountMaximisingStepsTotal
    : readyToSwitchMaximisingStepsTotal

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
        <S.DetailText>
          {switchingStepsCompleted}/{switchingStepsTotal}
        </S.DetailText>
        <S.DetailHeader>Maximising Steps Completed</S.DetailHeader>
        <S.DetailText>
          {maximisingStepsCompleted}/{maximisingStepsTotal}
        </S.DetailText>
      </S.Detail>
    </S.CompletedJourneyCard>
  )
}
