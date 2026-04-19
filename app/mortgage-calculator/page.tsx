import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import EMICalculator from '@/components/EMICalculator'
import AdSlot from '@/components/AdSlot'
import LoanNav from '@/components/LoanNav'

export const metadata: Metadata = {
  title: 'Mortgage Calculator — Estimate Monthly Home Loan Payments | Free Tool',
  description:
    'Free mortgage calculator. Enter your home loan amount, interest rate, and term to instantly calculate monthly payments, total interest, and view a full amortization schedule.',
  openGraph: {
    title: 'Mortgage Calculator — Free Home Loan EMI Tool',
    description: 'Calculate your monthly mortgage payment, total interest, and amortization schedule instantly.',
    type: 'website',
    url: 'https://loancalcemi.com/mortgage-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Calculator — Free Home Loan Payment Estimator',
    description: 'Estimate monthly mortgage payments with a full amortization breakdown.',
  },
  alternates: { canonical: 'https://loancalcemi.com/mortgage-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mortgage Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free mortgage calculator. Calculate monthly home loan payments, total interest, and view a full amortization schedule.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much house can I afford?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common guideline is that your monthly housing costs should not exceed 28% of your gross monthly income. Use a mortgage calculator to estimate monthly payments and compare them against your income to determine a comfortable loan amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a monthly mortgage payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical monthly mortgage payment includes principal repayment, interest charges, property taxes, and homeowners insurance. Some lenders also require private mortgage insurance (PMI) if your down payment is less than 20%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a fixed-rate and adjustable-rate mortgage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fixed-rate mortgage keeps the same interest rate for the entire loan term, providing predictable payments. An adjustable-rate mortgage (ARM) starts with a lower rate that can change periodically based on market conditions, which may increase or decrease your payments over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the down payment affect my mortgage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A larger down payment reduces the loan amount you need to borrow, which lowers your monthly payment and total interest paid. Putting down at least 20% also eliminates the need for private mortgage insurance (PMI), saving you additional money each month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose a 15-year or 30-year mortgage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 15-year mortgage has higher monthly payments but significantly lower total interest costs and builds equity faster. A 30-year mortgage offers lower monthly payments, making it easier to manage cash flow, but you pay substantially more interest over the life of the loan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What credit score do I need to get a mortgage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most conventional lenders require a minimum credit score of 620, though FHA loans may accept scores as low as 580 with a 3.5% down payment. Higher credit scores typically qualify you for lower interest rates, which can save thousands of dollars over the loan term.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are mortgage points and should I buy them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mortgage points (or discount points) are upfront fees paid to the lender to reduce your interest rate. One point costs 1% of the loan amount and typically lowers the rate by 0.25%. Buying points makes sense if you plan to stay in the home long enough for the monthly savings to exceed the upfront cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pay off my mortgage early without penalty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many modern mortgages do not have prepayment penalties, but it is important to check your loan agreement. Making extra payments or biweekly payments can significantly reduce total interest and shorten your loan term. Even small additional monthly payments can save thousands over time.',
      },
    },
  ],
}

export default function MortgageCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Mortgage Calculator</h1>
            <p className="text-slate-500">Estimate your monthly home loan payment, total interest, and full amortization schedule.</p>
          </div>

          <EMICalculator defaultPrincipal={300000} defaultRate={6.5} defaultTenure={25} mode="mortgage" />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Mortgage Loans</h2>
              <p className="text-slate-600 leading-relaxed">
                A <strong>mortgage</strong> is a secured loan used to purchase real estate, where the property itself serves as collateral. Mortgages are typically the largest financial commitment most people make in their lifetime, with loan terms spanning 15 to 30 years. Understanding how your mortgage payment is calculated helps you make informed decisions about one of the most significant purchases you will ever make.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Each monthly mortgage payment is divided into principal and interest. In the early years, a larger share of each payment goes toward interest. As you pay down the balance, the principal portion grows. This process, known as <strong>amortization</strong>, means that building equity in your home accelerates over time. Property taxes and insurance are often bundled into the payment through an escrow account, though they are separate from the loan itself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How Mortgage Interest Rates Work</h2>
              <p className="text-slate-600 leading-relaxed">
                Mortgage interest rates are influenced by broad economic factors such as the federal funds rate, inflation expectations, and bond market yields. Your individual rate also depends on personal factors including your credit score, debt-to-income ratio, down payment size, and the type of loan you choose.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Even a small difference in interest rate has a substantial impact on total cost. On a $300,000 loan over 30 years, the difference between 6% and 6.5% adds up to more than $35,000 in additional interest. Shopping among multiple lenders, improving your credit score before applying, and considering discount points are all strategies that can help you secure a lower rate and save significantly over the life of the loan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Down Payments and Mortgage Insurance</h2>
              <p className="text-slate-600 leading-relaxed">
                The down payment is the upfront cash you contribute toward the home purchase. While 20% has long been considered the standard, many loan programs allow down payments as low as 3% for conventional loans or 3.5% for FHA loans. However, putting down less than 20% typically requires <strong>private mortgage insurance (PMI)</strong>, which adds to your monthly costs until you reach 20% equity.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                A larger down payment reduces the loan principal, lowers your monthly payment, and can qualify you for better interest rates. It also means you start with more equity in your home, providing a financial cushion if property values decline. Balancing the desire for a lower payment against the opportunity cost of tying up cash in the property is a key decision for every homebuyer.
              </p>
            </section>

            <AdSlot slot="2696844582" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Strategies for Paying Off Your Mortgage Faster</h2>
              <p className="text-slate-600 leading-relaxed">
                There are several effective ways to pay off your mortgage ahead of schedule. Making one extra payment per year, switching to biweekly payments, or rounding up your monthly payment are simple tactics that can shave years off the loan and save tens of thousands in interest. Before adopting any prepayment strategy, confirm that your loan has no prepayment penalties.
              </p>
              <ul className="space-y-2 text-slate-600 mt-3">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span><span><strong>Biweekly payments:</strong> Pay half your monthly amount every two weeks, resulting in 26 half-payments (13 full payments) per year instead of 12.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span><span><strong>Refinancing:</strong> If rates have dropped since you took out your mortgage, refinancing to a lower rate or shorter term can reduce total interest substantially.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span><span><strong>Lump-sum payments:</strong> Applying bonuses, tax refunds, or other windfalls directly to the principal accelerates payoff and reduces interest.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span><span><strong>Recasting:</strong> Some lenders allow you to recast your mortgage after a large principal payment, lowering your monthly payment without refinancing.</span></li>
              </ul>
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
