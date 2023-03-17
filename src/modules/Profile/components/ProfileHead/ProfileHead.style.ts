import styled from '@emotion/styled'
import { Div } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const ProfileHead = styled.header<{ isProfile?: boolean }>`
  display: flex;
  column-gap: 10px;
  flex-direction: row;
  row-gap: 140px;
  position: relative;
  background-color: var(--sushi);
  border-radius: 15px;

  ${() => mediaQuery.tablet} {
    background: none;
    flex-direction: column;
    row-gap: ${({ isProfile }) => (isProfile ? '100px' : '130px')};
  }
`

export const EditProfile = styled.div`
  position: absolute;
  top: 108px;
  left: 100px;
  width: 26px;
  height: 26px;
  cursor: pointer;

  ${() => mediaQuery.tablet} {
    top: 177px;
    right: 132px;
    left: auto;
  }

  > span {
    position: static !important;
  }
`

export const Picture = styled.div<{ isProfile?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  img {
    object-fit: cover;
  }

  ${() => mediaQuery.tablet} {
    height: ${({ isProfile }) => (isProfile ? '130px' : '160px')};
  }

  &:first-of-type {
    background-color: var(--sushi);
    border-radius: 15px;
    padding: 20px;
    margin: 0;
    position: relative;

    /* > div:first-of-type {
      top: 108px;
      left: 100px;

      ${() => mediaQuery.laptop} {
        top: 177px;
        right: 132px;
        left: auto;
      }
    } */

    ${() => mediaQuery.tablet} {
      border-radius: 15px;
      margin: ${({ isProfile }) => (isProfile ? '0' : '0')};
    }
  }

  span {
    border-radius: 50%;
    border: 2px solid var(--white) !important;

    ${() => mediaQuery.tablet} {
      width: 156px !important;
      height: 156px !important;
      position: absolute !important;
      left: calc(50% - 70px);
      top: 22px;
      left: ${({ isProfile }) => (isProfile ? 'calc(50% - 80px);' : '20px')};
      top: ${({ isProfile }) => (isProfile ? '50px' : '80px')};
    }
  }
`

export const UserDetails = styled(Div)`
  align-items: flex-start;
  justify-content: center;
  row-gap: 12px;

  ${() => mediaQuery.tablet} {
    padding: 0 30px;
  }
`

export const Name = styled.h1`
  margin: 0;
  font-size: var(--fsLarge1);
  text-transform: capitalize;

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge9);
  }
`

export const ProfileNames = styled(Div)`
  row-gap: 10px;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 20px;
  row-gap: 12px;

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

export const Username = styled.div<{ isProfile?: boolean }>`
  margin: 0;
  font-size: var(--fsBase);
  color: var(--white);
  text-align: center;

  ${() => mediaQuery.tablet} {
    color: var(--slate);
    /* color: var(--slate); */
  }
`

export const Location = styled.p`
  font-size: var(--fsBase);
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
