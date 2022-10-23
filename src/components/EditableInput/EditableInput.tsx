import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { useUser } from '@auth0/nextjs-auth0'
import { fetcher } from '@utils/functions'
import * as S from '@components/EditableInput/EditableInput.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export const EditableInput: NextPage<{ defaultValue: string }> = ({ defaultValue = '' }) => {
  const [isEditing, setEdit] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const {
    user: { sub = '' } = {},
    // error = {},
    isLoading = false,
  } = useUser()
  const { data: { user } = {}, error } = useSWR(sub ? `/api/db/user/${sub}` : null, fetcher)

  const edit = () => {
    setEdit(!isEditing)
  }

  const save = async () => {
    // save to db
    setEdit(false)
    await fetcher(`/api/db/user/${sub}`, {
      method: 'POST',
      body: JSON.stringify(value),
    })
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
        name='switchStatement'
        value={value}
        readOnly={!isEditing}
        onChange={updateField}
      />
      {isEditing ? (
        <S.EditIcon onClick={save}>
          <FontAwesomeIcon size='sm' icon={faFloppyDisk} />
        </S.EditIcon>
      ) : (
        <S.EditIcon onClick={edit}>
          <FontAwesomeIcon size='sm' icon={faPenToSquare} />
        </S.EditIcon>
      )}
    </S.EditableInputContainer>
  )
}
