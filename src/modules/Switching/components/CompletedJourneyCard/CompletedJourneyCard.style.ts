import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const CompletedJourneyCard = styled.div`
  background-color: var(--alabaster);
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  border-radius: 10px;
  min-width: 395px;
  max-width: 395px;

  ${() => mediaQuery.tablet} {
    /* flex-direction: row; */
    /* padding: 60px 0 0; */
    /* padding: 30px; */
  }
`

export const Detail = styled.dl`
  padding: 20px 50px;
  font-size: var(--fsBase);
`

export const DetailName = styled.h3`
  font-size: var(--fsMedium9);
  padding: 20px 30px;
  border-bottom: 1px solid var(--porcelain);
`

export const DetailHeader = styled.dt`
  font-size: var(--fsSmall5);
  letter-spacing: 1px;
  font-weight: bold;
  margin-top: 20px;

  &:first-of-type {
    margin: 0;
  }
`

export const DetailText = styled.dd`
  font-size: var(--fsSmall5);
  letter-spacing: 1px;
  margin: 0;
`
