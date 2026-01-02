import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">5</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gradient">555Mix</div>
                <div className="text-xs text-gray-400">မောင်း Calculator</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              တိကျပြီး လွယ်ကူသော 555Mix မောင်း Calculator
              {/* Cloud Sync နှင့် လုံခြုံမှုရှိသော အခမဲ့ Calculator App */}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-accent-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-accent-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-accent-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-accent-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="text-accent-400" />
                <span>support@555mix.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiPhone className="text-accent-400" />
                <span>+95 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 555Mix Maung Calculator. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="https://www.termsfeed.com/live/25f0f38a-09dc-4dcd-a063-bb688ee53487" className="text-gray-400 hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="https://www.termsfeed.com/live/6a84802b-4e99-4392-a532-a127696b3bbd" className="text-gray-400 hover:text-accent-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
