import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
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

export const Testimonial = styled.div`
  justify-content: center;

  [contenteditable] {
    min-height: 235px;
    border: 1px solid var(--base);
    border-radius: 10px;
    padding: 20px;

    &.disabled {
      border-color: var(--haze);
      background-color: var(--alabaster);
    }
  }
  [contenteditable='true'] {
    border: 2px solid var(--sushi);
    outline: 2px;
    padding: 19px;
  }
`

export const TestimonialImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 235px;
  border: 1px solid var(--base);
  border-radius: 10px;
  padding: 20px;
`

export const VideoImage = styled(TestimonialImage)`
  min-height: 50px;

  ${() => mediaQuery.tablet} {
    min-height: 235px;
  }
`
