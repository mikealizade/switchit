import React, { FC } from 'react'
import { Button } from '@components/Button/Button'
import { Buttons } from '@modules/Switching/Switching.style'
import * as S from './JourneyName.style'

export const JourneyName: FC<{
  value: string
  setValue: (value: string) => void
  setAddName: (arg: boolean) => void
  addNewJourney: () => void
}> = ({ value, setValue, setAddName, addNewJourney }) => {
  const onCancel = (): void => {
    setValue('')
    setAddName(false)
  }

  return (
    <S.JourneyNameContainer>
      <S.JourneyNameHeader>
        <S.JourneyNameTitle>{`First, give this switching journey a name.`}</S.JourneyNameTitle>
        <S.JourneyNameSubHeader>
          Get creative or be practical. You may have more than one bank to switch. This way you can
          set each journey apart
        </S.JourneyNameSubHeader>
      </S.JourneyNameHeader>

      <S.Label>
        Name
        <S.JourneyNameInput
          type='text'
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          placeholder='Switching Journey #1'
          maxLength={20}
        />
      </S.Label>
      <Buttons>
        <Button type='button' mode='secondary' onClick={onCancel}>
          Cancel
        </Button>
        <Button type='button' disabled={!value} onClick={() => addNewJourney()}>
          Start
        </Button>
      </Buttons>
    </S.JourneyNameContainer>
  )
}
