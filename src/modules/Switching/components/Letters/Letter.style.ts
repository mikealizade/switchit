import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  [contenteditable] {
    min-height: 235px;
    border: 1px solid var(--haze);
    background-color: var(--concrete);
    border-radius: 10px;
    padding: 20px;
    white-space: pre-wrap;

    ul {
      list-style: disc;
      list-style-position: inside;
      display: flex;
      flex-direction: column;
      row-gap: 12px;
      margin: 10px 0;
    }

    ${() => mediaQuery.tablet} {
      padding: 50px;
    }
  }

  [contenteditable='true'] {
    background-color: var(--white);
    border: 1px solid var(--sushi);
  }
`
