import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from '@components/Layout/Layout'
import { store, persistor } from 'src/state/store'
import 'normalize.css'
import '@styles/globals.css'

// AUTH0
// pw page
// mobile

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

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TS6XKWR' })
  }, [])

  return (
    <UserProvider>
      <Provider store={store}>
        <Head>
          <title>Switch It Green | Green Bank Switching Platform</title>
          <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
          <meta property='og:url' content='https://switchit-weld.vercel.app/profile' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Switch It Green | Green Bank Switching Platform' />
          <meta property='og:description' content='Switch to a green bank on our Bank Switching Platform' />
          <meta property='og:image' content='https://switchit-green.s3.eu-west-2.amazonaws.com/assets/images/switchit_logo.png' />
          <meta
            property='og:image:secure_url'
            content='https://switchit-green.s3.eu-west-2.amazonaws.com/assets/images/switchit_logo.png'
          />
          <meta property='og:image:url' content='https://switchit-green.s3.eu-west-2.amazonaws.com/assets/images/switchit_logo.png' />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='124' />
          <meta property='og:image:height' content='66' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='switchit-weld.vercel.app' />
          <meta property='twitter:url' content='https://switchit-weld.vercel.app/profile' />
          <meta name='twitter:title' content='Switch It Green | Green Bank Switching Platform' />
          <meta name='twitter:description' content='Switch to a green bank on our Bank Switching Platform' />
          <meta name='twitter:image' content='https://switchit-green.s3.eu-west-2.amazonaws.com/assets/images/switchit_logo.png' />

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
