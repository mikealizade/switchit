import type { NextPage } from 'next'
import Image from 'next/image'
import { steps, journeyTypes, noBankAccountSteps } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { useStepsByJourneyType } from '@hooks/useStepsByJourneyType'
import { Action } from '@utils/types'
import * as S from '@components/ActionSelector/ActionSelector.style'

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
  const maximiseText = isJourneyComplete ? (
    ''
  ) : completedSteps?.includes(journeySteps.confirmSwitch) ? (
    'Maximise your impact by completing all these actions'
  ) : (
    <>
      Unlock maximising features by signing the
      <br />
      {'"I switched"'} agreement
    </>
  )

  return (
    <S.ActionSelector>
      {isSwitchLanding && !isJourneyComplete && (
        <S.ActionSelectorHeader>{maximiseText}</S.ActionSelectorHeader>
      )}
      {actions.map(({ text, icon, duration, pointsEarned, route }, i: number) => {
        const letter = isNoBankAccountJourney ? noBankAccountSteps.helloLetter : steps.breakupLetter
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
          >
            <S.LinkContainer onClick={selectAction(i)}>
              {isCompleted ? (
                <S.Tick>
                  <Image src={`/icons/icon_radio_checked.svg`} alt='' width={48} height={48} />
                </S.Tick>
              ) : (
                <Image src={`/icons/icon_${icon}.svg`} alt='' width={70} height={70} />
              )}
              {isDefault && (
                <>
                  <S.ActionHeader>{text}</S.ActionHeader>
                  <S.MetaData>
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
  )
}
