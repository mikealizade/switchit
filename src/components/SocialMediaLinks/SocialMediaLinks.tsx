import Image from 'next/image'
import * as S from './SocialMediaLinks.style'

export const SocialMediaLinks = ({ isMobileNav }: { isMobileNav?: boolean }) => {
  return (
    <S.Links isMobileNav={isMobileNav}>
      {/* <S.Item>Follow Us Here</S.Item> */}
      <li>
        <a href='https://www.facebook.com/switchit.green' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_fb.svg'} alt='' width={15} height={29} />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/switchit.green' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_instagram.svg'} alt='' width={27} height={27} />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/switchit_green' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_twitter.svg'} alt='' width={29} height={23} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/company/switchit-green' target='_blank' rel='noreferrer'>
          <Image src={'/icons/icon_follow_linkedin.svg'} alt='' width={25} height={26} />
        </a>
      </li>
    </S.Links>
  )
}
