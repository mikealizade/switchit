import cs from 'classnames'
import { FC } from 'react'
import { FieldErrors, FieldError, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'
import * as S from './RadioGroup.style'

export type RadioGroupProps = {
  name: string
  label?: string
  labels: Array<string>
  errors?: FieldError
  defaultValue?: string | number | boolean | undefined
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  disabled?: boolean
  required?: boolean
  formState?: {
    errors: FieldErrors
  }
}

export const RadioGroup: FC<RadioGroupProps> = ({
  name = '',
  label = '',
  labels = [],
  formState: { errors } = {},
  defaultValue,
  register,
  disabled,
  required,
}): JSX.Element => {
  const hasError = errors && errors[name as keyof FieldError]

  return (
    <S.RadioGroup className={cs('radios', { ['error']: hasError })}>
      {label && (
        <S.RadioGroupLabel>
          {label}{' '}
          {errors && (
            <span className='required' aria-hidden='true'>
              *
            </span>
          )}
        </S.RadioGroupLabel>
      )}
      {labels.map((label: string) => {
        return (
          <S.Label htmlFor={label} key={label}>
            <input
              id={label}
              type='radio'
              defaultValue={label}
              {...(defaultValue && { defaultChecked: defaultValue === label })}
              {...(!disabled && register && register(name, { required }))}
              disabled={disabled}
              // aria-describedby='required'
            />
            <span className='checkmark'></span>
            {label}
          </S.Label>
        )
      })}
      {hasError && (
        <p className='error' role='alert' id='required'>
          This field is required
        </p>
      )}
    </S.RadioGroup>
  )
}
