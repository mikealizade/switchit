import styled from '@emotion/styled'

export const ActionSelector = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 2;
  align-self: flex-start;
`

export const Item = styled.li<{ isActive?: boolean; isCompleted: boolean; isDefault: boolean }>`
  border: 2px solid var(--nileBlue);
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--nileBlue)')};
  background-color: ${({ isActive }) => (isActive ? 'var(--nileBlue)' : 'var(--white)')};
  border: 2px solid
    ${({ isActive, isCompleted }) =>
      isCompleted ? 'var(--sushi)' : isActive ? 'var(--white)' : 'var(--nileBlue)'};
  border-radius: 10px;
  padding: 12px;
  flex: 1;
  min-width: ${({ isDefault }) => (isDefault ? '133px' : '88px')};
  max-width: ${({ isDefault }) => (isDefault ? '133px' : '88px')};
  min-height: ${({ isDefault }) => (isDefault ? '133px' : '88px')};
  max-height: ${({ isDefault }) => (isDefault ? 'none' : '88px')};
  transition: all 0.1s linear;
  display: flex;
  cursor: pointer;
  pointer-events: ${({ isCompleted }) => (isCompleted ? 'none' : 'all')};
  place-items: center;

  &:hover {
    transform: scale(1.15);
    background-color: var(--nileBlue);

    * {
      color: var(--white);
    }
  }

  .isCompleted {
    h3,
    span {
      color: var(--sushi);
    }
  }
`

export const ActionHeader = styled.h3`
  text-align: center;
  font-size: var(--fsSmall4);
`

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--fsSmall3);
  margin-top: auto;
  width: 100%;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  flex: 1;
`

export const Tick = styled.div`
  display: flex;
  place-items: center;
  padding: 12px 0;
`

export const ActionSelectorHeader = styled.h3`
  font-size: var(--fsLarge4);
`
