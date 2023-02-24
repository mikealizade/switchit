import styled from '@emotion/styled'

export const SwitchingFriends = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 1;
`

export const Friends = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
`

export const Friend = styled.li`
  img {
    border-radius: 50%;
  }
`

export const Total = styled.span`
  color: initial;
  margin-right: auto;
  padding-left: 15px;
  display: inline-flex;
`

export const FriendsHint = styled.p`
  margin-top: auto;
  text-align: center;
`
