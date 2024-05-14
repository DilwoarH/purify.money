import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Why Purify?',
      answer:
        `Zakat purifies our wealth and purifies our soul. "You will never achieve righteousness until you donate some of what you cherish." (AlQuran 3:92).`,
    },
    {
      question: 'Is zakat mentioned as a source of purification of wealth in the Quran?',
      answer:
        `“Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [ Allah ‘s blessings] upon them. Indeed, your invocations are reassurance..."`,
    },
    {
      question: 'Is zakat mentioned as a source of purification of wealth in Hadith?',
      answer:
        'Narrated Ibn ‘Abbas that the Messenger of God said: “Indeed God has not made zakat obligatory, except to purify by it the remaining portion of your wealth, indeed He has obligated to share the inheritance on your wealth for those remaining after you” (Sunan Abu Dawud, 1664)        ',
    },
  ],
  [
    {
      question: 'Is zakat due on business assets?',
      answer:
        `Yes, this is mentioned in the Quran and Hadith. In Surah Baqarah, Allah (SWT) says: “O believers! Donate from the best of what you have earned and of what We have produced for you from the earth. Do not pick out worthless things for donation, which you yourselves would only accept with closed eyes. And know that Allah is Self-Sufficient, Praiseworthy.” (AlQuran 2:267). “Good things you have earned” refers to income and trade assets acquired through business.
        According to hadith, Samurah bin Jundub (may Allah be pleased with him) said that the Messenger of Allah (peace and blessings be upon Him) commanded us to give zakat on what we intended for trade. (Sunan Abu Dawood)`
      ,
    },
    {
      question: 'Where is Purify based?',
      answer:
        'Our team is UK and US based but our guidance can be used worldwide.',
    },
    /* {
      question: 'Is there any age limit to trading on Pocket?',
      answer:
        'For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.',
    }, */
  ],
  /* [
    {
      question: 'How did you get this on the App Store?',
      answer:
        'Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.',
    },
    {
      question: 'How do I explain the money I withdraw from Pocket to the IRS?',
      answer:
        'This feels like one-hundred percent a you problem. Pocket is not responsible in any way for your tax returns.',
    },
    {
      question: 'How do I become an insider?',
      answer:
        'Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.',
    },
  ], */
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
