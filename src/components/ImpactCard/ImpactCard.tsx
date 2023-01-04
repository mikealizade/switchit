import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SelectActionCards } from '@components/SelectActionCard/SelectActionCard'
import { ImpactCalculator } from '@components/ImpactCalculator/ImpactCalculator'
import { ViewResearch } from '@components/ViewResearch/ViewResearch'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { Banks } from '@components/ImpactCalculator/Banks'
import { actionsConfig } from '@utils/data'
import { filterActionType } from '@utils/functions'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { ImpactCardHeader } from '@components/ImpactCalculator/ImpactCalculator.style'
import { Div } from '@styles/common.style'

const bankPages = [
  'select-bank',
  'bank-not-listed',
  'bank-score',
  'green-banks',
  'make-the-switch',
  'confirm-switch',
]
const maximisePages = [
  'breakup-letter',
  'hello-letter',
  'post-to-socials',
  'tell-your-community',
  'leave-reviews',
  'tell-us',
]

export const ImpactCard: NextPage = (): JSX.Element => {
  const { pathname, push } = useRouter()
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const hasBank = bankPages.some((page: string) => pathname.includes(page))
  const hasProgressBar = maximisePages.some((page: string) => pathname.includes(page))
  const hasViewResearch = pathname.includes('bank-score')
  const hasFAQ = pathname.includes('green-banks')
  const hasActionCards = pathname.includes('select-action')
  const actions = actionsConfig.filter(filterActionType(currentJourneyType))

  const selectAction = (index: number) => (): void => {
    push(`/switching/${actions[index].route}`)
  }

  return (
    <Div rowGap={50} flex={1}>
      <ImpactCardHeader>Impact Card</ImpactCardHeader>
      {hasBank && <Banks />}
      {hasProgressBar && (
        <>
          <ActionSelector
            actions={actions}
            selectAction={selectAction}
            isSwitchLanding={false}
            isJourneyComplete={false}
          />
        </>
      )}
      <ImpactCalculator hasProgressBar={hasProgressBar} />
      {hasFAQ && <div>FAQs</div>}
      {hasViewResearch && <ViewResearch />}
      {hasActionCards && <SelectActionCards />}
    </Div>
  )
}
