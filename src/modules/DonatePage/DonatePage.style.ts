import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const DonateContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  > div {
    flex: 1;
  }

  ${() => mediaQuery.laptop} {
    column-gap: 40px;
    flex-direction: row;
    justify-content: space-between;
  }
`
