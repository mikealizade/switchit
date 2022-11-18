import styled from '@emotion/styled'

export const UserContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 10px;
  background-color: var(--pampas);
  min-height: 104px;

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

export const WelcomeMsg = styled.div`
  font-size: var(--fsLarge3);
`

export const Score = styled.div`
  color: var(--pink);
  display: flex;
  align-items: center;
  column-gap: 10px;

  span {
    width: 30px !important;
  }
`

export const UserName = styled.span`
  text-transform: capitalize;
`
