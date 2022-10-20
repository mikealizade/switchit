import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useUser } from '@auth0/nextjs-auth0'
import { setUser } from '@state/user/userSlice'
import { Input } from '@components/Input/Input'
import { Button, TextButton } from '@components/Button/Button'
import { Modal } from '@components/Modal/Modal'

export const SignUpForm: NextPage<{
  data?: any
  disabled?: boolean
  nextSlide: () => void
  previousSlide: () => void
}> = ({ data, disabled, nextSlide, previousSlide }) => {
  const { user = {}, error = {}, isLoading = false } = useUser()
  const dispatch = useDispatch()
  const methods = useForm()
  const { handleSubmit, reset } = methods
  const [isOpen, setOpen] = useState(false)

  const onSubmit = (data: FieldValues): void => {
    dispatch(setUser({ ...user, ...data }))
    nextSlide()
  }

  const onCancel = (): void => {
    reset()
  }

  const onToggleModal = (): void => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <Input
            name='age'
            label='Age'
            {...(data && { defaultValue: data.age })}
            {...methods}
            minLength={1}
            maxLength={50}
            // pattern='alpha'
            // message='Please enter a valid name'
            // disabled={disabled}
            required={false}
          />
          <Input
            name='location'
            label='Where do you live?'
            {...(data && { defaultValue: data.location })}
            {...methods}
            minLength={1}
            maxLength={50}
            // pattern='alpha'
            // message='Please enter a valid name'
            // disabled={disabled}
            required={false}
          />
          <p onClick={onToggleModal}>Why do we want to know this information?</p>
          <Button type='submit' disabled={false}>
            {'Next'}
          </Button>
          <TextButton type='button' mode='text' onClick={nextSlide}>
            Skip
          </TextButton>
        </form>
      </FormProvider>
      <Modal
        title='Why do we want to know this information?'
        btnText='OK'
        isOpen={isOpen}
        toggleModal={onToggleModal}
      >
        Sunt aute anim magna velit irure dolore. Sunt do nostrud nulla anim. Deserunt reprehenderit
        non cupidatat enim nostrud irure non. Nulla duis nostrud dolore elit nisi nostrud incididunt
        eu voluptate aute incididunt aliqua tempor ipsum. Commodo cillum commodo ad duis in. Elit et
        velit sint enim magna adipisicing commodo commodo aute proident. Do id incididunt sint
        ullamco occaecat Lorem eiusmod in cupidatat nostrud id.
      </Modal>
    </>
  )
}
