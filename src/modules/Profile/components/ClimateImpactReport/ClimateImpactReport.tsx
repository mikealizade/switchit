import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Button } from '@components/Button/Button'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import * as S from '@modules/Profile/components/ClimateImpactReport/ClimateImpactReport.style'
import { RootState } from '@state/store'
import { Title } from '@styles/common.style'
import { journeyTypes, noBankAccountSteps, steps } from '@utils/constants'

type CompletedSteps = {
  completedSteps: number[]
  journeyType: string
}

// NOTE: only show formatted sum and shuffle when user has switched and age is selected

export const ClimateImpactReport: NextPage = (): JSX.Element => {
  const { push } = useRouter()
  const { switchJourneys = [] } = useSelector((state: RootState) => state.user)
  const userAge = useSelector((state: RootState) => state.generic.userAge)
  const { goodImpact, formattedTotalSum, onShuffle } = useShuffleImpact()
  const [verb, number, ...rest] = goodImpact.split(/(\d+[\\.,]?\d*|0)/)
  const eVerbs = ['Purchasing', 'Insulating']
  const formattedVerb = verb
    .toLowerCase()
    .replace('ing', eVerbs.includes(verb.trimEnd()) ? 'e' : '')
  const hasSwitched = switchJourneys.some(({ completedSteps, journeyType }: CompletedSteps) =>
    journeyType === journeyTypes.noBankAccount
      ? completedSteps.includes(noBankAccountSteps.confirmSwitch)
      : completedSteps.includes(steps.confirmSwitch),
  )

  return (
    <S.ClimateImpactReport>
      <Title>Climate Impact Report</Title>
      <S.ReportContainer>
        <S.Text>You have withdrawn</S.Text>
        <S.Amount>{hasSwitched && userAge ? `£${formattedTotalSum}` : '£0'}</S.Amount>
        <S.Text>from fossil fuel support</S.Text>
        <S.TextHighlight>that amount of money could</S.TextHighlight>
        <S.Text>{formattedVerb}</S.Text>
        <S.Amount>{hasSwitched && userAge ? number : '0'}</S.Amount>
        <S.Text>{rest}</S.Text>
        {hasSwitched && userAge ? (
          <Button type='button' mode='primary' onClick={() => onShuffle()} bold>
            Shuffle
          </Button>
        ) : (
          <Button type='button' mode='primary' onClick={() => push('/switching')} bold>
            Switch Your Bank To Have An Impact
          </Button>
        )}
      </S.ReportContainer>
    </S.ClimateImpactReport>
  )
}
