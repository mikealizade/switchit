import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useSaveStep } from '@hooks/useSaveStep'
import { setJourneyData } from '@state/switchJourney/switchJourneySlice'

export const useNextStep = () => {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const saveStep = useSaveStep()
  const { currentJourney: { completedSteps = [] } = {} } = useGetCurrentJourney()

  const saveNextStep = (
    step = 0,
    route: string | null = '',
    extraData: any = {}, //{ [key: string]: unknown }
  ) => {
    dispatch(
      setJourneyData({
        completedSteps: Array.from(new Set([...completedSteps, step])),
        ...(extraData && extraData),
      }),
    )
    saveStep(step, extraData)
    route && push(route)
  }

  return saveNextStep
}
