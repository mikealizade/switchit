import styled from '@emotion/styled'

export const ProgramsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const ProgramsForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex-wrap: wrap;

  fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  label:has(input[type='text']) {
    flex-direction: column;

    input {
      background-color: var(--atol);
    }
  }
`
