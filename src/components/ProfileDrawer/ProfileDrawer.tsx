import { useEffect, useRef, useState } from 'react'
import { useDrawer } from '@hooks/useDrawer'
import { usePrevious } from '@hooks/usePrevious'
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
  const { isDrawerOpen, section, toggleDrawer } = useDrawer()
  const prevSection = usePrevious(section)

  // console.log('section', section)
  // console.log('prevSection', prevSection)

  // const sectionRef = useRef('')
  // sectionRef.current = section
  // const [isOpen, setOpen] = useState(false)

  // console.log('sectionRef.current', sectionRef.current)

  // useEffect(() => {
  //   console.log('section', section)
  //   if (section !== prevSection && !isDrawerOpen) {
  //     toggleDrawer(section, true)
  //   }
  // }, [section, prevSection, isDrawerOpen])

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
