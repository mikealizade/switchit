import type { AppProps } from 'next/app'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { store } from 'src/state/store'
import { Layout } from '@components/Layout/Layout'
import '@styles/globals.css'
import 'normalize.css'

// TODOs
//// social media login
//// upload user image
//// edit email and pw in auth0
//// CDN for pdfs and images
//// donate
// mongodb compass
// error handling
// protect routes withPageAuthRequired
//Case 00108281`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Provider store={store}>
        <Head>
          <title>SwitchIt</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserProvider>
  )
}

export default App
