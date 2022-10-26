import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Button, TextButton } from '@components/Button/Button'
import { SignUpForm } from '@components/SignUpForm/SignUpForm'
import { SignUpFormStep2 } from '@components/SignUpFormStep2/SignUpFormStep2'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import * as S from '@modules/PostSignupFlow/PostSignupFlow.style'
import Logo from '../../../public/switchit_logo.png'

// Log in flow TODOs
// sign up, new pw links
// social log ins wih icons
// save user and user meta to db on sign up
// prev slide

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string): string {
    return '<span class="' + className + '"></span>'
  },
}

const PostSignupFlow: NextPage = () => {
  const [swiper, setSwiper] = useState<SwiperType>()

  const nextSlide = () => {
    swiper?.slideNext()
  }

  const previousSlide = () => {
    swiper?.slidePrev()
  }

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.PostSignupFlowContainer>
        <S.Logo>
          <Image
            src={Logo}
            alt='SwitchIt logo'
            width={76}
            height={40}
            unoptimized
            className='logo'
          />
          <span>Switch It</span>
        </S.Logo>

        <S.Content>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className='mySwiper'
            onSwiper={s => {
              setSwiper(s)
            }}
            shortSwipes={false}
          >
            <SwiperSlide>
              <S.SwiperHeader>
                You don&apos;t have to change your life to change the world.
              </S.SwiperHeader>
              <p>
                Switch It can help you switch your money out of the fossil fuel industry AND
                maximise your impact.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button type='button' onClick={nextSlide}>
                Next
              </Button>
              <p>
                Already have an account?
                <TextButton
                  type='button'
                  mode='text'
                  onClick={() => {
                    console.log('sign in')
                  }}
                >
                  Sign in
                </TextButton>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperHeader>Switching in a few easy steps.</S.SwiperHeader>
              <ol>
                <li>look up the score</li>
                <li>choose a new provider</li>
                <li>switch</li>
                <li>maximise your impact</li>
              </ol>

              <Button type='button' onClick={nextSlide}>
                Next
              </Button>
            </SwiperSlide>

            <SwiperSlide>
              <S.SwiperHeader>Let&apos;s get some basic information</S.SwiperHeader>
              <SignUpForm nextSlide={nextSlide} previousSlide={previousSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperHeader>Let&apos;s get some more information</S.SwiperHeader>
              <SignUpFormStep2 nextSlide={nextSlide} previousSlide={previousSlide} />
            </SwiperSlide>
          </Swiper>
        </S.Content>
      </S.PostSignupFlowContainer>
    </>
  )
}

export default PostSignupFlow
