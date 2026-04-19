import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import EMICalculator from '@/components/EMICalculator'
import AdSlot from '@/components/AdSlot'
import LoanNav from '@/components/LoanNav'

export const metadata: Metadata = {
  title: 'Education Loan Calculator — Estimate Student Loan Payments | Free Tool',
  description:
    'Free education loan calculator. Enter your student loan amount, interest rate, and repayment term to instantly calculate monthly payments, total interest, and view a full amortization schedule.',
  openGraph: {
    title: 'Education Loan Calculator — Free Student Loan EMI Tool',
    description: 'Calculate your monthly student loan payment, total interest, and amortization schedule instantly.',
    type: 'website',
    url: 'https://loancalcemi.com/education-loan-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education Loan Calculator — Free Student Loan Estimator',
    description: 'Estimate monthly student loan payments with a full amortization breakdown.',
  },
  alternates: { canonical: 'https://loancalcemi.com/education-loan-calculator' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Education Loan Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free education loan calculator. Calculate monthly student loan payments, total interest, and view a full amortization schedule.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between federal and private student loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Federal student loans are funded by the government and offer fixed interest rates, income-driven repayment plans, and potential loan forgiveness programs. Private student loans come from banks, credit unions, or online lenders and may have variable rates, fewer repayment options, and generally require a credit check or cosigner.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I start repaying my student loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Federal student loans typically have a six-month grace period after you graduate, leave school, or drop below half-time enrollment. Private student loans vary by lender; some require payments while you are still in school, while others offer deferment options until after graduation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is income-driven repayment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Income-driven repayment (IDR) plans are federal programs that cap your monthly student loan payment at a percentage of your discretionary income, typically 10-20%. After making payments for 20-25 years under an IDR plan, any remaining balance may be forgiven. These plans are especially helpful for borrowers whose loan payments are high relative to their income.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can student loans be forgiven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several federal programs offer student loan forgiveness. Public Service Loan Forgiveness (PSLF) forgives the remaining balance after 120 qualifying payments while working for a qualifying public service employer. Teacher Loan Forgiveness provides up to $17,500 for teachers at low-income schools. Income-driven repayment plans also include forgiveness after 20-25 years of payments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I consolidate my student loans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Federal loan consolidation simplifies multiple federal loans into one payment with a weighted average interest rate. This can make repayment easier but does not lower your rate. Private consolidation (refinancing) can potentially lower your rate if your credit has improved, but you lose access to federal benefits like IDR plans and loan forgiveness.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I borrow for education?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common guideline is to borrow no more than your expected first-year salary after graduation. This helps ensure your monthly payments will be manageable. Research typical starting salaries for your intended career and explore scholarships, grants, and work-study programs to minimize borrowing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is student loan interest tax deductible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you may deduct up to $2,500 in student loan interest per year on your federal tax return if your modified adjusted gross income is below certain thresholds. This deduction is available even if you do not itemize deductions, making it accessible to most borrowers. Income limits apply and are adjusted periodically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I default on a student loan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Defaulting on federal student loans occurs after 270 days of missed payments and has severe consequences including damage to your credit score, wage garnishment, tax refund seizure, and loss of eligibility for federal financial aid. Private loan default timelines and consequences vary by lender. If you are struggling to make payments, contact your loan servicer to discuss deferment, forbearance, or alternative repayment options before missing payments.',
      },
    },
  ],
}

export default function EducationLoanCalculatorPage() {
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
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Education Loan Calculator</h1>
            <p className="text-slate-500">Calculate your monthly student loan payment, total interest, and full repayment schedule.</p>
          </div>

          <EMICalculator defaultPrincipal={50000} defaultRate={5.5} defaultTenure={10} mode="education_loan" />

          <article className="mt-16 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Understanding Education Loans</h2>
              <p className="text-slate-600 leading-relaxed">
                An <strong>education loan</strong> (also called a student loan) is designed to help students and their families cover the cost of higher education, including tuition, room and board, textbooks, and related expenses. Education loans are one of the most common forms of financial aid, with millions of borrowers relying on them to access college and graduate programs.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                There are two main categories: <strong>federal student loans</strong>, which are funded by the government and offer standardized terms and protections, and <strong>private student loans</strong>, which come from banks, credit unions, or online lenders with terms that vary by institution. Federal loans should generally be your first choice because they offer fixed rates, flexible repayment options, and access to forgiveness programs that private loans do not provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Federal vs. Private Student Loans</h2>
              <p className="text-slate-600 leading-relaxed">
                Federal student loans come in several types. Direct Subsidized Loans are available to undergraduate students with demonstrated financial need, and the government pays the interest while you are in school. Direct Unsubsidized Loans are available to all students regardless of need, but interest accrues from the date of disbursement. Graduate students and parents can also access PLUS loans for additional funding.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                Private student loans fill the gap when federal aid and scholarships fall short. They typically require a credit check and may need a cosigner for students without established credit. While private loans can sometimes offer competitive rates for borrowers with excellent credit, they lack the safety nets of federal loans, such as income-driven repayment plans, deferment and forbearance options, and loan forgiveness programs. Exhaust all federal options before turning to private loans.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Student Loan Repayment Strategies</h2>
              <p className="text-slate-600 leading-relaxed">
                Choosing the right repayment strategy can save you thousands of dollars and years of payments. The standard repayment plan spreads payments evenly over 10 years, but several alternatives exist for borrowers who need more flexibility or want to pay off loans faster.
              </p>
              <ul className="space-y-2 text-slate-600 mt-3">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">1.</span><span><strong>Avalanche method:</strong> Pay minimum amounts on all loans and put extra money toward the loan with the highest interest rate first. This minimizes total interest paid.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">2.</span><span><strong>Snowball method:</strong> Pay off the smallest balance first for quick psychological wins, then roll that payment into the next smallest balance.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">3.</span><span><strong>Autopay discount:</strong> Most federal and many private servicers offer a 0.25% interest rate reduction when you enroll in automatic payments.</span></li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">4.</span><span><strong>Employer assistance:</strong> Some employers offer student loan repayment benefits. Check whether your company provides this perk, which can accelerate payoff significantly.</span></li>
              </ul>
            </section>

            <AdSlot slot="2696844582" format="article" />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Planning Your Education Financing</h2>
              <p className="text-slate-600 leading-relaxed">
                Smart education financing starts long before you apply for loans. Begin by maximizing free money through scholarships, grants, and work-study programs. Complete the Free Application for Federal Student Aid (FAFSA) every year, as it determines eligibility for federal grants, loans, and many state and institutional aid programs.
              </p>
              <p className="text-slate-600 leading-relaxed mt-3">
                When borrowing becomes necessary, follow the guideline of keeping total student loan debt below your expected first-year salary. Research career outcomes and average starting salaries for your intended field of study to set realistic borrowing limits. Consider the total cost of attendance at different institutions, including in-state versus out-of-state tuition, and remember that community colleges and public universities can offer excellent education at a fraction of the cost of private institutions. Every dollar you avoid borrowing is a dollar plus interest you will not have to repay.
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
