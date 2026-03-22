'use client'

import { useEffect, useRef, useState } from 'react'
import { EMIResult, CurrencyCode, formatCurrency } from '@/lib/emi-calculator'

interface Props {
  result: EMIResult
  currency: CurrencyCode
}

function AnimatedNumber({ value, currency }: { value: number; currency: CurrencyCode }) {
  const [display, setDisplay] = useState(value)
  const prevRef = useRef(value)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const start = prevRef.current
    const end = value
    const duration = 400
    const startTime = performance.now()

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(start + (end - start) * eased))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      else prevRef.current = end
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [value])

  return <>{formatCurrency(display, currency)}</>
}

interface StatCardProps {
  label: string
  value: number
  currency: CurrencyCode
  primary?: boolean
  color?: string
}

function StatCard({ label, value, currency, primary, color }: StatCardProps) {
  return (
    <div className={`rounded-xl p-5 ${primary ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-100 shadow-sm'}`}>
      <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${primary ? 'text-emerald-100' : 'text-slate-400'}`}>
        {label}
      </p>
      <p className={`text-2xl font-bold tabular-nums ${primary ? 'text-white' : color ?? 'text-slate-800'}`}>
        <AnimatedNumber value={value} currency={currency} />
      </p>
    </div>
  )
}

export default function CalculatorResults({ result, currency }: Props) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      aria-live="polite"
      aria-label="Calculation results"
    >
      <StatCard label="Monthly EMI" value={result.emi} currency={currency} primary />
      <StatCard label="Total Interest" value={result.totalInterest} currency={currency} color="text-amber-600" />
      <StatCard label="Total Payment" value={result.totalPayment} currency={currency} />
    </div>
  )
}
