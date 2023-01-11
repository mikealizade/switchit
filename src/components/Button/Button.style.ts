import styled from '@emotion/styled'

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  row-gap: 40px;
`

export const Button = styled.button<{ size?: string }>`
  padding: ${({ size }) => (size === 'normal' ? '7px 25px' : '5px 20px')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: ${({ size }) =>
    size === 'normal' ? '`Konsolev Regular`, sans-serif' : '`Konsolev SemiBold`, sans-serif'};
  font-size: ${({ size }) => (size === 'normal' ? 'inherit' : 'var(--fsBase)')};
  line-height: 1.75;
  border-radius: 25px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) =>
    className === 'primary'
      ? 'var(--pink)'
      : className === 'secondary'
      ? 'var(--white)'
      : 'lightgrey'};
  border: 1px solid
    ${({ className }) =>
      className === 'primary' || className === 'secondary' ? 'var(--pink)' : 'lightgrey'};
  color: ${({ className }) =>
    className === 'primary'
      ? 'var(--white)'
      : className === 'secondary'
      ? 'var(--pink)'
      : 'var(--white)'};

  &[type='reset'] {
    background-color: #e2dfda;
    color: initial;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
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
    cursor: not-allowed;
  }
`

export const TextLink = styled.div<{ size?: string }>`
  padding: ${({ size }) => (size === 'normal' ? '7px 25px' : '5px 20px')};
  /* min-width: 118px; */
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: ${({ size }) =>
    size === 'normal' ? '`Konsolev Regular`, sans-serif' : '`Konsolev SemiBold`, sans-serif'};
  font-size: ${({ size }) => (size === 'normal' ? 'inherit' : 'var(--fsMedium7)')};
  line-height: 1.75;
  border-radius: 25px;
  letter-spacing: 0.5px;
  text-align: center;
  /* border: 0; */
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) =>
    className === 'primary'
      ? 'var(--pink)'
      : className === 'secondary'
      ? 'var(--white)'
      : 'lightgrey'};
  border: 1px solid
    ${({ className }) =>
      className === 'primary' || className === 'secondary' ? 'var(--pink)' : 'lightgrey'};
  color: ${({ className }) =>
    className === 'primary'
      ? 'var(--white)'
      : className === 'secondary'
      ? 'var(--pink)'
      : 'lightgrey'};

  &:disabled {
    background-color: #e2dfda;
    color: #222;
    cursor: default;
    pointer-events: none;
    border: 1px solid transparent;
  }
`
