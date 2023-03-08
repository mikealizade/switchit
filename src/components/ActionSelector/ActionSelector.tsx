import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from '@components/ActionSelector/ActionSelector.style'
import { Button } from '@components/Button/Button'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { toggleImpactCard } from '@state/impactCard/impactCardSlice'
import { steps, journeyTypes, noBankAccountSteps } from '@utils/constants'
import { Action } from '@utils/types'

type ActionSelectorProps = {
  currentAction?: Action | null
  actions: Action[]
  selectAction?: (index: number) => () => void
  isDefault?: boolean
  isSwitchLanding?: boolean
  isJourneyComplete?: boolean
}

export const ActionSelector: NextPage<ActionSelectorProps> = ({
  currentAction,
  actions = [],
  selectAction,
  isDefault = false,
  isSwitchLanding = false,
  isJourneyComplete,
}): JSX.Element => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const { currentJourney, currentJourneyType } = useGetCurrentJourney() //should this be used?
  const completedSteps = currentJourney?.completedSteps
  const getSteps = useStepsByJourneyType()
  const journeySteps = getSteps()
  const isNoBankAccountJourney = currentJourneyType === journeyTypes.noBankAccount
  const [currentIcon, setIcon] = useState('')
  const { isMobile } = useMediaQuery()

  const maximiseText = isJourneyComplete ? (
    ''
  ) : completedSteps?.includes(journeySteps.confirmSwitch) ? (
    'Maximise your impact by completing all these actions'
  ) : (
    <>Unlock maximising features by completing step 5</>
  )

  const onHover = (icon: string) => () => {
    setIcon(icon)
  }

  const selectRoute = (index: number) => (): void => {
    push(`/switching/${actions[index].route}`)
  }

  const closeImpactBar = () => {
    dispatch(toggleImpactCard())
  }

  const hasConfirmed = isJourneyComplete || !!completedSteps?.includes(journeySteps.confirmSwitch)
  return (
    <>
      <S.ActionSelector isDefault={isDefault}>
        {actions.map(({ text, icon, duration, pointsEarned, route }, i: number) => {
          const letter = isNoBankAccountJourney ? noBankAccountSteps.helloLetter : steps.breakupLetter
          const maximisingIndex = i + letter
          const isCompleted = isJourneyComplete || !!completedSteps?.includes(maximisingIndex)
          const isActive = icon === currentAction?.icon
          const src = `/icons/icon_action_${icon}${isCompleted ? '_complete' : icon === currentIcon || isActive ? '_on' : ''}.svg`

          return (
            <S.Item
              key={route}
              isActive={isActive}
              isCompleted={isCompleted}
              hasConfirmed={hasConfirmed}
              isDefault={isDefault}
              onMouseEnter={onHover(icon)}
              onMouseLeave={onHover('')}
              {...(isMobile && { onClick: closeImpactBar })}
            >
              <S.LinkContainer onClick={selectAction ? selectAction(i) : selectRoute(i)}>
                {isCompleted && isDefault ? (
                  <S.Tick>
                    <Image src={`/icons/icon_checked.svg`} alt='' width={48} height={48} />
                  </S.Tick>
                ) : (
                  <Image src={src} alt={text} width={44} height={44} />
                )}
                {isDefault && (
                  <>
                    <S.ActionHeader isCompleted={isCompleted} isActive={isActive}>
                      {text}
                    </S.ActionHeader>
                    <S.MetaData isCompleted={isCompleted} isActive={isActive}>
                      <span>{duration}min</span>
                      <span>{pointsEarned}pts</span>
                    </S.MetaData>
                  </>
                )}
              </S.LinkContainer>
            </S.Item>
          )
        })}
      </S.ActionSelector>
      <>
        {isSwitchLanding && (
          <>
            <Button disabled={!hasConfirmed}>
              <Link href='/switching/select-action'>Maximise Your Impact</Link>
            </Button>
            <S.MaximiseText>{maximiseText}</S.MaximiseText>
          </>
        )}
      </>
    </>
  )
}
