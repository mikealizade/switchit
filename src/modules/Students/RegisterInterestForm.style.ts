import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const FormButtons = styled.div`
  margin-top: 10px;
`

export const RegisterInterestContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 40px;
  border-radius: 10px;
  align-self: center;
  background-color: var(--white);
  width: 100%;

  ${() => mediaQuery.tablet} {
    column-gap: 80px;
  }
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

    label {
      display: flex;
      flex-direction: column;
      gap: 10px;

      ${() => mediaQuery.laptop} {
        flex: 0 0 calc(50% - 15px);
      }
    }
  }
`

export const RadioGroupContainer = styled.fieldset`
  div label {
    flex: none;
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
  font-family: 'Mono Regular';
`
