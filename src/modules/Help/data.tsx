import Image from 'next/image'
import Link from 'next/link'
import { DisclaimerContent as Disclaimer } from '@modules/Disclaimer/Disclaimer'
import { PrivacyPolicyContent as PrivacyPolicy } from '@modules/PrivacyPolicy/PrivacyPolicy'
import { TermsContent as Terms } from '@modules/Terms/Terms'
import * as S from '@styles/common.style'

export const general = [
  {
    text: 'How does Switch It Green make money?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Switch It Green operates as a not-for-profit and the vast majority of our work is funded by small grants and donations.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Banks can’t pay us to recommend them. We have researched all UK current account offerings and only recommend those banks which
          score 4/5 or above against our stringent investment policy criteria. You can find out more about our{' '}
          <S.AnchorLink href='/help?tab=ourresearch'>criteria for recommendation</S.AnchorLink> here. Some of our recommended providers pay
          us a small commission for each customer we send their way. This support helps ramp up our work and allows us to educate more
          people on the power of their money.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <S.AnchorLink href='/donate-page'>If you would like to support our work, you can donate here.</S.AnchorLink>{' '}
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Is Switch It Green a registered charity?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          While we operate as a not-for-profit, we are a small team and are not yet set up as a registered charity due to a lack of time and
          resources.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          If you would like to support our work by <S.AnchorLink href='/donate-page'>donating</S.AnchorLink>, this, unfortunately, means
          that your donation is not eligible for tax relief, and we are unable to claim UK Gift Aid.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How can I support your work?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>There are a number of ways you can support the campaign and our work. These include:</S.ParagraphCopy>
        <S.BulletList fontsize={18}>
          <li>Using our Green Banking Platform to switch to a green bank</li>
          <li>Completing all of our ready-to-go lobbying steps to maximise your switch</li>
          <li>Following us on social media (@switchit.green)</li>
          <li>
            Using your <S.AnchorLink href='/profile'>unique sharing code</S.AnchorLink> to spread the word to all your contacts.
            <em>Every 10 friends switched means over £10 million moved out of fossil fuel support!</em>
          </li>
          <li>
            <S.AnchorLink href='/programs'>Inviting us</S.AnchorLink> to run a program at your place of work or study
          </li>
          <li>
            Inviting us to run or attend an event by emailing{' '}
            <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
              hello@switchit.green
            </S.AnchorLink>
          </li>
          <li>
            Helping us to keep the lights on and expand our work by <S.AnchorLink href='/donate-page'>making a donation.</S.AnchorLink>
          </li>
        </S.BulletList>
        <S.ParagraphCopy>
          Run an organisation? Have a big following on social media? Got a famous friend? Let’s link up. Email us at{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Want to get more involved? Reach out and let us know how you’d like to help by emailing{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Are you hiring?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>We are always looking for extra hands and brains to join the Switch It Green team.</S.ParagraphCopy>
        <S.ParagraphCopy>
          Think your skills could help ramp up the campaign? Send an email to{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Check out our{' '}
          <S.AnchorLink href='https://www.linkedin.com/company/switchit-green' target='_blank' rel='noreferrer'>
            LinkedIn
          </S.AnchorLink>{' '}
          to see if we are currently hiring for any paid positions.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Can I book Switch It Green for an event?',
    copy: ['If you would like Switch It Green to run or attend an event, send an email to hello@switchit.green'],
  },
  {
    text: 'My organisation wants to partner with Switch It Green.',
    copy: [
      'Fab! We are so pleased to be part of an incredible network of impactful organisations. If you would like to discuss a partnership or collaboration, send an email to hello@switchit.green',
    ],
  },
  {
    text: 'The Divestment vs. stakeholder engagement debate',
    copy: [
      'Contrary to popular belief, we don’t believe that divestment and stakeholder engagement are necessarily mutually exclusive.',
      'Let’s break things down...',
      'The divestment vs. stakeholder engagement debate discusses whether moving money out of fossil fuel support is more or less powerful than using your position as a customer/stakeholder to push for positive change from the inside. It is often used in the context of shareholders and asset managers (being powerful stakeholders), as well as the average customer.',
      'Our platform is designed to lobby banks to change their policies, as well as moving money out of fossil fuel support. Our ready-to-go breakup letters are a great way to use your stakeholder power to pressure your old bank to change its policies.',
    ],
  },

  {
    text: 'Can I use Switch It Green to switch to a green pension?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          The future of Switch It Green is a one-stop shop for switching all of your financial providers in the most simple and impactful
          way possible. In February 2023, we launched with our new research on UK current accounts. Business banking, pensions, and more are
          already in the works. Follow our{' '}
          <S.AnchorLink href='https://www.instagram.com/switchit.green' target='_blank' rel='noreferrer'>
            social media
          </S.AnchorLink>{' '}
          to be the first to know about new launches.{' '}
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Can I use Switch It Green to switch my business bank account?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          The future of Switch It Green is a one-stop shop for switching all of your financial providers in the most simple and impactful
          way possible. In February 2023, we launched with our new research on UK current accounts. Business banking, pensions, and more are
          already in the works. Follow our{' '}
          <S.AnchorLink href='https://www.instagram.com/switchit.green' target='_blank' rel='noreferrer'>
            social media
          </S.AnchorLink>{' '}
          to be the first to know about new launches.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          While our recommended providers for current accounts do offer business banking, our upcoming research will help you find the right
          green business account for your organisation - with support on the requirements for each provider.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Is Switch It Green expanding beyond the UK?',
    copy: ['Yes! Next stop: the US.'],
  },
  {
    text: 'Why should I switch banks?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Banks make their profits by investing in projects, owning shares in other companies, and lending money (with interest). For most
          banks in the UK, this involves directing a portion of their funds towards companies which are involved in fossil fuel extraction
          and expansion; the driving cause of climate breakdown.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          For polluting industries to continue operating, new and existing projects require financing, and companies require shareholders
          and investors. As an industry renowned for its profits, the majority of UK banks are keen to direct money into the fossil fuel
          business to generate large returns.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>
            Between 2015 and 2021, banks pumped over{' '}
            <S.AnchorLink href='https://www.bankingonclimatechaos.org/' target='_blank' rel='noreferrer'>
              £3.8 trillion
            </S.AnchorLink>{' '}
            into the fossil fuel industry.
          </strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Without our money, banks would not have the funds or infrastructure to continue making these harmful decisions.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>
            Switching to greener financial providers is one of the most impactful climate actions you can take, and our Bank Switching
            Platform was developed to maximise every switch.
          </strong>
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
]

export const programs = [
  {
    text: 'What is a Switch It Green program?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Our programs were developed to harness the power of switching en masse, while delivering tangible climate education and financial
          literacy to students and employees, and moving £ billions out of fossil fuel support.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <S.AnchorLink href='programs'>Find out more on our programs page.</S.AnchorLink>{' '}
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How do I find out if there is a program at my school, university, or business?',

    copy: (
      <S.Div>
        <S.ParagraphCopy>
          If you are unsure if there is an active or pending program at your school, university or business, simply{' '}
          <S.AnchorLink href='programs'>register your interest</S.AnchorLink> in our programs and we will let you know if there is anything
          in the works - if not, we can explore what a program at your place of work or study might look like and get the ball rolling.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Program vs. programme',
    copy: [
      'Our programs are a formal offering of events, resources, and assets, delivered over a number of weeks - not something you watch on TV.',
      'This might be confusing for some people in the UK but we are an international team and are soon to be launching in the US.',
      'In the UK, you can call our programs ‘programmes’ if you like - we don’t mind!',
    ],
  },
  {
    text: 'Do you run events & workshops outside of your programs?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Send an email to{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>{' '}
          if you are interested in booking Switch It Green for an event.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
]

export const switching = [
  {
    text: 'What does the switching process look like?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Our Green Banking Platform is designed to make switching to a green bank as simple and impactful as possible.
        </S.ParagraphCopy>
        <h3>Step 1: Find out what your bank is funding </h3>
        <S.ParagraphCopy>We’ve done the research so you don’t have to.</S.ParagraphCopy>
        <h3>Step 2: Choose a new Switch-It-Green-approved provider</h3>
        <S.ParagraphCopy>
          We’ve got a comparison table with all the information you need to choose a new bank with is aligned with your needs and your
          values.
        </S.ParagraphCopy>
        <h3>Step 3: Make the switch alongside thousands of others:</h3>
        <S.BulletList fontsize={18}>
          <li>Open a green account in minutes with your chosen provider through our site</li>
          <li>Choose a switch day (at least 7 days in the future)</li>
          <li>Sit back and let the Current Account Switch Service (CASS) handle the rest.</li>
        </S.BulletList>
        <S.ParagraphCopy>
          The CASS will ensure all your direct debits, standing orders and payee details are transferred to your new account when you make
          the switch.
        </S.ParagraphCopy>
        <h3>Step 4: Verify your switch with us to support the campaign</h3>
        <S.ParagraphCopy>
          It can take time to get the data on switching numbers; verifying your switch helps support our work.
        </S.ParagraphCopy>
        <h3>Step 5: Maximise your switch with our ready-to-go lobbying features. </h3>
        <S.ParagraphCopy>
          We’ve done all the hard parts for you. Tick off our easy, ready-to-go maximising steps to harness your full switching power and
          help end fossil fuel financing.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },

  {
    text: 'Will switching banks affect my credit score?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          There seem to be a lot of myths flying around about switching banks and credit scores. We get this question a lot so we have
          created <S.AnchorLink href='/resources/article/3'>a resource answering it in detail here.</S.AnchorLink>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Long story short, a one-off switch to a green bank should not cause your credit score to take a hit. In fact, as you are
          (hopefully) choosing a bank for life, making the switch now could actually improve your credit score in the long run.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          If you are currently in an overdraft or thinking about applying for a large loan or mortgage in the next 6 months,{' '}
          <S.AnchorLink href='/resources/article/3'> check out our resource</S.AnchorLink> to ensure you’ve got everything you need to make
          an informed decision.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Can I consolidate multiple accounts when I make the switch?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          It is important to close old, unused accounts when you switch to a green bank; and to switch all of your active accounts over to
          green accounts (not just your main account).
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          By just holding an account with a dirty bank, you are (inadvertently) supporting their continued fossil fuel investments.{' '}
          <S.AnchorLink href='/help?tab=ourresearch&panel=6'>Find out more here.</S.AnchorLink>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The Current Account Switch Service does not enable multiple accounts to be automatically consolidated and closed in one switch.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          We recommend that you use our platform to switch your main current account to a green bank and, once the switch is completed,
          either close or switch your other accounts. You can switch multiple accounts (one at a time) on our platform (and maximise each
          one).
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Check the process for closing an account and transferring funds with your current provider(s) first.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How long will it take to switch my current account?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          It takes a matter of minutes to select a green bank on our platform and open an account with your new green provider.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          When you are setting up your new account, you will choose a switch day when the funds (and direct debits, standing orders, payee
          details, etc.) will be transferred over from your old account. You can choose a switch day that suits you but it will be{' '}
          <em>at least 7 days</em> in the future.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          In the meantime, you can get started on maximising your switch with our ready-to-go lobbying features.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'What is the Current Account Switch Service (CASS)?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          The CASS is a guarantee service. This service means that your old bank will close your old account, and your new bank will
          transfer over your balance and any payments and direct debits to your new account.
        </S.ParagraphCopy>
        <S.ParagraphCopy> In the words of Christopher, one of our switchers:</S.ParagraphCopy>
        <S.ParagraphCopy>
          <em>“I didn’t have to do a thing…that was astonishing. It was highly painless”</em>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The process is managed by{' '}
          <S.AnchorLink href='http://pay.uk/' target='_blank' rel='noreferrer'>
            Pay.UK
          </S.AnchorLink>{' '}
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          After the switch is complete, all incoming and outgoing payments will be automatically redirected to your new account.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The Current Account Switch Service covers 99% of UK current accounts - including all of our recommended providers. In the rare
          instance that your old bank is not signed up to the CASS, there may be a slightly different (but still pretty painless) switching
          process.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Will I find a green bank that fits my needs?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          You can use the comparison table on your <S.AnchorLink href='/switching'>Switching Journey</S.AnchorLink> to help find a bank that
          fits your needs as well as your values.
        </S.ParagraphCopy>
        <S.ParagraphCopy>We want there to be a green bank for everyone.</S.ParagraphCopy>
        <S.ParagraphCopy>
          Can’t find the perfect fit? We work with our recommended providers to help them improve their services - so we can persuade more
          people to Switch It Green. We have drafted ‘Hello Letters’ for each recommended provider, which you can edit and send to your new
          green bank with recommendations for improvement.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'What if something goes wrong with my switch?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          The Current Account Switch Service (CASS) covers 99% of UK current accounts - including all of our recommended providers. The CASS
          is a guarantee service. This service means that your old bank will close your old account, and your new bank will transfer over
          your balance and any payments and direct debits to your new account.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The process is managed by{' '}
          <S.AnchorLink href='http://pay.uk/' target='_blank' rel='noreferrer'>
            Pay.UK
          </S.AnchorLink>{' '}
          but it is your new bank that guarantees your switch and will cover you if anything goes wrong. They will also cover or refund any
          interest or charges incurred as a result of your switch.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          After the switch is complete, all incoming and outgoing payments will be automatically redirected to your new account.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          In the rare instance that your old bank is not signed up to the CASS, there may be a slightly different (but still pretty
          painless) switching process.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How do I maximise my switch?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Our Green Banking Platform was developed to make switching to a green bank as simple and impactful as possible.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Once you have verified your switch on our platform, there are 6 quick and easy steps you can take to maximise the power of your
          switch.
        </S.ParagraphCopy>
        <h3>WRITE YOUR BREAKUP LETTER</h3>
        <S.ParagraphCopy>
          Banks don’t want to lose customers. By sending thousands of letters to banks explaining why their customers are leaving, we can
          force them to improve their investment policies. We have drafted a breakup letter for you to edit and sign, which will be sent in
          batches with others’ for maximum impact.
        </S.ParagraphCopy>
        <h3>WRITE YOUR HELLO LETTER</h3>
        <S.ParagraphCopy>
          We love green banks and want everyone to be banking with them. Tell them why you joined and help them incentivise more people to
          make the switch.
        </S.ParagraphCopy>
        <h3>POST TO SOCIALS</h3>
        <S.ParagraphCopy>
          Time to multiply your impact. For every 10 friends switched over £10 million is taken out of fossil fuel support. We’ve drafted
          social posts for you to edit and share directly from our site.
        </S.ParagraphCopy>
        <h3>TELL YOUR COMMUNITY</h3>
        <S.ParagraphCopy>
          Imagine the impact if your whole class, team, or group chat made the switch. We’ve got drafted messages to help you spread the
          word and unique sharing codes to accurately track your impact as you get more people on board.
        </S.ParagraphCopy>
        <h3>WRITE REVIEWS</h3>
        <S.ParagraphCopy>
          Educate, warn, defame. Banks want to protect their image. And we want to deter people from unknowingly supporting the fossil fuel
          industry. Leaving public Trustpilot and Google reviews is a powerful way to support the campaign.
        </S.ParagraphCopy>
        <h3>SHARE YOUR SWITCHING STORY</h3>
        <S.ParagraphCopy>
          Genuine customer testimonies are a vital part of the campaign. From quotes for pitches and presentations, to high-performing
          social media content, your input will help convince hundreds of people on the importance of green banking. Tell us your switching
          story, or simply record yourself cutting up your old card.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'I can’t switch right now. What else can I do to help?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Moving your money out of fossil fuel support and into greener financial providers is one of the most impactful things you can do
          for the planet. And our Green Banking Platform was developed to make that switch as simple and impactful as possible.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          If you are unable to switch today, here are some other ways you can support the campaign to end fossil fuel financing:
        </S.ParagraphCopy>
        <S.BulletList fontsize={18}>
          <li>
            <S.AnchorLink href='/resources/article/5'>Check out our resource</S.AnchorLink> on other actions you can take besides switching.
          </li>
          <li>
            Get clued up on all things green finance by checking out our <S.AnchorLink href='/resources'>additional resources</S.AnchorLink>
            .
          </li>
          <li>
            Support our work by <S.AnchorLink href='/donate-page'>making a donation</S.AnchorLink> to Switch It Green.
          </li>
        </S.BulletList>
        <S.ParagraphCopy>
          Want to get more involved? Reach out and let us know how you’d like to help by emailing{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'I already have a green account. What else can I do to help?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Nice one! It’s great that more people are getting informed on green banking and that our recommended providers are attracting more
          and more customers.
        </S.ParagraphCopy>
        <S.ParagraphCopy>Here’s some more ways to support the campaign against fossil fuel financing:</S.ParagraphCopy>
        <S.BulletList fontsize={18}>
          <li>
            <S.AnchorLink href='/resources/article/5'>Check out our resource</S.AnchorLink> on other actions you can take besides switching.
          </li>
          <li>
            Get clued up on all things green finance by checking out our <S.AnchorLink href='/resources'>additional resources</S.AnchorLink>
            .
          </li>
          <li>
            Support our work by <S.AnchorLink href='/donate-page'>making a donation</S.AnchorLink> to Switch It Green.
          </li>
        </S.BulletList>
        <S.ParagraphCopy>
          Want to get more involved? Reach out and let us know how you’d like to help by emailing{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Why does Switch It Green only focus on fossil fuel investments?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          <strong>Why focus only on fossil fuel divestment - not sustainability policies and other environmental commitments?</strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy display='block'>
          For us, actions speak louder than words. Banks can talk the talk on sustainability and ‘Net Zero’ commitments but it’s pretty hard
          to take them seriously if they are still pumping money into fossil fuels (the cause of climate breakdown). And, for the most part,
          banks’ sustainability policies just aren’t stacking up.{' '}
          <S.AnchorLink
            href='https://reclaimfinance.org/site/wp-content/uploads/2023/01/Throwing-fuel-on-the-fire-GFANZ-financing-of-fossil-fuel-expansion.pdf'
            target='_blank'
            rel='noreferrer'
          >
            A recent report
          </S.AnchorLink>{' '}
          revealed that, since the Net Zero Banking Alliance was formed in 2021, 56 of the biggest banks in the alliance have provided £220
          billion to 102 major fossil fuel expanders.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          We want to make understanding the link between money, banks, and climate change super simple. Whether or not a bank is tied to
          fossil fuels is a really clear way of seeing whether they care about the future of our planet or just future profits.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <S.AnchorLink href='/help?tab=ourresearch'>Find out more about our research and criteria for recommendation here.</S.AnchorLink>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>
            Why focus only on fossil fuels - not deforestation, biodiversity, or non-climate-related investments like arms, nuclear weapons,
            etc.?
          </strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          You can use our Green Banking Platform to find out if your current bank invests in fossil fuels and to select a new provider which
          is guaranteed fossil-free.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Whether or not a bank is tied to fossil fuels is a pretty good way of seeing whether or not they have a sound moral compass, and
          if they stick to it.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          As it goes, a fossil-free bank is usually* a deforestation-free bank, an arms-free bank, etc. This is because they are generally
          either: an all-round super cool ethical bank with its head screwed on; a building society that isn’t under the same commercial
          pressure as a bank to invest in dirty industries; or, a new/neo-/app-based/online-only bank that has no existing ties to unethical
          industries.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          *BUT we are all about transparency and are dedicated to keeping you updated with what our recommended providers are investing in.{' '}
          <S.AnchorLink href='https://www.instagram.com/switchit.green' target='_blank' rel='noreferrer'>
            Follow our socials
          </S.AnchorLink>{' '}
          and <S.AnchorLink href='/resources'>check out our resources</S.AnchorLink> and blog for more information.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The bottom line is, <strong>for now</strong>, our research is centred around fossil fuels as we want to keep it as straightforward
          as possible (plus it’s a pretty good indicator of a bank’s general ethics). However, as an organisation <em>we</em> care, and want
          to spread awareness, about all types of dirty and unethical investments - so, what our tool doesn’t cover, our content, website,
          and mouths will.
        </S.ParagraphCopy>
        <S.ParagraphCopy></S.ParagraphCopy>
      </S.Div>
    ),
  },
]

export const research = [
  {
    text: 'Can you tell me more about your research?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          “Too often, recommendations of ‘green’ financial providers are based on the testimony of other environmentally focused websites,
          which has caused an echo-chamber-like ecosystem of mutually endorsing narratives to emerge. This becomes a problem when the
          initial source of the data is lost along the line, the data becomes outdated, or the data was initially based on a bank’s
          historical reputation or, perhaps worse, the bank’s own ESG document. Users who want to dig deep into the data are often left
          disappointed. How do these comparison sites <em>weigh</em> banks? What evaluative model are they applying to judge whether a bank
          is ‘good’ or not? How are they getting this information?” - Dr William Sharkey, ethicist and Switch It Green Researcher.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          To avoid these mistakes, we asked our trusted research team to establish normative criteria <em>first</em> and <em>then</em> apply
          it to banks. We will always be totally transparent about our research, which will be regularly updated to ensure its accuracy.
        </S.ParagraphCopy>
        <S.ParagraphCopy> Our research is based on three main criteria:</S.ParagraphCopy>
        <S.OrderedList>
          <li>How much money is the bank investing in planetary destruction by means of fossil fuels?</li>
          <li>Have the bank said they are withdrawing investment from fossil fuels, and if so, have they given a reasonable timeframe?</li>
          <li>
            How plausible is this statement? Is it binding in any way? Is there a published, and publicly available (and publicly
            accountable) plan to do this?
          </li>
        </S.OrderedList>
        <S.ParagraphCopy>
          These questions formed the basis of our flow chart, which establishes the rating score for each bank.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <Image src='/images/img_flowchart.png' alt='Flow chart' width={625} height={437} objectFit='contain' />
        </S.ParagraphCopy>
        <S.ParagraphCopy>An overview of each rating is as follows:</S.ParagraphCopy>
        <S.ParagraphCopy></S.ParagraphCopy>
        <S.BulletList fontsize={18}>
          <li>1 out of 5 – Among the biggest investors in fossil fuels. Current fossil fuel investments over £100 million.</li>
          <li>
            2 out of 5 – Current fossil fuel investments between £25 million and £100 million with a suitable divestment commitment and
            strategy; or, current fossil fuel investments below £25 million with an insufficient divestment commitment and/or strategy.
          </li>
          <li>3 out of 5 – Current fossil fuel investments less than £25 million with a suitable divestment commitment and strategy.</li>
          <li>4 out of 5 – Does not invest in fossil fuels but has not committed to never investing in fossil fuels.</li>
          <li>
            5 out of 5 – Does not invest in fossil fuels and has a clear policy prohibiting future investment in fossil fuels. Also invests
            in positive environmental initiatives.
          </li>
        </S.BulletList>
        <S.ParagraphCopy>
          We define ‘suitable’ commitments as those whose goal is to completely phase *out* (not *down*) fossil fuel funding - including
          both projects and shares - with evidence of significant and measurable steps already being undertaken and with definitive
          accountability for all targets. A ‘suitable’ divestment strategy is one which eliminates the possibility for future fossil fuel
          investments, with clear and measurable steps for phasing fossil fuel funding *out* of existing investment portfolios and shares. A
          timeline for divestment is deemed to be ‘suitable’ only if there are planned divestment measures already in place, a clear and
          significant target set for 2025 at the latest, or a target for complete, water-tight divestment set for 2030 at the latest. We do
          not accept ‘Net Zero’ commitments unless they include plans for complete divestment of all investments and shares by 2030, or are
          demonstrating significant progress with an acceptable 2025 target - no matter how many pictures of wind turbines they manage to
          cram into their swanky pdf.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'What are the banks’ ratings based on?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>An overview of each rating is as follows:</S.ParagraphCopy>
        <S.BulletList fontsize={18}>
          <li>1 out of 5 – Among the biggest investors in fossil fuels. Current fossil fuel investments over £100 million.</li>
          <li>
            2 out of 5 – Current fossil fuel investments between £25 million and £100 million with a suitable divestment commitment and
            strategy; or, current fossil fuel investments below £25 million with an insufficient divestment commitment and/or strategy.
          </li>
          <li>3 out of 5 – Current fossil fuel investments less than £25 million with a suitable divestment commitment and strategy.</li>
          <li>4 out of 5 – Does not invest in fossil fuels but has not committed to never investing in fossil fuels.</li>
          <li>
            5 out of 5 – Does not invest in fossil fuels and has a clear policy prohibiting future investment in fossil fuels. Also invests
            in positive environmental initiatives.
          </li>
        </S.BulletList>
        <S.ParagraphCopy>
          We define ‘suitable’ commitments as those whose goal is to completely phase <em>out</em> (not <em>down</em>) fossil fuel funding -
          including both projects and shares - with evidence of significant and measurable steps already being undertaken and with
          definitive accountability for all targets. A ‘suitable’ divestment strategy is one which eliminates the possibility for future
          fossil fuel investments, with clear and measurable steps for phasing fossil fuel funding <em>out</em> of existing investment
          portfolios and shares. A timeline for divestment is deemed to be ‘suitable’ only if there are planned divestment measures already
          in place, a clear and significant target set for 2025 at the latest, or a target for complete, water-tight divestment set for 2030
          at the latest. We do not accept ‘Net Zero’ commitments unless they include plans for complete divestment of all investments and
          shares by 2030, or are demonstrating significant progress with an acceptable 2025 target - no matter how many pictures of wind
          turbines they manage to cram into their swanky pdf.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How does your research differ from other ethical banking recommendations?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          “Too often, recommendations of ‘green’ financial providers are based on the testimony of other environmentally focused websites,
          which has caused an echo-chamber-like ecosystem of mutually endorsing narratives to emerge. This becomes a problem when the
          initial source of the data is lost along the line, the data becomes outdated, or the data was initially based on a bank’s
          historical reputation or, perhaps worse, the bank’s own ESG document. Users who want to dig deep into the data are often left
          disappointed. How do these comparison sites <em>weigh</em> banks? What evaluative model are they applying to judge whether a bank
          is ‘good’ or not? How are they getting this information?” - Dr William Sharkey, ethicist and Switch It Green Researcher.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          To avoid these mistakes, we asked our trusted research team to establish normative criteria <em>first</em> and <em>then</em> apply
          it to banks. We will always be totally transparent about our research, which will be regularly updated to ensure its accuracy.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'How can I move £1.5m out of fossil fuel support if I have £0 in my account?',
    copy: (
      <S.Div>
        <h3>Short answer:</h3>
        <S.ParagraphCopy>
          Banks use their customer base as leverage to secure loans and assets; often the same loans and assets that allow them to invest in
          fossil fuel projects and companies. Banks’ customer numbers are frequently used as evidence that they are a secure product in
          which the market can trust. The market is mostly indifferent to how much money an individual customer has in their account, what
          they’re interested in is the customer themselves as an asset. We’ve done the research and, if you let us know your age, we can
          give you an accurate estimate of how much you are worth to a bank; and, in turn, the worth of the asset (in GBP) you are removing
          from your old bank and withdrawing from fossil fuel support.
        </S.ParagraphCopy>
        <h3>Long answer:</h3>
        <S.ParagraphCopy>
          Banks need to generate capital to invest in various projects. Given that investment and consumer banks are now completely
          ringfenced (following the financial crash in 2008) and banks cannot invest their customers’ money, how do they raise the capital
          they need to fund large investments?
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Banks frequently seek out loans from other investment banks and, on occasion, from a state-controlled central bank (for example,
          The Bank of England (in the UK), The ECB (in the Eurozone), or The Federal Reserve Bank (‘The Fed’ in the United States of
          America)). These central banks control the flow of capital in our economy and set the basic rate of interest on loans.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Banks have a lot to consider when deciding whether or not to provide a company with funds. If a company fails, the investment bank
          will be stuck with an often-hefty financial burden. Much of the financial viability of the loans the banks need in order to invest
          will depend on the interest rate set, and the cost of the total loan, against the expected value the bank can extract from the
          project they are funding. As with consumers, loan amounts offered and interest rates are set in relation to how ‘safe’ the bank is
          perceived to be.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Banks that are perceived to be less stable will have to pay higher interest rates, meaning the cost of the loan, and therefore the
          cost of investing can become prohibitively expensive. Banks, therefore, try to ensure they maintain a solid financial reputation.
          The higher the interest rate, the more conservative the bank has to be with its investment strategy (meaning it will expose itself
          to less risk, and, therefore, less profit). The lower the interest rate, the more liberal banks can be with their investment
          strategy (meaning they can invest in higher risk investments, and thus (all going well) opening up the possibility of obtaining
          higher profits). Paradoxically, banks try to ensure a stable, ‘safe’, reputation in order to make riskier investments.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          One of the ways safety is ‘tested’ is to look at the financial assets a bank holds. The amount the bank can borrow is an
          expression of how confident the market is in that bank… and this is where regular, every day, customers come back into the
          equation.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          A bank will frequently use the fact of their customer numbers as evidence that they are a secure product in which the market can
          trust. The market is mostly indifferent to how much money an individual customer has in their account (although there are, of
          course, exceptions – especially if the bank has a large number of very high-value customers), what they’re interested in is the
          customer *themselves* as an asset.
        </S.ParagraphCopy>
        <S.ParagraphCopy>So, how much are you worth, as a stable asset, to a bank?</S.ParagraphCopy>
        <h3>The Sums:</h3>
        <S.ParagraphCopy>
          Firstly, we looked at how much the average person deposits into their UK bank account. We used up-to-date information from a
          credible source, *The Office for National Statistics* (a body which reports directly to the UK Parliament), to establish that the
          average take-home wage for a person in the UK is £578 per week. We then multiplied this number by 52 (the number of weeks in a
          year) to establish the average annual salary deposited into UK bank accounts. This total came to £30,056.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          We took this figure to be pertinent to people of working age and applied it to a conservative age range of 22 – 68, a time period
          of 46 years. We then multiplied our average yearly total, by our conservative working range of 46 years. This gave us a
          working-age deposit amount of £1.38m.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Of course, people do not stop depositing money into their bank accounts at the age of 68. The UK has a state pension and private
          pension system that will pay money into the bank accounts of those retired until their death. In the UK, the average life
          expectancy for a man is 79 (entailing that their pension will, on average, pay out for 11 years), the life expectancy for a woman
          is 82.9 years (entailing that a woman’s pension will, on average, pay out for 14.9 years).
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          The average (private) pension pot (according, again, to *The Office for National Statistics*) is calculated to be around £37,600.
          The state pension will pay up to £141 per week (£7332 per year) indefinitely (until death). This means the total state pension
          value for men is £80,652 ((141*52)*11)), and the total state pension value for women is £109,246 ((141*52)*14.9).
        </S.ParagraphCopy>
        <S.ParagraphCopy> So, summing all this up gives us the following values:</S.ParagraphCopy>
        <h3>Men: £1.49m</h3>
        <S.ParagraphCopy>
          This was determined by adding the deposits of £1.38m (working age deposits) + £80,652 (state pension deposits from 68 – 79) +
          £37,600 (average private pension pot).
        </S.ParagraphCopy>
        <h3>Women: £1.53m</h3>
        <S.ParagraphCopy>
          Again, this was determined by adding the deposits of £1.38m (working age deposits) + £109,246 (state pension deposits from 68 –
          82.9) + £37,600 (average private pension pot).
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          Averaging across men and women = £1.505m. This was rounded to two decimal places giving us a final result of **£1.51m**.
        </S.ParagraphCopy>
        <h3>The Result:</h3>
        <S.ParagraphCopy>
          It’s important to note that the bank will not borrow £1.51m for every customer they have and it’s not a pound-for-pound exchange.
          No one will allow you to borrow more than you’re worth, after all. This is just one, small, but vital, piece of the financial
          instruments a bank can use to generate funds. However, each person who moves their bank account is essentially removing a £1.51m
          asset from the bank and, while not much on its own, it’s certainly not nothing. If you get your friends to move, too, then a
          multiplier effect kicks in and this number accelerates and gains traction. Switching your bank account will have a notable
          material effect on your bank’s capacity to obtain capital and, at the same time, functions as a significant signal to the
          financial markets that consumers are punishing banks that do not align with public values. In the information age, the decision to
          act against the public interest could be very costly…
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
  {
    text: 'Can I trust your recommended providers?',
    copy: (
      <S.Div>
        <S.ParagraphCopy>Yes.</S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>Banks can’t buy space on our site.</strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          We have researched all UK current account offerings and only recommend those banks which score 4/5 or above against our stringent
          investment policy criteria.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>All of our recommended providers are FCA-certified, authorised and regulated, with full UK banking licenses.</strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy> Not all current account providers are!</S.ParagraphCopy>
        <S.ParagraphCopy>
          <strong>Our recommended providers are all award winners.</strong>
        </S.ParagraphCopy>
        <S.ParagraphCopy> Some of the awards they have won include:</S.ParagraphCopy>

        <S.BulletList fontsize={18}>
          <li>Best British bank - British Bank Awards</li>
          <li>Best banking app - British Bank Awards</li>
          <li>Best business bank provider - British Bank Awards</li>
          <li>Best current account provider - British Bank Awards</li>
          <li>Best ethical financial provider - British Bank Awards</li>
          <li>Best {`children's`} financial provider - British Bank Awards</li>
          <li>Banking Brand of the Year - Which? Awards</li>
          <li>Best Standard Current Account - Personal Finance Awards</li>
          <li>Best Overall Current Account- Personal Finance Awards</li>
          <li>Second, Third, and Fourth place - European Banking Customer Experience Rankings</li>
          <li>The UK’s most trusted financial brand - Glow’s Banking Brand and Trust Index</li>
        </S.BulletList>
      </S.Div>
    ),
  },
  {
    text: 'A bank I thought was green isn’t one of your recommended providers.',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          We only recommend banks which fulfil our stringent investment criteria. If a bank isn’t one of our recommended providers it means
          it simply hasn’t hit the mark.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          If you think we are missing something, or are an employee at a bank and want to get in touch to discuss your rating, please email{' '}
          <S.AnchorLink href='mailto:hello@switchit.green' target='_blank' rel='noreferrer'>
            hello@switchit.green
          </S.AnchorLink>
        </S.ParagraphCopy>
      </S.Div>
    ),
  },

  {
    text: 'Why we need your age to calculate your impact',
    copy: (
      <S.Div>
        <S.ParagraphCopy>
          Banks use their customer base as leverage to secure loans and assets; often the same loans and assets that allow them to invest in
          fossil fuel projects and companies. {`Banks'`} customer numbers are frequently used as evidence that they are a secure product in
          whom the market can trust. The market is mostly indifferent to how much money an individual customer has in their account, what
          {` they're`} interested in is the customer themselves as an asset.
        </S.ParagraphCopy>
        <S.ParagraphCopy>
          We have researched how banks value their customers as stable assets which support their investments. This is partly based on the
          {` customer's`} expected lifetime deposits. The younger you are, the more lifetime deposits you have ahead of you. We, therefore,
          need to factor your age into our calculations to produce an accurate estimate of your worth to a bank - and how much money you are
          pulling out of fossil fuel support, over your lifetime, by switching to a green bank.
        </S.ParagraphCopy>
      </S.Div>
    ),
  },
]

export const legal = [
  {
    text: 'Terms & Conditions',
    copy: <Terms app />,
  },
  {
    text: 'Privacy Policy',
    copy: <PrivacyPolicy app />,
  },
  {
    text: 'Disclaimer',
    copy: <Disclaimer />,
  },
]
