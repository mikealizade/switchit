import styled from '@emotion/styled'

export const ActionSelector = styled.ul<{
  isDefault?: boolean
}>`
  display: flex;
  gap: ${({ isDefault }) => (isDefault ? '20px' : '10px')};
  flex-wrap: wrap;
  justify-content: center;
  align-self: flex-start;
  max-width: 462px;
  align-self: center;
`

export const Item = styled.li<{
  isActive?: boolean
  isCompleted: boolean
  isDefault: boolean
  hasConfirmed: boolean
}>`
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
  min-height: ${({ isDefault }) => (isDefault ? '185px' : '88px')};
  max-height: ${({ isDefault }) => (isDefault ? 'none' : '88px')};
  transition: all 0.1s linear;
  display: flex;
  cursor: pointer;
  pointer-events: ${({ hasConfirmed }) => (!hasConfirmed ? 'none' : 'all')};
  opacity: ${({ hasConfirmed, isCompleted }) =>
    (hasConfirmed && !isCompleted) || (hasConfirmed && isCompleted) ? 1 : 0.3};
  place-items: center;

  &:hover {
    transform: ${({ isDefault }) => (isDefault ? 'scale(1.1)' : 'scale(1.05)')};
    background-color: ${({ isCompleted }) => (isCompleted ? 'var(--white)' : 'var(--nileBlue)')};

    * {
      color: ${({ isCompleted }) => (isCompleted ? 'var(--sushi)' : 'var(--white)')};
    }
  }
`

export const ActionHeader = styled.h3<{
  isActive: boolean
  isCompleted: boolean
}>`
  text-align: center;
  color: ${({ isCompleted, isActive }) =>
    isCompleted ? 'var(--sushi)' : isActive ? 'var(--white)' : 'initial'};
  font-size: var(--fsSmall4);
`

export const MetaData = styled.div<{
  isActive: boolean
  isCompleted: boolean
}>`
  display: flex;
  color: ${({ isCompleted, isActive }) =>
    isCompleted ? 'var(--sushi)' : isActive ? 'var(--white)' : 'initial'};
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
  height: 100%;
  padding-top: 10px;
`

export const Tick = styled.div`
  display: flex;
  place-items: center;
  padding: 12px 0;
`

export const MaximiseText = styled.p`
  font-size: var(--fsSmall4);
  font-style: italic;
`
