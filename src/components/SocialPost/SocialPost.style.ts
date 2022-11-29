import styled from '@emotion/styled'

export const SocialPost = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
  background-color: var(--white);

  > span:first-of-type {
    align-self: flex-start;
  }
`

export const Container = styled.div`
  background-color: var(--alabaster);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 20px;
  border-radius: 30px;
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
  &[contenteditable='true'] {
    border: 2px solid var(--sushi);
  }

  img {
    width: 100% !important;
  }
`

export const Buttons = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: flex-end;
  padding: 10px;
`
