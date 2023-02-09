import { useSelector, useDispatch } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import { sendRequest } from '@utils/functions'
import { Point } from '@utils/types'

type Award = {
  id: string
  badge: string
  total: number
}

export const useUpdateAwards = (awardsType: string, pointsType?: string) => {
  const dispatch = useDispatch()
  const toast = useToast()
  const user = useSelector((state: RootState) => state.user)
  const { sub, profile, profile: { badges = [], switchItPoints = [] } = {} } = user
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)

  const updateAwards = async (points: number, operation: string) => {
    const updatedPoints = operation === 'add' ? points : -points

    const action =
      awardsType === 'providers'
        ? {
            $inc: { 'profile.badges.0.total': 1 },
          }
        : awardsType === 'campaigns'
        ? {
            $inc: { 'profile.badges.1.total': 1 },
          }
        : awardsType === 'resources'
        ? {
            $inc: { 'profile.badges.2.total': 1 },
          }
        : {
            $inc: { 'profile.badges.3.total': 1 },
          }

    try {
      const body = {
        filter: { sub },
        payload: action,
      }

      request(body)

      const state = {
        ...user,
        profile: {
          ...profile,
          badges: badges.map((item: Award) =>
            item.id === awardsType ? { ...item, total: item.total + 1 } : item,
          ),
          switchItPoints: switchItPoints.map((item: Point) =>
            item.id === pointsType ? { ...item, points: item.points + updatedPoints } : item,
          ),
        },
      }

      dispatch(setUser(state))
    } catch {
      toast('An error occurred adding awards to your profile', 'error')
    }
  }

  return updateAwards
}
