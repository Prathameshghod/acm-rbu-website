import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Testimonials from '@/components/Testimonials'
import Events from '@/components/Events'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Home />
      <Testimonials />
      <Events />
      <Team />
      <Footer />
    </main>
  )
}

