import { useState } from 'react'
import type { NextPage } from 'next'
import * as S from '@components/EditableInput/EditableInput.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

export const EditableInput: NextPage = () => {
  const [isEditing, setEdit] = useState(false)
  const temp = 'We are the last people who can prevent catastrophe on the planet.'
  const [value, setValue] = useState(temp)

  const edit = () => {
    setEdit(!isEditing)
  }

  const save = () => {
    // save to db
    setEdit(false)
  }

  const updateField = ({ target: { value } }: { target: { value: string } }) => {
    setValue(() => value)
  }

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
        <S.EditIcon onClick={edit}>
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
