import { DrawerHeader } from '@components/Drawer/Drawer.style'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { BulletList, Div, AnchorLink } from '@styles/common.style'

export const ResearchCopy = () => (
  <Div>
    <p>
      A {`bank's`} rating is decided based on a set of normative criteria established by ethicist and Researcher, Dr William Shakey. An
      overview of each rating is as follows:
    </p>
    <BulletList>
      <li>1 out of 5 - Among the biggest investors in fossil fuels. Current fossil fuel investments over £100 million.</li>
      <li>
        2 out of 5 - Current fossil fuel investments between £25 million and £100 million with a suitable divestment commitment and
        strategy; or, current fossil fuel investments below £25 million with an insufficient divestment commitment and/or strategy.
      </li>
      <li>3 out of 5 - Current fossil fuel investments less than £25 million with a suitable divestment commitment and strategy.</li>
      <li>4 out of 5 - Does not invest in fossil fuels but has not committed to never investing in fossil fuels.</li>
      <li>
        5 out of 5 - Does not invest in fossil fuels and has a clear policy prohibiting future investment in fossil fuels. Also invests in
        positive environmental initiatives.
      </li>
    </BulletList>
    <p>
      We define {`'suitable'`} commitments as those whose goal is to completely phase out (not down) fossil fuel funding - including both
      projects and shares - with evidence of significant and measurable steps already being undertaken and with definitive accountability
      for all targets. A {`'suitable'`} divestment strategy is one which eliminates the possibility for future fossil fuel investments, with
      clear and measurable steps for phasing fossil fuel funding out of existing investment portfolios and shares. A timeline for divestment
      is deemed to be {`'suitable'`} only if there are planned divestment measures already in place, a clear and significant target set for
      2025 at the latest, or a target for complete, water-tight divestment set for 2030 at the latest. We do not accept {`'Net Zero'`}{' '}
      commitments unless they include plans for complete divestment of all investments and shares by 2030, or are demonstrating significant
      progress with an acceptable 2025 target - no matter how many pictures of wind turbines they manage to cram into their swanky pdf.
    </p>
  </Div>
)

export const CalculateAgeImpact = () => (
  <Div>
    <DrawerHeader>Why we need your age to calculate your impact</DrawerHeader>
    <p>
      Banks use their customer base as leverage to secure loans and assets; often the same loans and assets that allow them to invest in
      fossil fuel projects and companies. {`Banks'`} customer numbers are frequently used as evidence that they are a secure product in
      which the market can trust. The market is mostly indifferent to how much money an individual customer has in their account, what{' '}
      {`they're`} interested in is the customer themselves as an asset.
    </p>
    <p>
      We have researched how banks value their customers as stable assets which support their investments. This is partly based on the{' '}
      {`customer's`} expected lifetime deposits. The younger you are, the more lifetime deposits you have ahead of you. We, therefore, need
      to factor your age into our calculations to produce an accurate estimate of your worth to a bank - and how much money you are pulling
      out of fossil fuel support, over your lifetime, by switching to a green bank.
    </p>
  </Div>
)

export const PotentialClimateImpactCopy = () => (
  <Div>
    <p>
      Unless you have 7+ figures in your bank account (in which case, may I introduce you to our donate button?), you are worth a lot more
      to your bank than your account balance. Banks use their customer base as leverage to secure loans and assets; often the same loans and
      assets that allow them to invest in fossil fuel projects and companies. {`Banks'`} customer numbers are frequently used as evidence
      that they are a secure product in which the market can trust. The market is mostly indifferent to how much money an individual
      customer has in their account, what {`they're`} interested in is the customer themselves as an asset.
    </p>
    <p>
      So, how much are you worth, as a stable asset, to a bank? {`We've`} done the research and, if you pop in your age to our impact
      calculator, we can give you a solid estimate of how valuable you are to a bank.
    </p>
  </Div>
)

export const DonationCopy = () => (
  <Div>
    <p>
      Banks {`can't`} buy space on our site. We have researched all UK current account offerings and only recommend those banks which score
      4/5 or above against our stringent investment policy criteria. Our recommended banks are displayed alongside all the information you
      need to make an informed decision on which is the best green bank for you.
    </p>
    <p>
      We work with our recommended providers to keep up to date on their work and to pass on feedback on their services from our switchers
      (like you).
    </p>
    <p>
      Some of our recommended providers pay us a small commission for each customer we send their way. This support helps ramp up our work
      and allows us to educate more people on the power of their money.
    </p>
    <p>
      For each commission we receive, we donate a small percentage to environmental justice projects. So, if you select a bank which is part
      of our donation scheme, you know your switch is having even more of a positive environmental impact.
    </p>
  </Div>
)

export const DisclaimerCopy = () => (
  <Div>
    <DrawerHeader>Disclaimer</DrawerHeader>
    <p>
      Any Content provided on this Site or by any third-party (including our green partners) in connection with this Site is given for your
      general information purposes only and to inform you about us and our services, news, features, and other websites that may be of
      interest, but has not been tailored to your specific requirements or circumstances. It does not constitute technical, financial or
      legal advice or any other type of advice and should not be relied on for any purposes. You should always use your own independent
      judgment when using our Site and its Content.
    </p>
    <p>
      We aim to ensure that the material on the Site (excluding, if applicable, any User Content) is accurate. We also try to correct any
      errors or omissions as soon as we can after being notified of them. However, we are not able to guarantee that the material on the
      Site is accurate and free from errors or omissions at all times.
    </p>
  </Div>
)

