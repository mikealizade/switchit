import styled from '@emotion/styled'

export const HelpContainer = styled.div`
  [class*='MuiTypography'] {
    font-family: 'Konsolev SemiBold';
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
    background-color: var(--pink);
    height: 3px;
  }

  .MuiTabs-flexContainer {
    display: flex;
    justify-content: flex-start;
    column-gap: ${({ wide }) => (wide ? '10px' : '30px')};
  }

  .tabs-menu {
    margin-bottom: 50px;

    button {
      font-size: var(--fsMedium7);
      font-family: 'Konsolev Regular';
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: 0;
      padding: 2px 6px;

      &.Mui-selected {
        color: var(--pink);
      }
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
`
