import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePrevious } from '@hooks/usePrevious'
import { RootState } from '@state/store'
import { ProfileForm } from '@components/ProfileForm/ProfileForm'
import { ProfileSharingCodes } from '@components/ProfileSharingCodes/ProfileSharingCodes'
import { ProfileFriends } from '@components/ProfileFriends/ProfileFriends'
import { ProfilePoints } from '@components/ProfilePoints/ProfilePoints'
import { ProfileAwardsBadges } from '@components/ProfileAwardsBadges/ProfileAwardsBadges'
import * as S from '@components/ProfileDrawer/ProfileDrawer.style'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '@state/drawer/drawerSlice'

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
}

export const ProfileDrawer = (): JSX.Element => {
  const dispatch = useDispatch()
  const { isDrawerOpen, section } = useSelector((state: RootState) => state.drawer)

  return (
    <S.ProfileDrawer isDrawerOpen={isDrawerOpen}>
      <S.BackLink onClick={() => dispatch(toggleDrawer(''))}>
        <Image src={'/icons/icon_chevron_left.svg'} alt='' width={20} height={20} />
        {drawerConfig[section as keyof typeof drawerConfig]?.backLink}
      </S.BackLink>
      {drawerConfig[section as keyof typeof drawerConfig]?.component}
    </S.ProfileDrawer>
  )
}
