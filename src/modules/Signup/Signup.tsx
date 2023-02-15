import type { NextPage } from 'next'
import type { Swiper as SwiperType } from 'swiper'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, TextButton } from '@components/Button/Button'
import { Modal } from '@components/Modal/Modal'
import { SignUpForm } from '@components/SignUpForm/SignUpForm'
import { SignUpFormStep2 } from '@components/SignUpFormStep2/SignUpFormStep2'
import { useModal } from '@hooks/useModal'
import 'swiper/css'
import 'swiper/css/pagination'
import * as S from '@modules/Signup/Signup.style'
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

const Signup: NextPage = () => {
  const { push } = useRouter()
  const [swiper, setSwiper] = useState<SwiperType>()
  const [isModalVisible, setToggleModal] = useModal()

  const nextSlide = () => {
    swiper?.slideNext()
  }

  const previousSlide = () => {
    swiper?.slidePrev()
  }

  const onToggleModal = (isVisible: boolean) => (): void => {
    setToggleModal(isVisible!)
  }

  return (
    <>
      <Head>
        <title>Switch It Green | Sign Up</title>
        <meta name='description' content='Switch to a green bank on our Bank Switching Platform' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.PostSignupFlowContainer>
        <S.Content>
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
                <TextButton type='button' mode='text' onClick={() => push('/api/auth/login')}>
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
              <SignUpForm
                nextSlide={nextSlide}
                previousSlide={previousSlide}
                setToggleModal={setToggleModal}
              />
            </SwiperSlide>
            <SwiperSlide>
              <S.SwiperHeader>Let&apos;s get some more information</S.SwiperHeader>
              <SignUpFormStep2 nextSlide={nextSlide} previousSlide={previousSlide} />
            </SwiperSlide>
          </Swiper>
        </S.Content>
        {isModalVisible && (
          <Modal
            title='Why do we want to know this information?'
            confirmText='OK'
            showCancel={false}
            cancelText='Cancel'
            onConfirm={onToggleModal(false)}
            onClose={onToggleModal(false)}
          >
            Sunt aute anim magna velit irure dolore. Sunt do nostrud nulla anim. Deserunt
            reprehenderit non cupidatat enim nostrud irure non. Nulla duis nostrud dolore elit nisi
            nostrud incididunt eu voluptate aute incididunt aliqua tempor ipsum. Commodo cillum
            commodo ad duis in. Elit et velit sint enim magna adipisicing commodo commodo aute
            proident. Do id incididunt sint ullamco occaecat Lorem eiusmod in cupidatat nostrud id.
          </Modal>
        )}
      </S.PostSignupFlowContainer>
    </>
  )
}

export default Signup
