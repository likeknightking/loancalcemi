import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — LoanCalcEMI.com',
  description: 'Learn about LoanCalcEMI.com, a free EMI calculator built by developers to help borrowers understand their loan repayment obligations.',
  alternates: { canonical: 'https://loancalcemi.com/about' },
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-lg font-bold text-slate-800 hover:text-slate-600">💰 EMI Calculator</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">About LoanCalcEMI.com</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What We Do</h2>
            <p>LoanCalcEMI.com is a free online EMI calculator designed to help borrowers quickly understand their monthly repayment obligations. Whether you are planning a mortgage, car loan, personal loan, or education loan, our tool gives you an instant breakdown of monthly payments, total interest costs, and a detailed amortization schedule.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Why We Built This</h2>
            <p>We built LoanCalcEMI.com because understanding the true cost of a loan should not require signing up for a financial service or downloading an app. Too many calculators online are gated behind lead-capture forms or cluttered with confusing upsells. Our goal is to provide a clean, fast, and accurate EMI calculator that anyone can use immediately, with no barriers.</p>
            <p className="mt-3">Built by developers for borrowers, homebuyers, and anyone comparing loan options, this tool focuses on transparency and simplicity. Every calculation runs client-side in your browser, so your financial data never touches a server.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Our Technology</h2>
            <p>LoanCalcEMI.com is built with modern web technologies including Next.js, React, and Tailwind CSS. The EMI calculations use the standard reducing-balance amortization formula used by banks and financial institutions worldwide. Charts are rendered with Recharts for clear data visualization. The entire application is statically optimized for fast page loads.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Our Other Free Tools</h2>
            <p>LoanCalcEMI.com is part of a suite of free online tools built with the same philosophy of simplicity, privacy, and speed:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><a href="https://calcinterest.com" className="text-blue-600 hover:underline">CalcInterest.com</a> — Compound interest calculator with growth charts and inflation adjustment</li>
              <li><a href="https://passwordmake.com" className="text-blue-600 hover:underline">PasswordMake.com</a> — Secure password and passphrase generator using the Web Crypto API</li>
              <li><a href="https://formatmyjson.com" className="text-blue-600 hover:underline">FormatMyJSON.com</a> — JSON formatter, validator, and converter powered by Monaco Editor</li>
              <li><a href="https://freeinvoicegen.app" className="text-blue-600 hover:underline">FreeInvoiceGen.app</a> — Professional invoice and receipt generator with PDF export</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Contact</h2>
            <p>Have feedback, suggestions, or questions? Reach us at <strong>contact@loancalcemi.com</strong>.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
