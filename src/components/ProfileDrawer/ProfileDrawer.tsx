import type { NextPage } from 'next'
import { useContext } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import * as S from '@components/ProfileDrawer/ProfileDrawer.style'
import * as C from '@styles/common.style'
import { useState } from 'react'
import { ProfileContext } from '@components/Layout/Layout'

export const ProfileDrawer = (): JSX.Element => {
  const { user: { nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const [isOpen, setToggleDrawer] = useState(true)
  const { isDrawerOpen } = useContext(ProfileContext)

  return <S.ProfileDrawer isDrawerOpen={isDrawerOpen}>sdsdf</S.ProfileDrawer>
}
