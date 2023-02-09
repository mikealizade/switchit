import { useSelector, useDispatch } from 'react-redux'
import useSWRMutation from 'swr/mutation'
import { useToast } from '@hooks/useToast'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import { sendRequest } from '@utils/functions'
import { Point } from '@utils/types'

// NOTE: updating points in redux is not done here, but in other hooks e.g. useUpdateAwards, as
// when in calling different hooks consecutively which both update redux, the second overwrites the first redux update
// and puts it back to its original state.

export const useUpdatePoints = (type: string) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const toast = useToast()
  const { sub, profile, profile: { switchItPoints = [] } = {} } = user

  const updatePoints = async (points: number, operation: string, canSaveToStore?: boolean) => {
    const updatedPoints = operation === 'add' ? points : -points

    const action =
      type === 'sharingCodes'
        ? {
            $inc: { 'profile.switchItPoints.0.points': updatedPoints },
          }
        : type === 'resources'
        ? {
            $inc: { 'profile.switchItPoints.1.points': updatedPoints },
          }
        : type === 'campaigns'
        ? {
            $inc: { 'profile.switchItPoints.2.points': updatedPoints },
          }
        : {
            $inc: { 'profile.switchItPoints.3.points': updatedPoints },
          }

    try {
      const body = {
        filter: { sub },
        payload: action,
      }

      request(body)

      if (canSaveToStore) {
        const state = {
          ...user,
          profile: {
            ...profile,
            switchItPoints: switchItPoints.map((item: Point) =>
              item.id === type ? { ...item, points: item.points + updatedPoints } : item,
            ),
          },
        }

        dispatch(setUser(state))
      }
    } catch {
      toast('An error occurred updating points your profile', 'error')
    }
  }

  const addPoints = async (points: number, canSaveToStore?: boolean) =>
    await updatePoints(points, 'add', canSaveToStore)
  const spendPoints = async (points: number, canSaveToStore?: boolean) =>
    await updatePoints(points, 'spend', canSaveToStore)

  return { addPoints, spendPoints }
}
