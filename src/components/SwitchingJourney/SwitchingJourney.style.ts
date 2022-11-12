import styled from '@emotion/styled'

export const SwitchingJourney = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  flex: 1;

  > div {
    flex: 4;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  > span {
    flex: 2;
  }

  h3 {
    font-size: var(--fsBase);
  }

  p {
    font-size: var(--fsVLarge3);
  }
`
