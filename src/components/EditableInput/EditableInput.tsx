import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import * as S from '@components/EditableInput/EditableInput.style'

export const EditableInput: NextPage<{ name: string; defaultValue: string }> = ({
  name = '',
  defaultValue = '',
}): JSX.Element => {
  const [isEditing, setEdit] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()

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

    setEdit(false)
    await fetcher(`/api/db/updateOne`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  }

  const updateField = ({
    target: { name, value },
  }: {
    target: { name: string; value: string }
  }) => {
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
        <S.EditIcon onClick={save}>
          {/* <FontAwesomeIcon size='sm' icon={faFloppyDisk} /> */}
        </S.EditIcon>
      ) : (
        <S.EditIcon onClick={edit}>
          {/* <FontAwesomeIcon size='sm' icon={faPenToSquare} /> */}
        </S.EditIcon>
      )}
    </S.EditableInputContainer>
  )
}
