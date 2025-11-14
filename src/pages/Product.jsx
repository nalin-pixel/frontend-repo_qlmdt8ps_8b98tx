import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Product(){
  const p = {
    title: 'Kanjivaram Silk Saree',
    price: 12999,
    vendor: 'Anita Weaves',
    images: [
      'https://images.unsplash.com/photo-1540755282455-b2748d71d5eb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543946602-a0fce8117697?q=80&w=1200&auto=format&fit=crop',
    ],
    desc: 'Handwoven Kanjivaram silk saree with traditional motifs. Dimensions 6.3m with blouse. Dry clean only.',
    specs: {
      fabric: 'Silk',
      weave: 'Kanjivaram',
      dimensions: '6.3m',
      care: 'Dry clean only'
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-3 gap-3">
              {p.images.map((src, i)=> (
                <div key={i} className={`relative aspect-[3/4] rounded-xl overflow-hidden ${i%2===0?'col-span-2':''}`}>
                  <img src={src} alt={p.title} className="h-full w-full object-cover"/>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#1A237E]">{p.title}</h1>
              <p className="mt-2 text-gray-600">Sold By: <a href="/vendor/anita-weaves" className="text-[#1A237E] font-semibold underline">{p.vendor}</a></p>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-3xl font-bold text-[#1A237E]">₹{p.price.toLocaleString()}</span>
                <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700">Price set by vendor</span>
              </div>
              <p className="mt-4 text-gray-700">{p.desc}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border p-3"><span className="font-semibold">Fabric:</span> {p.specs.fabric}</div>
                <div className="rounded-lg border p-3"><span className="font-semibold">Weave:</span> {p.specs.weave}</div>
                <div className="rounded-lg border p-3"><span className="font-semibold">Dimensions:</span> {p.specs.dimensions}</div>
                <div className="rounded-lg border p-3"><span className="font-semibold">Care:</span> {p.specs.care}</div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-5 py-3 rounded-md bg-[#1A237E] text-white font-semibold">Add to Cart</button>
                <button className="px-5 py-3 rounded-md bg-[#FFD700] text-[#1A237E] font-semibold">Buy Now</button>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p>Shipping: Professional courier charges apply (calculated at checkout).</p>
                <p className="mt-1 font-medium text-red-700">No Cash on Delivery (COD).</p>
                <p className="mt-1">Returns & Exchanges: Covered by the seller's exchange policy. See store for details.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-serif font-bold text-[#1A237E]">Customer Reviews</h2>
            <div className="mt-4 space-y-4">
              {[{name:'Riya', rating:5, comment:'Stunning weave and color!'},{name:'Maya', rating:4, comment:'Great quality, arrived quickly.'}].map((r,i)=> (
                <div key={i} className="rounded-xl border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-800">{r.name}</p>
                    <p className="text-sm text-yellow-600">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</p>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
