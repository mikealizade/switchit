import { FC } from 'react'
import { FieldErrors, FieldError, RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'
import cs from 'classnames'
import { regexConfig, emailRegex } from '@utils/constants'
import * as S from '@components/Input/Input.style'

type InputProps = {
  name: string
  label: string
  type?: string
  errors?: FieldError
  defaultValue?: string | number
  pattern?: string
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  disabled?: boolean
  required?: boolean
  minLength?: number
  maxLength?: number
  message: string
  formState?: {
    errors: FieldErrors
  }
  validate?: (arg: Record<string, string>) => any
  placeholder?: string
}

export const Input: FC<InputProps> = ({
  name = '',
  label = '',
  type = 'text',
  pattern,
  defaultValue = '',
  register,
  formState: { errors } = {},
  required,
  disabled,
  minLength,
  maxLength,
  message,
  validate,
  placeholder = '',
}) => {
  const hasError = errors?.[name as keyof FieldError]
  const errorMessage = errors?.[name]?.message as string

  return (
    <label htmlFor={name} className={cs({ ['error']: hasError })}>
      {label}{' '}
      {required && (
        <span className='required' aria-hidden='true'>
          *
        </span>
      )}
      <S.Input
        id={name}
        type={type}
        {...(register &&
          register(name, {
            required,
            ...(minLength && { minLength: { value: minLength, message } }),
            ...(maxLength && { maxLength: { value: maxLength, message } }),
            ...(pattern && {
              pattern: {
                value: new RegExp(pattern === 'email' ? emailRegex : regexConfig[pattern], 'g'),
                message,
              },
            }),
            ...(validate && {
              validate,
            }),
          }))}
        {...(defaultValue && { defaultValue })}
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby='required'
        aria-required={required}
        aria-invalid={!!errors?.[name]}
      />
      {hasError && (
        <p role='alert' id='required'>
          {errorMessage ?? 'This field is required'}
        </p>
      )}
    </label>
  )
}
