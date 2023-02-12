import styled from '@emotion/styled'

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 24px;
  user-select: none;
  text-transform: capitalize;
`
export const RadioGroup = styled.div<{ row?: boolean }>`
  cursor: default;
  display: flex;
  row-gap: 15px;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  flex: 1;

  div {
    display: flex;
    column-gap: 15px;
    height: 30px;

    label {
      gap: initial;
      justify-content: right;
      display: flex;
      align-items: flex-start;
      max-width: 100px;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:disabled {
      cursor: default !important;
    }
  }

  .checkmark:after {
    content: '';
    position: absolute;
  }

  input:checked ~ .checkmark:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
    border: 0;
  }

  .checkmark:after {
    content: '';
    top: 1px;
    left: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #898a8d; //inner circle
  }

  &.error {
    input ~ .checkmark {
      background-color: #f7e6eb;
      border: 1px solid #ab0033;
    }
  }
`

export const ChecboxContainer = styled.div`
  width: 100%;
`
