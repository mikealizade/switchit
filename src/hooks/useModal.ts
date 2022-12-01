import { useState } from 'react'

export const useModal = (): [boolean, (arg1: boolean) => void] => {
  const [isVisible, setModal] = useState<any>(false)

  const toggleModal = (isVisible: boolean): void => {
    setModal(isVisible)
  }

  return [isVisible, toggleModal]
}
