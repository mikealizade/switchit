import styled from 'styled-components'

export const RadioGroupLabel = styled.h4`
  span {
    display: inline-block;
    color: var(--darkRed);
    margin-left: 5px;
  }
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 65px;
  user-select: none;
  text-transform: capitalize;
  min-height: 40px;
`
export const RadioGroup = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:disabled {
      cursor: default !important;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 40px;
    background-color: var(--paleGrey);
    border-radius: 50%;
  }

  .checkmark:after {
    content: '';
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  input ~ .checkmark {
    background-color: var(--paleGrey);
    border: 1px solid #898a8d;
  }

  input:checked ~ .checkmark {
    background-color: #e6eff8;
    border: 1px solid var(--form-control-color);
  }

  input:checked ~ .checkmark:before {
    content: '';
    position: absolute;
    top: 11px;
    left: 11px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--form-control-color);
    border: 0;
  }

  .checkmark:after {
    content: '';
    top: 12px;
    left: 12px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    border: 1px solid #898a8d;
  }

  input:checked ~ .checkmark:after {
    background: var(--form-control-color);
    border: 1px solid white;
  }

  input:checked:disabled ~ .checkmark {
    background-color: var(--paleGrey);
    border: 1px solid #898a8d;
  }

  input:checked:disabled ~ .checkmark:before {
    background: #898a8d;
  }

  input:checked:disabled ~ .checkmark:after {
    background: white;
  }

  input:checked:disabled ~ .checkmark:after {
    background: #898a8d;
    border: 1px solid white;
  }

  &.error {
    input ~ .checkmark {
      background-color: #f7e6eb;
      border: 1px solid #ab0033;

      &:after {
        border: 1px solid #ab0033;
      }
    }
  }
`
