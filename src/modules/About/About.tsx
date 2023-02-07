import Image from 'next/image'
import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Div } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const profiles = [
  {
    name: 'Anna Chirico',
    role: 'Co-founder | Creative Director ',
    image: 'img_anna_chirico.jpg',
  },
  {
    name: 'Sohphie Cowen',
    role: 'Co-founder | Campaign Director ',
    image: 'img_sophie_cowen.jpg',
  },
  {
    name: 'Amber Hayward',
    role: 'Programs Manager',
    image: 'img_anber_hayward.jpg',
  },
  {
    name: 'Will Sharkey',
    role: 'Lead Researcher',
    image: 'img_will_sharkey.jpg',
  },
  {
    name: 'Mike Alizade',
    role: 'Lead Web Developer',
    image: 'img_mike_alizade.jpg',
  },
  {
    name: 'Tom Rickey',
    role: 'Advisor',
    image: 'img_tom_rickey.jpg',
  },
]

const About = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.PageSection>
        <S.PageHeader>About Switch It</S.PageHeader>
        <S.Text>
          Switch It Green is a campaign and platform which informs, empowers, and mobilises
          individuals to take impactful climate action at scale by switching en masse to greener
          financial providers.
        </S.Text>
      </S.PageSection>
      <S.PageSection>
        <S.PageHeader>Our Story</S.PageHeader>
        <S.Text>
          Switch It Green Co-Founders, Anna Chirico and Sophie Cowen, first connected over their
          shared frustration at climate inaction in 2020. They knew that for just climate solutions
          to be heard, big corporations first had to be held responsible - and that individual
          actions needed to have proper direction and be taken en masse to initiate real change.
          They also knew to get people in power to listen, they had to follow the money.
        </S.Text>
        <S.Text>And with that, Switch It Green was born.</S.Text>
        <S.Text>
          Our goal is to pressure banks to change their investment policies and rapidly phase out
          fossil fuel financing while moving £ billions out of fossil fuel support. Without
          investment from financial institutions, the fossil fuel industry will be under significant
          pressure to transform its operations.
        </S.Text>
        <S.Text>
          Your role is simple: help us push for a more just and liveable future by switching to a
          green bank today. <em>{`We've`} done the hard parts for you, the rest is up to you.</em>
        </S.Text>

        {/* <Div rowGap={30}>
          <S.PageHeader>Who We Are</S.PageHeader>
        </Div> */}
      </S.PageSection>
      <S.PageSection rowGap={30} highfive position='right 170px bottom'>
        <S.PageHeader>The Switching Platform</S.PageHeader>
        <Div width='50%'>
          <S.Text>
            Our Bank Switching Platform makes switching to a green bank as simple and impactful as
            possible.
          </S.Text>
          <S.Text>
            See how your bank stacks up against our stringent investment criteria | Get to know
            exactly what your bank has been investing in behind your back | Select a new
            Switch-It-Green-approved provider | Make the switch alongside thousands of others |
            Maximise your switch with our series of ready-to-go lobbying steps. [I’m picturing a
            little graphic-y timeline/arrows/journey if poss]
          </S.Text>
          <S.Text>
            <em>Plus much more!</em>
          </S.Text>
          <S.Text>
            <strong>
              Create an account to get started. <em>psst - {`It's`} free!</em>
            </strong>
          </S.Text>
        </Div>
        <S.BlockButton margin='30px 0 0'>
          <Link href='/signup'>Start my switching journey</Link>
        </S.BlockButton>
      </S.PageSection>
      <S.PageSection rowGap={30}>
        <S.PageHeader>Who We Are</S.PageHeader>
        <S.TeamImages>
          {profiles.map(({ name, role, image }) => (
            <S.Image key={name}>
              <S.Profile>
                <S.Name>{name}</S.Name>
                <S.Role>{role}</S.Role>
              </S.Profile>
              <Image src={`/images/${image}`} alt={`Picture of ${name}`} width={450} height={450} />
            </S.Image>
          ))}
        </S.TeamImages>
      </S.PageSection>
    </SignedOutLayout>
  )
}

export default About
