'use client'

import { ShieldCheck, Star, Sparkles } from 'lucide-react'

const trustHighlights = [
  {
    icon: ShieldCheck,
    title: 'Verified Property Data',
    subtitle: 'Every listing is checked for accuracy and builder credibility.',
  },
  {
    icon: Star,
    title: 'Builder Credibility Ratings',
    subtitle: 'Trusted scores help buyers compare developers at a glance.',
  },
  {
    icon: Sparkles,
    title: 'Smart Property Matching',
    subtitle: 'Find your best options with personalized match recommendations.',
  },
]

export function TrustHighlights() {
  return (
    <section className="bg-slate-950 text-slate-50 py-16">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-3">
          {trustHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
