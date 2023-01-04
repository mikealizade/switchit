import Image from 'next/image'
import * as S from './PostToSocials.style'

export const FollowUs = () => {
  return (
    <S.FollowUs>
      <S.Item>Follow Us Here</S.Item>
      <li>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_fb.svg'} alt='' width={12} height={27} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_instagram.svg'} alt='' width={24} height={24} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_twitter.svg'} alt='' width={27} height={22} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_linkedin.svg'} alt='' width={26} height={25} />
        </a>
      </li>
    </S.FollowUs>
  )
}
