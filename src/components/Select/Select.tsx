import { FC } from 'react'
import ReactSelect from 'react-select'
import {
  useForm,
  useController,
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form'
import cs from 'classnames'

type SelectProps = {
  name: string
  label?: string
  options: ReactSelectProps
  defaultValue?: ReactSelectItem
  errors?: FieldErrors
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  disabled?: boolean
  onChange: (value: string) => void
  isLoading?: boolean
  required?: boolean
  formState?: {
    errors: FieldErrors
  }
}

type ReactSelectItem = { value: string | number; label: string; shortCode?: string }

type ReactSelectProps = Array<ReactSelectItem>

export const Select: FC<SelectProps> = ({
  name = '',
  label = '',
  defaultValue = {},
  options,
  register,
  formState: { errors } = {},
  onChange,
  isLoading,
  required,
  disabled,
}): JSX.Element => {
  const { control } = useForm()
  const hasError = errors?.[name]
  const {
    field: { value: val },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  })

  return (
    <>
      {label && (
        <label htmlFor={name} className={cs({ ['error']: hasError })}>
          {label}{' '}
          {required && (
            <span className='required' aria-hidden='true'>
              *
            </span>
          )}
        </label>
      )}
      <ReactSelect
        id={name}
        value={options.find(({ value }) => value === val)}
        defaultValue={defaultValue}
        isLoading={isLoading}
        className='react-select'
        options={options}
        {...(register && register(name, { required: !!required }))}
        onChange={(selectedOption: any) => {
          onChange(selectedOption!.value)
        }}
        isDisabled={disabled}
        escapeClearsValue
        backspaceRemovesValue
        menuPlacement='auto'
      />
      {hasError && <p role='alert'>This field is required</p>}
    </>
  )
}
