import type { NextPage } from 'next'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'
import { RadioGroup } from '@components/RadioGroup/RadioGroup'
import { useToast } from '@hooks/useToast'
import { useUpdateUser } from '@hooks/useUpdateUser'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import * as S from './AccountForm.style'

export const AccountForm: NextPage<{ data?: any; disabled?: boolean; row?: boolean }> = ({ data, disabled, row = false }): JSX.Element => {
  const methods = useForm()
  const dispatch = useDispatch()
  const updateUser = useUpdateUser()
  const toast = useToast()
  const { handleSubmit, reset } = methods
  const user = useSelector((state: RootState) => state.user)
  const { nickname = '', username = '', location = '', isProfilePublic } = user

  const onCancel = (): void => {
    reset()
  }

  const save = async (data: FieldValues): Promise<void> => {
    try {
      const { nickname, username, location, profileStatus } = data

      updateUser({
        [`nickname`]: nickname,
        [`username`]: username,
        [`location`]: location,
        [`isProfilePublic`]: profileStatus === 'Public',
      })

      dispatch(
        setUser({
          ...user,
          ...{ nickname, username, location, isProfilePublic: profileStatus === 'Public' },
        }),
      )
      toast('Your profile has been updated successfully', 'success')
    } catch {
      toast('An error occurred updating your profile', 'error')
    }
  }

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await save(data)
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset])

  return (
    <>
      <h3>Profile</h3>
      <p>View and update your account details, profile and more.</p>
      <FormProvider {...methods}>
        <S.AccountForm onSubmit={handleSubmit(onSubmit)} className='form'>
          <fieldset>
            <Input
              name='nickname'
              label='Name'
              {...(nickname && { defaultValue: nickname })}
              {...methods}
              minLength={1}
              maxLength={50}
              message='Please enter a valid name'
              disabled={disabled}
            />
            <Input
              name='username'
              label='Username'
              {...(username && { defaultValue: username })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alphanumeric'
              message='Please enter a valid username - letters and numbers only'
              disabled={disabled}
            />
            <Input
              name='location'
              label='Where do you live?'
              {...(location && { defaultValue: location })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alpha'
              message='Please enter a valid name'
              disabled={disabled}
            />
            <RadioGroup
              label='Set profile to'
              name='profileStatus'
              labels={['Private', 'Public']}
              {...methods}
              disabled={false}
              defaultValue={isProfilePublic ? 'Public' : 'Private'}
              row={row}
            />
          </fieldset>
          <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} text='Update' />
        </S.AccountForm>
      </FormProvider>
    </>
  )
}
