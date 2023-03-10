import styled from '@emotion/styled'
import { mediaQuery } from '@utils/functions'
import { PageSection, TextMono, TextMonoBold } from './SignedOutLanding.style'

export const MainSection = styled(PageSection)`
  padding: 50px 40px 155px;
  position: relative;
  background: var(--concrete) no-repeat right bottom 30px;
  background-image: url('/images/img_pointing_mobile.png');

  ${() => mediaQuery.xmobile} {
    padding: 60px 12% 80px 12%;
  }

  ${() => mediaQuery.tablet} {
    background: var(--concrete) no-repeat right bottom 30px;
    background-image: url('/images/img_pointing.png');
    padding: 60px 18% 80px 18%;
  }
`

export const TextContainer = styled.div<{
  mobileWidth?: number
  width?: number
  mobileMarginTop?: number
  marginTop?: number
  mobileRowGap?: number
  rowGap?: number
}>`
  display: flex;
  flex-direction: column;
  width: ${({ mobileWidth }) => (mobileWidth ? `${mobileWidth}%` : 'auto')};
  margin-top: ${({ mobileMarginTop }) => (mobileMarginTop ? `${mobileMarginTop}px` : '0')};
  row-gap: ${({ mobileRowGap }) => (mobileRowGap ? `${mobileRowGap}px` : '20px')};

  ${() => mediaQuery.tablet} {
    width: ${({ width }) => (width ? `${width}%` : 'auto')};
    margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0')};
    row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}px` : '20px')};
  }
`

export const MainSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 38px;

  ${() => mediaQuery.tablet} {
    width: 55%;
  }
`

export const HomePageHeader = styled.h1`
  font-size: 3.2rem;
  font-family: 'Konsolev SemiBold';

  ${() => mediaQuery.tablet} {
    font-size: 5.4rem;
  }
`

export const HomePageTextMono = styled(TextMono)`
  font-size: var(--fsLarge2);
`

export const HomePageTextMonoBold = styled(TextMonoBold)`
  font-size: var(--fsLarge2);
`

export const SpeechBubble = styled.div`
  position: absolute;
  top: 178px;
  right: 18px;
  width: 131px;
  height: 104px;
  background: url('/images/img_speech_bubble.png') no-repeat;
  background-size: contain;
  transform: rotate(40deg);

  ${() => mediaQuery.xmobile} {
    top: 105px;
  }

  ${() => mediaQuery.tablet} {
    right: 100px;
    width: 290px;
    height: 230px;
    transform: rotate(355deg);
  }
`

export const SpeechBubbleText = styled.div`
  font-size: var(--fsSmall1);
  line-height: 12px;
  transform: rotate(355deg);
  position: absolute;
  top: 28px;
  left: 14px;
  width: 100px;
  text-align: center;

  ${() => mediaQuery.tablet} {
    transform: rotate(340deg);
    font-size: var(--fsLarge5);
    line-height: 32px;
    width: 230px;
    top: 52px;
    left: 30px;
  }
`

export const TheProblem = styled(PageSection)`
  background: #fdecf5 no-repeat right -53px bottom 30px;
  background-image: url('/images/img_bank_chimneys_mobile.png');
  height: 650px;
  align-items: center;
  padding: 40px;

  ${() => mediaQuery.tablet} {
    background-position: 10% center;
    background-image: url('/images/img_bank_chimneys.png');
  }
`

export const TheProblemContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  padding: 0;

  ${() => mediaQuery.tablet} {
    width: 53%;
    padding: 0;
    align-self: flex-end;
  }

  ${() => mediaQuery.laptop} {
    width: 53%;
    padding: 0;
    align-self: center;
  }
`

export const TheProblemHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const TheProblemSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const TheProblemText = styled.p`
  font-size: var(--fsMedium8);
  font-weight: normal;
  font-family: 'Mono Regular';
