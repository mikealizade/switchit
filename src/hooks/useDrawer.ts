import { useContext } from 'react'
import { ProfileContext } from '@utils/ProfileDrawerContext'

export const useDrawer = () => {
  return useContext(ProfileContext)
}
