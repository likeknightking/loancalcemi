import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

const otherMeta: Record<string, string> = {
  'google-adsense-account': 'ca-pub-7584346505499429',
}
if (process.env.NEXT_PUBLIC_SC_VERIFICATION) otherMeta['google-site-verification'] = process.env.NEXT_PUBLIC_SC_VERIFICATION
if (process.env.NEXT_PUBLIC_BING_VERIFICATION) otherMeta['msvalidate.01'] = process.env.NEXT_PUBLIC_BING_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL('https://loancalcemi.com'),
  title: 'EMI Calculator — Calculate Loan EMI Instantly | Free Tool',
  description:
    'Free EMI calculator. Enter loan amount, interest rate, and tenure to instantly calculate monthly EMI, total interest, and see a full amortization schedule. No sign-up required.',
  openGraph: {
    title: 'EMI Calculator — Fast & Free',
    description: 'Calculate your monthly loan EMI instantly. No registration required.',
    type: 'website',
    url: 'https://loancalcemi.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMI Calculator — Free Loan Calculator',
    description: 'Calculate EMI, total interest, and get a full amortization schedule.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://loancalcemi.com' },
  other: otherMeta,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased min-h-screen`}>
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