`

export const PinkLink = styled.div<{ marginTop?: number }>`
  font-size: var(--fsMedium6);
  font-family: 'Mono Regular';
  text-decoration: none !important;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0')};

  ${() => mediaQuery.tablet} {
    font-size: var(--fsMedium8);
  }

  a {
    color: var(--pink);
    text-decoration: none;
  }
`

export const TheSolution = styled(PageSection)`
  padding: 60px 40px 230px;
  position: relative;
  background: #f5faf0 no-repeat right 20px bottom 30px;
  background-image: url('/images/img_wallet_mobile.png');

  ${() => mediaQuery.xmobile} {
    padding: 60px 12% 80px 12%;
  }

  ${() => mediaQuery.laptop} {
    padding: 60px 18% 80px 18%;
    background: #f5faf0 no-repeat right 20% center;
    background-image: url('/images/img_wallet.png');
  }
`

export const TheSolutionContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;

  ${() => mediaQuery.tablet} {
    width: 53%;
  }
`

export const TheSolutionHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const TheSolutionSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const TheSolutionText = styled.p`
  font-size: var(--fsMedium8);
  font-family: 'Mono Regular';
`

export const TheImpact = styled(PageSection)`
  padding: 60px 40px 45px;
  position: relative;
  background: #eff9fa no-repeat right bottom 30px;
  background-image: url('/images/img_globe_windmills_mobile.png');

  ${() => mediaQuery.xmobile} {
    background-image: url('/images/img_globe_windmills_mobile.png');
    background-size: 30%;
    padding: 60px 12% 80px 12%;
  }

  ${() => mediaQuery.tablet} {
    background-image: url('/images/img_globe_windmills.png');
    background-size: 40%;
    background-position: right bottom 20px;
  }

  ${() => mediaQuery.laptop} {
    padding: 60px 18% 80px 18%;
    background-image: url('/images/img_globe_windmills.png');
    background-position: 10% center;
    background-size: auto;

    height: 650px;
    align-items: center;
    background-size: auto;
  }
`

export const TheImpactContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  padding: 0;

  ${() => mediaQuery.tablet} {
    width: 67%;
    padding: 0 0 0 112px;
  }
`

export const TheImpactHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const TheImpactSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const TheImpactText = styled.p`
  font-size: var(--fsMedium8);
  font-weight: normal;
  font-family: 'Mono Regular';
`

export const GetInvolved = styled(PageSection)`
  padding: 60px 40px 175px;
  position: relative;
  background: #fdecf5 no-repeat right 10% bottom;
  background-image: url('/images/img_thumbs_up_mobile.png');

  ${() => mediaQuery.xmobile} {
    padding: 60px 12% 80px 12%;
  }

  ${() => mediaQuery.laptop} {
    padding: 60px 18% 80px 18%;
    background: #f5faf0 no-repeat right 20% bottom;
    background-image: url('/images/img_thumbs_up.png');
  }
`

export const GetInvolvedContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;

  ${() => mediaQuery.tablet} {
    width: 53%;
  }
`

export const GetInvolvedHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const GetInvolvedSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const GetInvolvedList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  list-style-type: disc;
  list-style-position: inside;
  font-family: 'Mono Regular';
`

export const StudentPrograms = styled(PageSection)`
  padding: 60px 40px 100px;
  background: #eff9fa no-repeat right bottom;
  background-image: url('/images/img_students_mobile.png');
  align-items: flex-start;

  ${() => mediaQuery.tablet} {
    height: 650px;
    background-position: right -50px center;
    background-image: url('/images/img_students.png');
  }
`

export const StudentProgramsContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  padding: 0;

  ${() => mediaQuery.tablet} {
    width: 67%;
  }

  ${() => mediaQuery.laptop} {
    width: 67%;
  }
`

export const StudentProgramsHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const StudentProgramsSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const StudentProgramsText = styled.p`
  font-size: var(--fsMedium8);
  font-weight: normal;
`

