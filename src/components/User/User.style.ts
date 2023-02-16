import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const UserContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  row-gap: 20px;
  background-color: var(--nileBlue);
  position: relative;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    padding: 40px 40px 5px;
    background-color: var(--pampas);
  }
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
    min-width: 30px;
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
  color: var(--sushi);
  font-weight: bold;
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
export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`

export const SectionName = styled.div`
  color: var(--white);
  font-size: var(--fsMedium9);
  font-weight: bold;
  text-transform: capitalize;
`

export const Burger = styled.div`
  position: absolute;
  border-radius: 0 0 8px 0;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  top: 20px;
  left: 20px;
  padding-top: 5px;

  ${() => mediaQuery.laptop} {
    display: none;
  }
`
