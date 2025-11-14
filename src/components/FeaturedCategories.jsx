import { Link } from 'react-router-dom'

const categories = [
  { name: 'Kanjivaram', image: 'https://images.unsplash.com/photo-1652021050254-66392f4dc418?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYW5qaXZhcmFtfGVufDB8MHx8fDE3NjMxMDYwMDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Banarasi', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Cotton', image: 'https://images.unsplash.com/photo-1543946602-a0fce8117697?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Silk', image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Organza', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Handloom', image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedCategories() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-[#1A237E]">Featured Categories</h2>
          <Link to="/shop" className="text-[#1A237E] hover:underline">Explore All</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={`/shop?category=${encodeURIComponent(cat.name)}`} className="group relative rounded-xl overflow-hidden">
              <img src={cat.image} alt={cat.name} className="h-44 w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="px-2 py-1 rounded bg-white/90 text-[#1A237E] text-xs font-semibold">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
