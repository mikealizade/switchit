import type { NextPage } from 'next'
import { ResourcesType } from '@modules/Resources/Resources'
import WhySwitchIt from '@modules/WhySwitchIt/WhySwitchIt'
import { baseUrl } from '@utils/constants'

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/db/findBlogPosts`)
  const resources = await res.json()

  return { props: { resources } }
}

const WhySwitchItPage: NextPage<{ resources: ResourcesType }> = ({ resources }) => {
  return <WhySwitchIt resources={resources} />
}

export default WhySwitchItPage
