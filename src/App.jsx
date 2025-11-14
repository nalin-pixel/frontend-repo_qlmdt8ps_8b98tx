import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VendorOnboarding from './pages/VendorOnboarding'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Vendor from './pages/Vendor'
import HowItWorksPage from './pages/HowItWorks'
import { About, FAQs, Contact, Terms, Privacy, Disputes } from './pages/StaticPages'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/vendor/:slug" element={<Vendor />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
      <Route path="/about" element={<About />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/disputes" element={<Disputes />} />
    </Routes>
  )
}
