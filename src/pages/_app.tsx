import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import '@styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '@store/store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  )
}

export default App
