import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@state/store'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useDrawer } from '@hooks/useDrawer'
import { Input } from '@components/Input/Input'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import { setUser } from '@state/user/userSlice'
import { showToast } from '@state/toast/toastSlice'
import { useUpdateUser } from '@hooks/useUpdateUser'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import * as St from '@modules/Profile/Profile.style'

export const ProfileForm: NextPage<{ data?: any; disabled?: boolean }> = ({
  data,
  disabled,
}): JSX.Element => {
  const methods = useForm()
  const dispatch = useDispatch()
  const { toggleDrawer } = useDrawer()
  const updateUser = useUpdateUser()
  const { handleSubmit, reset } = methods
  const { user: { sub } = {}, isLoading = false } = useUser()
  const user = useSelector((state: RootState) => state.user)
  const {
    nickname = '',
    picture = '',
    username = '',
    location = '',
    profile,
    profile: { summary: { proudActions = '', campaigns = '', switchingStatement = '' } = {} } = {},
  } = user

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await save(data)
    // toggleDrawer('')()
  }

  const onCancel = (): void => {
    reset()
    // toggleDrawer('')()
  }

  const save = async (data: FieldValues): Promise<void> => {
    const { nickname, username, location, ...rest } = data

    updateUser({
      [`profile.summary`]: rest,
      [`nickname`]: nickname,
      [`username`]: username,
      [`location`]: location,
    })

    dispatch(
      setUser({
        ...user,
        ...{ nickname, username, location },
        profile: {
          ...profile,
          summary: rest,
        },
      }),
    )
    dispatch(showToast({ isVisible: true, message: 'User updated successfully', type: 'success' }))
    // toast(true, 'User updated successfully', 'success')
  }

  useEffect(() => {
    reset && reset(data)
  }, [data, reset, toggleDrawer])

  return (
    <>
      <S.ProfileHead isProfile>
        <div className='picture'>
          {picture && nickname && (
            <Image src={picture} alt={nickname} width={132} height={132} unoptimized />
          )}
        </div>
        <S.ProfileNames>
          <S.ProfileName>{nickname}</S.ProfileName>
          <S.Username>{username}</S.Username>
        </S.ProfileNames>
      </S.ProfileHead>
      <FormProvider {...methods}>
        <St.ProfileForm onSubmit={handleSubmit(onSubmit)} className='form'>
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
            <Input
              name='switchingStatement'
              label={`Why I'm switching`}
              {...(switchingStatement && { defaultValue: switchingStatement })}
              {...methods}
              minLength={1}
              maxLength={50}
              disabled={false}
              required={false}
            />
            <Input
              name='campaigns'
              label='Campaigns I support'
              {...(campaigns && { defaultValue: campaigns })}
              {...methods}
              disabled={false}
              required={false}
            />
            <Input
              name='proudActions'
              label={`Climate actions I'm proud of`}
              {...(proudActions && { defaultValue: proudActions })}
              {...methods}
              disabled={false}
              required={false}
            />
          </fieldset>
          <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} />
        </St.ProfileForm>
      </FormProvider>
    </>
  )
}
