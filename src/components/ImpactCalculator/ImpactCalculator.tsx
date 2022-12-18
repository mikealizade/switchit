import type { NextPage } from 'next'
import { Select } from '@components/Select/Select'
import { impactCalculator } from './importCalculatorData'
import * as S from '@components/ImpactCalculator/ImpactCalculator.style'

export const ImpactCalculator: NextPage = (): JSX.Element => {
  const onSelect = (value: string) => {}

  return (
    <S.ImpactCalculator>
      <S.Header>Enter Your Age to Calculate An Accurate Potential Climate Impact Above</S.Header>
      <Select
        name='impactCalculator'
        defaultValue={{ value: '', label: 'Select your age' }}
        options={impactCalculator}
        onChange={onSelect}
      />
    </S.ImpactCalculator>
  )
}
