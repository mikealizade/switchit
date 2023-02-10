import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'

export const Content = styled.main`
  background-color: #f2f0ed;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;
  row-gap: 50px;
`

export const ArticleContent = styled.div`
  display: flex;
  column-gap: 120px;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  ${() => mediaQuery.xlaptop} {
    /* width: 395px; */
    flex-direction: row;
  }
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex: 7;
  row-gap: 30px;

  h2 {
    font-size: var(--fsLarge0);
    font-weight: normal;
  }

  h3 {
    font-size: var(--fsMedium8);
    font-weight: normal;
  }

  blockquote {
    padding: 30px;
    border-radius: 10px;
    background-color: var(--alabaster);
    display: flex;
    flex-direction: column;
    row-gap: 18px;
  }

  figure {
    padding: 0;
    margin: 0;
  }
`

export const MoreArticles = styled.aside`
  flex: 3;
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  ${() => mediaQuery.laptop} {
    min-width: 420px;
    padding: 40px;
  }
`

export const ArticlesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`

export const MoreItem = styled.li`
  display: flex;
  column-gap: 20px;
  align-items: center;
`

export const MoreArticlesHeader = styled.h2`
  font-size: var(--fsLarge0);
  font-weight: normal;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  cursor: pointer;
`

export const ImageContainer = styled.div`
  width: 82px;
  min-width: 82px;
  cursor: pointer;
`

export const ArticleTitle = styled.h3`
  font-size: var(--fsBase);
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`

export const Date = styled.time`
  font-weight: 100;
  color: var(--juniper);
`

export const PostTitle = styled.h1`
  font-size: var(--fsLarge3);
  font-weight: normal;
`

export const PostDate = styled.time`
  font-size: var(--fsVLarge0);
`

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
