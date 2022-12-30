import { FC, useState } from 'react'
import { steps } from '@utils/constants'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import ProgressProvider from './ProgressProvider'
import * as S from './CircularProgressBar.style'

export const CircularProgressBar: FC<{ progress: number }> = ({ progress }) => {
  const [valueEnd] = useState((progress / steps.confirmSwitch) * 100)

  return (
    <S.ProgressBarContainer>
      <ProgressProvider valueStart={1} valueEnd={valueEnd}>
        {(value: number) => (
          <CircularProgressbarWithChildren
            value={value}
            strokeWidth={12}
            styles={{
              root: {},
              path: {
                stroke: `rgba(125, 188, 66, 1)`,
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 1.5s ease 0s',
                transform: 'rotate(0)',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#E1DFD9',
                strokeLinecap: 'butt',
                transform: 'rotate(0.25turn)',
                transformOrigin: 'center center',
                strokeWidth: '6px',
              },
              text: {
                fill: '#222',
                fontSize: '22px',
                fontFamily: 'Konsolev SemiBold',
              },
            }}
          >
            <S.ProgressText>
              {progress}/{steps.confirmSwitch}
              <br />
              <span>steps completed</span>
            </S.ProgressText>
          </CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
    </S.ProgressBarContainer>
  )
}
