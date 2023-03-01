import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const MobileNav = styled.nav<{ isNavOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: var(--concrete);
  border-radius: 16px 0 0 16px;
  padding: 0;
  row-gap: 40px;
  display: flex;
  position: fixed;
  transform: ${({ isNavOpen }) => (isNavOpen ? 'translateX(0)' : `translateX(-100vw)`)};
  transition: all 0.2s ease-in-out;
  flex-direction: column;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow-y: auto;

  ${() => mediaQuery.laptop} {
    position: static;
    box-shadow: none;
    transform: translateX(0);
    box-shadow: none;
    overflow-y: none;
  }
`

export const MobileNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  padding: 45px 45px 65px;

  ${() => mediaQuery.laptop} {
    &:last-of-type {
      margin-top: auto;
    }
  }

  li {
    display: flex;
    flex-direction: column;

    a {
      padding: 8px 18px;
      border-radius: 8px;
      background-color: var(--white);
      font-size: var(--fsLarge1);
      background: transparent 8px center no-repeat;

      &.active,
      &:hover {
        font-weight: bold;
      }
    }
  }
`

export const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 30px 40px;
  background: var(--concrete);
  z-index: 10;
  column-gap: 20px;
`

export const LogoName = styled.span`
  font-size: var(--fsMedium6);
  margin-right: auto;
  font-weight: bold;
`

export const MobileNSubnav = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
  column-gap: 40px;
  margin-top: 100px;

  li {
    font-size: var(--fsMedium8);
    position: relative;

    &:first-of-type:after {
      content: '';
      position: absolute;
      width: 1px;
      background-color: var(--base);
      height: 18px;
      left: 84px;
    }
  }

  + ul {
    margin: auto 0 60px;
  }
`

export const CloseMenu = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${() => mediaQuery.laptop} {
    display: none;
  }
`

export const BlockButton = styled.div<{ margin?: string }>`
  position: relative;
  align-self: flex-start;
  margin: ${({ margin }) => margin ?? '0'};
  white-space: nowrap;

  a,
  span {
    display: inline-flex;
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    color: var(--pink);
    border: 3px solid var(--pink);
    padding: 10px 15px;
    border-radius: 3px;
    font-size: var(--fsSmall2);
    z-index: 2;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Konsolev SemiBold';
    z-index: 2;
    position: relative;
    text-decoration: none !important;

    ${() => mediaQuery.tablet} {
      padding: 15px 20px;
      letter-spacing: 1px;
      font-size: var(--fsMedium7);
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 5px;
    top: 3px;
    background-color: var(--pink);
    border-radius: 3px;
    z-index: 1;

    ${() => mediaQuery.tablet} {
      left: 12px;
      top: 8px;
    }
  }
`

export const Nav = styled.nav`
  background-color: var(--concrete);
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  border-bottom: 1px solid var(--porcelain);

  ${() => mediaQuery.laptop} {
    padding: 20px 12%;
  }

  ${() => mediaQuery.xlaptop} {
    padding: 20px 170px;
  }
`

export const Navigation = styled.ul`
  display: flex;
  column-gap: 25px;
  align-items: center;

  li {
    a.active {
      font-weight: bold;
    }
  }
`

export const SignUp = styled.li`
  a {
    background-color: var(--pink);
    color: var(--white);
    border-radius: 25px;
    font-size: var(--fsSmall5);
    padding: 10px 18px;
  }
`

export const PageSection = styled.section<{
  isSubscribe?: boolean
  rowGap?: number
  padding?: string
  position?: string
  white?: boolean
}>`
  background-color: ${({ white }) => (white ? 'var(--white)' : 'var(--concrete)')};
  background-repeat: no-repeat;
  background-position: ${({ position }) => (position ? position : 'right bottom')};
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '24px')};
  /* font-size: var(--fsLarge1); */
  font-size: var(--fsMedium8);
  padding: 138px 40px 40px;

  a {
    text-decoration: underline;
  }

  ${() => mediaQuery.xmobile} {
    padding: ${({ padding }) => (padding ? padding : '80px 12%')};
  }

  ${() => mediaQuery.tablet} {
    padding: ${({ padding }) => (padding ? padding : '80px 18%')};
  }
`

export const PageSectionContent = styled.div`
  padding-left: 0;

  ${() => mediaQuery.tablet} {
    padding-left: 75px;
  }
