import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '@components/Fallback/Fallback'
// import { Tabs } from '@components/Tabs/Tabs'
// import { Tabs as StyledTabs } from '@components/Tabs/Tabs.style'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { SettingsCard } from '@modules/Settings/Settings.style'
import * as S from '@styles/common.style'
import { AccountForm } from './components/AccountForm/AccountForm'
import { UpdateProfile } from './components/UpdateProfile/UpdateProfile'

// const panels: [React.ReactNode] = [
//   <>
//     <UpdateProfile />
//     <AccountForm />
//     <h3>Close your account</h3>
//     <p>To close your account, please click here</p>
//   </>,
//   <div key=''>Security content</div>,
// ]

// const tabs: string[] = ['Account', 'Security']

const Settings: NextPage = () => {
  const { isMobile } = useMediaQuery()

  return (
    <>
      <Head>
        <title>Switch It Green | Settings</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ErrorBoundary fallbackRender={({ error }) => <Fallback error={error?.message} />}>
        <S.Content>
          <SettingsCard>
            {!isMobile && <h2>Settings</h2>}
            {/* <StyledTabs>
              <Tabs tabs={tabs} panels={panels}></Tabs>
            </StyledTabs> */}
            <UpdateProfile />
            <AccountForm row />
            {/* <h3>Close your account</h3>
            <p>To close your account, please click here</p> */}
          </SettingsCard>
        </S.Content>
      </ErrorBoundary>
    </>
  )
}

export default Settings
