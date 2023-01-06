import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const UserContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 5px;
  background-color: var(--pampas);
  position: relative;
`

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
`

export const SignedInUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
  background-color: var(--white);
  border-radius: 25px;
  padding: 8px 15px 8px 8px;
  box-shadow: 1px 1px 3px var(--gallery);

  img {
    border-radius: 50%;
  }
`

export const Notifications = styled(SignedInUser)`
  justify-content: center;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  padding: 8px;
  cursor: pointer;
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  img {
    border-radius: 50%;
    border: 2px solid var(--white);
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

export const ToSwitchLanding = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`

export const Burger = styled.div`
  position: absolute;
  background-color: var(--white);
  border-radius: 0 0 8px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  top: 0;
  left: 0;
  transform: rotate(90deg);
  padding-top: 5px;

  ${() => mediaQuery.laptop} {
    display: none;
  }
`
