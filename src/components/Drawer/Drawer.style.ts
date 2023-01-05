import styled from '@emotion/styled'

const drawerWidth = ({ narrow }: { narrow?: boolean }) => (narrow ? '398px' : '466px')

export const Drawer = styled.aside<{ isDrawerOpen: boolean; narrow?: boolean }>`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 10px;
  width: ${drawerWidth};
  max-width: ${drawerWidth};
  min-width: ${drawerWidth};
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  transform: ${({ isDrawerOpen, narrow }) =>
    isDrawerOpen ? 'translateX(0)' : `translateX(${narrow ? 420 : 470}px)`};
  transition: all 0.2s ease-in-out;
  padding: 35px 40px;
  z-index: 1;
  box-shadow: 1px 1px 5px var(--slate);
`

export const BackLink = styled.h2`
  font-size: var(--fsLarge);
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`
