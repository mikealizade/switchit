import styled from '@emotion/styled'
import Image from 'next/image'
import { usePrevious } from '@hooks/usePrevious'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '@state/drawer/drawerSlice'
import { RootState } from '@state/store'
import { ProfileForm } from '@components/ProfileForm/ProfileForm'
import { ProfileSharingCodes } from '@components/ProfileSharingCodes/ProfileSharingCodes'
import { ProfileFriends } from '@components/ProfileFriends/ProfileFriends'
import { ProfilePoints } from '@components/ProfilePoints/ProfilePoints'
import { ProfileAwardsBadges } from '@components/ProfileAwardsBadges/ProfileAwardsBadges'
import * as S from '@components/Drawer/Drawer.style'
import { NextPage } from 'next'

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
    backLink: 'Switch It Points',
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
    component: <div>How we calculate your potential climate impact</div>,
    backLink: 'Impact Card View',
  },
  calculateAgeImpact: {
    component: <div>How we use age to calculate climate impact</div>,
    backLink: 'Impact Card View',
  },
  donations: {
    component: <div>Donations</div>,
    backLink: 'Impact Card View',
  },
  disclaimer: {
    component: <div>Disclaimer</div>,
    backLink: 'Impact Card View',
  },
}

export const Drawer: NextPage<{ narrow?: boolean }> = ({ narrow }): JSX.Element => {
  const dispatch = useDispatch()
  const { isDrawerOpen, section } = useSelector((state: RootState) => state.drawer)
  const { backLink, component } = drawerConfig[section as keyof typeof drawerConfig] || {}

  return (
    <S.Drawer isDrawerOpen={isDrawerOpen} narrow={narrow}>
      <S.BackLink onClick={() => dispatch(toggleDrawer(section))}>
        <Image src={'/icons/icon_chevron_left.svg'} alt='' width={20} height={20} />
        {backLink}
      </S.BackLink>
      {component}
    </S.Drawer>
  )
}
