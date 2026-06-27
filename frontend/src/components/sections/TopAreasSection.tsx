'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const areas = [
  {
    title: 'Financial District',
    subtitle: 'High-growth towers and premium office connectivity',
    price: '₹8,500 / sqft',
    score: '9 / 10',
  },
  {
    title: 'Gachibowli',
    subtitle: 'Leading IT hub with strong rental demand',
    price: '₹7,900 / sqft',
    score: '8.6 / 10',
  },
  {
    title: 'Kokapet',
    subtitle: 'Emerging residential district with development upside',
    price: '₹8,200 / sqft',
    score: '8.8 / 10',
  },
]

export function TopAreasSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-600">Explore Top Investment Areas</p>
            <h2 className="h2 mt-4 text-slate-900">Neighborhoods with strong growth and yield potential</h2>
          </div>
          <Link href="/search" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
            Discover more locations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-4 rounded-3xl bg-slate-950/5 p-4 text-slate-900">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Top Area</p>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{area.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{area.subtitle}</p>
              <div className="grid gap-3 text-sm text-slate-700">
                <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                  <span>Average rate</span>
                  <strong>{area.price}</strong>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                  <span>Growth score</span>
                  <strong>{area.score}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
