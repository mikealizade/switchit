import styled from '@emotion/styled'
import Link from 'next/link'
import { Button } from '@components/Button/Button.style'
import { mediaQuery } from '@utils/functions'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  row-gap: 25px;

  ${() => mediaQuery.tablet} {
    padding: 40px;
  }
`

export const ColumnContainer = styled.section`
  display: flex;
  column-gap: 25px;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;
  flex: 1;

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const HelpColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  column-gap: 25px;
  flex-wrap: wrap;
  row-gap: 25px;
  position: relative;
  flex: 1;

  ${() => mediaQuery.xlaptop} {
    flex-direction: row;
  }

  ${() => mediaQuery.xlaptop} {
    row-gap: inherit;
  }
`

export const Column = styled.div<{ flex?: number }>`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  flex: ${({ flex }) => (flex ? flex : '3')};
  min-width: 400px;

  + section {
    flex: 4;
    gap: 20px;

    > section {
      flex: 1;
    }
  }
`

export const ProfileColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 3;
  min-width: 400px;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    > section {
      width: 50%;
    }
  }

  @media (min-width: 1600px) {
    flex-direction: column;

    > section {
      width: 100%;
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

export const LargeTitle = styled.h2`
  font-size: var(--fsLarge4);
`

export const TitleLink = styled(Title)`
  cursor: pointer;
`

export const Form = styled.form<{ row?: boolean }>`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  row-gap: 70px;
  flex: 1;

  fieldset {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    justify-content: space-between;

    ${() => mediaQuery.tablet} {
      flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    }
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
  /* box-shadow: 1px 3px 5px var(--gallery); */
  color: var(--white);
  border: 0;
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
  width: max-content;
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

export const TileLinks = styled.ul<{ isColumn?: boolean }>`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  column-gap: 50px;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 46px;
  flex: 1;
  min-width: 365px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const Anchor = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  /* padding: 50px; */
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  height: 85px;

  ${() => mediaQuery.tablet} {
    height: 235px;
  }
`

export const Div = styled.div<{ rowGap?: number; flex?: string | number; width?: string }>`
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '20px')};
  flex: ${({ flex }) => flex ?? 'none'};
  justify-content: flex-start;
  /* overflow: auto; */

  ${() => mediaQuery.tablet} {
    width: ${({ width }) => (width ? width : 'auto')};
  }
`

export const NarrowContent = styled(Div)`
  margin: 0 auto;
`

export const Row = styled.div<{ wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'initial')};
  flex: 1;
`

export const BoldLink = styled.a`
  font-weight: bold;
  color: var(--pink);
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export const PlainInput = styled.input`
  padding: 5px 10px;
  border: 1px solid var(--gallery);
  border-radius: 10px;
`

export const CopyIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 30px;

  &:hover {
    opacity: 0.7;
  }
`

export const CopyIconHover = styled.span`
  display: none;
`

export const TabsContainer = styled(Div)`
  width: 100%;
  align-self: center;
  width: 100% !important;
`

export const Header = styled.h3`
  font-size: var(--fsMedium8);
  line-height: 1.4;
`

export const Subheader = styled.h3`
  font-size: var(--fsMedium7);
  font-family: 'Konsolev Regular';
  font-weight: bold;
  line-height: 1.2;

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge1);
    font-weight: normal;
  }
`

export const Buttons = styled.div<{ align?: string }>`
  display: flex;
  column-gap: 20px;
  row-gap: 10px;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: space-between;

  ${() => mediaQuery.tablet} {
    justify-content: ${({ align }) =>
      align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'space-between'};
    flex-direction: row;
    padding: 0;
  }
`

export const TextLink = styled.span<{ isGrey?: boolean }>`
  text-decoration: underline;
  cursor: pointer;
  color: ${({ isGrey }) => (isGrey ? 'var(--grey)' : 'initial')};

  p span {
    color: var(--nileBlue);
  }
`

export const AnchorLink = styled.a`
  text-decoration: underline;
  display: inline;
`

export const BulletList = styled.ul<{ fontsize?: number }>`
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 20px;
  font-size: ${({ fontsize }) => (fontsize ? `${fontsize}px` : 'inherit')};
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const OrderedList = styled.ol<{ app?: boolean }>`
  counter-reset: item;
  list-style-position: inside;

  li {
    margin-top: 15px;
    font-size: var(--fsMedium8);
    display: flex;
    flex-direction: column;

    > a {
      word-break: break-word;
    }

    ${() => mediaQuery.tablet} {
      display: block;
    }

    p {
      padding: 10px 0 0 0;
    }
  }

  li:before,
  ol li:before,
  ol ol li:before,
  ol ol ol li:before {
    content: counters(item, '.') ' ';
    counter-increment: item;
    width: 75px;
    display: inline-block;
    margin-left: 0;

    ${() => mediaQuery.tablet} {
      margin-left: ${({ app }) => (app ? '0' : '-7.5rem')};
    }
  }
`

export const CopyContainer = styled.div<{ bold?: boolean; display?: string }>`
  display: ${({ display }) => display ?? 'inline'};
  flex-direction: column;
  row-gap: 15px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  p {
    font-size: var(--fsMedium8);
  }
`

export const ParagraphCopy = styled.p<{ bold?: boolean; display?: string }>`
  display: ${({ display }) => display ?? 'inline'};
  flex-direction: column;
  row-gap: 15px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`

export const Text = styled.p`
  font-size: var(--fsBase);
`

export const LoaderContainer = styled.div<{ height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px` || 'auto'};
`

export const GreenPill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px 15px;
  background-color: var(--seaSick);
  border-radius: 10px;
  color: var(--nileBlue);
`

export const PaypalContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: flex-start;
`

export const TableContainer = styled.div`
  max-width: 100%;
  overflow: scroll;
`

export const BasicTable = styled.table`
  border-left: 1px solid;
  border-top: 1px solid;
  margin: 30px 0;

  th,
  td {
    width: 33%;
    border-bottom: 1px solid;
    border-right: 1px solid;
    padding: 5px 10px;
  }
`
