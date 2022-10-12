import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from '@modules/PostSignupFlow/PostSignupFlow.style'
import 'swiper/css'
import 'swiper/css/pagination'
import { Button, TextButton } from '@components/Button/Button'
import { SignUpForm } from '@components/SignUpForm/SignUpForm'
import { SignUpFormStep2 } from '@components/SignUpFormStep2/SignUpFormStep2'

// import './styles.css'

// import required modules
import { Pagination } from 'swiper'

type PageProps = {
  userData: any
}

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string): string {
    return '<span class="' + className + '">' + (index + 1) + '</span>'
  },
}

const PostSignupFlow: NextPage<PageProps> = ({ userData }: any) => {
  const [swiper, setSwiper] = React.useState(null)

  const nextSlide = () => {
    swiper.slideNext()
  }

  const previousSlide = () => {
    swiper.slidePrevious()
  }

  return (
    <>
      <Head>
        <title>SwitchIt</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.PostSignupFlowContainer>
        <Image
          src='https://switchit.green/wp-content/uploads/2022/02/switch-it-icon.png'
          alt='SwitchIt logo'
          width={76}
          height={40}
          unoptimized
          className='logo'
        />

        <S.Content>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className='mySwiper'
            onSwiper={s => {
              setSwiper(s)
            }}
          >
            <SwiperSlide>
              <S.SwiperHeader>
                You don’t have to change your life to change the world.
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
              <S.SwiperHeader>Let’s get some basic information</S.SwiperHeader>
              <SignUpForm nextSlide={nextSlide} previousSlide={previousSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperHeader>Let’s get some more information</S.SwiperHeader>
              <SignUpFormStep2 nextSlide={nextSlide} previousSlide={previousSlide} />
            </SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </S.Content>
      </S.PostSignupFlowContainer>
    </>
  )
}

export default PostSignupFlow
