import styled from 'styled-components'

export const Button = styled.button`
  padding: 6px 16px;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: 0;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) => (className === 'primary' ? 'var(--pink)' : 'beige')};
  color: var(--white);

  /* a,
  &.primary {

    &:focus,
    &:hover {
      opacity: 0.5;
    }
  } */

  &:disabled {
    background-color: #ccc;
    color: #222;
    cursor: default;
    pointer-events: none;
  }
`
