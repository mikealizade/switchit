import type { NextPage } from 'next'
import Dashboard from '@modules/dashboard/Dashboard'

export async function getStaticProps() {
  const response = await fetch('https://randomuser.me/api/')
  const userData = await response.json()

  return {
    props: {
      userData,
    },
  }
}

const Home: NextPage = ({ userData }: any) => {
  return <Dashboard userData={userData} />
}

export default Home
