import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/Button'
import { CircularProgressBar } from '@components/CircularProgressBar/CircularProgressBar'
import 'react-circular-progressbar/dist/styles.css'
import * as S from '@modules/Dashboard/components/SwitchingJourney/SwitchingJourney.style'
import { JourneySteps } from '@modules/Switching/Switching'
import { StartJourneyConfig } from '@modules/Switching/data'

type SwitchingJourneyProps = {
  name: string
  progress: number
  journeySteps: StartJourneyConfig[]
  completedSteps: number[]
}

export const LastestJourney: NextPage<SwitchingJourneyProps> = ({
  name,
  progress,
  journeySteps,
  completedSteps,
}): JSX.Element => {
  const { push } = useRouter()

  return (
    <>
      <S.JourneyName>{name}</S.JourneyName>
      <CircularProgressBar progress={progress} />
      <S.NextStep>
        {journeySteps.map(({ text, route }: JourneySteps, i: number) => {
          const isComplete = completedSteps.includes(i + 1)
          const isFirstIncompleteStep = i + 1 === Number(completedSteps?.at(-1)) + 1

          if (isFirstIncompleteStep) {
            return (
              <>
                {!isComplete && isFirstIncompleteStep && route && (
                  <Button type='button' mode='primary' onClick={() => push(route)} bold>
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
    </>
  )
}
