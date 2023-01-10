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

    ${() => mediaQuery.tablet} {
      padding: 50px;
    }
  }

  [contenteditable='true'] {
    background-color: var(--white);
    border: 1px solid var(--sushi);
  }
`
