import styled from '@emotion/styled'

export const SwitchingJourney = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  column-gap: 40px;
  flex: 1;
  row-gap: 30px;

  h3 {
    font-size: var(--fsBase);
  }
`

export const ProgressBarContainer = styled.div`
  max-width: 200px;
`

export const ProgressText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fsHuge0);
  max-width: 150px;
  font-family: 'Konsolev SemiBold';
  row-gap: 10px;

  span {
    font-size: var(--fsSmall5);
    font-family: 'Konsolev Regular';
  }
`

export const SwitchingJourneyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
