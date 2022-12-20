import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const TileLinks = styled.ul`
  display: flex;
  gap: 30px;
  border-radius: 10px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  width: 366px;
  height: 123px;
`

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`

export const CopyInfo = styled.div`
  display: flex;
`

export const Copy = styled.div`
  font-size: var(--fsLarge0);
  display: flex;
  column-gap: 20px;
  align-items: center;
  cursor: pointer;
`

export const CopyIcon = styled.span`
  display: block;
`
