import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
  }

  ${() => mediaQuery.laptop} {
    flex-direction: column;
  }

  ${() => mediaQuery.xlaptop} {
    flex-direction: row;
  }

  > div {
    flex: 1;
  }
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
  width: 85%;
  display: none;

  ${() => mediaQuery.tablet} {
    display: inline-block;
    position: absolute;
    bottom: 15px;
  }
`
export const GoogleCopyMobile = styled.div`
  font-size: var(--fsSmall3);
  font-style: italic;
  width: 85%;
  margin-top: -15px;

  ${() => mediaQuery.tablet} {
    display: none;
  }
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
