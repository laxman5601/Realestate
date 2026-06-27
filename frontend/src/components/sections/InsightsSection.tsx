'use client'

import { BarChart2, TrendingUp, Compass } from 'lucide-react'

const insights = [
  {
    icon: BarChart2,
    title: 'Builder Credibility',
    value: '8.4 / 10',
    subtitle: 'Trust scores based on delivery history and buyer reviews.',
  },
  {
    icon: TrendUp,
    title: 'Area Growth Score',
    value: '9 / 10',
    subtitle: 'Evaluate neighborhoods with data-driven development forecasts.',
  },
  {
    icon: Compass,
    title: 'Investment Potential',
    value: '4.6% Rental Yield',
    subtitle: 'Compare high-value areas with strong rental demand.',
  },
]

export function InsightsSection() {
  return (
    <section className="bg-slate-950 text-slate-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Property Insights That Matter</p>
          <h2 className="h2 mt-4 text-white">Compare neighborhoods with investor-grade metrics</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {insights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-4xl font-bold text-white mb-4">{item.value}</p>
                <p className="text-slate-300 leading-relaxed">{item.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
