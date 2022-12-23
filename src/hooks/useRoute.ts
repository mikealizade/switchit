import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { journeyTypes } from '@utils/constants'

export const useRoute = (step: number) => {
  const { currentJourney: { journeyType } = {} } = useGetCurrentJourney()
  const isNoBankAccountJourney = journeyType === journeyTypes.noBankAccount

  const routes = {
    6: isNoBankAccountJourney ? '/switching/tell-us' : '/switching/leave-reviews',
    // 9: isNoBankAccountJourney ? '/switching/tell-us' : '/switching/leave-reviews',
  }

  return routes[step as keyof typeof routes]
}
