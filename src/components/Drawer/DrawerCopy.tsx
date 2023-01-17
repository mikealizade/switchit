import { DrawerHeader } from '@components/Drawer/Drawer.style'
import { useGetCurrentJourney } from '@hooks/useGetCurrentJourney'
import { BulletList, Div } from '@styles/common.style'

export const ResearchCopy = () => (
  <Div>
    <p>
      A {`bank's`} rating is decided based on a set of normative criteria established by ethicist
      and Researcher, Dr William Shakey. An overview of each rating is as follows:
    </p>
    <BulletList>
      <li>
        1 out of 5 - Among the biggest investors in fossil fuels. Current fossil fuel investments
        over £100 million.
      </li>
      <li>
        2 out of 5 - Current fossil fuel investments between £25 million and £100 million with a
        suitable divestment commitment and strategy; or, current fossil fuel investments below £25
        million with an insufficient divestment commitment and/or strategy.
      </li>
      <li>
        3 out of 5 - Current fossil fuel investments less than £25 million with a suitable
        divestment commitment and strategy.
      </li>
      <li>
        4 out of 5 - Does not invest in fossil fuels but has not committed to never investing in
        fossil fuels.
      </li>
      <li>
        5 out of 5 - Does not invest in fossil fuels and has a clear policy prohibiting future
        investment in fossil fuels. Also invests in positive environmental initiatives.
      </li>
    </BulletList>
    <p>
      We define {`'suitable'`} commitments as those whose goal is to completely phase out (not down)
      fossil fuel funding - including both projects and shares - with evidence of significant and
      measurable steps already being undertaken and with definitive accountability for all targets.
      A {`'suitable'`} divestment strategy is one which eliminates the possibility for future fossil
      fuel investments, with clear and measurable steps for phasing fossil fuel funding out of
      existing investment portfolios and shares. A timeline for divestment is deemed to be{' '}
      {`'suitable'`} only if there are planned divestment measures already in place, a clear and
      significant target set for 2025 at the latest, or a target for complete, water-tight
      divestment set for 2030 at the latest. We do not accept {`'Net Zero'`} commitments unless they
      include plans for complete divestment of all investments and shares by 2030, or are
      demonstrating significant progress with an acceptable 2025 target - no matter how many
      pictures of wind turbines they manage to cram into their swanky pdf.
    </p>
  </Div>
)

export const PotentialClimateImpactCopy = () => (
  <Div>
    <p>
      Unless you have 7+ figures in your bank account (in which case, may I introduce you to our
      donate button?), you are worth a lot more to your bank than your account balance. Banks use
      their customer base as leverage to secure loans and assets; often the same loans and assets
      that allow them to invest in fossil fuel projects and companies. {`Banks'`} customer numbers
      are frequently used as evidence that they are a secure product in whom the market can trust.
      The market is mostly indifferent to how much money an individual customer has in their
      account, what {`they're`} interested in is the customer themselves as an asset.
    </p>
    <p>
      So, how much are you worth, as a stable asset, to a bank? {`We've`} done the research and, if
      you pop in your age to our impact calculator, we can give you a solid estimate of how valuable
      you are to a bank.
    </p>
  </Div>
)

export const DisclaimerCopy = () => (
  <Div>
    <DrawerHeader>Disclaimer</DrawerHeader>
    <p>
      Any Content provided on this Site or by any third-party (including our green partners) in
      connection with this Site is given for your general information purposes only and to inform
      you about us and our services, news, features, and other websites that may be of interest, but
      has not been tailored to your specific requirements or circumstances. It does not constitute
      technical, financial or legal advice or any other type of advice and should not be relied on
      for any purposes. You should always use your own independent judgment when using our Site and
      its Content.
    </p>
    <p>
      We aim to ensure that the material on the Site (excluding, if applicable, any User Content) is
      accurate. We also try to correct any errors or omissions as soon as we can after being
      notified of them. However, we are not able to guarantee that the material on the Site is
      accurate and free from errors or omissions at all times.
    </p>
  </Div>
)

export const DontWasteYourSwitchCopy = () => {
  const { currentJourney: { goodBank } = {} } = useGetCurrentJourney()

  return (
    <Div>
      <DrawerHeader>Dont Waste Your Switch</DrawerHeader>
      <p>{`Don't`} waste your switch</p>
      <p>Completing your switch through our site is the best way to ensure it has an impact.</p>
      <p>
        Switching alongside thousands of others unleashes the power of switching en masse. Together,
        we will move over £7 billion out of fossil fuel support in 2023. This shift will force banks
        to address their inadequate policies and reduce the amount of money directed towards the
        fossil fuel industry.
      </p>
      <p>Tracking your switch will help us supercharge our work.</p>
      {goodBank === 'starling' && (
        <p>Plus, for each completed switch we donate money to positive environmental projects.</p>
      )}
    </Div>
  )
}

export const TellUsPromptsCopy = () => (
  <Div>
    <DrawerHeader>Prompts</DrawerHeader>
    <BulletList>
      <li>What was the final straw with your old bank?</li>
      <li>What cinched the deal with your new green provider?</li>
      <li>How did Switch It support your decision and the switching process?</li>
      <li>How was the switching process?</li>
      <li>Did you take any other actions to supercharge switch?</li>
      <li>What would you like to see next from Switch It?</li>
      <li>
        Would you be interested in a Switch It program coming to your workplace or
        school/university?
      </li>
    </BulletList>
  </Div>
)
