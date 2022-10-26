import styled from '@emotion/styled'

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const CheckListItems = styled.ul`
  display: flex;
  font-size: var(--fsLarge1);

  li {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }
`
