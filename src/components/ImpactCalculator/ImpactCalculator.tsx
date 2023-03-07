import type { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Select } from '@components/Select/Select'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { setUserAge } from '@state/generic/genericSlice'
import { Div } from '@styles/common.style'
import { journeyTypes } from '@utils/constants'
import { impactCalculatorOptions } from './importCalculatorData'

export const ImpactCalculator: NextPage<{ hasProgressBar: boolean }> = ({ hasProgressBar }): JSX.Element => {
  const dispatch = useDispatch()
  const { currentJourney: { completedSteps = [] } = {}, currentJourneyType = '' } = useGetCurrentJourney()
  const { badImpact, goodImpact, impactTotal, formattedTotalSum, setImpact, onShuffle } = useShuffleImpact()
  const noBankMaximisingSteps = [4, 5, 6, 7]
  const hasBankMaximisingSteps = [6, 7, 8, 9, 10, 11]
  const maximisingSteps = currentJourneyType === journeyTypes.noBankAccount ? noBankMaximisingSteps : hasBankMaximisingSteps
  const completedMaximisingSteps = completedSteps.filter((completedStep: number) => maximisingSteps.includes(completedStep))
  const impactBarWidth = (100 / maximisingSteps.length) * completedMaximisingSteps.length

  const onSelect = (value: string): void => {
    const [userValue, userAge] = value.split(':')

    setImpact(+userValue)
    dispatch(setUserAge(userAge))
  }

  return (
    <>
      <Div>
        <S.Header>
          Potential Climate Impact
          <S.MoreInfo onClick={() => dispatch(toggleDrawer('calculateImpact'))}>
            <Image src={`/icons/icon_moreinfo.svg`} alt='' width={20} height={20} />
          </S.MoreInfo>
        </S.Header>
        <S.ImpactTotal value={impactTotal ? `£${formattedTotalSum}` : ''} placeholder='£1,510,000' />
        <S.MoneyDivested>Money pulled out of fossil fuel support</S.MoneyDivested>
      </Div>
      {hasProgressBar && <ProgressBar step={impactBarWidth} type='impact' />}
      {impactTotal ? (
        <S.QuantifyImpact>
          <S.Header>Quantify Your Impact</S.Header>
          <p>
            Taking <strong>£{formattedTotalSum}</strong> out of potential fossil fuel financing is equal to...
          </p>
          <S.Effect>
            {badImpact}

            <strong>or</strong>
          </S.Effect>
          <S.Effect>{goodImpact}</S.Effect>
          <Button size='small' onClick={() => onShuffle()}>
            Shuffle
          </Button>
        </S.QuantifyImpact>
      ) : (
        <S.ImpactCalculator>
          <S.Calculator>
            <S.Header>Enter Your Age to Calculate Your Potential Climate Impact</S.Header>
            <Select
              name='impactCalculator'
              defaultValue={{ value: '', label: 'Select your age' }}
              options={impactCalculatorOptions}
              onChange={onSelect}
            />
            <S.CalcFooter onClick={() => dispatch(toggleDrawer('calculateAgeImpact'))}>
              Why do we need your age to calculate your impact?
            </S.CalcFooter>
          </S.Calculator>
        </S.ImpactCalculator>
      )}
    </>
  )
}