`

export const PageHeader = styled.h1`
  font-size: var(--fsVLarge4);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsVLarge6);
  }
`

export const PageSubHeader = styled.h2`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
`

export const Text = styled.p`
  font-weight: normal;
  font-size: var(--fsMedium8);
`

export const BoldText = styled.p`
  font-weight: bold;
`

export const NavItem = styled.li`
  a {
    font-size: var(--fsBase);
  }
`

export const Content = styled.main`
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  background-color: var(--white);
  display: flex;
  column-gap: 50px;
  row-gap: 20px;
  align-items: center;
  padding: 40px 5% 40px;
  justify-content: space-between;
  flex-direction: column;

  ${() => mediaQuery.laptop} {
    padding: 70px 12% 80px;
  }

  ${() => mediaQuery.xlaptop} {
    padding: 70px 170px 80px;
  }
`

export const FooterMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--gallery);
  row-gap: 55px;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    align-items: initial;
    padding-bottom: 50px;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: flex-end;
  align-items: center;

  ${() => mediaQuery.tablet} {
    align-items: flex-end;
  }
`

export const FooterNavHeader = styled.h2`
  font-size: var(--fsLarge1);
  border-bottom: 5px solid var(--nileBlue);
  width: auto;
  height: 35px;
  font-family: 'Konsolev SemiBold';
  width: auto;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  min-width: 150px;
  align-items: center;

  ${() => mediaQuery.tablet} {
    width: auto;
    align-items: flex-start;
  }
`

export const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  list-style: none;
  width: 100%;
  align-items: center;

  ${() => mediaQuery.tablet} {
    width: auto;
    align-items: flex-start;
  }

  li {
    font-size: var(--fsMedium8);
  }
`

export const InstagramFeed = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  column-gap: 8px;

  ${() => mediaQuery.tablet} {
    width: 480px;
    height: 160px;
  }
`

export const FooterSubnav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: var(--fsSmall4);
  color: var(--juniper);
  padding-top: 10px;
  row-gap: 20px;

  ${() => mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Subnav = styled.ul`
  display: flex;
  column-gap: 10px;
  align-items: center;

  @media (min-width: 430px) {
    column-gap: 35px;

    li {
      position: relative;
      :after {
        content: '';
        position: absolute;
        right: -18px;
        top: 2px;
        height: 10px;
        width: 1px;
        background-color: var(--juniper);
      }

      &:last-of-type {
        &::after {
          content: none;
        }
      }
    }
  }
`

export const TeamImages = styled.ul`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
`

export const Image = styled.li`
  gap: 30px;
  position: relative;
  max-width: 335px;

  div:nth-of-type(2) {
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.9;
      color: rgba(255, 255, 255, 1);

      + div {
        opacity: 0;
      }
    }
  }

  div:nth-of-type(1) {
    opacity: 1;
    transition: opacity 0.2s linear;
  }
`

export const Profile = styled.div`
  position: absolute;
  bottom: 5px;
  z-index: 1;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  padding: 25px 30px 30px;
`

export const HoverProfile = styled.div`
  position: absolute;
  inset: 0;
  bottom: 5px;
  z-index: 1;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  background-color: var(--nileBlue);
  border-radius: 26px;
  padding: 25px 30px 30px;
`

export const Name = styled.p`
  color: var(--white);
  font-weight: bold;
  font-size: var(--fsMedium8);
`

export const Role = styled.p`
  color: var(--white);
  font-style: italic;
  font-size: var(--fsSmall5);
`

export const Bio = styled(Role)`
  font-style: normal;
  font-size: var(--fsSmall5);
`

export const Donorbox = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ArticlesList = styled.ul`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  border-radius: 8px;
  width: 100%;

  ${() => mediaQuery.laptop} {
    /* width: 440px; */
    flex: 0 0 calc(50% - 70px);
  }
`

export const ArticleLink = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  cursor: pointer;
`

export const Intro = styled.h2`
  font-size: var(--fsLarge3);
  line-height: 1.4;
  font-family: 'Konsolev SemiBold';
  padding-top: 16px;
  margin-top: 10px;
  border-top: 1px solid var(--haze);
`

export const Title = styled.h3`
  font-size: var(--fsLarge1);
  font-weight: normal;
`
