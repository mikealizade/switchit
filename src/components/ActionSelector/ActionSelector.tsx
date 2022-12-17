import type { NextPage } from 'next'
import Image from 'next/image'
import { actionsConfig, journeyTypes, steps } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import * as S from '@components/ActionSelector/ActionSelector.style'

export const ActionSelector: NextPage<{
  currentAction?: any
  selectAction: any
  isDefault?: boolean
  isSwitchLanding?: boolean
}> = ({ currentAction, selectAction, isDefault = false, isSwitchLanding = false }): JSX.Element => {
  const { currentJourney, currentJourneyType } = useGetCurrentJourney()
  const completedSteps = currentJourney?.completedSteps
  const maximiseText = completedSteps?.includes(steps.confirmSwitch) ? (
    <>
      Unlock maximising features by signing the
      <br />
      {'"I switched"'} agreement
    </>
  ) : (
    'Maximise your impact by completing all these actions'
  )

  const filterActionType = ({ type }: { type: string }) =>
    currentJourneyType === journeyTypes.noBankAccount
      ? type !== 'breakup' && type !== 'reviews'
      : currentJourneyType === journeyTypes.notReadyToSwitch
      ? type !== 'hello'
      : true

  return (
    <S.ActionSelector>
      {isSwitchLanding && <S.ActionSelectorHeader>{maximiseText}</S.ActionSelectorHeader>}
      {actionsConfig
        .filter(filterActionType)
        .map(({ text, icon, duration, pointsEarned, route }, i: number) => {
          const maximisingIndex = i + 6
          const isCompleted = !!completedSteps?.includes(maximisingIndex)

          return (
            <S.Item
              key={route}
              isActive={icon === currentAction?.icon}
              isCompleted={isCompleted}
              isDefault={isDefault}
            >
              <S.LinkContainer
                onClick={selectAction(i)}
                className={isCompleted ? 'isCompleted' : ''}
              >
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
