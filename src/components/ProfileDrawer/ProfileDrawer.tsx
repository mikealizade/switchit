import { useEffect, useRef, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import * as S from '@components/ProfileDrawer/ProfileDrawer.style'
import { useDrawer } from '@hooks/useDrawer'
import { SettingsPowerRounded } from '@mui/icons-material'
import { ProfileForm } from '@components/ProfileForm/ProfileForm'

const drawerConfig = {
  profile: <ProfileForm />,
  sharingCodes: <div>sharingCodes</div>,
}

export const ProfileDrawer = (): JSX.Element => {
  const { user: { nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const { isDrawerOpen, section } = useDrawer()
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
      {drawerConfig[section as keyof typeof drawerConfig]}
    </S.ProfileDrawer>
  )
}
