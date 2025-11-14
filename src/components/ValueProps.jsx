import { ShieldCheck, IndianRupee, Truck, BadgeCheck } from 'lucide-react'

const items = [
  {
    icon: IndianRupee,
    title: 'Your Price, Your Profit',
    desc: '₹500/year membership. 0% commission. You keep 100% of your earnings.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency & Trust',
    desc: 'Verified sellers, secure payments, and clear order tracking.',
  },
  {
    icon: Truck,
    title: 'Professional Dispatch',
    desc: 'Couriers only. Funds released on photo proof of dispatch.',
  },
  {
    icon: BadgeCheck,
    title: 'Authentic Sarees',
    desc: 'Shop directly from weavers and boutiques across India.',
  },
]

export default function ValueProps() {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-[#1A237E]/10 text-[#1A237E] grid place-items-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
