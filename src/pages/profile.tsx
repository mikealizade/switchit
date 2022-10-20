import type { NextPage } from 'next'
import Profile from '@modules/Profile/Profile'

// export async function getStaticProps() {
//   const response = await fetch('https://randomuser.me/api/')
//   const userData = await response.json()

//   return {
//     props: {
//       userData,
//     },
//   }
// }

const Home: NextPage = () => {
  return <Profile />
}

export default Home
