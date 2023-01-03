import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { Button } from '@components/Button/Button.style'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 25px;
`

export const NarrowContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 75%;
  margin: 0 auto;
  row-gap: 30px;
`

export const ColumnContainer = styled.section`
  display: flex;
  column-gap: 25px;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  flex: 3;
  min-width: 400px;

  + section {
    flex: 4;
    gap: 20px;

    > section {
      flex: 1;
    }
  }
`

export const Title = styled.h2`
  font-size: var(--fsBase);
  color: var(--slate);
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const Form = styled.form<{ row?: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  row-gap: 70px;
  flex: 1;

  fieldset {
    display: flex;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    row-gap: 35px;
    justify-content: space-between;
  }

  label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  input {
    border: 1px solid var(--grey);
  }
`

export const ShareButton = styled(Button)<{ small?: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: var(--pink);
  padding: ${({ small }) => (small ? '10px 20px' : '13px 30px')};
  align-self: center;
  align-items: center;
  text-align: left;
  width: ${({ small }) => (small ? '160px' : '200px')};
  border-radius: 20px;
  font-size: var(--fsLarge0);
  font-weight: bold;
  box-shadow: 1px 3px 5px var(--gallery);
  color: var(--white);
`

export const Ellipsis = styled.div`
  position: absolute;
  bottom: auto;
  right: 0;
  cursor: pointer;
  font-size: var(--fsLarge);
`

export const ButtonContainer = styled.div<{ column?: boolean; alignLeft?: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-left: ${({ alignLeft }) => (alignLeft ? '0' : 'auto')};
  flex: 1;
  column-gap: 30px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  row-gap: 15px;

  button {
    align-self: ${({ alignLeft }) => (alignLeft ? 'flex-start' : 'flex-end')};
  }
`

export const Label = styled.label`
  display: flex;
  column-gap: 15px;
  padding: 20px 0;
  width: 100%;
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

export const TileLinks = styled.ul`
  display: flex;
  column-gap: 50px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 50px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 50px;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); */
  border: 2px solid var(--overcast);
  /* min-width: 366px; */
  height: 235px;
`

export const Div = styled.div<{ rowGap?: number; flex?: string | number }>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '20px')};
  flex: ${({ flex }) => flex ?? 'none'};
  justify-content: flex-start;
`
