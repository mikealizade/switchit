import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useToast } from '@hooks/useToast'
import { sendRequest } from '@utils/functions'

export const useSaveStep = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/upsertJourney', sendRequest)
  const { currentJourney, currentJourneyId } = useGetCurrentJourney()
  const toast = useToast()

  //TODO save other data to user, not just step and good bank

  // if currentJourneyId does not exist in db push, else update
  const saveStep = async (step: number, { goodBank, isVerified }: { goodBank: string; isVerified?: Date }) => {
    try {
      const insert = {
        filter: { sub, 'switchJourneys.id': currentJourneyId },
        update: {
          $set: {
            ...(goodBank && { 'switchJourneys.$.goodBank': goodBank }),
            ...(isVerified && { 'switchJourneys.$.isVerified': isVerified }),
            'switchJourneys.$.completedSteps': Array.from(new Set([...currentJourney!.completedSteps, step])),
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
