'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Download } from 'lucide-react'
import { AmortizationRow, CurrencyCode, formatCurrency, exportToCSV } from '@/lib/emi-calculator'

interface Props {
  schedule: AmortizationRow[]
  currency: CurrencyCode
}

export default function AmortizationTable({ schedule, currency }: Props) {
  const [open, setOpen] = useState(false)

  function handleDownload() {
    const csv = exportToCSV(schedule, currency)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'amortization-schedule.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
        >
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Amortization Schedule
          <span className="text-xs font-normal text-slate-400">({schedule.length} months)</span>
        </button>

        {open && (
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <Download size={13} /> Export CSV
          </button>
        )}
      </div>

      {open && (
        <div className="overflow-x-auto max-h-80 overflow-y-auto border-t border-slate-100">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                {['Month', 'EMI', 'Principal', 'Interest', 'Balance'].map(h => (
                  <th key={h} scope="col" className="px-4 py-2.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr key={row.month} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{row.month}</td>
                  <td className="px-4 py-2.5 text-slate-800 font-medium tabular-nums">{formatCurrency(row.emi, currency)}</td>
                  <td className="px-4 py-2.5 text-emerald-600 tabular-nums">{formatCurrency(row.principal, currency)}</td>
                  <td className="px-4 py-2.5 text-amber-600 tabular-nums">{formatCurrency(row.interest, currency)}</td>
                  <td className="px-4 py-2.5 text-slate-700 tabular-nums">{formatCurrency(row.balance, currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
