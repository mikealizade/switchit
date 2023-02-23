import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const FormButtons = styled.div`
  margin-top: 10px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 50px;
  row-gap: 20px;
  justify-content: space-between;
  width: 100%;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
  }
`

export const ContactUsForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  flex-wrap: wrap;

  fieldset {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }

  label {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    display: flex;
    flex: 1;
    font-size: var(--fsMedium8);
    align-items: flex-start;

    span {
      display: contents;
    }
  }

  input {
    background-color: var(--white);
    border: 1px solid var(--overcast);
    padding: 15px;

    &::placeholder {
      color: var(--gallery);
    }
  }
`
