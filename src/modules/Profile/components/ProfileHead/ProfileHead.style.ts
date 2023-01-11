import styled from '@emotion/styled'
import { Div } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const ProfileHead = styled.header<{ isProfile?: boolean }>`
  display: flex;
  column-gap: 40px;
  flex-direction: column;
  row-gap: 140px;
  position: relative;

  ${() => mediaQuery.tablet} {
    row-gap: ${({ isProfile }) => (isProfile ? '90px' : '130px')};
  }
`

export const Picture = styled.div<{ isProfile?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  height: 130px;

  &:first-of-type {
    background-color: var(--sushi);
    margin: ${({ isProfile }) => (isProfile ? '-30px -40px' : '-40px')};

    ${() => mediaQuery.tablet} {
      border-radius: 15px;
      margin: ${({ isProfile }) => (isProfile ? '0' : '0')};
    }
  }

  span {
    border-radius: 50%;
    width: 140px !important;
    height: 140px !important;
    position: absolute !important;
    border: 2px solid var(--white) !important;
    left: calc(50% - 70px);
    top: 22px;

    ${() => mediaQuery.tablet} {
      left: ${({ isProfile }) => (isProfile ? 'calc(50% - 70px);' : '20px')};
      top: 56px;
    }
  }
`

export const UserDetails = styled(Div)`
  align-items: center;

  ${() => mediaQuery.tablet} {
    align-items: flex-start;
    padding: 0 30px;
  }
`

export const Name = styled.h1`
  margin: 0;
  font-size: var(--fsLarge9);
  text-transform: capitalize;
`

export const ProfileNames = styled(Div)`
  row-gap: 10px;
  ${() => mediaQuery.tablet} {
    align-items: center;
  }
`

export const ProfileName = styled.h2`
  margin: 0;
  font-size: var(--fsMedium8);
  text-transform: capitalize;
  text-align: center;
`

export const Username = styled.div`
  margin: 0;
  font-size: var(--fsBase);
  color: var(--slate);
  font-weight: bold;
  text-align: center;
`

export const Location = styled.p`
  font-size: inherit;
`

export const Points = styled.p`
  font-size: var(--fsmall4);
  color: grey;
  display: flex;
  align-items: center;
  column-gap: 10px;

  svg {
    width: 20px;
    color: var(--pink);
  }
`
