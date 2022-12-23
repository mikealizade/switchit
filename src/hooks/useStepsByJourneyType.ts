import { journeyTypes, noBankAccountSteps, steps } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'

export const useStepsByJourneyType = () => {
  const { currentJourneyType } = useGetCurrentJourney()

  const getStepsByJourneyType = () => {
    return currentJourneyType === journeyTypes.noBankAccount ? noBankAccountSteps : steps
  }

  return getStepsByJourneyType
}
