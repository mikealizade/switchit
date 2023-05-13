import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { BulletList, Div } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const profiles = [
  {
    name: 'Anna Chirico',
    role: 'Co-founder | Creative Director ',
    text: 'With an extensive background in design, Anna leads on all things creative; providing creative direction across all of our operations. As our resident UX/UI whizz kid, she designed & developed the entire Green Banking Platform, ensuring the switching journey is as simple as possible for our users. She also manages the Web Dev and Research teams.',
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
    text: 'As Co-founder of the Ecosia on Campus campaign movement, Amber is well-versed in mobilising students on climate issues. She develops & coordinates our work with schools, colleges, and universities; designing and implementing our student programs and managing our education partnerships.',
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
    text: 'A veteran of the web industry for over 20 years, Mike is dedicated to using his technical skills and experience to fight the climate crisis and helped us launch our new Switch It Green website.',
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
          content='Banks are funding climate breakdown. Find out how your switch to a green bank can help end fossil fuel financing with our Green Banking Platform.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <SignedOutLayout>
        <S.PageSection>
          <S.ContentContainer>
            <S.PageHeader>About Switch It</S.PageHeader>
            <S.Text>
              Switch It Green is a campaign and platform which informs, empowers, and mobilises individuals to take impactful climate action
              at scale by switching en masse to greener financial providers.
            </S.Text>
          </S.ContentContainer>
        </S.PageSection>
        <S.PageSection>
          <S.ContentContainer>
            <S.PageHeaderMono>Our Story</S.PageHeaderMono>
            <S.Text>
              Switch It Green Co-Founders, Anna Chirico and Sophie Cowen, first connected over their shared frustration at climate inaction
              in 2020. They knew that for just climate solutions to be heard, big corporations first had to be held responsible. They could
              see that individual actions needed to have clear direction, and be taken en masse to initiate real change. And they knew that
              in order to get key decision makers to listen, they had to follow the money.
            </S.Text>
            <S.Text>And with that, Switch It Green was born.</S.Text>
            <S.Text>
              Our mission is to pressure banks to change their investment policies to rapidly phase out fossil fuel financing, by harnessing
              the power of individual action to move £ billions out of fossil fuel support. Without support from customers, banks will be
              less able to invest in fossil fuels. Without investment from financial institutions, the fossil fuel industry will be under
              significant pressure to transform its operations. Your role is simple:
            </S.Text>
            <S.Text>
              Help us push for a more just and liveable future by using the platform to switch to a green bank today, and maximise the
              impact of your switch.
            </S.Text>
            <S.Text>
              <em>
                {`We've`} made it easy for you to be part of the change - all you need to do now is follow our simple switching journey!
              </em>
            </S.Text>
          </S.ContentContainer>
        </S.PageSection>
        <S.PageSection rowGap={30}>
          <S.ContentContainer>
            <S.PageHeaderMono>The Platform</S.PageHeaderMono>
            <Div>
              <S.Text>Our Green Banking Platform makes switching to a green bank as simple and impactful as possible.</S.Text>
              <BulletList>
                <li>See how your bank stacks up against our stringent investment criteria</li>
                <li>Get to know exactly what your bank has been investing in behind your back</li>
                <li>Select a new Switch-It-Green-approved provider</li>
                <li>Make the switch alongside thousands of others</li>
                <li>Maximise your switch with our series of ready-to-go lobbying steps.</li>
              </BulletList>
              <S.Text>
                <em>Plus much more!</em>
              </S.Text>
              <S.Text>
                <strong>Create an account to get started.</strong> <em>Psst - {`It's`} free!</em>
              </S.Text>
            </Div>
            <S.BlockButton margin='30px 0 0'>
              <Link href='/api/auth/signup'>Start my switching journey</Link>
            </S.BlockButton>
          </S.ContentContainer>
        </S.PageSection>
        <S.PageSection rowGap={30}>
          {/* <S.ContentContainer> */}
          <S.TeamImagesContainer>
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
                  <Image src={`/images/${image}`} alt={`Picture of ${name}`} width={290} height={290} objectFit='cover' />
                </S.Image>
              ))}
            </S.TeamImages>
            {/* </S.ContentContainer> */}
          </S.TeamImagesContainer>
        </S.PageSection>
      </SignedOutLayout>
    </>
  )
}

export default About
