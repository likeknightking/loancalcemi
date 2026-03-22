'use client'

import dynamic from 'next/dynamic'
import { EMIResult, CurrencyCode, formatCurrency } from '@/lib/emi-calculator'

interface Props {
  result: EMIResult
  currency: CurrencyCode
  principal: number
}

function DonutChartInner({ result, currency, principal }: Props) {
  const { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } = require('recharts')

  const data = [
    { name: 'Principal', value: principal, color: '#10B981' },
    { name: 'Interest', value: result.totalInterest, color: '#F59E0B' },
  ]

  const principalPct = Math.round((principal / result.totalPayment) * 100)
  const interestPct = 100 - principalPct

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-sm font-semibold text-slate-600 mb-4">Principal vs Interest</h3>
      <div className="flex items-center gap-6">
        <div className="w-[140px] h-[140px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry: { color: string }, index: number) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatCurrency(Number(value), currency)}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Principal</p>
              <p className="text-sm font-bold text-slate-800">{formatCurrency(principal, currency)}</p>
              <p className="text-xs text-emerald-600">{principalPct}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400">Total Interest</p>
              <p className="text-sm font-bold text-slate-800">{formatCurrency(result.totalInterest, currency)}</p>
              <p className="text-xs text-amber-600">{interestPct}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(DonutChartInner), { ssr: false })
