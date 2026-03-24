export default function sitemap() {
  return [
    { url: 'https://loancalcemi.com', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: 'https://loancalcemi.com/mortgage-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://loancalcemi.com/car-loan-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://loancalcemi.com/personal-loan-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://loancalcemi.com/education-loan-calculator', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://loancalcemi.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://loancalcemi.com/terms', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://loancalcemi.com/about', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.4 },
  ]
}
