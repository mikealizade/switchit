import type { NextPage } from 'next'
import Dashboard from '@modules/Dashboard/Dashboard'
import PostSignupFlow from '@modules/PostSignupFlow/PostSignupFlow'

export async function getStaticProps() {
  const response = await fetch('https://randomuser.me/api/')
  const userData = await response.json()

  return {
    props: {
      userData,
    },
  }
}

const isNewUser = true

const Home: NextPage = ({ userData }: any) => {
  return <>{isNewUser ? <PostSignupFlow /> : <Dashboard userData={userData} />}</>
}

export default Home
