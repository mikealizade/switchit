import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const BankInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: center;
  justify-content: center;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    column-gap: 70px;
  }
`

export const BankScoreContainer = styled.div`
  min-width: 200px;
  max-width: 250px;
  flex: 1;
`

export const BankData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 2;
  line-height: 20px;
  font-size: var(--fsBase);
`

export const BankRating = styled.div`
  font-size: var(--fsMedium9);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-top: auto;
`

export const Rating = styled.div`
  font-size: var(--fsMedium9);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const RatingHeader = styled.div`
  font-size: var(--fsLarge0);
`

export const ProgressText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--fsHuge0);
  max-width: 150px;
  font-family: 'Konsolev Regular';
  margin-top: -15px;
`
