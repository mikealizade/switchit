import styled from '@emotion/styled'
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
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;

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
  /* border: 1px solid var(--gallery); */
  padding: 0 15px;
  background-color: var(--sand);

  li {
    border-bottom: 1px solid var(--gallery);
    padding: 8px 0;

    &:last-child {
      border: 0;
    }
  }
`
