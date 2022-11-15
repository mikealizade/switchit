import styled from '@emotion/styled'

export const News = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const NewsList = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px var(--haze);
  padding: 20px;
`

export const Title = styled.h3`
  font-size: var(--fsMedium8);
`

export const Intro = styled.p`
  font-size: var(--fsSmall5);
`

export const Download = styled.a`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const ResourcesTitle = styled.h2`
  font-size: var(--fsMedium8);
  color: var(--slate);
  position: relative;
  display: flex;
  justify-content: flex-start;
  column-gap: 30px;
  align-items: center;
  color: inherit;
`
