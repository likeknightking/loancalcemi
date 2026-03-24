import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import EMICalculator from '@/components/EMICalculator'
import AdSlot from '@/components/AdSlot'
import LoanNav from '@/components/LoanNav'

export const metadata: Metadata = {
  title: 'Car Loan Calculator — Estimate Monthly Auto Loan Payments | Free Tool',
  description:
    'Free car loan calculator. Enter your vehicle price, interest rate, and loan term to instantly calculate monthly payments, total interest, and view a full amortization schedule.',
  openGraph: {
    title: 'Car Loan Calculator — Free Auto Financing Tool',
    description: 'Calculate your monthly car loan payment, total interest, and amortization schedule instantly.',
    type: 'website',
    url: 'https://loancalcemi.com/car-loan-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Loan Calculator — Free Auto Loan Payment Estimator',
    description: 'Estimate monthly car loan payments with a full amortization breakdown.',
  },
  alternates: { canonical: 'https://loancalcemi.com/car-loan-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Car Loan Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free car loan calculator. Calculate monthly auto loan payments, total interest, and view a full amortization schedule.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good interest rate for a car loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A good interest rate for a new car loan typically ranges from 4% to 7% for borrowers with good to excellent credit. Used car loans usually carry rates 1-2% higher. Your specific rate depends on your credit score, the loan term, down payment, and the lender you choose.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a car loan be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financial experts generally recommend car loan terms of 48 to 60 months. While 72- or 84-month loans lower your monthly payment, they come with higher interest rates and increase the risk of being underwater on the loan, meaning you owe more than the car is worth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to finance a new or used car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Used cars are generally a better financial decision because they cost less and have already experienced the steepest depreciation. New cars lose roughly 20-30% of their value in the first two years. However, new cars often come with lower interest rates, manufacturer warranties, and the latest safety features.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I put down on a car?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A down payment of 20% for a new car or 10% for a used car is a widely recommended guideline. A larger down payment reduces the loan amount, lowers your monthly payment, and helps you avoid being upside-down on the loan. Trading in a current vehicle can also serve as part of the down payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I get pre-approved for a car loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, getting pre-approved before visiting a dealership is highly recommended. Pre-approval tells you the exact rate and amount you qualify for, gives you negotiating leverage, and lets you compare dealer financing against your pre-approved offer. Most pre-approval inquiries only result in a soft credit check.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a car loan and a lease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a car loan, you own the vehicle after the loan is paid off and can keep it as long as you want. With a lease, you are essentially renting the car for a fixed term and must return it or buy it at the end. Leases typically have lower monthly payments but come with mileage limits and you build no equity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does refinancing a car loan make sense?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refinancing your car loan makes sense if interest rates have dropped since you originally financed, if your credit score has improved significantly, or if you want to change your loan term. However, extending the term through refinancing means you pay more total interest even if monthly payments decrease.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fees should I watch out for with a car loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common fees include origination fees, documentation fees, title and registration fees, and dealer add-ons like extended warranties or gap insurance. Always ask for an itemized breakdown of all charges and negotiate to remove unnecessary dealer-added fees before signing.',
      },
    },
  ],
}

export default function CarLoanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg font-bold text-slate-800">💰 EMI Calculator</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <LoanNav />

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Car Loan Calculator</h2>
            <p className="text-slate-500">Calculate your monthly auto loan payment, total interest, and full repayment schedule.</p>
          </div>

          <EMICalculator defaultPrincipal={35000} defaultRate={7.5} defaultTenure={5} />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Auto Financing</h2>
              <p className="text-slate-600 leading-relaxed">
                An <strong>auto loan</strong> is a secured installment loan used to purchase a vehicle, with the car itself serving as collateral. Car loans typically range from 36 to 84 months, with the most common terms being 48 to 60 months. The interest rate you receive depends on your credit profile, the vehicle age, the loan amount, and the lender.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Unlike home mortgages, vehicles are depreciating assets, losing value from the moment you drive off the lot. This makes the relationship between loan term, interest rate, and down payment especially important. Choosing a shorter term and larger down payment helps ensure you never owe more than the car is worth, a situation known as being <strong>upside-down</strong> or <strong>underwater</strong> on the loan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">New Car vs. Used Car Loans</h2>
              <p className="text-slate-600 leading-relaxed">
                New car loans generally offer lower interest rates because lenders view new vehicles as lower risk. Manufacturer promotions sometimes include 0% APR financing for qualified buyers, which can make buying new more attractive on paper. However, new cars depreciate rapidly, losing approximately 20% of their value in the first year alone.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Used car loans carry slightly higher rates, typically 1 to 2 percentage points above new car rates. Certified pre-owned programs offer a middle ground, providing manufacturer-backed warranties on used vehicles with competitive financing. When comparing new versus used, consider the total cost of ownership, including depreciation, insurance premiums, maintenance costs, and fuel efficiency, not just the monthly payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Get the Best Car Loan Rate</h2>
              <p className="text-slate-600 leading-relaxed">
                Securing the best auto loan rate starts with preparation. Check your credit report for errors, pay down existing debt to lower your debt-to-income ratio, and gather quotes from multiple sources including banks, credit unions, and online lenders before visiting a dealership.
              </p>
              <ul className="space-y-2 text-slate-600 mt-3">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span><span><strong>Get pre-approved:</strong> Apply with at least two to three lenders so you have leverage when negotiating dealer financing.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span><span><strong>Shorten the term:</strong> A 48-month loan almost always carries a lower rate than a 72-month loan.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span><span><strong>Increase your down payment:</strong> Putting more money down reduces the lender risk and can unlock better rates.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span><span><strong>Consider credit unions:</strong> Credit unions are nonprofit institutions that often offer rates lower than those of banks and dealerships.</span></li>
              </ul>
            </section>

            <AdSlot slot="2696844582" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Avoiding Common Car Loan Mistakes</h2>
              <p className="text-slate-600 leading-relaxed">
                One of the most common mistakes is focusing solely on the monthly payment rather than the total cost of the loan. Dealers may offer lower monthly payments by extending the loan term to 72 or 84 months, but this dramatically increases the total interest paid and raises the risk of negative equity.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Other pitfalls include skipping the pre-approval step, rolling negative equity from a previous vehicle into a new loan, and accepting dealer add-ons like paint protection or fabric treatment that rarely provide value proportional to their cost. Always negotiate the vehicle price separately from the financing terms, and review the full loan agreement before signing to ensure no unexpected fees have been added.
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

        <footer className="border-t border-slate-200 mt-16 py-8 text-center bg-white">
          <p className="text-slate-400 text-sm">EMI Calculator — Free loan calculator. No sign-up required.</p>
        </footer>
      </div>
    </>
  )
}
