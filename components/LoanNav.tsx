'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LOAN_TYPES = [
  { href: '/',                          label: 'EMI Calculator' },
  { href: '/mortgage-calculator',       label: 'Mortgage' },
  { href: '/car-loan-calculator',       label: 'Car Loan' },
  { href: '/personal-loan-calculator',  label: 'Personal Loan' },
  { href: '/education-loan-calculator', label: 'Education Loan' },
]

export default function LoanNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-1.5 mb-6" aria-label="Loan calculators">
      {LOAN_TYPES.map(tool => {
        const isActive = pathname === tool.href
        return (
          <Link
            key={tool.href}
            href={tool.href}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-800'
            }`}
          >
            {tool.label}
          </Link>
        )
      })}
    </nav>
  )
}
