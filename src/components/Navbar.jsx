import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'အင်္ဂါရပ်များ', href: '#features' },
    { name: 'အသုံးပြုနည်း', href: '#how-it-works' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-22 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/18">
              <img
                src="src/images/screenshots/maung.png"
                alt="App logo"
                className="w-16 h-14 rounded-full object-cover"
              />
            </div>


            <div>
              <div className="text-xl font-bold text-gradient">555Mix</div>
              <div className="text-xs text-gray-400">မောင်း Calculator</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/50 transition-all duration-300"
            >
              <FiDownload className="text-lg" />
              <span>Download</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-accent-400 hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-6 py-3 rounded-full font-semibold mt-4"
            >
              <FiDownload />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
