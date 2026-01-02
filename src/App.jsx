import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </div>
  )
}

export default App
