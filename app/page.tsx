import EMICalculator from '@/components/EMICalculator'
import AdSlot from '@/components/AdSlot'
import LoanNav from '@/components/LoanNav'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'EMI Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free EMI calculator. Calculate monthly loan EMI, total interest, and view a full amortization schedule.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EMI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EMI stands for Equated Monthly Installment. It is the fixed amount you pay every month to repay a loan over a set period. Each EMI covers both principal repayment and interest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is EMI calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of monthly installments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a higher tenure reduce EMI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A longer tenure reduces your monthly EMI because the principal is spread over more payments. However, you end up paying significantly more total interest over the life of the loan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an amortization schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An amortization schedule is a table showing the breakdown of each monthly payment — how much goes toward principal and how much is interest — along with the remaining balance after each payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce my EMI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reduce your EMI by: (1) making a larger down payment to reduce the principal, (2) negotiating a lower interest rate, (3) extending the loan tenure, or (4) making prepayments to reduce the outstanding balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between flat rate and reducing balance interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a flat rate, interest is calculated on the original loan amount throughout the tenure, making the effective rate higher. With a reducing balance (or diminishing balance) method, interest is calculated on the outstanding principal, which decreases with each payment. Most EMI calculators, including this one, use the reducing balance method, which is the standard for bank loans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does prepaying a loan save money on interest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, prepaying a loan reduces the outstanding principal, which lowers the total interest you pay over the remaining term. Making even small extra payments early in the loan term has a disproportionately large impact because it reduces the balance on which future interest is calculated. Check your loan agreement for any prepayment penalties before making extra payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the interest rate affect total loan cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Even a small change in interest rate can significantly affect the total cost of a loan, especially over long tenures. For example, on a $200,000 loan over 20 years, the difference between 7% and 8% interest adds up to more than $30,000 in additional interest. Always compare rates from multiple lenders and consider the total interest paid, not just the monthly payment.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg font-bold text-slate-800">💰 EMI Calculator</h1>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-8">
          <LoanNav />

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Loan EMI Calculator</h2>
            <p className="text-slate-500">Calculate your monthly EMI, total interest, and full repayment schedule instantly.</p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8 text-center max-w-xl mx-auto">
            Understanding your loan repayment schedule is crucial before committing to any financing. This EMI calculator uses the standard amortization formula to give you an accurate breakdown of monthly payments, total interest, and a complete repayment timeline. Enter your loan details below to see exactly how much you will pay each month.
          </p>

          <EMICalculator />

          {/* SEO Content */}
          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">What is EMI?</h2>
              <p className="text-slate-600 leading-relaxed">
                An <strong>Equated Monthly Installment (EMI)</strong> is the fixed monthly payment you make to a lender to repay a loan over a defined period. Every EMI consists of two components: a portion that repays the principal (the original loan amount) and a portion that pays the interest charged by the lender.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                In the early months of a loan, the interest component of each EMI is higher. As the outstanding balance decreases with each payment, the interest component gradually shrinks and more of your EMI goes toward the principal. This structure is called an <strong>amortizing loan</strong>. Understanding this split helps you appreciate why making extra payments early in the loan term can save a significant amount of interest over the life of the loan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">How is EMI Calculated?</h2>
              <p className="text-slate-600 leading-relaxed">
                The EMI formula is: <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)</code>
              </p>
              <ul className="mt-3 space-y-1 text-slate-600 list-disc list-inside">
                <li><strong>P</strong> = Principal loan amount</li>
                <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
                <li><strong>n</strong> = Total number of monthly payments</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                For example, a $100,000 loan at 8% annual interest for 10 years (120 months) gives a monthly rate of 0.667% and an EMI of approximately $1,213. Over the full 120 months, you would pay roughly $45,600 in total interest, bringing the total repayment to about $145,600. This formula uses the reducing balance method, which is the standard used by banks and financial institutions worldwide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Tips to Reduce Your EMI</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span> <span><strong>Larger down payment:</strong> Reducing the principal directly reduces your EMI. Even a modest increase in down payment can lower your monthly obligation noticeably.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span> <span><strong>Negotiate rate:</strong> Even 0.5% less can save thousands over a long loan term. Compare offers from multiple lenders before committing.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span> <span><strong>Prepayments:</strong> Extra payments early in the loan term dramatically cut total interest because they reduce the principal on which future interest is calculated.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span> <span><strong>Shorter tenure:</strong> Higher EMI but much less total interest paid. If your budget allows, a shorter term is almost always the more cost-effective choice.</span></li>
              </ul>
            </section>

            {/* In-article ad */}
            <AdSlot slot="1122334455" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Amortization and Loan Costs</h2>
              <p className="text-slate-600 leading-relaxed">
                An <strong>amortization schedule</strong> is a complete table of loan payments showing the breakdown of each installment into principal and interest, along with the remaining balance after each payment. Reviewing your amortization schedule reveals how much of each payment is building your equity versus paying the lender for the cost of borrowing.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                The total cost of a loan extends well beyond the principal amount. Interest charges, processing fees, and insurance requirements can add substantially to what you ultimately pay. When comparing loan offers, focus on the total repayment amount and the annual percentage rate (APR), which includes fees and gives a more accurate picture of the true cost of borrowing. Use the amortization table generated by this calculator to visualize exactly where each dollar of your payment goes over the life of the loan.
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
