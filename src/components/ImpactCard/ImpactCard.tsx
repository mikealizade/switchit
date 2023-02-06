import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { BackLink } from '@components/Drawer/Drawer.style'
import { Banks } from '@components/ImpactCalculator/Banks'
import { ImpactCalculator } from '@components/ImpactCalculator/ImpactCalculator'
import { ImpactCardHeader } from '@components/ImpactCalculator/ImpactCalculator.style'
import { SelectActionCards } from '@components/SelectActionCard/SelectActionCard'
import { SwitchingFaqs } from '@components/SwitchingFaqs/SwitchingFaqs'
import { ViewResearch } from '@components/ViewResearch/ViewResearch'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useMediaQuery } from '@hooks/useMediaQuery'
// import { toggleImpactCard } from '@state/impactCard/impactCardSlice'
import { Div } from '@styles/common.style'
import { actionsConfig } from '@utils/data'
import { filterActionType } from '@utils/functions'

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
  const { pathname } = useRouter()
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const hasBank = bankPages.some((page: string) => pathname.includes(page))
  const hasProgressBar = maximisePages.some((page: string) => pathname.includes(page))
  const hasViewResearch = pathname.includes('bank-score')
  const hasFAQ = pathname.includes('green-banks')
  const hasActionCards = pathname.includes('select-action')
  const actions = actionsConfig.filter(filterActionType(currentJourneyType))
  const { isXXLaptop } = useMediaQuery()
  // const dispatch = useDispatch()

  return (
    <Div rowGap={50} flex={1}>
      <ImpactCardHeader>
        {isXXLaptop ? (
          // <BackLink onClick={() => dispatch(toggleImpactCard(false))}>
          <BackLink>
            <Image src={'/icons/icon_chevron_left.svg'} alt='' width={20} height={20} />
            Impact Card
          </BackLink>
        ) : (
          'Impact Card'
        )}
      </ImpactCardHeader>
      {hasBank && <Banks />}
      {hasProgressBar && (
        <ActionSelector actions={actions} isSwitchLanding={false} isJourneyComplete={false} />
      )}
      <ImpactCalculator hasProgressBar={hasProgressBar} />
      {hasFAQ && <SwitchingFaqs />}
      {hasViewResearch && <ViewResearch compact />}
      {hasActionCards && <SelectActionCards />}
    </Div>
  )
}
