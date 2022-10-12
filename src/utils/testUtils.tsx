import { FormProvider, useForm } from 'react-hook-form'

import React, { PropsWithChildren } from 'react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions } from '@testing-library/react'
import { setupStore } from 'store/mockStore'
import { RootState } from 'src/state/store'
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: any
}

function customRender(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  )
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const FormWrapper = (props: any) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(props.onSubmit)} className='form'>
        {props.children}
      </form>
    </FormProvider>
  )
}

export * from '@testing-library/react'
export * from '@testing-library/user-event'
export { customRender as render }
export { userEvent }
