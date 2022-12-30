import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const ProgressBarContainer = styled.div`
  max-width: 200px;
  width: 200px;
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
    font-size: var(--fsSmall3);
    font-family: 'Konsolev Regular';
  }
`
