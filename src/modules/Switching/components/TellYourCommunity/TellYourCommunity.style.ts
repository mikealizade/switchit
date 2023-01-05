import styled from '@emotion/styled'

export const ShareCodeInfo = styled.p`
  font-size: var(--fsMedium8);
`

export const Actions = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 1;
`

export const Action = styled.li`
  display: flex;
  font-size: var(--fsMedium7);
  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  height: 32px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;

    span {
      display: inline-block;
    }
  }
`
