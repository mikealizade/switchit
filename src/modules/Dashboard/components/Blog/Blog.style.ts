import styled from '@emotion/styled'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  flex: 1;
  cursor: pointer;
`

export const Details = styled.div`
  display: flex;
  column-gap: 25px;
  align-items: flex-start;
`

export const Summary = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
