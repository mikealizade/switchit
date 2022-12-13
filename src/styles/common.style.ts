import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Button } from '@components/Button/Button.style'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 25px;
`

export const ColumnContainer = styled.section`
  display: flex;
  column-gap: 25px;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  flex: 3;
  min-width: 400px;

  + section {
    flex: 4;
    gap: 20px;

    > section {
      flex: 1;
    }
  }
`

export const Title = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }

  label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  input {
    /* margin-top: 10px; */
    border: 1px solid var(--grey);
  }
`

export const ShareButton = styled(Button)<{ small?: boolean }>`
  background-color: var(--pink);
  padding: ${({ small }) => (small ? '8px 20px' : '13px 30px')};
  align-self: center;
  width: ${({ small }) => (small ? '150px' : '200px')};
  border-radius: 20px;
  font-size: 2.7rem;
  box-shadow: 1px 3px 5px var(--gallery);
`

export const Ellipsis = styled.div`
  position: absolute;
  bottom: auto;
  right: 0;
  cursor: pointer;
  font-size: var(--fsLarge);
`

export const ButtonContainer = styled.div<{ column?: boolean; alignLeft?: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-left: ${({ alignLeft }) => (alignLeft ? '0' : 'auto')};
  flex: 1;
  column-gap: 30px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  row-gap: 15px;

  button {
    align-self: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'flex-end')};
  }
`
