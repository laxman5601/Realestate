'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container grid gap-8 py-16 lg:grid-cols-3">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">HireBuyer</p>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Connect with verified builders, explore investment-ready neighborhoods, and book property tours with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/search" className="hover:text-white">Find Properties</Link></li>
              <li><Link href="/about" className="hover:text-white">How it Works</Link></li>
              <li><Link href="/insights" className="hover:text-white">Market Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Follow Us</h3>
          <div className="flex items-center gap-3 text-slate-400">
            <Link href="https://www.facebook.com" aria-label="Facebook" className="rounded-full border border-slate-700 p-2 hover:bg-white/10 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" className="rounded-full border border-slate-700 p-2 hover:bg-white/10 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="rounded-full border border-slate-700 p-2 hover:bg-white/10 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" className="rounded-full border border-slate-700 p-2 hover:bg-white/10 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} HireBuyer. Built for buyers and investors.</p>
        </div>
      </div>
    </footer>
  )
}
