import styled from '@emotion/styled'

export const FriendsFeed = styled.div`
  display: flex;
`

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 30px;

  > span {
    border-radius: 50%;
  }
`

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  row-gap: 10px;
`

export const Name = styled.h3`
  font-size: var(--fsBase);
  text-transform: capitalize;
  font-weight: normal;
`

export const Username = styled.p`
  font-size: var(--fsSmall5);
  color: var(--slate);
`

export const FriendsSearchContainer = styled.div`
  position: relative;

  > span {
    position: absolute !important;
    left: 18px;
    top: 10px;
  }
`

export const FriendsSearch = styled.input`
  padding: 10px 10px 10px 50px;
  border: 1px solid var(--pampas);
  border-radius: 10px;
  font-size: var(--fsSmall5);
  width: 100%;

  &::placeholder {
    color: var(--gallery);
  }
`

export const Connected = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 15px;
`

export const ConnectedTotal = styled.span`
  font-size: var(--fsSmall5);
  color: var(--overcast);
  font-weight: bold;
`
