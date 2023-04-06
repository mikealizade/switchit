import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { RootState } from '@state/store'
import { sendRequest } from '@utils/functions'

export const useEmail = (url: string) => {
  const { email: userEmail } = useSelector((state: RootState) => state.user)
  const { trigger: request } = useSWRMutation(url, sendRequest)

  const sendEmail = async (email?: string) => {
    try {
      request({ email: email ?? userEmail })
    } catch (error) {
      throw new Error(`An error occurred sending a Switch It Green email: ${error}.`)
    }
  }

  return sendEmail
}
