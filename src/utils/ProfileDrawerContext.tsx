import React, { useState, createContext } from 'react'
interface ProfileProviderProps {
  children: React.ReactNode
}
export const ProfileContext = createContext<{
  isDrawerOpen: boolean
  section: string
  toggleDrawer: any
}>({
  isDrawerOpen: false,
  section: '',
  toggleDrawer: undefined,
})
export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [{ isDrawerOpen, section }, setToggleDrawer] = useState({
    isDrawerOpen: false,
    section: '',
  })

  const toggleDrawer = (section: string, isOpen?: boolean) => () => {
    setToggleDrawer({ isDrawerOpen: isOpen ?? !isDrawerOpen, section })
  }

  return (
    <ProfileContext.Provider
      value={{
        isDrawerOpen,
        section,
        toggleDrawer,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
