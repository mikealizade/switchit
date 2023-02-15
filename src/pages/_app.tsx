import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from '@components/Layout/Layout'
import { store, persistor } from 'src/state/store'
import 'normalize.css'
import '@styles/globals.css'

// PER PAGE
// desktop
// mobile
// error handling
// loading state ui
// page reload
// content
//

// AUTH0
// pw page
// mobile

// FOR APP
// db backups

// V2
// security
// social media login
// edit email and pw in auth0
// analytics

// TECH DEBT / AFTER GO LIVE
// email
// accessibility
// linting and linting on commit
// remove useEffects where poss
// upgrade to Next 13
// mongodb compass
// split up switching styles
// dynamic import for drawer
// integrate suspense

//NTH
// cypress tests

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <Head>
          <title>Switch It Green | Green Bank Switching Platform</title>
          <meta
            name='description'
            content='Switch to a green bank on our Bank Switching Platform'
          />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </UserProvider>
  )
}

export default App
