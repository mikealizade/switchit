import styled from '@emotion/styled'

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const Steps = styled.ul`
  display: flex;
`

export const Item = styled.li<{ isActive: boolean }>`
  display: flex;
  place-items: center;
  color: ${({ isActive }) => (isActive ? 'var(--sushi)' : 'var(--grey)')};
  width: 20%;
  padding-left: 10px;
`
