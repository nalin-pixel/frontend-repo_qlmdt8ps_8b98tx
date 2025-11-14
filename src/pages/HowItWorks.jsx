import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowItWorksPage(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-serif font-bold text-[#1A237E]">How It Works</h1>
          <p className="mt-2 text-gray-600">A transparent marketplace for sellers and buyers.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">For Sellers</h2>
              <ol className="mt-3 list-decimal ml-5 space-y-2 text-gray-700">
                <li>Register & verify with business/manufacturing proof</li>
                <li>Pay ₹500 annual membership</li>
                <li>List products with high-quality photos</li>
                <li>Receive orders in your panel</li>
                <li>Dispatch within 48 hours with photo proof</li>
                <li>Get paid on dispatch confirmation</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">For Buyers</h2>
              <ol className="mt-3 list-decimal ml-5 space-y-2 text-gray-700">
                <li>Browse authentic sarees by category and filters</li>
                <li>Pay online securely (no COD)</li>
                <li>Track dispatch and delivery</li>
                <li>Enjoy your saree</li>
                <li>Review product and vendor</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
