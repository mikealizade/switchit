import { useSelector } from 'react-redux'
import { RootState } from '@state/store'

//NOTE: this hook is only relevant on the switch journey, where the currentJourneyId is stored on clicking one of the tabs

export const useGetCurrentJourney = () => {
  const { currentJourneyId, journeys } = useSelector((state: RootState) => state.switchJourneys)
  const currentJourney = journeys.find(({ id }: { id: string }) => id === currentJourneyId)
  const currentJourneyType = currentJourney?.journeyType

  return { currentJourneyId, currentJourney, currentJourneyType }
}
