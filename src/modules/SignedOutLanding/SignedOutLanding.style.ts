import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const MobileNav = styled.nav<{ isNavOpen: boolean }>`
  width: 100vw;
  height: calc(100vh - 92px);
  background-color: var(--white);
  border-radius: 16px 0 0 16px;
  padding: 45px 45px 65px;
  row-gap: 100px;
  display: flex;
  position: fixed;
  transform: ${({ isNavOpen }) => (isNavOpen ? 'translateX(0)' : `translateX(-100vw)`)};
  transition: all 0.2s ease-in-out;
  flex-direction: column;
  z-index: 2;
  top: 92px;
  bottom: 0;
  left: 0;

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
        background-color: var(--nileBlue);
        color: var(--white);
      }
    }
  }
`

export const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-self: stretch;
  padding: 30px 40px;
`

export const MobileNSubnav = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
  column-gap: 40px;
  margin-top: auto;

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

  a,
  span {
    display: inline-flex;
    background-color: var(--white);
    justify-content: center;
    align-items: center;
    color: var(--pink);
    border: 3px solid var(--pink);
    padding: 12px 20px;
    border-radius: 3px;
    font-size: var(--fsSmall3);
    z-index: 2;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Konsolev SemiBold';
    z-index: 2;
    position: relative;
    text-decoration: none !important;

    ${() => mediaQuery.tablet} {
      padding: 15px 20px;
      font-size: var(--fsMedium7);
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 12px;
    top: 8px;
    background-color: var(--pink);
    border-radius: 3px;
    z-index: 1;
  }
`

export const Nav = styled.nav`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  border-bottom: 1px solid var(--gallery);

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

type ImageType = any

const getBgImage =
  () =>
  ({ isSubscribe, highfive }: ImageType) =>
    isSubscribe ? '/images/img_subscribe.jpg' : highfive ? '/images/img_highfive.jpg' : 'none'

export const PageSection = styled.section<{
  isSubscribe?: boolean
  highfive?: boolean
  rowGap?: number
  padding?: string
  position?: string
  grey?: boolean
}>`
  background-color: ${({ grey }) => (grey ? 'var(--alabaster)' : 'var(--white)')};
  background-repeat: no-repeat;
  background-image: url(${getBgImage()});
  background-position: ${({ position }) => (position ? position : 'right bottom')};
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '24px')};
  font-size: var(--fsLarge1);
  padding: 40px;

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

export const MainSection = styled(PageSection)`
  padding: 60px 830px 80px 300px;

  ${() => mediaQuery.xmobile} {
    padding: 60px 830px 80px 12%;
  }

  ${() => mediaQuery.tablet} {
    padding: 60px 830px 80px 18%;
  }
`

export const PageSectionContent = styled.div`
  padding-left: 0;

  ${() => mediaQuery.tablet} {
    padding-left: 75px;
  }
`

export const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 69px;
  border: 3px solid var(--pink);
  border-radius: 3px;
  width: 462px;
  position: relative;
  z-index: 2;
  font-size: var(--fsMedium6);

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 12px;
    top: 8px;
    background-color: var(--pink);
    border-radius: 3px;
    z-index: 1;
  }
`

export const NewsletterThanks = styled.div`
  color: var(--pink);
  font-size: var(--fsLarge1);
  font-weight: bold;
`

export const EmailField = styled.input`
  color: var(--pink);
  border: 0;
  padding: 16px;
  font-size: var(--fsLarge1);
  width: 320px;
  position: relative;
  z-index: 2;
  height: 63px;

  &::placeholder {
    color: var(--gallery);
  }

  &:focus-within {
    outline: 0;
  }
`

export const EmailButton = styled.button`
  color: var(--pink);
  background-color: var(--white);
  border: 0;
  border-left: 3px solid var(--pink);
  font-family: 'Konsolev SemiBold';
  padding: 16px 25px;
  font-size: var(--fsLarge1);
  letter-spacing: 0.5px;
  height: 63px;
  position: relative;
  z-index: 2;
`

export const HomePageHeader = styled.h1`
  font-size: 6rem;
  font-family: 'Konsolev SemiBold';
`

export const PageHeader = styled.h1`
  font-size: var(--fsVLarge6);

  ${() => mediaQuery.tablet} {
    font-size: 5rem;
  }
`

export const PageSubHeader = styled.h2`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
`

export const Text = styled.p`
  font-weight: normal;
  font-size: var(--fsLarge0);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge1);
  }
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
  background-color: var(--white);
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
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
  width: 100px;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
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
  column-gap: 35px;
  align-items: center;

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
`

export const TeamImages = styled.ul`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;

  /* display: grid;
  grid-template-columns: repeat(auto-fill, 100%);
  gap: 30px;

  > span {
    border-radius: 26px;
  } */

  /* ${() => mediaQuery.laptop} {
    grid-template-columns: repeat(auto-fill, 335px);
  } */
`

export const Image = styled.li`
  gap: 30px;
  position: relative;
  max-width: 335px;

  div:nth-of-type(1) {
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.7;
      color: rgba(255, 255, 255, 1);

      + div {
        opacity: 0;
      }
    }
  }

  div:nth-of-type(2) {
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
