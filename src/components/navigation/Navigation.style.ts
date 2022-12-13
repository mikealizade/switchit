import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Nav = styled.nav`
  min-width: 230px;
  background-color: var(--white);
  border-radius: 16px 0 0 16px;
  padding: 20px;
  row-gap: 100px;
  display: flex;
  position: absolute;
  left: -231px;
  flex-direction: column;

  ${() => mediaQuery.laptop} {
    position: static;
  }
`

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  &:last-of-type {
    margin-top: auto;
  }

  li {
    display: flex;
    flex-direction: column;

    a {
      padding: 8px 18px 6px 48px;
      border-radius: 8px;
      background-color: var(--white);
      font-size: var(--fsMedium8);
      background: transparent 14px center no-repeat;

      &.active,
      &:hover {
        background-color: var(--nileBlue);
        color: var(--white);
      }
    }
  }
  + ul {
    padding-bottom: 20px;

    a {
      padding-left: 20px;
    }
  }
`

export const Logo = styled.a`
  display: flex;
  column-gap: 15px;
  align-items: center;
  font-size: var(--fsMedium8);
`
