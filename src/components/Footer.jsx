import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-[#0f1558] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3">The Saree Sanctuary</h3>
          <p className="text-white/70 text-sm">Empowering artisans, enriching wardrobes. Zero-commission marketplace for authentic sarees.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/vendors" className="hover:underline">Vendors</Link></li>
            <li><Link to="/how-it-works" className="hover:underline">How It Works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/terms" className="hover:underline">Terms</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            <li><Link to="/disputes" className="hover:underline">Dispute Resolution</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-white/70">
          <p>© {new Date().getFullYear()} The Saree Sanctuary. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/vendor-onboarding" className="px-3 py-2 rounded-md bg-[#FFD700] text-[#1A237E] font-semibold text-xs">Become a Seller</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
