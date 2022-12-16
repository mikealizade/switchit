import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import { useToast } from '@hooks/useToast'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'

export const useSaveStep = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { currentJourney, currentJourneyId } = useGetCurrentJourney()
  const toast = useToast()

  //if currentJourneyId does not exist in db push, else update

  const saveStep = async (step: number) => {
    try {
      const insert = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        update: {
          $set: {
            'switchJourneys.$.completedSteps': Array.from(
              new Set([...currentJourney!.completedSteps, step]),
            ),
          },
        },
      }

      const push = {
        filter: { 'switchJourneys.id': { $ne: currentJourneyId } },
        update: {
          $push: {
            switchJourneys: {
              ...currentJourney,
              completedSteps: [1],
            },
          },
        },
      }
      const body = {
        payload: [insert, push],
        collection: 'users',
      }

      await fetcher(`/api/db/upsertJourney`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      toast('An error occurred', 'error')
    }
  }

  return saveStep
}
