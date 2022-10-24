import * as React from 'react'
import { Button } from '@components/Button/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'

type ModalProps = {
  title?: string
  children: React.ReactNode
  isOpen: boolean
  btnText: string
  toggleModal: () => void
}

interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(3),
  },
}))

const Title = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.8rem', fontWeight: 'bold' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 3,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

export const Modal: NextPage<ModalProps> = ({
  title,
  children,
  isOpen,
  btnText,
  toggleModal,
}): JSX.Element => {
  return (
    <div>
      <BootstrapDialog
        onClose={toggleModal}
        aria-labelledby='customized-dialog-title'
        open={isOpen}
        sx={{
          fontSize: '1.6rem',
          minWidth: '400px',
        }}
      >
        <Title id='customized-dialog-title' onClose={toggleModal}>
          {title}
        </Title>
        <DialogContent dividers>{children} </DialogContent>
        <DialogActions>
          <Button type='button' onClick={toggleModal}>
            {btnText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
