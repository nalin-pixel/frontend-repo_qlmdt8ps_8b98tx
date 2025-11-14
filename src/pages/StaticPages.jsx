import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export function About(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">About Us</h1>
          <p className="mt-3 text-gray-700">Our mission is to empower independent saree vendors with a zero-commission model and connect buyers directly with authentic craftsmanship.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function FAQs(){
  const faqs = [
    {q:'Do you charge commissions?', a:'No. Only a flat ₹500/year membership for sellers.'},
    {q:'Is COD available?', a:'No. Online payments only to ensure fast and secure payouts to artisans.'},
    {q:'Who handles returns/exchanges?', a:'Vendors manage exchanges based on their store policy. Details on each product and vendor page.'},
  ]
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">FAQs</h1>
          <div className="mt-6 space-y-4">
            {faqs.map((f,i)=> (
              <details key={i} className="rounded-lg border p-4">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function Contact(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">Contact Us</h1>
          <form className="mt-6 grid gap-4 max-w-lg">
            <input placeholder="Your name" className="px-3 py-2 rounded-md border"/>
            <input placeholder="Email" className="px-3 py-2 rounded-md border"/>
            <textarea placeholder="Message" rows={5} className="px-3 py-2 rounded-md border"/>
            <button className="px-5 py-3 rounded-md bg-[#1A237E] text-white font-semibold">Send</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function Terms(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">Terms of Service</h1>
          <p className="mt-3 text-gray-700">Standard terms placeholder for your legal counsel to review.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function Privacy(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">Privacy Policy</h1>
          <p className="mt-3 text-gray-700">We value your privacy. Add your full policy content here.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function Disputes(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">Dispute Resolution</h1>
          <p className="mt-3 text-gray-700">Customer satisfaction guaranteed: Vendors are responsible for arranging exchanges for damaged or wrong items and must initiate pickup/exchange within one calendar day.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
