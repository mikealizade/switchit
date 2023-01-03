import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`
export const VideoContainer = styled(CopyContainer)`
  row-gap: 20px;
`

export const CopyHeader = styled.h4`
  font-size: var(--fsMedium8);
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
