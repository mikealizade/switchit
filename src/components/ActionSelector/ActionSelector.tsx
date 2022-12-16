import type { NextPage } from 'next'
import Image from 'next/image'
import { actionsConfig, journeyTypes } from '@utils/constants'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import * as S from '@modules/Switching/PreSwitching.style'

export const ActionSelector: NextPage<{
  currentAction?: any
  selectAction: any
  isDefault?: boolean
}> = ({ currentAction, selectAction, isDefault }): JSX.Element => {
  const { currentJourney, currentJourneyType } = useGetCurrentJourney()
  const completedSteps = currentJourney?.completedSteps

  const filterActionType = ({ type }: { type: string }) =>
    currentJourneyType === journeyTypes.noBankAccount
      ? type !== 'breakup' && type !== 'reviews'
      : currentJourneyType === journeyTypes.notReadyToSwitch
      ? type !== 'hello'
      : true

  return (
    <S.ActionSelector>
      {actionsConfig
        .filter(filterActionType)
        .map(({ text, icon, duration, pointsEarned, route }, i: number) => (
          <S.Item
            key={route}
            isActive={icon === currentAction?.icon}
            isCompleted={!!completedSteps?.includes(i)}
          >
            <S.LinkContainer
              onClick={selectAction(i)}
              className={!!completedSteps?.includes(i) ? 'isCompleted' : ''}
            >
              {!!completedSteps?.includes(i) ? (
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
        ))}
    </S.ActionSelector>
  )
}
