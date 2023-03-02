import type { NextPage } from 'next'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { Button } from '@components/Button/Button'
import { CircularProgressBar } from '@components/CircularProgressBar/CircularProgressBar'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useShuffleImpact } from '@hooks/useShuffleImpact'
import { JourneyStep } from '@modules/Switching/Switching'
import * as S from '@modules/Switching/Switching.style'

type JourneyCard = {
  progress: number
  greenBank: {
    fullName: string
    latestGreenProject: string
  }
  journeySteps: JourneyStep[]
  actions: any
  completedSteps: number[]
  isJourneyComplete: boolean
  resumeJourney: (route: string) => () => void
  addJourneyName: () => void
}

export const JourneyCard: NextPage<JourneyCard> = ({
  progress,
  greenBank,
  journeySteps,
  actions,
  completedSteps,
  isJourneyComplete,
  resumeJourney,
  addJourneyName,
}) => {
  const { formattedTotalSum } = useShuffleImpact()
  const { isMobile } = useMediaQuery()

  return (
    <S.JourneyCard isJourneyComplete={isJourneyComplete}>
      {isMobile && (
        <S.NewJourneyMobile onClick={addJourneyName}>New Current Account</S.NewJourneyMobile>
      )}
      <S.Detail>
        <S.DetailHeader>Green Account</S.DetailHeader>
        <S.DetailText>{greenBank?.fullName || '[not yet selected]'}</S.DetailText>
        <S.DetailHeader>Latest Green Project Funded</S.DetailHeader>
        <S.DetailText>{greenBank?.latestGreenProject || '[not yet selected]'}</S.DetailText>
        <S.DetailHeader>Impact</S.DetailHeader>
        <S.DetailText>£{formattedTotalSum} switched</S.DetailText>
      </S.Detail>

      <S.JourneySection>
        <S.JourneySectionHeader>Open Account</S.JourneySectionHeader>
        <S.JourneySectionContent>
          <CircularProgressBar progress={progress} />
          <S.NextStep>
            {journeySteps.map(({ text, route }: Omit<JourneyStep, 'step'>, i: number) => {
              const isComplete = completedSteps.includes(i + 1)
              const isFirstIncompleteStep = i + 1 === Number(completedSteps?.at(-1)) + 1

              if (isFirstIncompleteStep) {
                return (
                  <>
                    {!isComplete && isFirstIncompleteStep && route && (
                      <Button
                        type='button'
                        size='small'
                        mode='primary'
                        onClick={resumeJourney(route)}
                      >
                        Next Step
                      </Button>
                    )}
                    <span>{text}</span>
                  </>
                )
              }
              return null
            })}
          </S.NextStep>
        </S.JourneySectionContent>
      </S.JourneySection>

      <S.JourneySection>
        <S.JourneySectionHeader>Maximise</S.JourneySectionHeader>
        <S.JourneySectionContent>
          <ActionSelector actions={actions} isSwitchLanding isJourneyComplete={isJourneyComplete} />
        </S.JourneySectionContent>
      </S.JourneySection>
    </S.JourneyCard>
  )
}
