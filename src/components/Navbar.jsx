import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, Store, Info, HelpCircle, User } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-[#FFD700]' : 'text-white/90 hover:text-white'
        }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-50 bg-[#1A237E]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFD700] to-amber-400 grid place-items-center">
                <ShoppingBag className="w-5 h-5 text-[#1A237E]" />
              </div>
              <span className="text-white font-semibold text-lg">The Saree Sanctuary</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/shop', 'Shop')}
            {navItem('/vendors', 'Vendors')}
            {navItem('/how-it-works', 'How It Works')}
            {navItem('/vendor-onboarding', 'Sell with Us')}
            {navItem('/about', 'About')}
            {navItem('/faqs', 'FAQs')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/vendor-onboarding" className="px-4 py-2 rounded-md text-sm font-semibold bg-[#FFD700] text-[#1A237E] hover:bg-yellow-400 transition-colors">
              Become a Seller
            </Link>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A237E] border-t border-white/10">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link to="/shop" className="text-white/90" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link to="/vendors" className="text-white/90" onClick={() => setOpen(false)}>
              Vendors
            </Link>
            <Link to="/how-it-works" className="text-white/90" onClick={() => setOpen(false)}>
              How It Works
            </Link>
            <Link to="/vendor-onboarding" className="text-white/90" onClick={() => setOpen(false)}>
              Sell with Us
            </Link>
            <Link to="/about" className="text-white/90" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/faqs" className="text-white/90" onClick={() => setOpen(false)}>
              FAQs
            </Link>
            <Link to="/vendor-onboarding" className="mt-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#FFD700] text-[#1A237E]">
              Become a Seller
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
