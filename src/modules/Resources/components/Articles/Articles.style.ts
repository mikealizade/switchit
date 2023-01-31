import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ArticlesList = styled.ul`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

export const ArticleData = styled.ul<{ align?: string; small?: boolean }>`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: auto;
  justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};
  font-size: ${({ small }) => (small ? 'var(--fsSmall3)' : 'initial')};
`

export const Data = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-size: inherit;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  border-radius: 8px;
  border: 1px solid var(--porcelain);
  padding: 22px;
  width: 100%;

  ${() => mediaQuery.laptop} {
    width: 395px;
  }
`

export const Title = styled.h3`
  font-size: var(--fsLarge1);
  font-weight: normal;
`

export const Intro = styled.p`
  font-size: var(--fsSmall7);
  line-height: 1.4;
  color: var(--juniper);
`

export const ArticleLink = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  cursor: pointer;
`

export const ResourcesTitle = styled.h2`
  font-size: var(--fsLarge4);
  font-family: 'Konsolev SemiBold';
  color: var(--slate);
  position: relative;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  align-items: center;
  color: inherit;
`

export const ShareArticle = styled.div`
  cursor: pointer;
  height: 18px;
`
