import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@utils/functions'
import { useToast } from '@hooks/useToast'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'

export const useSaveStep = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/upsertJourney', sendRequest)
  const { currentJourney, currentJourneyId } = useGetCurrentJourney()
  const toast = useToast()
  // debugger
  //if currentJourneyId does not exist in db push, else update
  const saveStep = async (step: number, goodBank: string) => {
    try {
      const insert = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        update: {
          $set: {
            ...(goodBank && { 'switchJourneys.$.goodBank': goodBank }),
            'switchJourneys.$.completedSteps': Array.from(
              new Set([...currentJourney!.completedSteps, step]),
            ),
          },
        },
      }

      const push = {
        filter: { sub, 'switchJourneys.id': { $ne: currentJourneyId } },
        update: {
          $push: {
            switchJourneys: {
              ...currentJourney,
              completedSteps: [1],
              goodBank,
            },
          },
        },
      }

      const body = {
        payload: [insert, push],
        collection: 'users',
      }

      request(body)
    } catch (error) {
      toast('An error occurred', 'error')
    }
  }

  return saveStep
}
