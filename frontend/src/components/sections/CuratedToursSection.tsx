'use client'

import Link from 'next/link'

export function CuratedToursSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-700 via-slate-900 to-slate-950 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.4fr,0.6fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Curated Property Tours</p>
          <h2 className="h2 mt-4 max-w-3xl">
            Visit multiple projects in one day with expert insights and guided tours.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200">
            Our curated tours combine the best investment-ready locations, builder reviews, and live market intelligence so you can compare properties faster.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur">
          <div className="rounded-3xl bg-slate-950 px-5 py-4 text-slate-100 shadow-inner shadow-slate-800/30">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Upcoming Tour</p>
            <p className="mt-3 text-2xl font-semibold">Financial District Tour</p>
            <p className="text-sm text-slate-400">Saturday · 10 AM</p>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-sm text-slate-300">
              Reserve a seat for this guided tour and receive expert property matching, builder insights, and priority access to new releases.
            </p>
            <Link href="/search" className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Reserve My Seat
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
