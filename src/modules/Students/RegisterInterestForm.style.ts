import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const FormButtons = styled.div`
  margin-top: 10px;
`

export const RegisterInterest = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;

  fieldset {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;

    ~ div:last-child {
      justify-content: flex-end;
    }
  }

  label {
    flex: 0 0 calc(50% - 15px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`
