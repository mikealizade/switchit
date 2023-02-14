import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { AnchorLink, OrderedList, Text } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const Terms = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.PageSection>
        <S.PageHeader>Terms & Conditions</S.PageHeader>
        <S.PageSectionContent>
          <OrderedList>
            <li>
              About Us
              <OrderedList>
                <li>
                  We are SwitchIT Green Ltd., a company registered in England and Wales under
                  company registration number 13944326. Our registered office is at Suite 2.8
                  Monument House, 215 Marsh Road, Pinner, United Kingdom, HA5 5NE.
                </li>
                <li>
                  If you have any questions about the Site, please contact us by:
                  <OrderedList>
                    <li>
                      sending an email to{' '}
                      <AnchorLink
                        href='mailto:hello@switchit.green'
                        target='_blank'
                        rel='noreferrer'
                      >
                        hello@switchit.green
                      </AnchorLink>
                      , or
                    </li>
                    <li>filling out and submitting the online form available here [insert link]</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
            <li>
              About our terms
              <OrderedList>
                <li>
                  These Terms and Conditions (“Terms”) explain how you may use this website and any
                  of its content (“Site”).
                </li>
                <li>
                  In these Terms and Conditions:
                  <OrderedList>
                    <li>references to “we”, “us”, or “our” are to SwitchIT Green Ltd,</li>
                    <li>
                      references to “you” or “your” are to the person accessing or using the Site,
                      and
                    </li>
                    <li>
                      references to “Product” are to any third-party product and/or service
                      displayed on our Site.
                    </li>
                  </OrderedList>
                </li>
                <li>
                  You should read these Terms carefully before using the Site. By using the Site or
                  otherwise indicating your consent, you agree to be bound by these Terms. If you do
                  not agree with any of these Terms, you should stop using the Site immediately.
                </li>
                <li>
                  The Site is provided by us to you free of charge for information purposes only.
                  For more information, please read our website{' '}
                  <Link href='/disclaimer'>Disclaimer</Link>.
                </li>
                <li>
                  If you would like these Terms in another format (for example: audio, large print,
                  braille), please contact us using the contact details set out above.
                </li>
                <li>
                  If you are dissatisfied with any aspect of our Site or our service, and would like
                  to make a complaint, see Complaints below.
                </li>
              </OrderedList>
            </li>
            <li>
              Our Service
              <p>
                We provide an online service that makes it easy for you to move your money out of
                institutions that fund fossil fuel companies. Our Site allows you to research and
                compare financial, energy and pension products or services provided by cleaner,
                greener third parties. Our comparison service is free for you to use.
              </p>
            </li>
            <li>
              Using the site
              <OrderedList>
                <li>
                  The Site is for your personal and non-commercial use only. The Site may only be
                  accessed and used by a private individual [or by a business] to seek information
                  directly for that individual [or business]. Access to and use of the Site other
                  than for your personal, non-commercial purposes is strictly prohibited.
                </li>
                <li>
                  You are not permitted to use the Site:
                  <OrderedList>
                    <li>in any unlawful, fraudulent or commercial manner;</li>
                    <li>
                      to harm, threaten, abuse, embarrass, defame, libel, intimidate or harass
                      another person, or in a way that invades another {`person's`} privacy or is
                      obscene, offensive, hateful, indecent, inappropriate, objectionable,
                      unacceptable, discriminatory or damaging as determined by us;
                    </li>
                    <li>
                      to create, check, confirm, update, modify or amend another {`person's`}{' '}
                      records;
                    </li>
                    <li>to tamper with, modify, reverse engineer or amend any part of the Site;</li>
                    <li>
                      in a way that interferes with, disrupts or imposes an unreasonable or
                      disproportionately large burden on our communications and technical systems;
                      or
                    </li>
                    <li>
                      with any automated software, process, program, robot, web crawler, spider,
                      data mining, trawling or other {`"screen scraping"`} software, process,
                      program or system.
                    </li>
                  </OrderedList>
                </li>
                <li>
                  You agree that you are solely responsible for all costs and expenses you may incur
                  in relation to your use of the Site.
                </li>
                <li>
                  We make no promise that the Site is appropriate or available for use in locations
                  outside of the UK. If you choose to access the Site from locations outside the UK,
                  you acknowledge you do so at your own initiative and are responsible for
                  compliance with local laws where they apply.
                </li>
                <li>
                  We try to make the Site as accessible as possible. If you have any difficulties
                  using the Site, please contact us using the contact details at the top of this
                  page.
                </li>
              </OrderedList>
            </li>
            <li>
              Registration and password security
              <OrderedList>
                <li>
                  Use of the Site may require registration, particularly in order to access
                  restricted areas of the Site.
                </li>
                <li>
                  We are not obliged to permit anyone to register with the Site and we may refuse,
                  terminate or suspend registration to anyone at any time.
                </li>
                <li>
                  You are responsible for making sure that your password and any other account
                  details are kept secure and confidential.
                </li>
                <li>
                  If we have reason to believe there is likely to be a breach of security or misuse
                  of the Site through your account or the use of your password, we may notify you
                  and require you to change your password, or we may suspend or terminate your
                  account.
                </li>
                <li>
                  Any personal information you provide to us as part of the registration process
                  will be processed in accordance with our{' '}
                  <Link href='/privacy-policy'>Privacy Policy</Link>.
                </li>
              </OrderedList>
            </li>
            <li>
              Infringing content
              <OrderedList>
                <li>
                  We will use reasonable efforts to:
                  <OrderedList>
                    <li>
                      delete accounts which are being used in an inappropriate manner or in breach
                      of these Terms; and
                    </li>
                    <li>
                      identify and remove any content that is inappropriate, defamatory, or
                      infringes intellectual property rights we are notified, but we cannot be
                      responsible if you have failed to provide us with the relevant information.
                    </li>
                  </OrderedList>
                </li>
                <li>
                  If you believe that any content which is distributed or published by the Site is
                  inappropriate, defamatory or infringing on intellectual property rights, you
                  should contact us immediately using the contact details at the top of this page.
                </li>
              </OrderedList>
            </li>
            <li>
              Your privacy and personal information
              <p>
                Your privacy and personal information are important to us. Any personal information
                that you provide to us will be dealt with in line with our{' '}
                <Link href='/privacy-policy'>Privacy Policy</Link> which explains what personal
                information we collect from you, how and why we collect, store, use and share such
                information, your rights in relation to your personal information and how to contact
                us and supervisory authorities in the event you have a query or complaint about the
                use of your personal information.
              </p>
            </li>
            <li>
              Ownership, use and intellectual property rights
              <OrderedList>
                <li>
                  The intellectual property rights in the Site and in any text, images, video, audio
                  or other multimedia content, software or other information or material submitted
                  to or accessible from the Site (“Content”) are owned by us and our licensors
                  (including our green partners).
                </li>
                <li>
                  We and our licensors (including our green partners) reserve all our intellectual
                  property rights (including, but not limited to, all copyright, trade marks, domain
                  names, design rights, database rights, patents and all other intellectual property
                  rights of any kind) whether registered or unregistered anywhere in the world. This
                  means, for example, that we remain owners of them and are free to use them as we
                  see fit.
                </li>
                <li>
                  Nothing in these Terms grants you any legal rights in the Site or the Content
                  other than as necessary for you to access it. You agree not to adjust, try to
                  circumvent or delete any notices contained on the Site or the Content (including
                  any intellectual property notices) and in particular, in any digital rights or
                  other security technology embedded or contained within the Site or the Content.
                </li>
              </OrderedList>
            </li>
            <li>
              Submitting information to the site
              <OrderedList>
                <li>
                  While we try to make sure that the Site is secure, we do not actively monitor or
                  check whether information supplied to us through the Site is confidential,
                  commercially sensitive or valuable.
                </li>
                <li>
                  Other than any personal information which will be dealt with in accordance with
                  our <Link href='/privacy-policy'>Privacy Policy</Link>, we do not guarantee that
                  information supplied to us through the Site will be kept confidential and we may
                  use it on an unrestricted and free-of-charge basis as we reasonably see fit.
                </li>
              </OrderedList>
            </li>
            <li>
              Your responsibilities
              <OrderedList>
                <li>
                  You agree that you will be liable to us for any damage, loss, claim, demand,
                  liability or expense (including reasonable legal fees) that we may suffer or incur
                  arising out of or in connection with your conduct on the Site and/or your breach
                  of these Terms.
                </li>
                <li>
                  If you are in any doubt as to whether any information on our Site is relevant or
                  required to be disclosed or that something may be incorrect you should disclose it
                  to the third-party provider before you apply for a Product.
                </li>
                <li>
                  Before you obtain any Product from a third-party provider, you must check all of
                  the information, content, material, or data the provider holds about you to ensure
                  it is correct, complete, accurate, and not misleading and that you have disclosed
                  all relevant facts. It is your responsibility to identify and correct any mistakes
                  or errors in the information, content, material, or data before you obtain any
                  Product. Failure to do so could invalidate the Product.
                </li>
                <li>
                  You must get permission from any other person whose information you intend to
                  provide on the Site before you provide it. In submitting any other {`person's`}{' '}
                  details, you are confirming to us that you have their permission to do so and that
                  they understand how their details will be used.
                </li>
                <li>
                  You must take all reasonable precautions (including using appropriate virus
                  checking software) to ensure that any information, content, material, or data you
                  provide (including User Content) is free from viruses and anything else which may
                  have a harmful effect on any part of the Site or the websites of third parties or
                  any other technology.
                </li>
                <li>
                  When you create any usernames and passwords when using the Sites, they must be
                  kept confidential by you and must not be shared with anyone. If you do disclose to
                  anyone your username, password, and/or other identification information, you are
                  solely responsible for all activities undertaken on the Site using your username,
                  password, and/or other identification information.
                </li>
                <li>
                  Your use of any third-party websites and your obtaining of any Products will be
                  subject to the third-party {`providers'`} own terms and conditions (which will be
                  different from ours). It is very important before you apply for any Product that
                  you carefully read the accompanying terms and conditions, the third-party{' '}
                  {`providers'`}
                  terms and conditions, and any other documentation that applies to the Product.
                </li>
              </OrderedList>
            </li>
            <li>
              Our responsibility to you
              <OrderedList>
                <li>
                  Any Content provided on this Site or by any third-party (including our green
                  partners) in connection with this Site is given for your general information
                  purposes only and to inform you about us and our services, news, features, and
                  other websites that may be of interest, but has not been tailored to your specific
                  requirements or circumstances. It does not constitute technical, financial or
                  legal advice or any other type of advice and should not be relied on for any
                  purposes. You should always use your own independent judgment when using our Site
                  and its Content.
                </li>
                <li>
                  Any links to third-party websites on our Site or in our emails are provided for
                  your interest and convenience only. These websites are owned and operated by third
                  parties over whom we do not have control. We do not endorse, recommend or accept
                  responsibility for such third-party Products, their websites, or for any
                  information, opinions, or views given or advice provided by such third parties
                  (whether on their websites or otherwise).
                </li>
                <li>
                  We aim to ensure that the material on the Site (excluding, if applicable, any User
                  Content) is accurate. We also try to correct any errors or omissions as soon as we
                  can after being notified of them. However, we are not able to guarantee that the
                  material on the Site is accurate and free from errors or omissions at all times.
                </li>
                <li>
                  We do not give any warranty that the Site is free from viruses or anything else
                  which may have a harmful effect on any technology.
                </li>
                <li>
                  We reserve the right to add, amend, delete, edit, remove or modify any
                  information, content, material or data displayed on the Site at any time and
                  without notice.
                </li>
                <li>
                  We aim to provide uninterrupted access to the Site but we give no warranty on
                  this. We reserve the right to suspend, restrict or terminate your access to the
                  Site at any time.
                </li>
                <li>
                  If we breach these Terms or are negligent, we are liable to you for foreseeable
                  loss or damage that you suffer as a result. By {`'foreseeable'`} we mean that, at
                  the time these Terms were formed, it was either clear that such loss or damage
                  would occur or you and we both knew that it might reasonably occur, as a result of
                  something we did (or failed to do).
                </li>
                <li>
                  We are not liable to you for any loss or damage that was not foreseeable, any loss
                  or damage not caused by our breach or negligence, or any business loss or damage.
                </li>
                <li>
                  Nothing in these terms excludes or limits our liability for any death or personal
                  injury caused by our negligence, liability for fraud or fraudulent
                  misrepresentation, or any other liability that the law does not allow us to
                  exclude or limit.
                </li>
              </OrderedList>
            </li>
            <li>
              Events beyond our control
              <p>
                We are not liable to you if we fail to comply with these Terms because of
                circumstances beyond our reasonable control.
              </p>
            </li>

            <li>
              No third party rights
              <p>No one other than us or you have any right to enforce any of these Terms.</p>
            </li>
            <li>
              Variation
              <OrderedList>
                <li>
                  No changes to these Terms are valid or have any effect unless agreed by us in
                  writing or made in accordance with this clause 14.
                </li>
                <li>
                  We reserve the right to vary these Terms from time to time. Our updated Terms will
                  be displayed on the Site and by continuing to use and access the Site following
                  such changes, you agree to be bound by any variation made by us. It is your
                  responsibility to check these Terms from time to time to verify such variations.
                </li>
              </OrderedList>
            </li>
            <li>
              Complaints
              <OrderedList>
                <li>
                  We aim to provide you with an excellent service at all times. If you are unhappy
                  with our service for any reason, please contact us at:{' '}
                  <AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
                    hello@switchit.green
                  </AnchorLink>
                  .
                </li>
                <li>
                  We will aim to send you a formal acknowledgement of your complaint within [48
                  hours] and to resolve it as soon as possible. After we have had an opportunity to
                  investigate your concerns, we will issue you a final response. If you are not
                  satisfied with our response, depending on the nature of your complaint, you may
                  have the right to refer your case to:
                  <OrderedList>
                    <li>
                      the Financial Ombudsman Service at Exchange Tower, Harbour Exchange, London,
                      E14 9SR; telephone: 0800 023 4 567
                      <br />
                      email:{' '}
                      <AnchorLink
                        href='mailto:enquiries@financial-ombudsman.org.uk'
                        target='_blank'
                        rel='noreferrer'
                      >
                        enquiries@financial-ombudsman.org.uk
                      </AnchorLink>
                      <br />
                      website:{' '}
                      <AnchorLink
                        href='http://www.financial-ombudsman.org.uk/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        www.financial-ombudsman.org.uk
                      </AnchorLink>{' '}
                      (if your complaint relates to financial services); or
                    </li>
                    <li>
                      the Ombudsman Service at Ombudsman Services: Energy, PO Box 966, Warrington,
                      WA4 9DF; telephone: 0330 440 1624
                      <br />
                      email:{' '}
                      <AnchorLink
                        href='mailto:osenquiries@os-energy.org'
                        target='_blank'
                        rel='noreferrer'
                      >
                        osenquiries@os-energy.org
                      </AnchorLink>
                      <br />
                      website:{' '}
                      <AnchorLink
                        href='https://www.ombudsman-services.org/energy'
                        target='_blank'
                        rel='noreferrer'
                      >
                        www.ombudsman-services.org/energy
                      </AnchorLink>{' '}
                      (if your complaint relates to energy services); or
                    </li>
                    <li>
                      the Information {`Commissioner's`} Office: Telephone: 0303 123 1113
                      <br />
                      website{' '}
                      <AnchorLink
                        href='https://ico.org.uk/make-a-complaint'
                        target='_blank'
                        rel='noreferrer'
                      >
                        ico.org.uk/make-a-complaint
                      </AnchorLink>{' '}
                      (if your complaint relates to how we have handled your personal information.
                    </li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
            <li>
              Legal
              <OrderedList>
                <li>
                  If any provision of these Terms is held to be unlawful, invalid, or unenforceable,
                  that provision shall be deemed deleted from these Terms and the validity and
                  enforceability of the remaining provisions of these Terms shall not be affected.
                </li>
                <li>
                  These Terms, together with our <Link href='/privacy-policy'>Privacy Policy</Link>{' '}
                  and Cookie Policy, constitute the entire agreement between you and us relating to
                  your access to and use of the Site and supersede any prior agreements (including
                  any previous terms of use of the Site).
                </li>
                <li>
                  No failure or delay by us in exercising any right under these Terms will operate
                  as a waiver of that right nor will any single or partial exercise by us of any
                  right preclude any further exercise of any right.
                </li>
                <li>
                  These Terms and your access to and use of the Site shall be governed by and
                  interpreted in accordance with English law.
                </li>
                <li>
                  Each of you and us submits to the exclusive jurisdiction of the courts of England
                  and Wales in connection with these Terms and your access to and use of the Site
                  (including any claims or disputes).
                </li>
              </OrderedList>
            </li>
          </OrderedList>
          <Text>Last updated: 20th February 2023</Text>
        </S.PageSectionContent>
      </S.PageSection>
    </SignedOutLayout>
  )
}

export default Terms
