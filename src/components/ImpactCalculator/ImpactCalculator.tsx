import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@components/Button/Button'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { Select } from '@components/Select/Select'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { Div } from '@styles/common.style'
import { journeyTypes } from '@utils/constants'
import { getRandomInt } from '@utils/functions'
import { impactCalculator } from './importCalculatorData'

const impacts = [
  { impact1: 'Removing 1 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 2 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 3 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 4 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
]

export const ImpactCalculator: NextPage<{ hasProgressBar: boolean }> = ({
  hasProgressBar,
}): JSX.Element => {
  const dispatch = useDispatch()
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const { pathname } = useRouter()
  const [impactTotal, setImpact] = useState('')
  const [impactIndex, setImpactIndex] = useState(0)
  const { impact1, impact2 } = impacts[impactIndex]

  const onSelect = (value: string) => {
    setImpact(`£${value}`)
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

  const onShuffle = () => {
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
        <S.ImpactTotal defaultValue={impactTotal} placeholder='£1,510,000' />
        <S.MoneyDivested>Money pulled out of fossil fuel support</S.MoneyDivested>
      </Div>
      {hasProgressBar && <ProgressBar step={getProgressStep()} type='impact' />}
      {impactTotal ? (
        <S.QuantifyImpact>
          <S.Header>Quantify Your Impact</S.Header>
          <p>
            Taking <strong>{impactTotal}</strong> out of potential fossil fuel financing is equal
            to...
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
              options={impactCalculator}
              onChange={onSelect}
            />
          </S.Calculator>
        </S.ImpactCalculator>
      )}
    </>
  )
}
