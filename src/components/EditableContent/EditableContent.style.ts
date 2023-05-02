import styled from '@emotion/styled'

export const EditableContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  background-color: var(--white);
  flex: 1;
`

export const Container = styled.div`
  background-color: var(--alabaster);
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  padding: 12px;
  border-radius: 15px;
  flex: 1;
`

export const InnerWrapper = styled.div`
  padding: 10px 0;
  max-height: 400px;
  overflow-y: auto;
`

export const Content = styled.div`
  background-color: var(--white);
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  border: 0;
  white-space: pre-wrap;
  flex: 1;
  font-size: var(--fsSmall5);

  img {
    width: 100% !important;
  }
`
