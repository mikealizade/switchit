import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'
import { useUpdateUser } from '@hooks/useUpdateUser'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'
import * as S from './AccountForm.style'

export const AccountForm: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
  const methods = useForm()
  const dispatch = useDispatch()
  const updateUser = useUpdateUser()
  const { handleSubmit, reset } = methods
  const { user: { sub } = {}, isLoading = false } = useUser()
  const user = useSelector((state: RootState) => state.user)
  const { nickname = '', username = '', location = '' } = user

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await save(data)
  }

  const onCancel = (): void => {
    reset()
  }

  const save = async (data: FieldValues): Promise<void> => {
    const { nickname, username, location } = data

    updateUser({
      [`nickname`]: nickname,
      [`username`]: username,
      [`location`]: location,
    })

    dispatch(
      setUser({
        ...user,
        ...{ nickname, username, location },
      }),
    )
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
              pattern='alpha'
              message='Please enter a valid name'
              disabled={disabled}
              required={false}
            />
            <Input
              name='username'
              label='Username'
              {...(username && { defaultValue: username })}
              {...methods}
              minLength={1}
              maxLength={50}
              pattern='alphanumeric'
              message='Please enter a valid username'
              disabled={disabled}
              required={false}
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
              required={false}
            />
          </fieldset>
          <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} text='Update' />
        </S.AccountForm>
      </FormProvider>
    </>
  )
}
