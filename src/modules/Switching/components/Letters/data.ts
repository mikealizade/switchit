const goodBankLetterConfig = {
  triodos: {
    name: 'Triodos Bank',
    intro:
      '<div>I am in the process of switching my current account to a Triodos account due to your unrivalled ethical credentials.</div>',
    body: `<div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit. I would love for more people to switch their bank to yours, and think it would be fab if you [insert suggestion here e.g. had more in person branches; offered a student account options; accepted cash deposits] to incentivise more switchers.</div>`,
  },
  monzo: {
    name: 'Monzo',
    intro:
      '<div>I am in the process of switching my current account to Monzo due to your excellent ethical credentials and your stance against investing in fossil fuels.</div>',
    body: `<div>I would love for more people to switch their bank to yours, however, some people will undoubtedly be hesitant due to the discrepancy in your investment policy. It would be great if you were to improve your current stance by publicly committing to never investing in the fossil fuel industry. I noted that this is something which other (competitor) green banks have done and strongly believe it would help to incentivise more sustainability-oriented switchers, as well as giving your current customers some piece of mind.</div>`,
  },
  starling: {
    name: 'Starling Bank',
    intro:
      '<div>I am in the process of switching my current account to Starling due to your excellent green credentials.</div>',
    body: `<div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit. I would love for more people to switch their bank to yours, and think it would be fab if you [insert suggestion here e.g. offered a competitive student account; publicly shared more information on your emissions relating to loans and investments; invested in more holistically informed green projects, rather than buying carbon offsets] to incentivise more switchers.</div>`,
  },
  nationwide: {
    name: 'Nationwide',
    intro:
      '<div>I am in the process of switching my current account to Nationwide due to your excellent green credentials.</div>',
    body: `<div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit. I would love for more people to switch their bank to yours, and think it would be fab if you [insert suggestion here e.g. had a more competitive student account offering; added more features to your app; increased your investments in green community projects] to incentivise more switchers.</div>`,
  },
}
const demands = `<ul><li>Stopping directly financing fossil fuel expansion activity.</li><li>Delivering notice to clients that they must stop expansion activity or face the financing consequences.</li><li>Ending relationships with those clients do not stop fossil fuel expansion</li></ul>`

