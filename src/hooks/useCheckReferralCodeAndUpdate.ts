import { useUser } from '@auth0/nextjs-auth0'
import { useCallback } from 'react'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { sendRequest } from '@utils/functions'

const updateLoggedInUser = async (sub: string, friendId: string, request: any, toast: any) => {
  try {
    const body = {
      filter: { sub },
      payload: {
        $push: {
          ['friends']: friendId,
        },
        $inc: { 'profile.switchItPoints.0.points': 10 },
      },
    }

    request(body)
  } catch (error) {
    toast('An error occurred', 'error')
  }
}

const updaterReferralFriend = async (sub: string, friendId: string, request: any, toast: any) => {
  try {
    const body = {
      filter: { sub: friendId },
      payload: {
        $push: {
          ['friends']: sub,
        },
        $inc: { 'profile.switchItPoints.0.points': 10 },
      },
    }

    request(body)
  } catch (error) {
    toast('An error occurred', 'error')
  }
}

export const useCheckReferralCodeAndUpdate = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const toast = useToast()

  const checkReferralCodeAndUpdate = useCallback(
    async (query: any) => {
      try {
        if (sub) {
          const response = await fetch(`/api/db/findSharingCode${query}`)
          const { result } = await response.json()

          if (result?.sub) {
            updateLoggedInUser(sub, result?.sub, request, toast)
            // updaterReferralFriend(sub, result?.sub, request, toast)
          }

          return { success: true }
        }
      } catch {
        toast('An error occurred', 'error')
      }
    },
    [sub, request],
  )

  return checkReferralCodeAndUpdate
}
