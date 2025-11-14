import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1558]">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFD700]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
            Zero-Commission Marketplace
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            The Future of Saree Commerce
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Empowering artisans and boutiques to sell directly. Keep 100% of your profit with a simple ₹500/year membership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/vendor-onboarding" className="px-6 py-3 rounded-md font-semibold bg-[#FFD700] text-[#1A237E] hover:bg-yellow-400">
              Sell Your Sarees
            </Link>
            <Link to="/shop" className="px-6 py-3 rounded-md font-semibold bg-white/10 text-white hover:bg-white/20">
              Shop Authentic Sarees
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 grid grid-cols-3 gap-3"
        >
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className={`relative aspect-[3/4] rounded-xl overflow-hidden ${i%2===0?'mt-6':''}`}>
              <img
                src={`https://images.unsplash.com/photo-1559628233-9fd6e92f4d14?q=80&w=900&auto=format&fit=crop`}
                alt="Saree showcase"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
