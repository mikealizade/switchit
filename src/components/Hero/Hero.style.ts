import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Hero = styled.div<{ type?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 50px;
  border-radius: 0;
  background-color: var(--babyBlue);
  padding: 0;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    padding: 0;
    row-gap: initial;
    border-radius: 10px;
    height: 224px;
    padding-right: 40px;
  }

  > span {
    flex: 1;
    min-height: 150px;
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
  justify-content: center;
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
