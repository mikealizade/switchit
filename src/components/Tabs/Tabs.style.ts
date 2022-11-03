import styled from '@emotion/styled'

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  flex: initial;

  .MuiTabs-flexContainer {
    justify-content: space-between;
  }

  .MuiTabs-indicator {
    background-color: var(--pink);
    height: 3px;
  }

  .profile-tabs {
    margin-bottom: 60px;
    button {
      font-size: var(--fsBase);
      font-family: 'Konsolev Regular';
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
