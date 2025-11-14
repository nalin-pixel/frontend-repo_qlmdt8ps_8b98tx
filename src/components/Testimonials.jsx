export default function Testimonials(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-serif font-bold text-[#1A237E] mb-6">Why Sellers & Buyers Love Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name:'Anita, Weaver', quote:'I finally control my pricing. The flat fee is a blessing.'},
            {name:'Riya, Buyer', quote:'Beautiful, authentic sarees directly from artisans.'},
            {name:'Kavya, Boutique', quote:'No commissions means higher margins and happier customers.'},
          ].map((t)=> (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-[#1A237E]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
