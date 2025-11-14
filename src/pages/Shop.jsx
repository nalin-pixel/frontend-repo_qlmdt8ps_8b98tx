import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useMemo, useState } from 'react'

const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: ['Kanjivaram Silk','Banarasi Brocade','Cotton Handloom','Organza Pastel','Pure Silk Classic','Handloom Heritage'][i%6],
  price: [8999, 12999, 2999, 5499, 10999, 4599][i%6],
  vendor: ['Anita Weaves','Varanasi Looms','Kala Cotton Co.','Pastel Studio','SilkRoute','Desi Threads'][i%6],
  image: 'https://images.unsplash.com/photo-1652021050254-66392f4dc418?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYW5qaXZhcmFtfGVufDB8MHx8fDE3NjMxMDYwMDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  type: ['Kanjivaram','Banarasi','Cotton','Organza','Silk','Handloom'][i%6],
  material: ['Silk','Silk','Cotton','Organza','Silk','Cotton'][i%6],
  color: ['Red','Gold','Blue','Pink','Green','Maroon'][i%6],
}))

export default function Shop(){
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')
  const [material, setMaterial] = useState('')

  const filtered = useMemo(() => {
    return sampleProducts.filter(p =>
      (!query || p.title.toLowerCase().includes(query.toLowerCase())) &&
      (!type || p.type === type) &&
      (!material || p.material === material)
    )
  }, [query, type, material])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-end gap-4 mb-6">
            <div className="flex-1 min-w-[220px]">
              <label className="block text-sm text-gray-600 mb-1">Search</label>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search sarees" className="w-full px-3 py-2 rounded-md border" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Type</label>
              <select value={type} onChange={e=>setType(e.target.value)} className="px-3 py-2 rounded-md border min-w-[160px]">
                <option value="">All</option>
                {['Kanjivaram','Banarasi','Cotton','Organza','Silk','Handloom'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Material</label>
              <select value={material} onChange={e=>setMaterial(e.target.value)} className="px-3 py-2 rounded-md border min-w-[160px]">
                <option value="">All</option>
                {['Silk','Cotton','Organza'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => (
              <a key={p.id} href={`/product/${p.id}`} className="group rounded-xl border bg-white p-3 hover:shadow transition-shadow">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform"/>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">Sold By: <span className="text-[#1A237E] font-medium">{p.vendor}</span></p>
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[#1A237E] font-bold">₹{p.price.toLocaleString()}</span>
                    <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700">Price set by vendor</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
