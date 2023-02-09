import { useSelector } from 'react-redux'
import { RootState } from '@state/store'

export const useGetTotalPoints = () => {
  const { profile: { switchItPoints = [] } = {} } = useSelector((state: RootState) => state.user)
  const totalPoints = switchItPoints.reduce(
    (acc: number, { points }: { points: number }) => acc + points,
    0,
  )

  return totalPoints
}
