import Link from 'next/link'
import { SignedOutLayout } from '@modules/SignedOutLanding/SignedOutLayout'
import { AnchorLink, OrderedList, Text, BasicTable } from '@styles/common.style'
import * as S from '../SignedOutLanding/SignedOutLanding.style'

const PrivacyPolicy = (): JSX.Element => {
  return (
    <SignedOutLayout>
      <S.PageSection>
        <S.PageHeader>Privacy Policy</S.PageHeader>
        <S.PageSectionContent>
          <OrderedList>
            <li>
              <AnchorLink href='#intro'>Introduction</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#personaldata'>What personal data do we process?</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#whyprocess'>
                How and why do we process your personal data?
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#lawfulbases'>Lawful bases</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#sharedata'>Who do we share your personal data with</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#socialmedia'>Social media</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#dataretention'>Data retention</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#cookies'>Cookies</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#datasecurity'>Data security</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#transferdata'>
                Do we transfer your personal data outside the EU/UK
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#rights'>Your rights</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contactus'>Contact us</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#updates'>Updates to this notice</AnchorLink>
            </li>
          </OrderedList>
          <br />
          <br />
          <br />
          <br />
          <OrderedList>
            <li>
              <a id='intro'></a>Introduction
              <OrderedList>
                <li>
                  Switch It Green Limited (“Switch It”) respects your privacy and is committed to
                  protecting your personal data. This privacy notice sets out how Switch It
                  collects, uses and shares the information that you provide us when you use our
                  website{' '}
                  <AnchorLink href='https://switchit.green' target='_blank' rel='noreferrer'>
                    https://switchit.green
                  </AnchorLink>{' '}
                  or when you interact with us on our social media pages.
                </li>
                <li>
                  Switch It is a registered company in England and Wales with registration number
                  13944326 and registered office Suite 2.8 Monument House, 215 Marsh Road, Pinner,
                  United Kingdom, HA5 5NE.
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='personaldata'></a>
              What personal data do we process?
              <OrderedList>
                <li>
                  Personal data means any information about a living individual from which that
                  person can be identified. Where an individual cannot be identified from the
                  information in question it is not personal data.
                </li>
                <li>
                  We may collect the following personal data about our users of our website and on
                  our social media pages:
                  <OrderedList>
                    <li>Name</li>
                    <li>Contact details, including your e-mail address; and</li>
                    <li>
                      Details about your interactions with us, including any information you may
                      share with us (such as your bank provider).
                    </li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='whyprocess'></a>
              How and why do we process your personal data?
              <OrderedList>
                <li>
                  We may process your personal data for the following reasons, to:
                  <OrderedList>
                    <li>Contact you if you have submitted your email via the website;</li>
                    <li>Make recommendations to you on your bank provider;</li>
                    <li>Send you marketing emails; and</li>
                    <li>Interact with you on social media.</li>
                  </OrderedList>
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='lawfulbases'></a>
              Lawful bases
              <OrderedList>
                <li>
                  We will only process your personal data where the law allows us to (i.e., where we
                  have a {`'lawful basis'`}).
                  <BasicTable>
                    <thead>
                      <tr>
                        <th>Lawful basis</th>
                        <th>Processing</th>
                        <th>Categories of personal data </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Legitimate interests </td>
                        <td>
                          respond to your queries
                          <br />
                          To interact with you on our social media pages
                        </td>
                        <td>Name, contact information</td>
                      </tr>
                      <tr>
                        <td>Consent</td>
                        <td>Sending you marketing by email</td>
                        <td>Name, contact information</td>
                      </tr>
                      <tr>
                        <td>Performance of a contract</td>
                        <td>To allow you to participate in an event you have signed up for</td>
                        <td>Name, contact information</td>
                      </tr>
                      <tr>
                        <td>Compliance with a legal obligation</td>
                        <td>
                          Where we are obliged to share your personal information with regulatory
                          bodies which govern our work and services. If you do not supply the
                          relevant information we may not be able to provide our services to you.
                        </td>
                        <td>Name, contact information</td>
                      </tr>
                    </tbody>
                  </BasicTable>
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='sharedata'></a>
              Who do we share your personal data with?
              <OrderedList>
                <li>
                  We may share your personal data with third parties including:
                  <OrderedList>
                    <li>
                      Our partners, as well as third party service providers, including those who
                      provide data processing services to us;
                    </li>
                    <li>
                      Any competent law enforcement body, regulator, government agency, court or
                      other third party where we believe disclosure is necessary: (i) as a matter of
                      applicable law or regulation, (ii) to exercise, establish or defend our legal
                      rights, or (iii) to protect your vital interests or those of any other person;
                    </li>
                    <li>
                      Another company or organisation, as part of a merger or other transfer of all
                      or part of our assets; and
                    </li>
                    <li>
                      Another person or third party, where you have consented to the disclosure.
                    </li>
                  </OrderedList>
                </li>
                <li>
                  We require all third parties to respect the security of your personal data and to
                  treat it in accordance with the law.{' '}
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='socialmedia'></a>
              Social media
              <OrderedList>
                <li>
                  Our social media pages can be found in the following places:
                  <br />
                  Twitter:{' '}
                  <AnchorLink
                    href='https://twitter.com/switchit_green'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://twitter.com/switchit_green
                  </AnchorLink>
                  <br />
                  Facebook:
                  <AnchorLink
                    href='https://www.facebook.com/switchit.green/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.facebook.com/switchit.green/
                  </AnchorLink>
                  <br />
                  Instagram:{' '}
                  <AnchorLink
                    href='https://www.instagram.com/switchit.green/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.instagram.com/switchit.green/
                  </AnchorLink>
                  <br />
                  LinkedIn:{' '}
                  <AnchorLink
                    href='https://www.linkedin.com/company/switchit-green/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://www.linkedin.com/company/switchit-green/
                  </AnchorLink>
                  <br />
                  <br />
                  View each social media platform’s privacy notice for information about how they
                  manage your personal data and contact them for further details:
                  <br />
                  <br />
                  <BasicTable>
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Legal entity </th>
                        <th>Privacy Notice </th>
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Twitter</td>
                        <td>Twitter, Inc</td>
                        <td>
                          <AnchorLink
                            href='https://twitter.com/en/privacy'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://twitter.com/en/privacy
                          </AnchorLink>
                        </td>
                        <td>
                          <AnchorLink
                            href='https://help.twitter.com/forms/privacy'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://help.twitter.com/forms/privacy
                          </AnchorLink>
                        </td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td>Meta Platforms Ireland Limited</td>
                        <td>
                          <AnchorLink
                            href='https://www.facebook.com/about/privacy'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://www.facebook.com/about/privacy
                          </AnchorLink>
                        </td>
                        <td>
                          <AnchorLink
                            href='https://www.facebook.com/help/contact/540977946302970'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://www.facebook.com/help/contact/540977946302970
                          </AnchorLink>
                        </td>
                      </tr>
                      <tr>
                        <td>Instagram</td>
                        <td>Meta Platforms Ireland Limited</td>
                        <td>
                          <AnchorLink
                            href='https://help.instagram.com/519522125107875/?maybe_redirect_pol=0 '
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://help.instagram.com/519522125107875/?maybe_redirect_pol=0{' '}
                          </AnchorLink>
                        </td>
                        <td>
                          <AnchorLink
                            href='https://www.facebook.com/help/contact/540977946302970'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://www.facebook.com/help/contact/540977946302970
                          </AnchorLink>
                        </td>
                      </tr>
                      <tr>
                        <td>LinkedIn</td>
                        <td>LinkedIn Corporation</td>
                        <td>
                          <AnchorLink
                            href='https://www.linkedin.com/legal/privacy-policy'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://www.linkedin.com/legal/privacy-policy
                          </AnchorLink>
                        </td>
                        <td>
                          <AnchorLink
                            href='https://www.linkedin.com/help/linkedin'
                            target='_blank'
                            rel='noreferrer'
                          >
                            https://www.linkedin.com/help/linkedin
                          </AnchorLink>
                        </td>
                      </tr>
                    </tbody>
                  </BasicTable>
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='dataretention'></a>
              Data retention
              <OrderedList>
                <li>
                  We will only retain your personal data for as long as necessary to fulfil the
                  purposes we collected it for, including for the purposes of satisfying any legal,
                  accounting, or reporting requirements.
                </li>
                <li>
                  When we have no ongoing need to process personal data, it will either be deleted
                  or anonymised or, if this is not possible (for example, because the relevant
                  personal data has been stored in backup archives), we will store it securely and
                  isolate it.
                </li>
                <li>
                  Your personal data will be anonymised wherever possible, including any feedback
                  that you provide.
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='cookies'></a>
              Cookies
              <OrderedList>
                <li>Our website uses cookies and other similar technologies.</li>
                <li>[Please see our cookie policy here for further details.]</li>
              </OrderedList>
            </li>
            <li>
              <a id='datasecurity'></a>
              Data security
              <OrderedList>
                <li>
                  We have put in place appropriate technical and organisational security measures to
                  prevent your personal data from being accidentally lost, used or accessed in an
                  unauthorised way, altered or disclosed. In addition, we limit access to your
                  personal data to those employees, agents, contractors and other third parties who
                  have a business need to know.
                </li>
                <li>
                  We have put in place procedures to deal with any suspected personal data breach
                  and will notify you and any applicable regulator of a breach where we are legally
                  required to do so.
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='transferdata'></a>
              Do we transfer your personal data outside the EU/UK?
              <OrderedList>
                <li>
                  We generally store and process your information within the European Economic Area
                  (EEA) or the United Kingdom (UK).
                </li>
                <li>
                  Where we need to transfer your information outside of the EEA or the UK we only do
                  so to countries which have been determined by the European Commission or (where
                  applicable) the UK Secretary of State to have an adequate level of data
                  protection. Where we transfer personal information to countries that have not been
                  determined to have an adequate level of protection we do so using the European
                  Commission’s standard contractual clauses (either the controller-controller or the
                  controller-processor clauses), together (where applicable) with the UK Addendum.
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='rights'></a>
              Your rights
              <OrderedList>
                <li>
                  Under certain circumstances, by law you have the right to:
                  <OrderedList>
                    <li>
                      Request access to your personal data (commonly known as a ‘data subject access
                      request’), to receive a copy of the personal data we hold about you and to
                      check it is being lawfully processed;
                    </li>
                    <li>
                      Request correction of the personal data that we hold about you – note that you
                      can update your personal data by logging in and going to your profile page;
                    </li>
                    <li>Object to processing of your personal data;</li>
                    <li>
                      Request erasure of your personal data where there is no good reason for us to
                      continue to process it, or where you have exercised the right to object to
                      processing. Note that once you are logged in there is an option to delete your
                      account at your profile page.
                    </li>
                    <li>
                      Request the restriction of processing of your personal data, for example if
                      you want Switch It to suspend processing of certain data to establish its
                      accuracy or the reason for processing it;
                    </li>
                    <li>Request the transfer of your personal data to another party; and</li>
                    <li>Withdraw your consent (where you have provided this).</li>
                  </OrderedList>
                </li>
                <li>
                  If you wish to exercise any of the rights set out above, please contact us (see
                  the ‘contact us’ section below).
                </li>
                <li>
                  You have the right to lodge a complaint with a data protection authority about our
                  collection and use of your personal data. For more information, please contact
                  your local data protection authority.{' '}
                  <AnchorLink
                    href='https://edpb.europa.eu/about-edpb/about-edpb/members_en'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Contact details for data protection authorities in the European Economic Area
                    are available here.
                  </AnchorLink>
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='contactus'></a>
              Contact us
              <OrderedList>
                <li>
                  If you have any questions about this privacy notice, including any requests to
                  exercise your rights, please contact us using the contact details set out below.
                  <br />
                  <br />
                  Email address:{' '}
                  <AnchorLink href='mailto: hello@switchit.green' target='_blank' rel='noreferrer'>
                    hello@switchit.green
                  </AnchorLink>{' '}
                  <br />
                  <br />
                  Postal address: [Details] <br />
                  <br />
                  Telephone number: [Details]
                </li>
              </OrderedList>
            </li>
            <li>
              <a id='updates'></a>
              Updates to this notice
              <OrderedList>
                <li>
                  We may periodically update this privacy notice. If we make any substantial changes
                  to it, we will notify you.
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

export default PrivacyPolicy
