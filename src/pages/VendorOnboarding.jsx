import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2, ShieldCheck, FileCheck2 } from 'lucide-react'

export default function VendorOnboarding(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[#0f1558] to-[#1A237E] text-white">
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">Empower Your Business: Sell on The Saree Sanctuary</h1>
            <p className="mt-4 text-white/80">Join a community that puts your profit first. Just ₹500/year, 0% commission.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <ShieldCheck className="w-4 h-4"/> Verified Sellers • Full Transparency • Direct Payouts
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:'Your Pricing Freedom',d:'Set 100% custom pricing. No platform interference.'},{t:'Dedicated Seller Panel',d:'Manage orders, listings, and customer messages.'},{t:'Transparent Transactions',d:'Full visibility into sales and payouts.'}].map((c)=> (
              <div key={c.t} className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900">{c.t}</h3>
                <p className="text-sm text-gray-600 mt-2">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-300 bg-amber-50 p-6">
            <h3 className="font-semibold text-amber-900">Zero-Risk Guarantee</h3>
            <p className="text-sm text-amber-800 mt-1">Full refund of ₹500 if you receive 0 orders in your first month after listing products.</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-serif font-bold text-[#1A237E] mb-4">Verification Process (3 Steps)</h3>
            <ol className="space-y-3">
              {["Register your account","Upload government-issued proof of business/manufacturing","Approval & start listing"].map((s, i)=> (
                <li key={s} className="flex items-center gap-3"><CheckCircle2 className="text-green-600"/> <span className="text-gray-700">{i+1}. {s}</span></li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#FFD700] text-[#1A237E] font-semibold">Register Now <FileCheck2 className="w-4 h-4"/></a>
            <p className="text-xs text-gray-500 mt-2">Annual Membership: ₹500 • No hidden fees • No commissions</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
