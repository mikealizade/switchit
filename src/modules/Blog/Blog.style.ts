import styled from '@emotion/styled'
import { Card } from '@components/Card/Card.style'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 50px;
`

export const BlogCard = styled(Card)`
  row-gap: 40px;
`

export const PostTitle = styled.h2`
  font-size: var(--fsVLarge3);
`

export const PostDate = styled.h3`
  font-size: var(--fsVLarge0);
`

export const PostText = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
