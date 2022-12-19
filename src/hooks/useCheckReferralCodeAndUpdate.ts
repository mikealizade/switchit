import { useCallback } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@utils/functions'

const updateLoggedInUser = async (sub: string, friendId: string, request: any) => {
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
    // error
  }
}

const updaterReferralFriend = async (sub: string, friendId: string, request: any) => {
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
    // error
  }
}

export const useCheckReferralCodeAndUpdate = () => {
  const { user: { sub = '' } = {} } = useUser()
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)

  const checkReferralCodeAndUpdate = useCallback(
    async (query: any) => {
      try {
        if (sub) {
          const response = await fetch(`/api/db/findSharingCode${query}`)
          const { result } = await response.json()

          if (result?.sub) {
            updateLoggedInUser(sub, result?.sub, request)
            updaterReferralFriend(sub, result?.sub, request)
          }

          return { success: true }
        }
      } catch {
        //error
      }
    },
    [sub, request],
  )

  return checkReferralCodeAndUpdate
}
