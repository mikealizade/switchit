import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import * as S from '@modules/Profile/components/ClimateImpactReport/ClimateImpactReport.style'
import { RootState } from '@state/store'
import { Title } from '@styles/common.style'
import { journeyTypes } from '@utils/constants'

//redux persist causing problem - when updating journey, steps are static in redux and when go to profile page it's not showing db data but redux data that is now wrong

type CompletedSteps = {
  completedSteps: number[]
}
export const ClimateImpactReport: NextPage = (): JSX.Element => {
  const { push } = useRouter()
  const { switchJourneys } = useSelector((state: RootState) => state.user)
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const userAge = useSelector((state: RootState) => state.generic.userAge)
  const { goodImpact, formattedTotalSum, onShuffle } = useShuffleImpact()
  const [verb, number, ...rest] = goodImpact.split(/(\d+[\\.,]?\d*|0)/)
  const eVerbs = ['Purchasing', 'Insulating']
  const formattedVerb = verb
    .toLowerCase()
    .replace('ing', eVerbs.includes(verb.trimEnd()) ? 'e' : '')
  const hasSwitchedStep = currentJourneyType === journeyTypes.noBankAccount ? 3 : 5
  const hasSwitched = switchJourneys?.some(({ completedSteps }: CompletedSteps) =>
    completedSteps.includes(hasSwitchedStep),
  )

  // only show formatted sum when user has switched and age is selected

  return (
    <S.ClimateImpactReport>
      <Title>Climate Impact Report</Title>
      <S.ReportContainer>
        <S.Text>You have withdrawn</S.Text>
        <S.Amount>{hasSwitched && userAge ? `£${formattedTotalSum}` : '£0'}</S.Amount>
        <S.Text>from fossil fuel support</S.Text>
        <S.TextHighlight>that amount of money could</S.TextHighlight>
        <S.Text>{formattedVerb}</S.Text>
        <S.Amount>{number}</S.Amount>
        <S.Text>{rest}</S.Text>
        {userAge ? ( // check if user has completed any steps also?
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
