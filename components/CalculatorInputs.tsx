'use client'

import { useState, useEffect } from 'react'
import { CurrencyCode, CURRENCIES } from '@/lib/emi-calculator'

// Free-text number input — no spin buttons, formats with commas on blur
function NumberInput({
  value, min, max, step, unit, label, onChange,
}: {
  value: number; min: number; max: number; step: number
  unit: string; label: string; onChange: (v: number) => void
}) {
  const [raw, setRaw] = useState(value.toLocaleString('en-US'))
  const [focused, setFocused] = useState(false)

  // Sync when slider changes externally
  useEffect(() => {
    if (!focused) setRaw(value.toLocaleString('en-US'))
  }, [value, focused])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Allow digits, dots, commas
    const input = e.target.value.replace(/[^0-9.,]/g, '')
    setRaw(input)
  }

  function handleBlur() {
    setFocused(false)
    // Strip commas, parse
    const parsed = parseFloat(raw.replace(/,/g, ''))
    if (!isNaN(parsed)) {
      const clamped = Math.min(max, Math.max(min, parsed))
      onChange(clamped)
      setRaw(clamped.toLocaleString('en-US'))
    } else {
      setRaw(value.toLocaleString('en-US'))
    }
  }

  function handleFocus() {
    setFocused(true)
    // Show raw number without commas for easy editing
    setRaw(value.toString())
  }

  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        inputMode="decimal"
        value={raw}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={label}
        className="w-32 text-right text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-400 focus:bg-white transition-colors"
      />
      {unit && <span className="text-sm text-slate-400 shrink-0">{unit}</span>}
    </div>
  )
}

function SliderRow({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number
  unit: string; onChange: (v: number) => void
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-3">
        <label className="text-sm font-medium text-slate-600 shrink-0">{label}</label>
        <NumberInput value={value} min={min} max={max} step={step} unit={unit} label={label} onChange={onChange} />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className="w-full accent-emerald-500 cursor-pointer h-2"
      />
      <div className="flex justify-between text-xs text-slate-400">
        <span>{min.toLocaleString('en-US')}{unit}</span>
        <span>{max.toLocaleString('en-US')}{unit}</span>
      </div>
    </div>
  )
}

interface Props {
  principal: number
  annualRate: number
  tenureYears: number
  currency: CurrencyCode
  onPrincipalChange: (v: number) => void
  onRateChange: (v: number) => void
  onTenureChange: (v: number) => void
  onCurrencyChange: (v: CurrencyCode) => void
}

export default function CalculatorInputs({
  principal, annualRate, tenureYears, currency,
  onPrincipalChange, onRateChange, onTenureChange, onCurrencyChange,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">Currency</span>
        <select
          value={currency}
          onChange={e => onCurrencyChange(e.target.value as CurrencyCode)}
          aria-label="Select currency"
          className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-400 text-slate-700"
        >
          {CURRENCIES.map(c => (
            <option key={c.code} value={c.code}>{c.symbol} {c.name}</option>
          ))}
        </select>
      </div>

      <SliderRow label="Loan Amount"          value={principal}    min={10000}  max={10000000} step={10000} unit=""    onChange={onPrincipalChange} />
      <SliderRow label="Annual Interest Rate" value={annualRate}   min={0.1}    max={30}       step={0.1}   unit="%"   onChange={onRateChange} />
      <SliderRow label="Loan Tenure"          value={tenureYears}  min={1}      max={30}       step={1}     unit=" yrs" onChange={onTenureChange} />
    </div>
  )
}
