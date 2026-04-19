'use client'

import { useState, useMemo, useEffect } from 'react'
import { calculateEMI, CurrencyCode } from '@/lib/emi-calculator'
import { trackToolUsed } from '@/lib/track'
import CalculatorInputs from './CalculatorInputs'
import CalculatorResults from './CalculatorResults'
import DonutChart from './DonutChart'
import AmortizationTable from './AmortizationTable'
import AdSlot from './AdSlot'

interface EMICalculatorProps {
  defaultPrincipal?: number
  defaultRate?: number
  defaultTenure?: number
  mode?: 'emi' | 'mortgage' | 'car_loan' | 'personal_loan' | 'education_loan'
}

export default function EMICalculator({
  defaultPrincipal = 500000,
  defaultRate = 8.5,
  defaultTenure = 10,
  mode = 'emi',
}: EMICalculatorProps = {}) {
  const [principal, setPrincipal] = useState(defaultPrincipal)
  const [annualRate, setAnnualRate] = useState(defaultRate)
  const [tenureYears, setTenureYears] = useState(defaultTenure)
  const [currency, setCurrency] = useState<CurrencyCode>('USD')

  useEffect(() => {
    trackToolUsed(mode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const result = useMemo(
    () => calculateEMI(principal, annualRate, tenureYears * 12),
    [principal, annualRate, tenureYears]
  )

  return (
    <div className="space-y-4">
      {/* Inputs */}
      <CalculatorInputs
        principal={principal}
        annualRate={annualRate}
        tenureYears={tenureYears}
        currency={currency}
        onPrincipalChange={setPrincipal}
        onRateChange={setAnnualRate}
        onTenureChange={setTenureYears}
        onCurrencyChange={setCurrency}
      />

      {/* Results */}
      <CalculatorResults result={result} currency={currency} />

      {/* Donut chart */}
      <DonutChart result={result} currency={currency} principal={principal} />

      {/* Ad — between chart and amortization table */}
      <AdSlot slot="8990089492" format="horizontal" />

      {/* Amortization table */}
      <AmortizationTable schedule={result.schedule} currency={currency} />

      {/* Ad — below tool, before content */}
      <AdSlot slot="7949171264" format="rectangle" className="mx-auto" />
    </div>
  )
}
