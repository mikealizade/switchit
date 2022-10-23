import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Nav = styled.nav`
  min-width: 230px;
  background-color: var(--white);
  border-radius: 8px 0 0 8px;
  padding: 30px;
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
      padding: 6px 18px;
      border-radius: 8px;
      background-color: var(--white);
      font-size: var(--fsMedium8);

      &.active,
      &:hover {
        background-color: var(--pink);
        color: var(--white);
      }
    }
  }
`

export const Logo = styled.a`
  display: flex;
  column-gap: 15px;
  align-items: center;
  font-size: var(--fsMedium8);
`
