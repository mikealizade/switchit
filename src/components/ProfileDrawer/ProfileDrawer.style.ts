import styled from '@emotion/styled'

export const ProfileDrawer = styled.aside<{ isDrawerOpen: boolean }>`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 16px;
  width: 480px;
  max-width: 480px;
  min-width: 480px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  transform: ${({ isDrawerOpen }) => (isDrawerOpen ? 'translateX(0)' : 'translateX(500px)')};
  transition: all 0.2s ease-in-out;
  padding: 35px 70px;
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
