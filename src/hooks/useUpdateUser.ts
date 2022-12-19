import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@utils/functions'

export const useUpdateUser = () => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)

  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()

  const updateUser = async (payload: any) => {
    try {
      const body = {
        filter: { sub },
        payload: { $set: payload },
        collection: 'users',
        upsert: false,
      }

      request(body)

      return { success: true }
    } catch {
      return { success: false }
    }
  }

  return updateUser
}
