import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import FeaturedCategories from '../components/FeaturedCategories'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <FeaturedCategories />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
