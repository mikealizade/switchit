import styled from '@emotion/styled'
import { Div } from '@styles/common.style'

export const SwitchingJourney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  column-gap: 40px;
  flex: 1;

  h3 {
    font-size: var(--fsBase);
  }
`

export const SwitchingJourneyContent = styled.div<{ isComplete: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isComplete }) => (isComplete ? 'space-between' : 'center')};
  padding: ${({ isComplete }) => (isComplete ? '80px 0' : '0')};
  row-gap: 50px;
  flex: 1;
`

export const JourneyName = styled.h3`
  text-align: center;
`

export const NextStep = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  align-items: center;
`

export const FirstJourney = styled(Div)`
  justify-content: center;
  align-items: center;
  text-align: center;
`
