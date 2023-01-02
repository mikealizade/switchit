import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Select } from '@components/Select/Select'
import { ProgressBar } from '@components/ProgressBar/ProgressBar'
import { impactCalculator } from './importCalculatorData'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { getRandomInt } from '@utils/functions'
import { journeyTypes } from '@utils/constants'
import { Div } from '@styles/common.style'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'
import { Button } from '@components/Button/Button'

const impacts = [
  { impact1: 'Removing 1 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 2 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 3 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
  { impact1: 'Removing 4 mile of an oil pipeline', impact2: 'Building 1.3 new wind turbines' },
]

export const ImpactCalculator: NextPage<{ hasProgressBar: boolean }> = ({
  hasProgressBar,
}): JSX.Element => {
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const { pathname, push } = useRouter()
  const [impactTotal, setImpact] = useState('')
  const [impactIndex, setImpactIndex] = useState(0)
  const { impact1, impact2 } = impacts[impactIndex]

  const onSelect = (value: string) => {
    setImpact(`£${value}`)
  }

  const getProgressStep = () => {
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
          <Image src={`/icons/icon_moreinfo.svg`} alt='' width={20} height={20} />
        </S.Header>
        <S.ImpactTotal value={impactTotal} placeholder='£1,510,000' />
        <S.MoneyDivested>Money divested from climate harming practises</S.MoneyDivested>
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
          {/* <p>of an oil pipeline</p> */}
          <S.Effect>{impact2}</S.Effect>
          {/* <p>wind turbines</p> */}
          <Button size='small' onClick={onShuffle}>
            Shuffle
          </Button>
        </S.QuantifyImpact>
      ) : (
        <S.ImpactCalculator>
          <S.Calculator>
            <S.Header>
              Enter Your Age to Calculate An Accurate Potential Climate Impact Above
            </S.Header>
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
