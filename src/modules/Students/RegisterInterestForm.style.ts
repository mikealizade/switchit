import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const FormButtons = styled.div`
  margin-top: 10px;
`

export const RegisterInterestContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 40px;
  border-radius: 10px;
  column-gap: 80px;
  align-self: center;
  background-color: var(--white);
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

export const RegisterInterestIntro = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 30px;
`

export const RegisterInterestForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  flex: 1;

  fieldset label {
    width: 100%;
    display: flex;
    flex: none;
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

export const RegisterInterestHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const RegisterInterestHint = styled.p`
  /* font-size: var(--fsMedium9); */
`
