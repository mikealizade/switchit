import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const BankFinder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  flex: 1;
`

export const BankSelector = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 100px;
  width: 75%;
  margin: 0 auto 50px;

  .react-select {
    width: 100%;

    ${() => mediaQuery.xmobile} {
      width: auto;
      min-width: 240px;
    }

    ${() => mediaQuery.tablet} {
      min-width: 300px;
    }
  }
`

export const BankList = styled.div`
  display: flex;
  align-items: center;
  place-items: center;
  justify-content: space-between;
  column-gap: 10px;
  flex-wrap: wrap;
  row-gap: 20px;
  margin-bottom: 30px;
`

export const ViewResearch = styled.div`
  padding: 100px 25px 25px;
  background: var(--sand) url('/icons/icon_magnify2.svg') no-repeat center 25px;
  background-size: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--fsMedium9);
  border-radius: 18px;

  ${() => mediaQuery.tablet} {
    background: var(--sand) url('/icons/icon_magnify2.svg') no-repeat 30px center;
    padding: 25px 25px 25px 110px;
  }
`
