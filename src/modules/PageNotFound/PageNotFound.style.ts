import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Content = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 150px 50px 50px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  background: #abbabd url('/images/img_404.jpg') no-repeat right 20% bottom 10%;
  background-size: 65%;

  ${() => mediaQuery.laptop} {
    padding: 200px 20%;
    row-gap: 40px;
    background: #abbabd url('/images/img_404.jpg') no-repeat right 20% center;
    background-size: 35%;
  }

  > div {
    width: 100%;
    row-gap: 30px;

    ${() => mediaQuery.laptop} {
      width: 450px;
      row-gap: 80px;
    }
  }
`

export const Header = styled.h1`
  font-size: 45px;

  ${() => mediaQuery.laptop} {
    font-size: 72px;
  }
`

export const Text = styled.p`
  font-size: var(--fsLarge2);

  ${() => mediaQuery.laptop} {
    font-size: var(--fsVLarge6);
  }
`
