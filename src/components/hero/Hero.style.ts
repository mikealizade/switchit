import styled from '@emotion/styled'

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  border-radius: 10px;
  background-color: var(--white);
  padding: 30px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);

  > span {
    flex: 1;
  }

  > button {
    flex: 1;
    align-self: flex-end;
  }
`

export const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  flex: 5;
`

export const Title = styled.h2`
  font-size: var(--fsVLarge6);
`

export const Text = styled.p`
  font-size: var(--fsLarge0);
`