export const WhySwitchIt = styled(PageSection)`
  padding: 60px 40px 250px;
  background: #f5faf0 no-repeat right 20px bottom 70px;
  background-image: url('/images/img_greenbanking_mobile.jpg');
  align-items: flex-start;

  ${() => mediaQuery.xmobile} {
    padding-bottom: 200px;
    background-position: right 100px bottom 70px;

    background-size: 45%;
  }

  ${() => mediaQuery.tablet} {
    background: #f5faf0 no-repeat left 24% center;
    background-image: url('/images/img_greenbanking.jpg');

    align-items: flex-end;
    background-size: 394px 234px;
  }
`

export const WhySwitchItContent = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  row-gap: 38px;
  padding: 0;

  ${() => mediaQuery.tablet} {
    width: 67%;
  }

  ${() => mediaQuery.laptop} {
    width: 50%;
  }
`

export const WhySwitchItHeader = styled.h2`
  font-size: var(--fsVLarge6);
`

export const WhySwitchItSubHeader = styled.h3`
  font-size: var(--fsLarge4);
`

export const WhySwitchItText = styled.p`
  font-size: var(--fsMedium8);
  font-weight: normal;
`

export const Subscribe = styled(PageSection)`
  background: var(--concrete) no-repeat right 10% bottom;
  background-image: url('/images/img_subscribe_mobile.png');
  padding: 40px;
  row-gap: 30px;

  ${() => mediaQuery.tablet} {
    background-image: url('/images/img_subscribe.png');
  }
`

export const SubscribeHeader = styled.div`
  font-size: var(--fsVLarge6);
  font-family: 'Konsolev SemiBold';
`

export const SubscribeForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  border: 3px solid var(--pink);
  border-radius: 3px;
  width: 286px;
  position: relative;
  z-index: 2;
  font-size: var(--fsMedium6);

  ${() => mediaQuery.tablet} {
    height: 60px;
    width: 386px;
  }

  &::after {
    content: '';
    width: 286px;
    height: 39px;
    position: absolute;
    left: 4px;
    top: 8px;
    background-color: var(--pink);
    border-radius: 3px;
    z-index: 1;

    ${() => mediaQuery.tablet} {
      content: '';
      width: 380px;
      height: 100%;
      left: 8px;
      top: 8px;
    }
  }
`

export const NewsletterThanks = styled.div`
  color: var(--pink);
  font-size: var(--fsLarge1);
  font-weight: bold;
`

export const EmailField = styled.input`
  color: var(--base);
  border: 0;
  padding: 16px;
  font-size: var(--fsSmall5);
  position: relative;
  z-index: 2;
  height: 39px;
  width: 190px;

  ${() => mediaQuery.tablet} {
    height: 54px;
    width: 244px;
    font-size: var(--fsLarge1);
  }

  &::placeholder {
    color: var(--gallery);
  }

  &:focus-within {
    outline: 0;
  }
`

export const EmailButton = styled.button`
  color: var(--pink);
  background-color: var(--white);
  border: 0;
  border-left: 3px solid var(--pink);
  font-family: 'Konsolev SemiBold';
  padding: 9px 15px;
  font-size: var(--fsSmall5);
  letter-spacing: 0.5px;
  height: 39px;
  position: relative;
  z-index: 2;
  width: 90px;

  ${() => mediaQuery.tablet} {
    padding: 16px 25px;
    height: 54px;
    font-size: var(--fsLarge1);
    width: 136px;
  }
`

export const TheCampaign = styled(PageSection)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 215px;
  padding: 40px;

  ${() => mediaQuery.tablet} {
    row-gap: 90px;
    height: 475px;
    padding: 80px;
  }
`

export const TheCampaignHeader = styled.h2`
  font-size: var(--fsLarge8);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsVLarge6);
  }
`

export const TheCampaignItems = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  li {
    text-align: center;
  }
`

export const TheCampaignFigure = styled.div`
  font-size: 3.3rem;

  ${() => mediaQuery.tablet} {
    font-size: 6rem;
  }
`

export const TheCampaignText = styled.div`
  font-size: var(--fsSmall3);

  ${() => mediaQuery.tablet} {
    font-size: var(--fsLarge4);
  }
`
