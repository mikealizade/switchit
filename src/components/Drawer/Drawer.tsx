import styled from '@emotion/styled'
import { NextPage } from 'next'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '@components/Drawer/Drawer.style'
import { ProfileAwardsBadges } from '@components/ProfileAwardsBadges/ProfileAwardsBadges'
import { ProfileForm } from '@components/ProfileForm/ProfileForm'
import { ProfileFriends } from '@components/ProfileFriends/ProfileFriends'
import { ProfilePoints } from '@components/ProfilePoints/ProfilePoints'
import { ProfileSharingCodes } from '@components/ProfileSharingCodes/ProfileSharingCodes'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { RootState } from '@state/store'
import {
  ResearchCopy,
  PotentialClimateImpactCopy,
  DisclaimerCopy,
  DontWasteYourSwitchCopy,
  TellUsPromptsCopy,
  MonzoProjectCopy,
  NationwideProjectCopy,
  StarlingProjectCopy,
  TriodosProjectCopy,
  PostingPublicly,
  CalculateAgeImpact,
} from './DrawerCopy'

const Header = styled.h2`
  font-size: var(--fsMedium6);
`

const ReadyToSwitch = () => {
  return (
    <>
      <Header>
        Ready to switch or {`can't `}switch but still want to open a green bank account
      </Header>
      <p>
        {` Ready to Switch: We're so excited that you're ready to leave your dirty bank! Click ‘Next'
        and we'll start you on your switching jounrey.`}
      </p>
      <p>
        {`Can't switch by still want to open a green bank account: Have a mortgage or a loan with a
        dirty bank you're not able to transfer right away? That's okay. By opening up a green bank
        account, you'll be taking a step in the right direction`}
      </p>
    </>
  )
}

const NotReadyToSwitch = () => {
  return (
    <>
      <Header>Not Ready For the Green Banking Sphere, but Want To Use My Voice to Act</Header>
      <p>
        {`Wary of switching or still trying to convince your spouse to switch your joint account? There are still steps you can take in order to act`}
      </p>
    </>
  )
}

const drawerConfig = {
  profile: {
    component: <ProfileForm />,
    backLink: 'Profile',
  },
  sharingCodes: {
    component: <ProfileSharingCodes />,
    backLink: 'Sharing Codes',
  },
  friends: {
    component: <ProfileFriends />,
    backLink: 'Friends',
  },
  points: {
    component: <ProfilePoints />,
    backLink: 'Switch It Green Points',
  },
  awardsbadges: {
    component: <ProfileAwardsBadges />,
    backLink: 'Awards & Badges',
  },
  readyToSwitch: {
    component: <ReadyToSwitch />,
    backLink: 'Ready To Switch',
  },
  notReadyToSwitch: {
    component: <NotReadyToSwitch />,
    backLink: 'Not Ready To Switch',
  },
  scoreBanks: {
    component: <div>How we score banks</div>,
    backLink: 'Impact Card View',
  },
  calculateImpact: {
    component: <PotentialClimateImpactCopy />,
    backLink: 'Back to Impact Card',
  },
  calculateAgeImpact: {
    component: <CalculateAgeImpact />,
    backLink: 'Impact Card View',
  },
  donations: {
    component: <div>Donations</div>,
    backLink: 'Impact Card View',
  },
  research: {
    component: <ResearchCopy />,
    backLink: 'Impact Card View',
  },
  disclaimer: {
    component: <DisclaimerCopy />,
    backLink: 'Impact Card View',
  },
  dontWasteYourSwitch: {
    component: <DontWasteYourSwitchCopy />,
    backLink: 'Impact Card View',
  },
  tellUsPrompts: {
    component: <TellUsPromptsCopy />,
    backLink: 'Impact Card View',
  },
  monzoProject: {
    component: <MonzoProjectCopy />,
    backLink: 'Impact Card View',
  },
  nationwideProject: {
    component: <NationwideProjectCopy />,
    backLink: 'Impact Card View',
  },
  starlingProject: {
    component: <StarlingProjectCopy />,
    backLink: 'Impact Card View',
  },
  triodosProject: {
    component: <TriodosProjectCopy />,
    backLink: 'Impact Card View',
  },
  postingPublicly: {
    component: <PostingPublicly />,
    backLink: 'Impact Card View',
  },
}

export const Drawer: NextPage<{ narrow?: boolean }> = ({ narrow }): JSX.Element => {
  window.scroll(0, 0)
  const { isMobile } = useMediaQuery()
  const dispatch = useDispatch()
  const { isDrawerOpen, section } = useSelector((state: RootState) => state.drawer)
  const { backLink, component } = drawerConfig[section as keyof typeof drawerConfig] || {}

  return (
    <>
      <S.MobileBackdrop isDrawerOpen={isDrawerOpen}></S.MobileBackdrop>
      <S.Drawer isDrawerOpen={isDrawerOpen} narrow={narrow}>
        <S.DrawerBackLink onClick={() => dispatch(toggleDrawer(section))}>
          {!isMobile && (
            <>
              <Image src={'/icons/icon_chevron_left.svg'} alt='' width={20} height={20} />
              {backLink}
            </>
          )}
        </S.DrawerBackLink>
        <S.DrawerContent>{component}</S.DrawerContent>
      </S.Drawer>
    </>
  )
}
