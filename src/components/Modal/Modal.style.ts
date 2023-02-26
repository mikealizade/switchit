import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--black);
  opacity: 0.5;
  z-index: 10;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding-top: 32px;
  width: 100%;
  column-gap: 20px;
  border-top: 1px solid var(--lightGrey);
`

export const ModalContent = styled.section`
  background: #ffffff;
  position: fixed;
  inset: 10%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  border-radius: 15px;
  padding: 60px 25px;
  row-gap: 30px;
  z-index: 10;

  ${() => mediaQuery.laptop} {
    left: 20%;
    right: 20%;
    padding: 60px;
  }

  ${() => mediaQuery.xlaptop} {
    inset: 15%;
    left: 30%;
    right: 30%;
    padding: 60px;
  }

  h2 {
    font-size: var(--fsMedium9);
    font-family: 'Konsolev SemiBold';

    ${() => mediaQuery.tablet} {
      font-size: var(--fsMedium9);
    }
  }
`
export const ModalBody = styled.div`
  font-size: var(--fsMedium9);
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`
