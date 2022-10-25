import styled from '@emotion/styled'

export const UserContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:nth-of-type(2) {
    margin-left: auto;
    margin-right: 30px;
  }
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  img {
    border-radius: 50%;
    border: 2px solid var(--white) !important;
  }
`

export const Score = styled.div`
  color: var(--pink);
`

export const UserName = styled.span`
  text-transform: capitalize;
`
