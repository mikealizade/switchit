import { useEffect, useCallback } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import { getPostBody } from '@utils/functions'

const updateLoggedInUser = async (sub: string, friendId: string) => {
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

    await fetcher(`/api/db/updateOne`, getPostBody(body))
  } catch (error) {
    // error
  }
}

const updaterReferralFriend = async (sub: string, friendId: string) => {
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

    await fetcher(`/api/db/updateOne`, getPostBody(body))
  } catch (error) {
    // error
  }
}

export const useCheckReferralCodeAndUpdate = () => {
  const { user: { sub = '' } = {} } = useUser()

  const checkReferralCodeAndUpdate = useCallback(
    async (query: any) => {
      try {
        if (sub) {
          const { result }: any = await fetcher(`/api/db/findOne${query}`)

          if (result?.sub) {
            updateLoggedInUser(sub, result?.sub)
            updaterReferralFriend(sub, result?.sub)
          }

          return { success: true }
        }
      } catch {
        //error
      }
    },
    [sub],
  )

  return checkReferralCodeAndUpdate
}
