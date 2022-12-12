import { useSelector } from 'react-redux'
import { RootState } from '@state/store'

export const useGetCurrentJourney = () => {
  const { currentJourneyId, journeys } = useSelector((state: RootState) => state.switchJourneys)
  const currentJourney = journeys.find(({ id }) => id === currentJourneyId)
  const currentJourneyType = currentJourney?.journeyType

  return { currentJourneyId, currentJourney, currentJourneyType }
}
