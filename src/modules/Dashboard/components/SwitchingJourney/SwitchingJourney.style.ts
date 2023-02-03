import styled from '@emotion/styled'
import { Div } from '@styles/common.style'

export const SwitchingJourney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  column-gap: 40px;
  flex: 1;
  /* row-gap: 30px; */

  h3 {
    font-size: var(--fsBase);
  }
`

export const SwitchingJourneyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
