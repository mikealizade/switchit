import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '@auth0/nextjs-auth0'
import * as S from '@components/ProfileHead/ProfileHead.style'
import * as C from '@styles/common.style'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'

export const ProfileDrawer = (): JSX.Element => {
  const { user: { nickname = '', picture = '' } = {}, isLoading = false } = useUser()
  const [isOpen, setToggleDrawer] = useState(true)

  // const openDrawer = () => {
  //   console.log('drawer opened')
  // }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setToggleDrawer(!isOpen)
    }

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer('left', false)}>
      content
    </Drawer>
  )
}
