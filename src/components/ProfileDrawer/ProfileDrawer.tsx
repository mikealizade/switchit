// import { useEffect, useRef, useState } from 'react'
// import { useUser } from '@auth0/nextjs-auth0'
import { useDrawer } from '@hooks/useDrawer'
import { ProfileForm } from '@components/ProfileForm/ProfileForm'
import { ProfileSharingCodes } from '@components/ProfileSharingCodes/ProfileSharingCodes'
import * as S from '@components/ProfileDrawer/ProfileDrawer.style'

const drawerConfig = {
  profile: {
    component: <ProfileForm />,
    backLink: 'Profile',
  },
  sharingCodes: {
    component: <ProfileSharingCodes />,
    backLink: 'Sharing Codes',
  },
}

export const ProfileDrawer = (): JSX.Element => {
  // const { user: { nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const { isDrawerOpen, section, toggleDrawer } = useDrawer()
  // const sectionRef = useRef('')
  // sectionRef.current = section
  // const [isOpen, setOpen] = useState(false)

  // console.log('sectionRef.current', sectionRef.current)

  // useEffect(() => {
  //   console.log('section', section)
  //   if (isDrawerOpen) {
  //     setOpen(true)
  //   }
  // }, [section, isDrawerOpen])

  return (
    <S.ProfileDrawer isDrawerOpen={isDrawerOpen}>
      <S.BackLink onClick={toggleDrawer('')}>
        <S.Chevron>&lsaquo;</S.Chevron>
        {drawerConfig[section as keyof typeof drawerConfig]?.backLink}
      </S.BackLink>
      {drawerConfig[section as keyof typeof drawerConfig]?.component}
    </S.ProfileDrawer>
  )
}
