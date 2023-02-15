import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { Div } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const profiles = [
  {
    name: 'Anna Chirico',
    role: 'Co-founder | Creative Director ',
    text: 'With an extensive background in design, Anna leads on all things creative; providing creative direction across all of our operations. As our resident UX/UI whizz kid, she designed & developed the entire Switching Platform, ensuring the switching journey is as simple as possible for our users. She also manages the Web Dev and Research teams.',
    image: 'img_anna_chirico.jpg',
  },
  {
    name: 'Sophie Cowen',
    role: 'Co-founder | Campaign Director ',
    text: 'Sophie leads campaign strategy and partnership management. With experience in advertising, climate campaigning, and movement building, she is responsible for the development and growth of the organisation. Sophie coordinates our work with other organisations & businesses and oversees the development of our programs.',
    image: 'img_sophie_cowen.jpg',
  },
  {
    name: 'Amber Hayward',
    role: 'Programs Manager',
    text: 'As Co-founder of the Ecosia on Campus campaign movement, Amber is well-versed in mobilising students on climate issues. She develops & coordinates our work with schools, colleges, and universities; designing and implementing our student programs and managing our education partnerships. Amber has an MA in Environmental Humanities, which she puts to use as our content writer. ',
    image: 'img_amber_hayward.jpg',
  },
  {
    name: 'Will Sharkey',
    role: 'Lead Researcher',
    text: 'Economic researcher and esteemed ethicist Dr. Sharkey leads all of our independent research. Will developed our normative criteria for rating banks and conducts in-depth research on every provider to check if their investment policies meet our high standards.  ',
    image: 'img_will_sharkey.jpg',
  },
  {
    name: 'Mike Alizade',
    role: 'Lead Web Developer',
    text: '',
    image: 'img_mike_alizade.jpg',
  },
  {
    name: 'Tom Rickey',
    role: 'Advisor',
    text: 'Tom is a commercial leader with 20 years working in sustainable tech and digital marketing. He is passionate about the potential for technology to drive positive change in the fight against the climate crisis. He has helped to launch and grow businesses including Beagle Button, Loamin and One Tribe.',
    image: 'img_tom_rickey.jpg',
  },
]

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Switch It Green | About</title>
        <meta
          name='description'
          content='Banks are funding climate breakdown. Find out how your switch to a green bank can help end fossil fuel financing with our Bank Switching Platform.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

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
            shared frustration at climate inaction in 2020. They knew that for just climate
            solutions to be heard, big corporations first had to be held responsible - and that
            individual actions needed to have proper direction and be taken en masse to initiate
            real change. They also knew to get people in power to listen, they had to follow the
            money.
          </S.Text>
          <S.Text>And with that, Switch It Green was born.</S.Text>
          <S.Text>
            Our goal is to pressure banks to change their investment policies and rapidly phase out
            fossil fuel financing while moving £ billions out of fossil fuel support. Without
            investment from financial institutions, the fossil fuel industry will be under
            significant pressure to transform its operations.
          </S.Text>
          <S.Text>
            Your role is simple: help us push for a more just and liveable future by switching to a
            green bank today. <em>{`We've`} done the hard parts for you, the rest is up to you.</em>
          </S.Text>
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
            {profiles.map(({ name, role, text, image }) => (
              <S.Image key={name}>
                <S.HoverProfile>
                  <S.Name>{name}</S.Name>
                  <S.Role>{role}</S.Role>
                  <S.Bio>{text}</S.Bio>
                </S.HoverProfile>
                <S.Profile>
                  <S.Name>{name}</S.Name>
                  <S.Role>{role}</S.Role>
                </S.Profile>
                <Image
                  src={`/images/${image}`}
                  alt={`Picture of ${name}`}
                  width={335}
                  height={335}
                  objectFit='cover'
                />
              </S.Image>
            ))}
          </S.TeamImages>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default About
