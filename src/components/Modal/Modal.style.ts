import styled from '@emotion/styled'

export const SmallCard = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  column-gap: 40px;
  border-radius: 10px;
  background-color: var(--white);
  padding: 40px 30px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  flex: 1;

  > div {
    flex: 4;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  > span {
    flex: 2;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 3rem;
  }
`
