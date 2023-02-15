import styled from '@emotion/styled'
import { PageSection } from '@modules/SignedOutLanding/SignedOutLanding.style'
import { mediaQuery } from '@utils/functions'

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 700px;
`

export const ImageTitle = styled.div`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
  margin: auto 0 50px 160px;
  color: var(--white);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsHuge8);
  }
`

export const ArticleTitle = styled.h1`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
  margin-bottom: 50px;

  ${() => mediaQuery.tablet} {
    font-size: var(--fsHuge8);
  }
`

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const Article = styled(PageSection)`
  h2 {
    font-size: var(--fsVLarge3);
    font-family: 'Konsolev SemiBold';
    margin: 30px 0;
  }

  p {
    font-size: var(--fsLarge0);

    ${() => mediaQuery.tablet} {
      font-size: var(--fsLarge1);
    }
  }
`
