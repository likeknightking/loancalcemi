import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import EMICalculator from '@/components/EMICalculator'
import AdSlot from '@/components/AdSlot'
import LoanNav from '@/components/LoanNav'

export const metadata: Metadata = {
  title: 'Personal Loan Calculator — Estimate Monthly Payments | Free Tool',
  description:
    'Free personal loan calculator. Enter your loan amount, interest rate, and repayment term to instantly calculate monthly payments, total interest, and view a full amortization schedule.',
  openGraph: {
    title: 'Personal Loan Calculator — Free EMI Estimator',
    description: 'Calculate your monthly personal loan payment, total interest, and amortization schedule instantly.',
    type: 'website',
    url: 'https://loancalcemi.com/personal-loan-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Calculator — Free Unsecured Loan Estimator',
    description: 'Estimate monthly personal loan payments with a full amortization breakdown.',
  },
  alternates: { canonical: 'https://loancalcemi.com/personal-loan-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Personal Loan Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free personal loan calculator. Calculate monthly payments, total interest, and view a full amortization schedule for unsecured personal loans.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a personal loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A personal loan is an unsecured installment loan that can be used for almost any purpose, from debt consolidation to home improvement or medical expenses. Unlike mortgages or auto loans, personal loans do not require collateral, which means approval is based primarily on your creditworthiness and income.',
      },
    },
    {
      '@type': 'Question',
      name: 'What credit score do I need for a personal loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most lenders require a minimum credit score of 580-620 for a personal loan, though the best rates are reserved for scores above 720. Some online lenders specialize in loans for borrowers with lower credit scores, but these typically come with higher interest rates and origination fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I borrow with a personal loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Personal loan amounts typically range from $1,000 to $100,000, depending on the lender and your qualifications. Most lenders evaluate your income, existing debt obligations, credit score, and employment history to determine the maximum amount you can borrow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are personal loan interest rates fixed or variable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most personal loans come with fixed interest rates, meaning your monthly payment stays the same throughout the life of the loan. Some lenders offer variable-rate personal loans with lower initial rates, but these can increase over time, making budgeting less predictable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to use a personal loan or credit card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Personal loans generally offer lower interest rates than credit cards, especially for borrowers with good credit. They also provide a fixed repayment schedule, which helps with budgeting and ensures the debt is paid off within a set timeframe. Credit cards may be better for small, short-term expenses you can pay off within the billing cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fees come with personal loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common personal loan fees include origination fees (typically 1-8% of the loan amount), late payment fees, and in some cases prepayment penalties. Always review the APR rather than just the interest rate, as the APR includes fees and gives a more accurate picture of the total borrowing cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a personal loan for debt consolidation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, debt consolidation is one of the most common uses for personal loans. By combining multiple high-interest debts into a single loan with a lower interest rate, you can simplify your payments, reduce total interest, and create a clear payoff timeline. This strategy works best when the personal loan rate is significantly lower than your existing debt rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a personal loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Online lenders can often approve and fund a personal loan within one to three business days. Traditional banks and credit unions may take longer, sometimes up to a week or more. Having your documentation ready, including proof of income, identification, and bank statements, can speed up the process significantly.',
      },
    },
  ],
}

export default function PersonalLoanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="text-lg font-bold text-slate-800">💰 EMI Calculator</div>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <LoanNav />

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Personal Loan Calculator</h1>
            <p className="text-slate-500">Calculate your monthly personal loan payment, total interest, and full repayment schedule.</p>
          </div>

          <EMICalculator defaultPrincipal={15000} defaultRate={12} defaultTenure={3} />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Personal Loans</h2>
              <p className="text-slate-600 leading-relaxed">
                A <strong>personal loan</strong> is an unsecured form of credit that allows you to borrow a lump sum and repay it in fixed monthly installments over a set period. Unlike secured loans such as mortgages or auto loans, personal loans do not require collateral, making them accessible for a wide range of financial needs.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Common uses for personal loans include consolidating high-interest credit card debt, financing home improvements, covering medical expenses, funding major purchases, or handling unexpected emergencies. Because they are unsecured, personal loans typically carry higher interest rates than secured alternatives, ranging from 6% to 36% depending on creditworthiness. The fixed payment structure makes them a disciplined way to pay off debt within a predictable timeline.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Personal Loans vs. Other Borrowing Options</h2>
              <p className="text-slate-600 leading-relaxed">
                When deciding how to borrow money, it helps to compare personal loans against other options. Credit cards offer revolving credit with high flexibility but often charge interest rates above 20%. Home equity loans provide lower rates by using your property as collateral, but they put your home at risk if you default.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Personal loans strike a balance between accessibility and cost. They offer fixed rates lower than most credit cards, fixed repayment terms that ensure the debt is eliminated by a specific date, and no collateral requirements. For borrowers who need a structured payoff plan and a predictable monthly budget, personal loans are often the best choice for medium-sized expenses between $1,000 and $50,000.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Qualify for the Best Personal Loan Rates</h2>
              <p className="text-slate-600 leading-relaxed">
                Lenders evaluate several factors when determining your personal loan rate. Your credit score is the most influential factor, with scores above 720 unlocking the lowest available rates. Income stability, employment history, and existing debt levels also play significant roles.
              </p>
              <ul className="space-y-2 text-slate-600 mt-3">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span><span><strong>Improve your credit score:</strong> Pay bills on time, reduce credit card balances, and dispute any errors on your credit report before applying.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span><span><strong>Lower your debt-to-income ratio:</strong> Lenders prefer borrowers whose monthly debt payments are below 36% of their gross income.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span><span><strong>Compare multiple lenders:</strong> Check rates from banks, credit unions, and online lenders. Many offer pre-qualification with a soft credit inquiry that does not affect your score.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span><span><strong>Choose a shorter term:</strong> Shorter repayment periods typically come with lower interest rates and reduce the total cost of borrowing.</span></li>
              </ul>
            </section>

            <AdSlot slot="2696844582" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Using Personal Loans for Debt Consolidation</h2>
              <p className="text-slate-600 leading-relaxed">
                Debt consolidation is one of the smartest uses for a personal loan. If you carry balances on multiple credit cards at high interest rates, a personal loan can combine those debts into a single payment at a lower rate. This simplifies your finances, reduces the total interest you pay, and gives you a clear payoff date.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                For debt consolidation to work effectively, the personal loan rate must be meaningfully lower than the average rate on your existing debts. You also need the discipline to avoid running up new credit card balances after consolidating. The fixed repayment schedule of a personal loan naturally prevents the revolving-debt trap that credit cards create, making it an effective tool for getting out of debt systematically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqJsonLd.mainEntity.map(faq => (
                  <div key={faq.name}>
                    <h3 className="text-lg font-semibold text-slate-800">{faq.name}</h3>
                    <p className="text-slate-600 leading-relaxed mt-1">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
