import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'

export const useUpdateUser = () => {
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()

  const updateUser = async (payload: any) => {
    const body = {
      filter: { sub },
      payload: { $set: payload },
      collection: 'users',
      upsert: false,
    }

    try {
      const response = await fetcher(`/api/db/updateOne`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      console.log('response', response)

      return { success: true }
    } catch {
      return { success: false }
    }
  }

  return updateUser
}
