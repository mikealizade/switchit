import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { FormButtons } from '@components/FormButtons/FormButtons'
import { Input } from '@components/Input/Input'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useToast } from '@hooks/useToast'
import { useUpdateUser } from '@hooks/useUpdateUser'
import * as St from '@modules/Profile/Profile.style'
import * as S from '@modules/Profile/components/ProfileHead/ProfileHead.style'
import { FileUploader } from '@modules/Settings/components/UpdateProfile/FileUploader'
import { RootState } from '@state/store'
import { setUser } from '@state/user/userSlice'

export const ProfileForm: NextPage<{ data?: any; disabled?: boolean }> = ({ data }): JSX.Element => {
  const methods = useForm()
  const dispatch = useDispatch()
  const updateUser = useUpdateUser()
  const { isMobile } = useMediaQuery()
  const toast = useToast()
  const { handleSubmit, reset } = methods
  const user = useSelector((state: RootState) => state.user)
  const {
    nickname = '',
    picture = '',
    username = '',
    location = '',
    profile,
    profile: { summary: { proudActions = '', campaigns = '', switchingStatement = '' } = {} } = {},
  } = user
  const imageSize = isMobile ? 105 : 156

  const onCancel = (): void => {
    reset()
  }

  const save = async (data: FieldValues): Promise<void> => {
    try {
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
      toast('Your details have been updated successfully', 'success')
    } catch (error) {
      toast('An error occurred updating your details', 'error')
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
      <S.ProfileHead isProfile>
        <S.Picture isProfile>
          <Image src={picture || '/icons/icon_noprofile.svg'} alt={nickname} width={imageSize} height={imageSize} />
          <FileUploader isProfile />
        </S.Picture>
        <S.ProfileNames>
          <S.ProfileName>{nickname}</S.ProfileName>
          <S.Username isProfile>{username}</S.Username>
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
              pattern='alphanumeric'
              message='Please enter a valid name'
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
            />
            <Input
              name='location'
              label='Where do you live?'
              {...(location && { defaultValue: location })}
              {...methods}
              minLength={1}
              maxLength={50}
            />
            <Input
              name='switchingStatement'
              label={`Why I'm switching`}
              {...(switchingStatement && { defaultValue: switchingStatement })}
              {...methods}
              minLength={1}
              maxLength={50}
            />
            <Input name='campaigns' label='Campaigns I support' {...(campaigns && { defaultValue: campaigns })} {...methods} />
            <Input
              name='proudActions'
              label={`Climate actions I'm proud of`}
              {...(proudActions && { defaultValue: proudActions })}
              {...methods}
            />
          </fieldset>
          <FormButtons disabled={false} isSubmitting={false} onCancel={onCancel} /> {/* TODO handle isSubmitting */}
        </St.ProfileForm>
      </FormProvider>
    </>
  )
}
