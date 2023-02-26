import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  row-gap: 40px;
`

export const Button = styled.button<{ size?: string; bold?: boolean }>`
  padding: ${({ size }) => (size === 'normal' ? '7px 25px' : '5px 20px')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: ${({ size }) =>
    size === 'normal' ? '`Konsolev Regular`, sans-serif' : '`Konsolev SemiBold`, sans-serif'};
  font-size: var(--fsSmall4);
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  line-height: 1.75;
  border-radius: 25px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) =>
    className === 'primary blue'
      ? 'var(--nileBlue)'
      : className === 'primary'
      ? 'var(--pink)'
      : className === 'secondary' || className === 'secondary blue'
      ? 'var(--white)'
      : 'lightgrey'};
  border: 1px solid
    ${({ className }) =>
      className === 'primary blue' || className === 'secondary blue'
        ? 'var(--nileBlue)'
        : className === 'primary' || className === 'secondary'
        ? 'var(--pink)'
        : 'lightgrey'};
  color: ${({ className }) =>
    className?.includes('primary')
      ? 'var(--white)'
      : className === 'secondary blue'
      ? 'var(--nileBlue)'
      : className === 'secondary'
      ? 'var(--pink)'
      : 'var(--white)'};

  ${() => mediaQuery.tablet} {
    font-size: ${({ size }) =>
      size === 'small'
        ? 'var(--fsSmall4)'
        : size === 'normal'
        ? 'var(--fsLarge0)'
        : 'var(--fsBase)'};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

export const TextButton = styled.button`
  padding: 0;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: ${({ size }) =>
    size === 'normal' ? '`Konsolev Regular`, sans-serif' : '`Konsolev SemiBold`, sans-serif'};
  font-size: ${({ size }) => (size === 'normal' ? 'inherit' : 'var(--fsMedium7)')};
  line-height: 1.75;
  border-radius: 25px;
  letter-spacing: 0.5px;
  text-align: center;
  outline: none;
  cursor: pointer;
  justify-content: center;
  background-color: ${({ className }) =>
    className === 'primary blue'
      ? 'var(--nileBlue)'
      : className === 'primary'
      ? 'var(--pink)'
      : className === 'secondary' || className === 'secondary blue'
      ? 'var(--white)'
      : 'lightgrey'};
  border: 1px solid
    ${({ className }) =>
      className === 'primary blue' || className === 'secondary blue'
        ? 'var(--nileBlue)'
        : className === 'primary' || className === 'secondary'
        ? 'var(--pink)'
        : 'lightgrey'};
  color: ${({ className }) =>
    className?.includes('primary')
      ? 'var(--white)'
      : className === 'secondary blue'
      ? 'var(--nileBlue)'
      : className === 'secondary'
      ? 'var(--pink)'
      : 'var(--white)'};

  &:disabled {
    background-color: #e2dfda;
    color: #222;
    cursor: default;
    pointer-events: none;
    border: 1px solid transparent;
  }
`
