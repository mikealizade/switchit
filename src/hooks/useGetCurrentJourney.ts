import { useSelector } from 'react-redux'
import { RootState } from '@state/store'

export const useGetCurrentJourney = () => {
  let { currentJourneyId, journeys } = useSelector((state: RootState) => state.switchJourneys)
  // if (!currentJourneyId && !journeys.length) {
  //   console.log('LS')
  //   currentJourneyId = window.sessionStorage.getItem('currentJourneyId')
  //   journeys = JSON.parse(window.sessionStorage.getItem('switchJourneys'))
  // }

  console.log('currentJourneyId', currentJourneyId)

  const currentJourney = journeys.find(({ id }) => id === currentJourneyId)
  const currentJourneyType = currentJourney!?.journeyType

  return { currentJourneyId, currentJourney, currentJourneyType }
}
