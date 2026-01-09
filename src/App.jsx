import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Download from './components/Download'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import StickyContactBar from './components/StickyContactBar'

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
      {/* <Contact /> */}
      <Download />
      <Footer />

      {/* Choose ONE of these contact components */}
      {/* Option 1: Floating bubble button (recommended) */}
      {/* <FloatingContact /> */}

      {/* Option 2: Sticky contact bar (uncomment to use instead) */}
      <StickyContactBar />
    </div>
  )
}

export default App