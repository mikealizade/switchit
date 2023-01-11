import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { journeyTypes, noBankAccountSteps, steps } from '@utils/constants'

export const useStepsByJourneyType = () => {
  const { currentJourneyType } = useGetCurrentJourney()

  const getStepsByJourneyType = () => {
    return currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
  }

  return getStepsByJourneyType
}
