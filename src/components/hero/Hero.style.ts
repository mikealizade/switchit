import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Hero = styled.div<{ type?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 50px;
  border-radius: 0;
  background-color: var(--babyBlue);
  padding: 0;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-bottom: 20px solid var(--alabaster);

  ${() => mediaQuery.xmobile} {
    height: 190px;
    border: 0;

    &.expanded {
      height: auto;
    }
  }

  &.expanded {
    p:first-of-type {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    padding: 0;
    row-gap: initial;
    border-radius: 10px;
    height: 224px;
    padding-right: 40px;
    height: auto;
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

export const Image = styled.div`
  display: none;

  ${() => mediaQuery.xmobile} {
    display: block;
  }
`

export const DashboardHero = styled(Hero)`
  padding: 30px;
`

export const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 5;
  justify-content: center;
  padding: 20px;

  ${() => mediaQuery.tablet} {
    padding: 30px 0;
  }
`

export const Title = styled.h2`
  font-size: var(--fsLarge0);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsVLarge6);
  }
`

export const Text = styled.p`
  font-size: var(--fsSmall6);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge0);
  }
`

export const LearnMore = styled.p`
  text-decoration: underline;

  ${() => mediaQuery.xmobile} {
    display: none;
  }
`
