export interface AmortizationRow {
  month: number
  emi: number
  principal: number
  interest: number
  balance: number
}

export interface EMIResult {
  emi: number
  totalPayment: number
  totalInterest: number
  schedule: AmortizationRow[]
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): EMIResult {
  // Edge case: 0% interest
  if (annualRate === 0) {
    const emi = principal / tenureMonths
    const schedule: AmortizationRow[] = []
    let balance = principal
    for (let month = 1; month <= tenureMonths; month++) {
      balance -= emi
      schedule.push({
        month,
        emi,
        principal: emi,
        interest: 0,
        balance: Math.max(0, balance),
      })
    }
    return { emi, totalPayment: principal, totalInterest: 0, schedule }
  }

  const monthlyRate = annualRate / 100 / 12
  const factor = Math.pow(1 + monthlyRate, tenureMonths)
  const emi = (principal * monthlyRate * factor) / (factor - 1)

  let balance = principal
  const schedule: AmortizationRow[] = []

  for (let month = 1; month <= tenureMonths; month++) {
    const interest = balance * monthlyRate
    const principalPaid = emi - interest
    balance = Math.max(0, balance - principalPaid)
    schedule.push({
      month,
      emi: Math.round(emi * 100) / 100,
      principal: Math.round(principalPaid * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    })
  }

  return {
    emi: Math.round(emi * 100) / 100,
    totalPayment: Math.round(emi * tenureMonths * 100) / 100,
    totalInterest: Math.round((emi * tenureMonths - principal) * 100) / 100,
    schedule,
  }
}

export const CURRENCIES = [
  { code: 'USD', symbol: '$',  name: 'US Dollar'        },
  { code: 'INR', symbol: '₹',  name: 'Indian Rupee'     },
  { code: 'EUR', symbol: '€',  name: 'Euro'             },
  { code: 'GBP', symbol: '£',  name: 'British Pound'    },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real'   },
  { code: 'CAD', symbol: 'CA$',name: 'Canadian Dollar'  },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar'},
] as const

export type CurrencyCode = typeof CURRENCIES[number]['code']

export function formatCurrency(value: number, currency: CurrencyCode = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

export function exportToCSV(schedule: AmortizationRow[], currency: CurrencyCode): string {
  const header = 'Month,EMI,Principal,Interest,Balance'
  const rows = schedule.map(r =>
    `${r.month},${r.emi},${r.principal},${r.interest},${r.balance}`
  )
  return [header, ...rows].join('\n')
}