export const DontWasteYourSwitchCopy = () => {
  const { currentJourney: { goodBank } = {} } = useGetCurrentJourney()

  return (
    <Div>
      <DrawerHeader>{`Don't`} Waste Your Switch</DrawerHeader>
      <p>Completing your switch through our site is the best way to ensure it has an impact.</p>
      <p>
        Switching alongside thousands of others unleashes the power of switching en masse. Together, we will move over £7 billion out of
        fossil fuel support in 2023. This shift will force banks to address their inadequate policies and reduce the amount of money
        directed towards the fossil fuel industry.
      </p>
      <p>Tracking your switch will help us supercharge our work.</p>
      {goodBank === 'starling' && <p>Plus, for each completed switch we donate money to positive environmental projects.</p>}
    </Div>
  )
}

export const TellUsPromptsCopy = () => (
  <Div>
    <DrawerHeader>Prompts</DrawerHeader>
    <BulletList>
      <li>What was the final straw with your old bank?</li>
      <li>What cinched the deal with your new green provider?</li>
      <li>How did Switch It Green support your decision and the switching process?</li>
      <li>How was the switching process?</li>
      <li>Did you take any other actions to maximise your switch?</li>
      <li>What would you like to see next from Switch It Green?</li>
      <li>Would you be interested in a Switch It Green program coming to your workplace or school/university?</li>
    </BulletList>
  </Div>
)

export const MonzoProjectCopy = () => (
  <Div>
    <DrawerHeader>Watershed</DrawerHeader>
    <p>
      Monzo do not invest in fossil fuels (or arms or tobacco) and have taken a pro-active approach to tackling gambling addiction. They are
      a branchless bank and this signficantly reduces their CO2 emissions, however they are not satisfied to stop there - Monzo acknowledges
      that they still have a negative environmental impact - they have partnered with Watershed, a software company that powers
      environmental programmes for businesses.
    </p>
    <p>
      <strong>Watershed</strong> uses industry-leading GHG protocols to accurately measure {`Monzo's`} carbon footprint and help them
      identify opportunities to mitigate their harmful output.
    </p>
    <p>
      You can find out more about{' '}
      <AnchorLink href='https://monzo.com/i/protecting-the-environment' target='_blank' rel='noreferrer'>
        {`Monzo's`} partnership with Watershed here.
      </AnchorLink>
    </p>
  </Div>
)

export const NationwideProjectCopy = () => (
  <Div>
    <DrawerHeader>Sustainable Housing</DrawerHeader>
    <p>
      Being a building society, it comes as no surprise that {`Nationwide's`} green investments have focused on housing. They funded a
      sustainable housing development in Swindon and built 239 eco-friendly, off-gas houses. These houses have an EPC A rating and they use
      air source heat pumps instead of traditional gas boilers. 71 homes (30%) will be available as Affordable Rent and Shared Ownership
      through {`Nationwide's`} housing association partner GreenSquareAccord.
    </p>
    <p>
      <AnchorLink href='https://www.nationwide.co.uk/about-us/building-a-better-society/oakfield/' target='_blank' rel='noreferrer'>
        More information can be found here.
      </AnchorLink>
    </p>
  </Div>
)

export const StarlingProjectCopy = () => (
  <Div>
    <DrawerHeader>Carbon Removal</DrawerHeader>
    <p>
      Starling invest in eight projects dedicated to atmospheric carbon removal. Many of these projects work with indigenous communities
      around the world and focus forest conservation, tree planting and protecting biodiversity. Starling have provided significant
      financial support to {`Nicaragua's`} biggest reforestation programme, Communitree. This project is organised by C-Level and aims to
      empower local communities to make environmentally sustainable decisions in land management.
    </p>
    <p>
      <AnchorLink
        href='https://www.starlingbank.com/blog/green-projects-we-support-to-reduce-climate-change/'
        target='_blank'
        rel='noreferrer'
      >
        You can read more about these projects here.
      </AnchorLink>
    </p>
  </Div>
)

export const TriodosProjectCopy = () => (
  <Div>
    <DrawerHeader>Sea Lanes</DrawerHeader>
    <p>
      Triodos gave <strong>Sea Lanes</strong> a £2.5m loan this year. Sea Lanes is a well-being project organised on environmentally
      sustainable principles. As well as an open water swimming centre, there will also be 23 carbon neutral spaces to let for businesses in
      the area who share the same ethos.
    </p>
    <p>
      <AnchorLink href='https://www.triodos.co.uk/articles/2022/brighton-sea-swimming-pool-new-lending' target='_blank' rel='noreferrer'>
        More information can be found here.
      </AnchorLink>
    </p>
    <p>
      <AnchorLink href='https://www.triodos.co.uk/articles/2022/end-of-year-message-2022' target='_blank' rel='noreferrer'>
        You can read their end of year round up here.
      </AnchorLink>
    </p>
  </Div>
)

export const PostingPublicly = () => (
  <Div>
    <DrawerHeader>What happens if I give you permission to post publicly?</DrawerHeader>
    <p>
      Ticking the box below your video and/or written submission will allow us to publicly post your switching story. This means we can
      share the content you provide on our public channels - including our website and social media pages - alongside your first name.
    </p>
    <p>
      Giving us permission to share your submission in this way is a great way to support the campaign against fossil fuel financing. More
      people switching to green banks means more money out of fossil fuel support.
    </p>
    <p>
      If you do not give us permission to use your submission in this way, simply leave the box unticked. We will not publicly post your
      switching story without your permission and if we do use it for other purposes (e.g., a quote to support a pitch or presentation), we
      will not include your name.
    </p>
  </Div>
)
