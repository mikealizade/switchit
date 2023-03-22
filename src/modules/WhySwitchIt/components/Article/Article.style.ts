import styled from '@emotion/styled'
import { PageSection } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { mediaQuery } from '@utils/functions'

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 700px;
  justify-content: center;
`

export const ImageTitle = styled.div`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
  margin: auto 0 50px 0;
  color: var(--white);

  ${() => mediaQuery.xmobile} {
    width: 72%;
  }

  ${() => mediaQuery.tablet} {
    font-size: var(--fsHuge8);
  }

  ${() => mediaQuery.laptop} {
    width: 60%;
  }

  ${() => mediaQuery.xlaptop} {
    width: 56%;
  }
`

export const ArticleTitle = styled.h1`
  font-size: var(--fsVLarge6);
  margin-bottom: 50px;
  font-family: 'Mono Regular';
`

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  a {
    text-decoration: underline;
  }
`

export const Article = styled(PageSection)`
  h2 {
    font-size: var(--fsLarge4);
    margin: 30px 0;
  }

  p {
    font-size: var(--fsMedium8);
  }
`
