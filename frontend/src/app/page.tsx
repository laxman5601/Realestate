'use client'

import { Suspense } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustHighlights } from '@/components/sections/TrustHighlights'
import { TopPropertyMatches } from '@/components/sections/TopPropertyMatches'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { TopAreasSection } from '@/components/sections/TopAreasSection'
import { CuratedToursSection } from '@/components/sections/CuratedToursSection'
import { FeaturedProperties } from '@/components/sections/FeaturedProperties'

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <HeroSection />
      <TrustHighlights />
      <section className="relative py-20">
        <div className="container">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-900/10">
            <div className="grid gap-8 lg:grid-cols-[1fr,0.7fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">How Buyers Trust HireBuyer</p>
                <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Every match is backed by data, credibility, and expert guidance.</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  From verified builder scores to neighborhood growth forecasts, our platform helps you compare top listings with clarity and confidence.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Create Buyer Profile', 'Get Property Matches', 'Book Property Tours'].map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-600">{item.split(' ')[0]}</p>
                    <p className="mt-4 text-xl font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TopPropertyMatches />

      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Top Property Matches</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Featured properties curated for your portfolio</h2>
              <p className="mt-4 text-slate-600">Browse premium project recommendations that combine builder trust, location quality, and rental potential.</p>
            </div>
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="grid gap-6 lg:grid-cols-3"><div className="h-80 rounded-[2rem] bg-slate-100 animate-pulse" /><div className="h-80 rounded-[2rem] bg-slate-100 animate-pulse" /><div className="h-80 rounded-[2rem] bg-slate-100 animate-pulse" /></div>}>
                <FeaturedProperties />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <InsightsSection />
      <TopAreasSection />
      <CuratedToursSection />
    </main>
  )
}
