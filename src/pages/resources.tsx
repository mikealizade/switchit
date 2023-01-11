import type { NextPage } from 'next'
import Resources, { ResourcesType } from '@modules/Resources/Resources'
import { baseUrl } from '@utils/constants'

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findResources?type=pdf`)
  const resources = await res.json()

  return { props: { resources } }
}

const ResourcesPage: NextPage<{ resources: ResourcesType }> = ({ resources }) => {
  return <Resources resources={resources} />
}

export default ResourcesPage
