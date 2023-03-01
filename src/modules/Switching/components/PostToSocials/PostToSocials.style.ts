import styled from '@emotion/styled'

export const PostsContainer = styled.ul`
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));

  li {
    display: flex;
    align-self: stretch;
    min-height: 520px;
  }
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
