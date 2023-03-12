import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const DonateContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 50px;
  flex: 1;
  padding-bottom: 200px;
  margin-bottom: -28px;
  background: url('/images/img_loadsamoney.png') no-repeat center bottom;

  ${() => mediaQuery.xmobile} {
    flex-direction: column;
    flex: initial;
    margin: 0;
    background: none;

    > div {
      flex: initial;
    }
  }

  ${() => mediaQuery.tablet} {
    flex-direction: column;
    flex: initial;

    > div {
      flex: initial;
    }
  }

  ${() => mediaQuery.laptop} {
    flex-direction: column;

    column-gap: 40px;
    justify-content: space-between;
  }

  ${() => mediaQuery.xlaptop} {
    flex-direction: row;

    column-gap: 40px;
    justify-content: space-between;

    > div {
      flex: 1;
    }
  }
`
