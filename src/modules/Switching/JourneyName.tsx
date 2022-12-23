import React, { FC } from 'react'
import { Button } from '@components/Button/Button'
import * as S from '@modules/Switching/Switching.style'

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
        <S.JourneyNameTitle>{`Let's give this switching journey a name.`}</S.JourneyNameTitle>
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
        />
      </S.Label>
      <S.Buttons>
        <Button type='button' mode='secondary' onClick={onCancel}>
          Cancel
        </Button>
        <Button type='button' disabled={!value} onClick={() => addNewJourney()}>
          Start
        </Button>
      </S.Buttons>
    </S.JourneyNameContainer>
  )
}
