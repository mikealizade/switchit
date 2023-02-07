import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { RootState } from '@state/store'
import { sendRequest } from '@utils/functions'

export const useUpdatePoints = () => {
  const user = useSelector((state: RootState) => state.user)
  const { sub } = user
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const toast = useToast()

  const updatePoints = async (points: number, type: string) => {
    const action =
      type === 'add'
        ? {
            $inc: { 'profile.switchItPoints.0.points': points },
          }
        : {
            $dec: { 'profile.switchItPoints.0.points': points },
          }

    try {
      const body = {
        filter: { sub },
        payload: action,
      }

      request(body)
    } catch {
      toast('An error occurred updating points your profile', 'error')
    }
  }

  const addPoints = async (points: number) => await updatePoints(points, 'add')
  const spendPoints = async (points: number) => await updatePoints(points, 'spend')

  return { addPoints, spendPoints }
}