const badBankLetterConfig = {
  Barclays: {
    name: 'Barclays',
    body: `
    <div>When presented with information regarding your investment policies, around 2 million Barclays customers (10%) reported they would be 'very likely' to switch banks.  Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  Halifax: {
    name: 'Halifax',
    body: `
    <div>While The Lloyds Banking Group have taken the first step by ending finance to new oil, gas, and coal projects, I understand this represents a minute effort in proportion to your existing investments, stakes, and shares in the oil, gas, and coal industry. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>The next step involves improving your current commitments by additionally:</div><div><br /></div>
    <div>${demands}</div><div><br /></div>
    <div>Furthermore, The Lloyds Banking groups needs to provide clear divestment commitments for their subsidiaries, including Halifax.</div>`,
  },
  'Lloyds Bank': {
    name: 'Lloyds Bank',
    body: `
    <div>While you have taken the first step by ending finance to new oil, gas, and coal projects, I understand this represents a minute effort in proportion to your existing investments, stakes, and shares in the oil, gas, and coal industry. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>The next step involves improving your current commitments by additionally:</div><div><br /></div>
    <div>${demands}</div><div><br /></div>
    <div>Furthermore, The Lloyds Banking groups needs to provide clear divestment commitments for their subsidiaries.</div>`,
  },
  'HSBC Bank': {
    name: 'HSBC Bank',
    body: `
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. HSBC's perceived trustworthiness has no doubt fallen due to your numerous attempts at greenwashing over the last few years. In order to retain some of your customer base, it is time to replace the deceit with meaningful climate action.</div><div><br /></div>
    <div>While you have taken the first step by ending finance to new oil and gas fields, I understand this represents a minute effort in proportion to your existing investments, stakes, and shares in the oil, gas, and coal industry. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>The next step involves improving your current commitments by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  Santander: {
    name: 'Santander',
    body: `
    <div>I was shocked when I discovered that Santander invest in some of the most harmful fossil fuel projects, including tar sands oil and arctic oil and gas. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments. It is shameful that you continue to provide student banking services while actively investing in an unliveable future for young people.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  Natwest: {
    name: 'Natwest',
    body: `
    <div>I was shocked when I discovered that NatWest invest in some of the most harmful fossil fuel projects, including tar sands oil and arctic oil and gas. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'Bank of Scotland': {
    name: 'Bank of Scotland',
    body: `
    <div>While The Lloyds Banking Group have taken the first step by ending finance to new oil, gas, and coal projects, I understand this represents a minute effort in proportion to your existing investments, stakes, and shares in the oil, gas, and coal industry. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>The next step involves improving your current commitments by additionally:</div><div><br /></div>
    <div>${demands}</div><div><br /></div>
    <div>Furthermore, The Lloyds Banking groups needs to provide clear divestment commitments for their subsidiaries, including The Bank of Scotland.</div>`,
  },
  RBS: {
    name: 'RBS',
    body: `
    <div>I was shocked when I discovered that RBS (NatWest) invest in some of the most harmful fossil fuel projects, including tar sands oil and arctic oil and gas. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'The Co-operative Bank': {
    name: 'The Co-operative Bank',
    body: `
    <div>I have held an account with you for [insert number] years, and until recently believed that The Co-operative Bank was a green bank. However, I understand that The Co-operative Bank is now owned by various asset management companies, including hedge funds with strong links to fossil fuels. I am therefore writing to inform you that I am switching away due to your involvement with the fossil fuel industry.</div><div><br /></div>
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. With the new information regarding your structure, I find The Co-operative Bank's messaging and marketing to constitute a form of greenwashing and I no longer consider you as trustworthy.</div><div><br /></div>
    <div>There are a number of leading banks whose investment policies prevent fossil fuel investment or support of any kind and as such customers will continue to switch away unless you commit to identifying and screening out shareholders who are tied to the fossil fuel industry.</div><div><br /></div>
    <div>I am looking forward to a happier relationship with my new bank.</div>`,
  },
  'Virgin Money': {
    name: 'Virgin Money',
    body: `
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. Claiming to take climate change seriously while failing to provide any transparency around your fossil fuel investments, or any meaningful divestment commitments, is deceiving.</div><div><br /></div>
    <div>Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'Alliance & Leicester': {
    name: 'Alliance & Leicester',
    body: `
    <div>I was shocked when I discovered that Alliance & Leicester (Santander) invest in some of the most harmful fossil fuel projects, including tar sands oil and arctic oil and gas. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments. It is shameful that you continue to provide student banking services while actively investing in an unliveable future for young people.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'Bank Of Ireland': {
    name: 'Bank Of Ireland',
    body: `
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. Claiming to take climate change seriously while only having a vague commitment to divest from fossil fuels by 2050 is simply misleading.</div><div><br /></div>
    <div>Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div>`,
  },
  TSB: {
    name: 'TSB',
    body: `
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. Your lack of transparency around your fossil fuel investments is a bad business decision.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'Ulster Bank': {
    name: 'Ulster Bank',
    body: `
    <div>Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  Danske: {
    name: 'Danske',
    body: `
    <div>I was shocked when I discovered that Danske are active investors in fossil fuel expansion projects. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>In 2021, the International Energy Agency (IEA) announced that there should be no investment in new oil, gas and coal. Some of your competitors have made a start, such as Lloyds, by ending direct finance to new oil, gas and coal projects.</div><div><br /></div>
    <div>In order to retain some of your customer base, I strongly recommend that you improve your investment policies; in the first instance, by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'First Direct': {
    name: 'First Direct',
    body: `
    <div>Research has shown that trust is one of the most influential factors for customers when choosing a bank, ahead of price or rate. HSBC's perceived trustworthiness has no doubt fallen due to your numerous attempts at greenwashing over the last few years. In order to retain some of your customer base, it is time to replace the deceit with meaningful climate action.</div><div><br /></div>
    <div>While you have taken the first step by ending finance to new oil and gas fields, I understand this represents a minute effort in proportion to your existing investments, stakes, and shares in the oil, gas, and coal industry. Customers will continue to switch away unless you address your inadequate and detrimental policies and rapidly phase out your fossil fuel investments.</div><div><br /></div>
    <div>The next step involves improving your current commitments by:</div><div><br /></div>
    <div>${demands}</div>`,
  },
  'M&S Bank': {
    name: 'M&S Bank',
    body: `
    <div>Missing copy</div><div><br /></div>
    <div></div><div><br /></div>
    <div></div><div><br /></div>
    <div></div>`,
  },
  'Metro Bank': {
    name: 'Metro Bank',
    body: `
    <div>Missing copy</div><div><br /></div>
    <div></div><div><br /></div>
    <div></div><div><br /></div>
    <div></div>`,
  },
  Revolut: {
    name: 'Revolut',
    body: `
    <div>I understand that Revolut has recently applied for a banking licence in the UK, and is hoping to begin trading as a registered bank. I am writing to inform you that I am switching away due to your lack of commitment against future fossil fuel investments. And I am not alone, with 19% of the UK population planning on switching to a sustainable bank in the next 12 months.</div><div><br /></div>
    <div>Customers will continue to switch away unless you address your inadequate policies and commit to screening out future fossil fuel investments. As a newly registered bank, with no existing ties to fossil fuel companies, it would be a simple step to formulate an ethical investment policy - similar to some of your main competitors, including Monzo and Starling.</div><div><br /></div>
    <div>There are a number of leading banks whose investment policies prevent fossil fuel investments of any kind. And a bank which is aligned with customer values is better equipped to effectively serve their audience across the board. Research has shown that 84% of people who use a sustainable banking product or service are more satisfied with it than the traditional alternative, with many green banks among those highest scoring in The European Banking Customer Experience Index Rankings in 2022.  </div><div><br /></div>
    <div>I am looking forward to a happier relationship with my new bank.</div>`,
  },
  Kroo: {
    name: 'Kroo',
    body: `
    <div></div><div><br /></div>
    <div></div><div><br /></div>
    <div></div><div><br /></div>
    <div></div>`,
  },
  triodos: {
    name: 'Triodos Bank',
    body: `
    <div>I have held an account with you for [insert number] years.</div><div><br /></div>
    <div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit. However, I am writing to inform you that I am in the process of switching away in favour of a different green bank. This is because [insert reason for switching]. I think it is important that you address this area to improve the public perception of green banks and to encourage more people to move their money out of fossil fuel support.</div><div><br /></div>
    <div>I hope this letter is helpful and I wish you the best of luck in the future.</div>`,
  },
  monzo: {
    name: 'Monzo',
    body: `
    <div>I have held an account with you for [insert number] years.</div><div><br /></div>
    <div>I think it's fantastic that you have strong ethical policies in a number of areas, however, I am writing to inform you that I am in the process of switching to a different green(er) bank.</div><div><br /></div>
    <div>While your website states that you do not currently invest in fossil fuels, you have not committed to never investing in the fossil fuel industry. This is something which other (competitor) green banks have done and it is important to me to support their efforts. To prevent more sustainably-minded customers from switching away, I would advise you follow in their footsteps and publicly commit to never investing in fossil fuels.</div><div><br /></div>
    <div>I hope this letter is helpful and I wish you the best of luck in the future.</div>`,
  },
  starling: {
    name: 'Starling Bank',
    body: `
    <div>I have held an account with you for [insert number] years.</div><div><br /></div>
    <div>I think your green credentials are fantastic and that you are setting a great example for others to follow suit. However, I am writing to inform you that I am in the process of switching away in favour of a different green bank. This is because [insert reason for switching]. I think it is important that you address this area to improve the public perception of green banks and to encourage more people to move their money out of fossil fuel support.</div><div><br /></div>
    <div>I hope this letter is helpful and I wish you the best of luck in the future.</div>`,
  },
  nationwide: {
    name: 'Nationwide',
    body: `
    <div>I have held an account with you for [insert number] years.</div><div><br /></div>
    <div>I think your green credentials are fantastic and that you are setting a great example for others to follow suit. However, I am writing to inform you that I am in the process of switching away in favour of a different green bank. This is because [insert reason for switching]. I think it is important that you address this area to improve the public perception of green banks and to encourage more people to move their money out of fossil fuel support.</div><div><br /></div>
    <div>I hope this letter is helpful and I wish you the best of luck in the future.</div>`,
  },
}
// <div></div><div><br /></div>

export const getDefaultHelloLetterText = (
  bankName = '[bank name]',
  nickname = '[your name]',
): string => {
  const bank = goodBankLetterConfig[bankName as keyof typeof goodBankLetterConfig]
  return `
  <div>
    Dear ${bank?.name},
    <div>
      <br />
    </div><div><br /></div>
   ${bank?.intro}
    <div>
      <br />
    </div>
   ${bank?.body}
    <div>
      <br />
    </div>
    <div>I'm looking forward to a long financial relationship with you.</div>
    <div>
      <br />
    </div>
    <div>Yours sincerely,</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}

export const getDefaultBreakupLetterText = (
  bankName = '[bank name]',
  nickname = '[your name]',
): string => {
  const bank = badBankLetterConfig[bankName as keyof typeof badBankLetterConfig]
  return `
  <div>
    Dear ${bank?.name},
    <div>
      <br />
    </div>
    <div>
      I have held an account with you for [insert number] years. However, I am writing to inform you that I am switching away due to your continued investment in the fossil fuel industry. And I am not alone, with 19% of the UK population planning on switching to a sustainable bank in the next 12 months.
    </div>
    <div>
      <br />
    </div>
   ${bank?.body}
    <div>
      <br />
    </div>
    <div>
      There are a number of leading banks whose investment policies prevent fossil fuel investments of any kind. And a bank which is aligned with customer values is better equipped to effectively serve their audience across the board. Research has shown that 84% of people who use a sustainable banking product or service are more satisfied with it than the traditional alternative, with many green banks among those highest scoring in The European Banking Customer Experience Index Rankings in 2022.  
    </div>
    <div>
      <br />
    </div>
    <div>I am looking forward to a happier relationship with my new bank.</div>
    <div>
      <br />
    </div>
    <div>Yours sincerely,</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}
