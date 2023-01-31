import { useState } from 'react'
import { useSelector } from 'react-redux'
import { impacts } from '@components/ImpactCalculator/importCalculatorData'
import { RootState } from '@state/store'
import { getUsersValue, calculateImpact, getRandomInt } from '@utils/functions'

export const useShuffleImpact = () => {
  const userAge = useSelector((state: RootState) => state.generic.userAge)
  const usersValue = getUsersValue(userAge)
  const [impactTotal, setImpact] = useState<number>(+usersValue! ?? 0)
  const [impactIndex, setImpactIndex] = useState(0)
  const [badImpact, goodImpact] = calculateImpact(impactTotal, impactIndex)
  const formattedTotalSum = new Intl.NumberFormat('en-GB').format(+usersValue!)

  const onShuffle = () => {
    const randomIndex = getRandomInt(0, impacts.length - 1)

    if (randomIndex === impactIndex) {
      onShuffle()
      return
    }

    setImpactIndex(randomIndex)
  }

  return { badImpact, goodImpact, impactTotal, formattedTotalSum, setImpact, onShuffle }
}
