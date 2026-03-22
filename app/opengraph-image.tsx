import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'EMI Calculator — Free Loan Calculator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, color: '#10b981', marginBottom: 8, display: 'flex' }}>💰</div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', marginBottom: 12, display: 'flex' }}>
          EMI Calculator
        </div>
        <div style={{ fontSize: 24, color: '#94a3b8', maxWidth: 700, textAlign: 'center', display: 'flex' }}>
          Calculate your monthly loan EMI, total interest, and see the full amortization schedule — instantly and free.
        </div>
        <div
          style={{
            marginTop: 32,
            padding: '12px 32px',
            background: '#10b981',
            borderRadius: 12,
            fontSize: 20,
            fontWeight: 700,
            color: '#ffffff',
            display: 'flex',
          }}
        >
          loancalcemi.com
        </div>
      </div>
    ),
    { ...size }
  )
}
