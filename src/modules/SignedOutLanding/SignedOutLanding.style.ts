import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

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
    padding: 15px 20px;
    border-radius: 3px;
    font-size: var(--fsMedium7);
    z-index: 2;
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Konsolev SemiBold';
    z-index: 2;
    position: relative;
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
  padding: 20px 170px;
  border-bottom: 1px solid var(--gallery);
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
  padding: ${({ padding }) => (padding ? padding : '80px 170px')};
`

export const MainSection = styled(PageSection)`
  padding: 60px 830px 80px 170px;
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
  /* background-color: var(--white); */
  /* border-radius: 3px 0 0 3px; */
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
  /* border-radius: 0 3px 3px 0; */
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
  font-size: 5rem;
  font-weight: normal;

  /* font-family: 'Konsolev SemiBold'; */
`

export const PageSubHeader = styled.h2`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
`

export const Text = styled.p`
  font-size: inherit;
  font-weight: normal;
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
  padding-bottom: 20px;
  align-items: center;
  padding: 40px;
  justify-content: space-between;
  flex-direction: column;
`

export const FooterMain = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid var(--gallery);
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: flex-end;
  align-items: flex-end;
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
`

export const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  list-style: none;

  li {
    font-size: var(--fsMedium8);
  }
`

export const InstagramFeed = styled.div`
  width: 480px;
  height: 160px;
  background-color: var(--pink); ;
`

export const FooterSubnav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: var(--fsSmall4);
  color: var(--juniper);
  padding-top: 10px;
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
  margin: 0 auto;
`

export const Image = styled.li`
  gap: 30px;
  display: flex;
  width: 450px;
  min-width: 450px;
  height: 450px;
  position: relative;
`

export const Profile = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;
  z-index: 1;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
`

export const Name = styled.p`
  margin-top: auto;
  color: var(--white);
  font-weight: bold;
  font-size: var(--fsMedium8);
`

export const Role = styled.p`
  color: var(--white);
  font-style: italic;
  font-size: var(--fsMedium8);
`

export const PaypalContainer = styled.div`
  margin-top: 70px;
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
    width: 440px;
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
