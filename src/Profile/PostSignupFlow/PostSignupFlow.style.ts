import styled from '@emotion/styled'

export const PostSignupFlowContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  min-width: 100vw;
  min-height: 100vh;
  background: #f2f0ed url(https://www.exact-events.co.uk/assets/img/switchit_login_bg) no-repeat
    right center;
  background-size: 50%;

  > span {
    position: fixed !important;
    left: 50px;
    top: 50px;
    z-index: 1;
  }

  button[class^='primary'] {
    width: 100%;
  }
`

export const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e9e9e9;
  width: 100%;
  padding: 75px;
  justify-content: flex-start;
  margin: 0;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const SwiperHeader = styled.h1`
  margin: 0 0 30px;

  ~ button {
    &:last-of-type {
      margin-top: 50px;
    }
  }
`
