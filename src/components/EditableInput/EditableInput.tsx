import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import useSWRMutation from 'swr/mutation'
import { sendRequest } from '@utils/functions'
import * as S from '@components/EditableInput/EditableInput.style'

export const EditableInput: NextPage<{ name: string; defaultValue: string }> = ({
  name = '',
  defaultValue = '',
}): JSX.Element => {
  const { trigger: request } = useSWRMutation('/api/db/updateOne', sendRequest)
  const [isEditing, setEdit] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const { user: { sub = '' } = {} } = useUser()

  const edit = () => {
    setEdit(!isEditing)
  }

  const save = async () => {
    const body = {
      filter: { sub },
      payload: { $set: { [`profile.summary.${name}`]: value } },
      collection: 'users',
      upsert: false,
    }

    request(body)

    setEdit(false)
  }

  const updateField = ({ target: { value } }: { target: { value: string } }) => {
    setValue(() => value)
  }

  useEffect(() => {
    defaultValue && setValue(defaultValue)
  }, [defaultValue])

  return (
    <S.EditableInputContainer>
      <S.EditableInput
        type='text'
        name={name}
        value={value}
        {...(!value && { placeholder: 'Click edit button to start typing' })}
        readOnly={!isEditing}
        onChange={updateField}
      />
      {isEditing ? (
        <S.EditIcon onClick={save}></S.EditIcon>
      ) : (
        <S.EditIcon onClick={edit}></S.EditIcon>
      )}
    </S.EditableInputContainer>
  )
}
