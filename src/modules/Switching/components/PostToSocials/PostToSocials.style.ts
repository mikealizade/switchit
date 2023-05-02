import styled from '@emotion/styled'

export const PostsContainer = styled.ul`
  gap: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));

  li {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }
`

export const PostContent = styled.a`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  span {
    flex: 1;
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

export const ImageContainer = styled.div`
  background-color: var(--white);
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
`
