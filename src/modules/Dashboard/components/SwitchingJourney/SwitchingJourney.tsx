import type { NextPage } from 'next'
import Image from 'next/image'
import { CircularProgressBar } from '@components/CircularProgressBar/CircularProgressBar'
import 'react-circular-progressbar/dist/styles.css'
import * as S from '@modules/Dashboard/components/SwitchingJourney/SwitchingJourney.style'
import { Title } from '@styles/common.style'

type SwitchingJourneyProps = {
  name: string
  progress: number
}

export const SwitchingJourney: NextPage<SwitchingJourneyProps> = ({
  name,
  progress,
}): JSX.Element => {
  console.log('progress', progress)
  return (
    <S.SwitchingJourney>
      <Title>
        Switching Journeys
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={25} height={25} />
      </Title>
      {progress && <h3>{name}</h3>}
      <S.SwitchingJourneyContent>
        {progress ? (
          <CircularProgressBar progress={progress} />
        ) : (
          <div>You {`haven't`} started any journeys yet.</div>
        )}
      </S.SwitchingJourneyContent>
    </S.SwitchingJourney>
  )
}
