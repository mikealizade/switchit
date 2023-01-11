import styled from '@emotion/styled'
import { Div } from '@styles/common.style'
import { mediaQuery } from '@utils/functions'

export const BankFilter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  border-radius: 10px;
  background-color: #e8eced;
  padding: 25px;
  /* ${() => mediaQuery.laptop} {
    display: flex;
  } */
`

export const AccountList = styled.ul`
  display: flex;
  column-gap: 18px;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 15px;

  &:not(:first-of-type) {
    flex-direction: column;

    ${() => mediaQuery.tablet} {
      flex-direction: row;
    }
  }

  ${() => mediaQuery.tablet} {
    row-gap: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  li:first-of-type {
    width: 100%;

    ${() => mediaQuery.tablet} {
      width: auto;
    }
  }

  h3 {
    font-size: var(--fsSmall9);
  }
`

export const AccountTypeButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  place-items: center;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? 'var(--nileBlue)' : '#e8eced')};
  padding: 10px;
  color: ${({ isActive }) => (isActive ? 'var(--white)' : 'var(--nileBlue)')};
  font-size: var(--fsSmall3);
  border: 1px solid var(--nileBlue);
  cursor: pointer;
`

export const Label = styled.label`
  display: flex;
  column-gap: 6px;
`

export const Checkbox = styled.span<{ isActive?: boolean }>`
  display: inline-block;
  border-radius: 4px;
  width: 15px;
  min-width: 15px;
  height: 15px;
  background-color: ${({ isActive }) => (isActive ? 'var(--nileBlue)' : 'var(--white)')};
  border: 1px solid var(--nileBlue);
`

export const ClearFiltersButton = styled(AccountTypeButton)`
  align-self: flex-start;
  background-color: #bed3d9;
  border: 0;
  align-self: flex-end;
`

export const BanksTable = styled.table`
  border-collapse: collapse;
  th,
  td {
    padding: 25px 10px;
    text-align: left;
    border-top: 1px solid var(--gallery);
    font-size: var(--fsSmall5);
  }

  th {
    border: 0;
    width: 10%;

    &:first-of-type,
    &:last-of-type {
      width: 15%;
    }
  }

  td {
    &:nth-of-type(2) {
      font-style: italic;
    }
  }
`

export const ExpandableRow = styled.tr<{ isExpanded?: boolean }>`
  display: ${({ isExpanded }) => (isExpanded ? 'table-row' : 'none')};

  td {
    border: 0;
  }
`

export const BankMeta = styled.ul`
  padding: 0 15px;

  li {
    padding: 10px 0;

    &:last-child {
      border: 0;
    }
  }
`

export const BanksList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`

export const BanksListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: var(--white);
  padding: 15px 0;

  button {
    align-self: center;
  }
`

export const BankItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 12px;
  border-bottom: 1px solid var(--haze);
  padding: 0 15px 15px;
  font-size: var(--fsSmall4);
`

export const BankItemName = styled.h3`
  font-weight: bold;
`

export const BankItemHeaderDetails = styled.p`
  font-style: italic;
`

export const BankItemDetails = styled.ul`
  display: flex;
  column-gap: 10px;
  justify-content: space-evenly;
  border-bottom: 1px solid var(--pampas);
  padding: 0 15px 15px;
`

export const BankDetailsItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  font-size: var(--fsSmall5);
`

export const DetailHeader = styled.div`
  font-weight: bold;
`
