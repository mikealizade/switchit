import { FC } from 'react'
import { FieldError } from 'react-hook-form'
import cs from 'classnames'
// import { CheckboxProps } from 'components/types'
import * as S from './Checkbox.style'
import { RadioGroupProps } from '@components/RadioGroup/RadioGroup'

type CheckboxProps = Omit<RadioGroupProps, 'labels'>

export const Checkbox: FC<CheckboxProps> = ({
  name = '',
  label = '',
  formState: { errors } = {},
  defaultValue,
  register,
  disabled,
  required,
}): JSX.Element => {
  const hasError = errors?.[name as keyof FieldError]

  return (
    <S.Checkbox className={cs('checkboxes', { ['error']: hasError })}>
      <S.Label htmlFor={label} key={label}>
        <input
          id={label}
          type='checkbox'
          {...(register && register(name, { required }))}
          {...(defaultValue && { defaultChecked: !!defaultValue })}
          disabled={disabled}
          aria-describedby='required'
          aria-required={required}
          aria-invalid={!!errors?.[name]}
        />
        <span className='checkmark'></span>
        {label}
      </S.Label>

      {hasError && (
        <p className='error' role='alert' id='required'>
          This field is required
        </p>
      )}
    </S.Checkbox>
  )
}
