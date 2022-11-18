import type { NextPage } from 'next'
import Settings from '@modules/Settings/Settings'
import { baseUrl } from '@utils/constants'
import { ResourcesType } from '@modules/Resources/Resources'

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findResources?type=pdf`)
  const resources = await res.json()

  return { props: { resources } }
}

const SettingsPage: NextPage<{ resources: ResourcesType }> = ({ resources }) => {
  return <Settings />
}

export default SettingsPage
