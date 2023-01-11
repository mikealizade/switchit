import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

const drawerWidth = ({ narrow }: { narrow?: boolean }) => (narrow ? '398px' : '466px')

export const Drawer = styled.section<{ isDrawerOpen: boolean; narrow?: boolean }>`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 20px 20px 0 0;
  width: 100vw;
  height: 90vh;
  position: fixed;
  bottom: 0;
  transform: ${({ isDrawerOpen }) => (isDrawerOpen ? 'translateY(0)' : `translateY(90vh)`)};
  transition: all 0.2s ease-in-out;
  padding: 35px 40px;
  z-index: 1;
  box-shadow: 1px 1px 5px var(--slate);
  overflow-y: auto;

  ${() => mediaQuery.laptop} {
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: ${drawerWidth};
    max-width: ${drawerWidth};
    min-width: ${drawerWidth};
    transform: ${({ isDrawerOpen, narrow }) =>
      isDrawerOpen ? 'translateX(0)' : `translateX(${narrow ? 420 : 470}px)`};
  }
`

export const BackLink = styled.h2`
  font-size: var(--fsLarge);
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
  position: relative;

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

export const MobileBackdrop = styled.div<{ isDrawerOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isDrawerOpen }) => (isDrawerOpen ? 'flex' : `none`)};

  ${() => mediaQuery.laptop} {
    display: none;
  }
`
