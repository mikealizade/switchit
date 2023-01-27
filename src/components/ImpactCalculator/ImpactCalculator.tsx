import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@components/Button/Button'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Select } from '@components/Select/Select'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { setUserAge } from '@state/generic/genericSlice'
import { RootState } from '@state/store'
import { Div } from '@styles/common.style'
import { journeyTypes } from '@utils/constants'
import { getRandomInt } from '@utils/functions'
import { impactCalculatorOptions } from './importCalculatorData'

// < means divide badCalc / divestment number
// > means divestment number / badCalc

const impacts = [
  {
    impact1: 'Financing $ miles of an oil pipeline',
    impact2: 'Building $ new wind turbines',
    badUnitCost: 4_900_000,
    goodUnitCost: 2_700_000,
    badOp: '<',
    goodOp: '<',
  },
  {
    impact1: 'Buying $ litres of toxic pesticides',
    impact2: 'insulating $ homes',
    badUnitCost: 120,
    goodUnitCost: 1300,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Building $ oil rigs',
    impact2: 'Cleaning up $ barrels of oil spills',
    badUnitCost: 16_800_000,
    goodUnitCost: 619,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Opening $ coal mines',
    impact2: 'Installing $ residential solar panels',
    badUnitCost: 2775, // wrong??
    goodUnitCost: 6000,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Taking $ private jets from London to New York',
    impact2: 'Funding $ workshop on environmental justice',
    badUnitCost: 255_000,
    goodUnitCost: 510,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Taking $ private Ubers from HSBC City of London to The Ritz',
    impact2: 'Reskilling $ oil industry employees in renewables',
    badUnitCost: 22.18,
    goodUnitCost: 30, //really??
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Funding $ new airport terminals',
    impact2: 'Building $ miles of flood barriers to low lying areas',
    badUnitCost: 3_000_000_000, // number too small for calculator
    goodUnitCost: 2_800_000,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Buying $ oil CEOs lunches at The Savoy, London',
    impact2: 'Funding $ school meals',
    badUnitCost: 267.95,
    goodUnitCost: 2.8,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Taking $ private jets from London to New York',
    impact2: 'Purchasing $ annual bus pass',
    badUnitCost: 255_000,
    goodUnitCost: 932,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Funding $ trophy hunting excursions',
    impact2: 'Protecting $ turtles from bycatch for three years',
    badUnitCost: 21_992,
    goodUnitCost: 28,
    badOp: '>',
    goodOp: '<',
  },
  {
    impact1: 'Funding $ Shell CEO salaries',
    impact2: 'Funding $ NHS nurses salaries',
    badUnitCost: 6_100_000,
    goodUnitCost: 33_000,
    badOp: '<',
    goodOp: '<',
  },
  {
    impact1: 'Buying $ pairs of jeans from a fast fashion retailer',
    impact2: 'Buying $ kilograms of vintage clothes (£20 per kilogram)',
    badUnitCost: 10,
    goodUnitCost: 11,
    badOp: '>',
    goodOp: '<',
  },
]

const formatNumber = (number: number): string =>
  new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(number)

const calculateImpact = (impactTotal: number, index: number): string[] => {
  const { impact1, impact2, badUnitCost, goodUnitCost, badOp, goodOp } = impacts[index]
  const badCalc = badOp === '<' ? badUnitCost / impactTotal : impactTotal / badUnitCost
  const goodCalc = goodOp === '>' ? goodUnitCost / impactTotal : impactTotal / goodUnitCost

  return [
    impact1.replace('$', formatNumber(+badCalc.toFixed(2))),
    impact2.replace('$', formatNumber(+goodCalc.toFixed(2))),
  ]
}

export const ImpactCalculator: NextPage<{ hasProgressBar: boolean }> = ({
  hasProgressBar,
}): JSX.Element => {
  const dispatch = useDispatch()
  const userAge = useSelector((state: RootState) => state.generic.userAge)
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const { pathname } = useRouter()
  const usersValue = impactCalculatorOptions
    .find(({ value }) => value.split(':')[1] === userAge)
    ?.value.split(':')[0]
  const [impactTotal, setImpact] = useState<number>(+usersValue! ?? 0)
  const [impactIndex, setImpactIndex] = useState(0)
  const [impact1, impact2] = calculateImpact(impactTotal, impactIndex)
  const formattedTotalSum = new Intl.NumberFormat('en-GB').format(impactTotal)

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

  const onShuffle = (): void => {
    const randomIndex = getRandomInt(0, impacts.length - 1)

    if (randomIndex === impactIndex) {
      onShuffle()
      return
    }

    setImpactIndex(randomIndex)
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
            {impact1}

            <strong>or</strong>
          </S.Effect>
          <S.Effect>{impact2}</S.Effect>
          <Button size='small' onClick={onShuffle}>
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
