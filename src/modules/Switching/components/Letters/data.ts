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
      '<div>I am in the process of switching my current account to Monzo due to your excellent ethical credentials and your stance against investing in fossil fuels. </div>',
    body: `<div>I would love for more people to switch their bank to yours, however, some people will undoubtedly be hesitant due to the discrepancy in your investment policy. It would be great if you were to improve your current stance by publicly committing to never investing in the fossil fuel industry. I noted that this is something which other (competitor) green banks have done and strongly believe it would help to incentivise more sustainability-oriented switchers, as well as giving your current customers some piece of mind.</div>`,
  },
  starling: {
    name: 'Starling Bank',
    intro:
      '<div>I am in the process of switching my current account to Starling due to your excellent green credentials.</div>',
    body: `<div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit.  I would love for more people to switch their bank to yours, and think it would be fab if you [insert suggestion here e.g. offered a competitive student account; publicly shared more information on your emissions relating to loans and investments; invested in more holistically informed green projects, rather than buying carbon offsets] to incentivise more switchers.</div>`,
  },
  nationwide: {
    name: 'Nationwide',
    intro:
      '<div>I am in the process of switching my current account to Nationwide due to your excellent green credentials.</div>',
    body: `<div>I think it's fantastic that you are leading the way in terms of green finance, and setting a great example for others to follow suit.  I would love for more people to switch their bank to yours, and think it would be fab if you [insert suggestion here e.g. had a more competitive student account offering; added more features to your app; increased your investments in green community projects] to incentivise more switchers.</div>`,
  },
}

export const getDefaultHelloLetterText = (
  bankName = '[bank name]',
  nickname = '[your name]',
): string => {
  const bank = goodBankLetterConfig[bankName as keyof typeof goodBankLetterConfig]
  return `
  <div>
    Dear ${bank?.name}
    <div>
      <br />
    </div>
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
    <div>Your sincerely</div>
    <div>
      <br />
    </div>
    <div>${nickname}</div>
  </div>
  `
}
