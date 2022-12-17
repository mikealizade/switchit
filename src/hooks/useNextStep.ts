import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSaveStep } from '@hooks/useSaveStep'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'

export const useNextStep = () => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const saveStep = useSaveStep()
  const { currentJourney } = useGetCurrentJourney()

  const saveNextStep = (step: number = 0, route: string = '') => {
    dispatch(
      setJourneyData({
        completedSteps: Array.from(new Set([...currentJourney!.completedSteps, step])),
      }),
    )
    saveStep(step)
    push(route)
  }

  return saveNextStep
}
