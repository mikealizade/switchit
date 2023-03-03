import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

const drawerWidth = ({ narrow }: { narrow?: boolean }) => (narrow ? '398px' : '465px')

export const Drawer = styled.section<{ isDrawerOpen: boolean; narrow?: boolean }>`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 20px 20px 0 0;
  width: 100vw;
  height: 80vh;
  position: fixed;
  bottom: 0;
  transform: ${({ isDrawerOpen }) => (isDrawerOpen ? 'translateY(0)' : `translateY(90vh)`)};
  transition: all 0.15s ease-in-out;
  padding: 35px 40px;
  z-index: 100;
  box-shadow: -2px 3px 5px var(--gallery);

  ${() => mediaQuery.laptop} {
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    /* margin: 20px; */
    width: ${drawerWidth};
    max-width: ${drawerWidth};
    min-width: ${drawerWidth};
    transform: ${({ isDrawerOpen, narrow }) =>
      isDrawerOpen ? 'translateX(0)' : `translateX(${narrow ? 420 : 490}px)`};
  }
`

export const DrawerContent = styled.div`
  overflow-y: auto;
  row-gap: 50px;
  display: flex;
  flex-direction: column;
`

export const DrawerHeader = styled.h3`
  font-size: var(--fsBase);
`

export const DrawerBackLink = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  position: relative;
  justify-content: flex-start;

  &:after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -12px;
    width: 32px;
    height: 4px;
    background-color: var(--gallery);
    border-radius: 8px;
  }

  ${() => mediaQuery.tablet} {
    &:after {
      content: none;
    }
  }
`

export const MobileBackdrop = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isVisible }) => (isVisible ? 'flex' : `none`)};
  z-index: 2;

  ${() => mediaQuery.laptop} {
    display: none;
  }
`
