import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
  background-color: var(--white);
  min-width: 255px;
  align-self: stretch;
`

export const Container = styled.div`
  background-color: var(--alabaster);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 12px;
  border-radius: 30px;
  flex: 1;
`

export const Content = styled.div`
  background-color: var(--white);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  border: 0;
  white-space: pre-wrap;
  flex: 1;
  &[contenteditable='true'] {
    border: 2px solid var(--sushi);
  }

  img {
    width: 100% !important;
  }
`
