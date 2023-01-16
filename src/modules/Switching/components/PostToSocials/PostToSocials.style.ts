import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const PostsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-wrap: wrap;
`

export const FollowUs = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-right: auto;

  + button:first-of-type:not(:only-child) {
    margin: 0;
  }
`

export const Item = styled.li`
  font-weight: bold;
  margin-right: 20px;
`
