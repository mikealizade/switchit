import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { Banks } from '@components/ImpactCalculator/Banks'
import { ImpactCalculator } from '@components/ImpactCalculator/ImpactCalculator'
import { ImpactCardHeader, ImpactCardHeaderText, ImpactContent, BackLink } from '@components/ImpactCalculator/ImpactCalculator.style'
import { SelectActionCards } from '@components/SelectActionCard/SelectActionCard'
import { SwitchingFaqs } from '@components/SwitchingFaqs/SwitchingFaqs'
import { ViewResearch } from '@components/ViewResearch/ViewResearch'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { toggleImpactCard } from '@state/impactCard/impactCardSlice'
import { actionsConfig } from '@utils/data'
import { filterActionType } from '@utils/functions'

const bankPages = ['select-bank', 'bank-not-listed', 'bank-score', 'green-banks', 'make-the-switch', 'confirm-switch']
const maximisePages = ['breakup-letter', 'hello-letter', 'post-to-socials', 'tell-your-community', 'leave-reviews', 'tell-us']

export const ImpactCard: NextPage = (): JSX.Element => {
  const { pathname } = useRouter()
  const dispatch = useDispatch()
  const { isXXLaptop } = useMediaQuery()
  const { currentJourneyType = '' } = useGetCurrentJourney()
  const hasBank = bankPages.some((page: string) => pathname.includes(page))
  const hasProgressBar = maximisePages.some((page: string) => pathname.includes(page))
  const hasViewResearch = pathname.includes('bank-score')
  const hasFAQ = pathname.includes('green-banks')
  const hasActionCards = pathname.includes('select-action')
  const actions = actionsConfig.filter(filterActionType(currentJourneyType))

  return (
    <>
      <ImpactCardHeader isXXLaptop={isXXLaptop}>
        {isXXLaptop ? (
          <ImpactCardHeaderText>Impact Card</ImpactCardHeaderText>
        ) : (
          <>
            <Image src={'/icons/icon_chevron_left_white.svg'} alt='' width={20} height={20} />
            <BackLink onClick={() => dispatch(toggleImpactCard())}>
              <ImpactCardHeaderText>Impact Card</ImpactCardHeaderText>
            </BackLink>
          </>
        )}
      </ImpactCardHeader>
      <ImpactContent>
        {hasActionCards && <SelectActionCards />}
        {hasBank && <Banks />}
        {hasProgressBar && <ActionSelector actions={actions} isSwitchLanding={false} isJourneyComplete={false} />}
        <ImpactCalculator hasProgressBar={hasProgressBar} />
        {hasFAQ && <SwitchingFaqs />}
        {hasViewResearch && <ViewResearch compact />}
      </ImpactContent>
    </>
  )
}
