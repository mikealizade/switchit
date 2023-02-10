import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/Button'
import 'react-circular-progressbar/dist/styles.css'
import * as S from '@modules/Dashboard/components/SwitchingJourney/SwitchingJourney.style'
import { startJourneyConfig, startJourneyNoBankConfig } from '@modules/Switching/data'
import { Journey } from '@state/switchJourney/switchJourneySlice'
import { TitleLink } from '@styles/common.style'
import { journeyTypes, steps, noBankAccountSteps } from '@utils/constants'
import { LatestJourney } from './LatestJourney'

type SwitchingJourneyProps = {
  switchJourneys: Journey[]
}

export const SwitchingJourney: NextPage<SwitchingJourneyProps> = ({
  switchJourneys,
}): JSX.Element => {
  const { push } = useRouter()
  const { name = '', journeyType = '', goodBank, completedSteps = [] } = switchJourneys.at(-1) ?? {}
  const isNoBankAccountJourney = journeyType === journeyTypes.noBankAccount
  const journeySteps = isNoBankAccountJourney
    ? startJourneyNoBankConfig(String(goodBank))
    : startJourneyConfig(String(goodBank))
  const currentSteps = isNoBankAccountJourney ? noBankAccountSteps : steps
  const getConfirmSwitchStep = (step: number) => step <= currentSteps.confirmSwitch
  const progress = completedSteps?.filter(getConfirmSwitchStep).length
  const hasStartedMaximising = completedSteps.length > currentSteps.confirmSwitch
  const hasFinishedMaximising = completedSteps?.includes(currentSteps.tellUs)

  return (
    <S.SwitchingJourney>
      <Link href='/switching'>
        <TitleLink>
          Switching Journeys
          <Image src={'/icons/icon_chevron_right.svg'} alt='' width={25} height={25} />
        </TitleLink>
      </Link>
      <S.SwitchingJourneyContent isComplete={hasFinishedMaximising}>
        {switchJourneys.length ? (
          <LatestJourney
            name={name}
            progress={progress}
            journeySteps={journeySteps}
            journeyType={journeyType}
            completedSteps={completedSteps}
            canMaximise={completedSteps.includes(currentSteps.confirmSwitch)}
            hasStartedMaximising={hasStartedMaximising}
            hasFinishedMaximising={hasFinishedMaximising}
          />
        ) : (
          <S.FirstJourney rowGap={60}>
            {`It's why you're here!`}
            <br />
            Begin your first switching journey.
            <Button onClick={() => push('/switching')} bold>
              Start
            </Button>
          </S.FirstJourney>
        )}
      </S.SwitchingJourneyContent>
    </S.SwitchingJourney>
  )
}
