import styled from '@emotion/styled'
import { Div } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const Nav = styled.nav<{ isNavOpen: boolean }>`
  min-width: 230px;
  background-color: var(--concrete);
  border-radius: 0 16px 16px 0;
  padding: 20px;
  row-gap: 100px;
  display: flex;
  position: fixed;
  transform: ${({ isNavOpen }) => (isNavOpen ? 'translateX(0)' : `translateX(-242px)`)};
  transition: all 0.2s ease-in-out;
  flex-direction: column;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: ${({ isNavOpen }) => (isNavOpen ? '2px 0px 8px var(--pampas)' : 'none')};
  overflow-y: auto;

  ${() => mediaQuery.laptop} {
    position: static;
    box-shadow: none;
    transform: translateX(0);
    box-shadow: none;
    overflow-y: none;
    border-radius: 16px 0 0 16px;
  }
`

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${() => mediaQuery.laptop} {
    &:last-of-type {
      margin-top: auto;
    }
  }

  li {
    display: flex;
    flex-direction: column;

    a {
      padding: 8px 18px 6px 48px;
      border-radius: 8px;
      background-color: var(--white);
      font-size: var(--fsMedium8);
      background: transparent 8px center no-repeat;

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

export const MobileNav = styled.nav<{ isNavOpen: boolean }>`
  display: ${({ isNavOpen }) => (isNavOpen ? 'none' : 'block')};
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: var(--white);
  z-index: 5;
  padding: 20px;
  box-shadow: 1px -4px 7px var(--pampas);
`

export const MobileSubNav = styled(Nav)`
  row-gap: 50px;
`

export const MobileNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
`

export const MobileNavUser = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  margin-bottom: 80px;

  img {
    border-radius: 50%;
  }
`

export const MobileNavUserNames = styled(Div)`
  row-gap: 10px;
`

export const UserName = styled.strong`
  font-weight: bold;
`

export const UserPoints = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: var(--grey);
`

export const Logo = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
  font-size: var(--fsMedium8);
  margin-left: 20px;
`

export const CloseMenu = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${() => mediaQuery.laptop} {
    display: none;
  }
`

export const LogoutLink = styled.a`
  cursor: pointer;
`
