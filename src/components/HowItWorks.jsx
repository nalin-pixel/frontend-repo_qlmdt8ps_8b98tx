import { PackageCheck, BadgeCheck, Wallet, Search, ShoppingCart, Star } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1A237E] mb-2">For Sellers</h2>
            <p className="text-gray-600 mb-6">Join with ₹500/year. No commissions ever.</p>
            <div className="space-y-4">
              {[
                { icon: BadgeCheck, title: 'Register & Verify', desc: 'Submit business/manufacturing proof for verification.' },
                { icon: Wallet, title: 'Pay Membership', desc: 'Flat ₹500 annual fee. Keep 100% of your profit.' },
                { icon: PackageCheck, title: 'List & Dispatch', desc: 'Upload products, dispatch via courier with photo proof for payouts.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A237E]/10 text-[#1A237E] grid place-items-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1A237E] mb-2">For Buyers</h2>
            <p className="text-gray-600 mb-6">Authentic sarees. Transparent pricing.</p>
            <div className="space-y-4">
              {[
                { icon: Search, title: 'Browse & Discover', desc: 'Explore categories, materials, and styles.' },
                { icon: ShoppingCart, title: 'Shop & Pay Securely', desc: 'Online payments only. No COD for faster payouts to artisans.' },
                { icon: Star, title: 'Review & Rate', desc: 'Share your experience and help the community.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A237E]/10 text-[#1A237E] grid place-items-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
