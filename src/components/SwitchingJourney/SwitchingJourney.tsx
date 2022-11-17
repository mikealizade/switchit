import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Title } from '@styles/common.style'
import * as S from '@components/SwitchingJourney/SwitchingJourney.style'

import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import ProgressProvider from './ProgressProvider'

// Animation
import { easeQuadInOut } from 'd3-ease'

type SwitchingJourneyProps = {
  title: string
  progress: number
}

export const SwitchingJourney: NextPage<SwitchingJourneyProps> = ({
  title,
  progress,
}): JSX.Element => {
  const [valueEnd, setValueEnd] = useState(66)

  return (
    <S.SwitchingJourney>
      <Title>
        Switching Journeys
        <Image src={'/icons/icon_chevron_right.svg'} alt='' width={25} height={25} />
      </Title>
      <h3>{title}</h3>
      <S.SwitchingJourneyContent>
        <S.ProgressBarContainer>
          <ProgressProvider valueStart={1} valueEnd={valueEnd}>
            {(value: number) => (
              <CircularProgressbarWithChildren
                value={value}
                // text={`${value}%`}
                styles={{
                  // Customize the root svg element
                  root: {},
                  // Customize the path, i.e. the "completed progress"
                  path: {
                    // Path color
                    stroke: `rgba(125, 188, 66, 1)`,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 1.5s ease 0s',
                    // Rotate the path
                    transform: 'rotate(0)',
                    transformOrigin: 'center center',
                    strokeWidth: '5px',
                  },
                  // Customize the circle behind the path, i.e. the "total progress"
                  trail: {
                    // Trail color
                    stroke: '#f1f1f1',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                    strokeWidth: '5px',
                  },
                  // Customize the text
                  text: {
                    // Text color
                    fill: '#222',
                    // Text size
                    fontSize: '22px',
                    fontFamily: 'Konsolev SemiBold',
                  },
                }}
              >
                <S.ProgressText>
                  {progress}/5
                  <br />
                  <span>steps completed</span>
                </S.ProgressText>
              </CircularProgressbarWithChildren>
            )}
          </ProgressProvider>
        </S.ProgressBarContainer>
      </S.SwitchingJourneyContent>
    </S.SwitchingJourney>
  )
}
