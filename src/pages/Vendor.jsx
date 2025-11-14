import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Vendor(){
  const vendor = {
    name: 'Anita Weaves',
    slug: 'anita-weaves',
    about: 'Handcrafted sarees from generations of weavers. We specialize in Kanjivaram and silk blends.',
    logo: 'https://api.dicebear.com/8.x/initials/svg?seed=Anita%20Weaves&backgroundType=gradientLinear&fontFamily=Georgia',
    policy: 'Exchange within 7 days for unused items with tags. No refunds.',
    rating: 4.7
  }

  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: ['Kanjivaram Silk','Banarasi Brocade','Cotton Handloom','Organza Pastel'][i%4],
    price: [12999, 9999, 2999, 5499][i%4],
    image: 'https://images.unsplash.com/photo-1652021050254-66392f4dc418?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYW5qaXZhcmFtfGVufDB8MHx8fDE3NjMxMDYwMDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  }))

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#F8F8F8]">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex items-center gap-6">
              <img src={vendor.logo} alt={vendor.name} className="w-16 h-16 rounded-full border" />
              <div>
                <h1 className="text-2xl font-serif font-bold text-[#1A237E]">{vendor.name}</h1>
                <p className="text-sm text-gray-600">Rating: <span className="text-yellow-600 font-medium">{vendor.rating} / 5</span></p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 max-w-3xl">{vendor.about}</p>
            <div className="mt-3 text-sm text-gray-600"><span className="font-semibold">Exchange Policy:</span> {vendor.policy}</div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-xl font-serif font-bold text-[#1A237E] mb-4">Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <a key={p.id} href={`/product/${p.id}`} className="group rounded-xl border bg-white p-3 hover:shadow">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform"/>
                </div>
                <div className="mt-3">
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
