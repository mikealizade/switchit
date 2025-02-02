import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 50px;
  row-gap: 50px;
  border-radius: 10px;
  background-color: var(--white);
  padding: 20px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    padding: 50px 100px 50px 30px;
    row-gap: initial;
  }

  > span {
    flex: 1;
    min-height: 150px;

    ${() => mediaQuery.tablet} {
      min-height: auto;
    }
  }

  > button {
    flex: 1;
    align-self: flex-end;
  }
`

export const DashboardHero = styled(Hero)`
  padding: 30px;
`

export const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 5;
`

export const Title = styled.h2`
  font-size: var(--fsLarge9);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsVLarge6);
  }
`

export const Text = styled.p`
  font-size: var(--fsLarge0);
`
