import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const HelpContainer = styled.div`
  [class*='MuiTypography'] {
    font-family: 'Konsolev SemiBold';
    padding-right: 15px;
    font-size: var(--fsBase);

    ${() => mediaQuery.tablet} {
      font-size: var(--fsMedium8);
    }
  }

  [class*='MuiAccordionDetails'],
  [class*='MuiAccordionDetails'] h3,
  [class*='MuiAccordionDetails'] li {
    font-size: var(--fsBase);
  }
`

export const Tabs = styled.div<{ wide?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: initial;
  overflow-y: auto;
  flex: 1;

  .MuiTabs-indicator {
    display: none;

    ${() => mediaQuery.tablet} {
      display: block;
      background-color: var(--pink);
      height: 3px;
    }
  }

  .MuiTabs-flexContainer {
    display: flex;
    justify-content: flex-start;
    column-gap: ${({ wide }) => (wide ? '10px' : '30px')};
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    ${() => mediaQuery.tablet} {
      gap: 30px;
    }
  }

  .tabs-menu {
    margin-bottom: 50px;

    button {
      font-family: 'Konsolev Regular';
      background-color: var(--pink);
      border-radius: 16px;
      color: var(--white);
      padding: 4px 16px;
      font-size: var(--fsMedium5);
      text-transform: capitalize;
      min-height: 38px;

      ${() => mediaQuery.tablet} {
        font-size: var(--fsMedium7);
        font-weight: bold;
        letter-spacing: 0;
        padding: 2px 6px;
        min-height: 40px;
        border-radius: 0;
        background-color: transparent;
        color: #00000099;
      }

      &.Mui-selected {
        color: var(--white);
        font-weight: bold;

        ${() => mediaQuery.tablet} {
          color: var(--pink);
        }
      }
    }

    ~ div {
      min-height: 237px;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    flex: 1;
  }
`
