import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { steps, journeyTypes, noBankAccountSteps } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Action } from '@utils/types'
import * as S from '@components/ActionSelector/ActionSelector.style'
import { TextLink } from '@components/Button/Button'

type ActionSelectorProps = {
  currentAction?: Action | null
  actions: Action[]
  selectAction: (index: number) => () => void
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
  const { currentJourney, currentJourneyType } = useGetCurrentJourney()
  const completedSteps = currentJourney?.completedSteps
  const getSteps = useStepsByJourneyType()
  const journeySteps = getSteps()
  const isNoBankAccountJourney = currentJourneyType === journeyTypes.noBankAccount
  const [currentIcon, setIcon] = useState('')
  // completed steps tab doesnt ever have a currentJourneyId, so it defaults to readyToSwitch so all steps are included even if the journey is a noBankAccountJourney
  // need to know how the completed steps ui is going to look / behave before fixing this bug
  console.log('currentJourneyType', currentJourneyType)

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

  return (
    <>
      <S.ActionSelector isDefault={isDefault}>
        {actions.map(({ text, icon, duration, pointsEarned, route }, i: number) => {
          const letter = isNoBankAccountJourney
            ? noBankAccountSteps.helloLetter
            : steps.breakupLetter
          const maximisingIndex = i + letter
          const hasConfirmed =
            isJourneyComplete || !!completedSteps?.includes(journeySteps.confirmSwitch)
          const isCompleted = isJourneyComplete || !!completedSteps?.includes(maximisingIndex)

          return (
            <S.Item
              key={route}
              isActive={icon === currentAction?.icon}
              isCompleted={isCompleted}
              hasConfirmed={hasConfirmed}
              isDefault={isDefault}
              onMouseEnter={onHover(icon)}
              onMouseLeave={onHover('')}
            >
              <S.LinkContainer onClick={selectAction(i)}>
                {isCompleted && isDefault ? (
                  <S.Tick>
                    <Image src={`/icons/icon_radio_checked.svg`} alt='' width={48} height={48} />
                  </S.Tick>
                ) : (
                  <Image
                    src={`/icons/icon_${icon}${
                      isCompleted ? '_complete' : icon === currentIcon ? '_on' : ''
                    }.svg`}
                    alt=''
                    width={70}
                    height={70}
                  />
                )}
                {isDefault && (
                  <>
                    <S.ActionHeader isCompleted={isCompleted}>{text}</S.ActionHeader>
                    <S.MetaData isCompleted={isCompleted}>
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
        {isSwitchLanding && !isJourneyComplete && (
          <>
            <TextLink>
              <Link href='/switching/select-action'>Maximise Your Impact</Link>
            </TextLink>
            <S.MaximiseText>{maximiseText}</S.MaximiseText>
          </>
        )}
      </>
    </>
  )
}
