import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import Snackbar from '@mui/material/Snackbar'
import { showToast } from '@state/toast/toastSlice'

export const Toast = () => {
  const dispatch = useDispatch()
  const { isVisible, message, type } = useSelector((state: RootState) => state.toast)

  useEffect(() => {
    let delay: ReturnType<typeof setTimeout>
    if (isVisible) {
      delay = setTimeout(() => {
        dispatch(showToast({ isVisible: false }))
      }, 5000)
    }

    return () => {
      clearTimeout(delay)
    }
  }, [isVisible, dispatch])

  return (
    <div className={type}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isVisible}
        message={message}
        key='bottomright'
      />
    </div>
  )
}
