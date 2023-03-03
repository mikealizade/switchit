import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { ActionSelector } from '@components/ActionSelector/ActionSelector'
import { Button } from '@components/Button/Button'
import { CircularProgressBar } from '@components/CircularProgressBar/CircularProgressBar'
import 'react-circular-progressbar/dist/styles.css'
import * as S from '@modules/Dashboard/components/SwitchingJourney/SwitchingJourney.style'
import { JourneyStep } from '@modules/Switching/Switching'
import { StartJourneyConfig } from '@modules/Switching/data'
import { Text, GreenPill } from '@styles/common.style'
import { actionsConfig } from '@utils/data'
import { filterActionType } from '@utils/functions'

type SwitchingJourneyProps = {
  name: string
  progress: number
  journeySteps: StartJourneyConfig[]
  journeyType: string
  completedSteps: number[]
  canMaximise: boolean
  hasStartedMaximising: boolean
  hasFinishedMaximising: boolean
}

export const LatestJourney: NextPage<SwitchingJourneyProps> = ({
  name,
  progress,
  journeySteps,
  completedSteps,
  journeyType,
  canMaximise,
  hasStartedMaximising,
  hasFinishedMaximising,
}): JSX.Element => {
  const { push } = useRouter()
  const actions = actionsConfig.filter(filterActionType(journeyType))

  return (
    <>
      <S.JourneyName>{name}</S.JourneyName>
      {hasFinishedMaximising ? (
        <Button type='button' mode='primary' onClick={() => push('/switching')} bold>
          Switch Another Bank
        </Button>
      ) : canMaximise ? (
        <>
          <GreenPill>Switch Completed</GreenPill>
          <ActionSelector actions={actions} isSwitchLanding={false} isJourneyComplete={false} />
          {hasStartedMaximising ? (
            <Button
              type='button'
              mode='primary'
              onClick={() => push('/switching/select-action')}
              bold
            >
              Next Step
            </Button>
          ) : (
            <>
              <Button
                type='button'
                mode='primary'
                onClick={() => push('/switching/select-action')}
                bold
              >
                Start Maximising
              </Button>
              <p>Taking additional lobbying steps means your switch could be more impactful. </p>
            </>
          )}
        </>
      ) : (
        <>
          <Text>Switching Steps</Text>
          <CircularProgressBar progress={progress} />
          <S.NextStep>
            {journeySteps.map(({ text, route }: JourneyStep, i: number) => {
              const isComplete = completedSteps.includes(i + 1)
              const isFirstIncompleteStep = i + 1 === Number(completedSteps?.at(-1)) + 1

              if (isFirstIncompleteStep) {
                return (
                  <Fragment key={route}>
                    {!isComplete && isFirstIncompleteStep && route && (
                      <Button type='button' mode='primary' onClick={() => push(route)} bold>
                        Next Step
                      </Button>
                    )}
                    <span>{text}</span>
                  </Fragment>
                )
              }
              return null
            })}
          </S.NextStep>
        </>
      )}
    </>
  )
}
