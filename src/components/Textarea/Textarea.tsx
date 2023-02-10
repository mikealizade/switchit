import cs from 'classnames'
import { FC } from 'react'
import { FieldErrors, FieldError, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'
import * as S from '@components/Textarea/Textarea.style'

type InputProps = {
  name: string
  label?: string
  type?: string
  errors?: FieldError
  defaultValue?: string | number
  pattern?: string
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  disabled?: boolean
  required?: boolean
  minLength?: number
  maxLength?: number
  message?: string
  formState?: {
    errors: FieldErrors
  }
  validate?: (arg: Record<string, string>) => any
  placeholder?: string
  height?: number
}

export const Textarea: FC<InputProps> = ({
  name = '',
  label = '',
  defaultValue = '',
  register,
  formState: { errors } = {},
  required = false,
  disabled = false,
  minLength,
  maxLength = 1000,
  message = '',
  validate,
  height,
}): JSX.Element => {
  const hasError = errors?.[name as keyof FieldError]
  const errorMessage = errors?.[name]?.message as string

  return (
    <S.Label htmlFor={name} className={cs({ ['error']: hasError })}>
      {label && label}
      {required && (
        <span className='required' aria-hidden='true'>
          *
        </span>
      )}
      <S.Textarea
        name={name}
        {...(register &&
          register(name, {
            required,
            ...(minLength && { minLength: { value: minLength, message } }),
            ...(maxLength && { maxLength: { value: maxLength, message } }),
            ...(validate && {
              validate,
            }),
          }))}
        {...(defaultValue && { defaultValue })}
        disabled={disabled}
        aria-describedby='required'
        aria-required={required}
        aria-invalid={!!errors?.[name]}
        height={height}
        maxLength={maxLength}
      />
      {hasError && (
        <p role='alert' id='required'>
          {errorMessage ?? 'This field is required'}
        </p>
      )}
    </S.Label>
  )
}
