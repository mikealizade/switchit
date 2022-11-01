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
  transition: all 0.2s ease-in;
  padding: 30px;
`
