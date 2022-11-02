import styled from '@emotion/styled'

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  margin-top: 50px;
`

export const Button = styled.button`
  padding: 10px 30px;
  min-width: 118px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Konsolev SemiBold', sans-serif;
  font-size: inherit;
  line-height: 1.75;
  border-radius: 10px;
  letter-spacing: 0.5px;
  border: 0;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) => (className === 'primary' ? 'var(--pink)' : 'lightgrey')};
  color: var(--white);

  &[type='reset'] {
    background-color: #e2dfda;
    color: initial;
  }

  &:disabled {
    background-color: #e2dfda;
    color: #222;
    cursor: default;
    pointer-events: none;
  }
`

export const TextButton = styled.button`
  padding: 6px 16px;
  min-width: 64px;
  font-family: 'Konsolev SemiBold', sans-serif;
  font-weight: 500;
  font-size: inherit;
  line-height: 1.75;
  border: 0;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: var(--white);
  color: var(--pink);

  &:disabled {
    background-color: #fff;
    color: inherit;
    cursor: default;
    pointer-events: none;
  }
`
