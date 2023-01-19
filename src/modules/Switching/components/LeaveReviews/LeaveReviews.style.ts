import styled from '@emotion/styled'
export const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-around;
  flex-wrap: wrap;
`

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
export const GoogleCopy = styled.div`
  font-size: var(--fsSmall3);
  font-style: italic;
  position: absolute;
  bottom: 15px;
  width: 80%;
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
