import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
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

export const ImpactCalculator: NextPage<{ hasProgressBar: boolean }> = ({
  hasProgressBar,
}): JSX.Element => {
  const dispatch = useDispatch()
  const { pathname } = useRouter()
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const { badImpact, goodImpact, impactTotal, formattedTotalSum, setImpact, onShuffle } =
    useShuffleImpact()

  const onSelect = (value: string): void => {
    const [userValue, userAge] = value.split(':')

    setImpact(+userValue)
    dispatch(setUserAge(userAge))
  }

  const getProgressStep = (): number => {
    const isReadyToSwitch = currentJourneyType === journeyTypes.readyToSwitch
    const stepConfig = {
      '/switching/breakup-letter': isReadyToSwitch ? 0 : 0,
      '/switching/hello-letter': isReadyToSwitch ? 1 : 0,
      '/switching/post-to-socials': isReadyToSwitch ? 2 : 1,
      '/switching/tell-your-community': isReadyToSwitch ? 3 : 2,
      '/switching/leave-reviews': isReadyToSwitch ? 4 : 0,
      '/switching/tell-us': isReadyToSwitch ? 5 : 3,
    }

    return stepConfig[pathname as keyof typeof stepConfig]
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
        <S.ImpactTotal
          value={impactTotal ? `£${formattedTotalSum}` : ''}
          placeholder='£1,510,000'
        />
        <S.MoneyDivested>Money pulled out of fossil fuel support</S.MoneyDivested>
      </Div>
      {hasProgressBar && <ProgressBar step={getProgressStep()} type='impact' />}
      {impactTotal ? (
        <S.QuantifyImpact>
          <S.Header>Quantify Your Impact</S.Header>
          <p>
            Taking <strong>£{formattedTotalSum}</strong> out of potential fossil fuel financing is
            equal to...
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
