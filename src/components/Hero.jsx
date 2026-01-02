import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiPlay, FiCheck } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const Hero = () => {
  const features = [
    '100% အခမဲ့',
    'Cloud Sync',
    'လုံခြုံမှုရှိ',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-700/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full px-4 py-2 mb-6"
            >
              <HiSparkles className="text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                အသုံးပြုသူ 1000+ ယုံကြည်စွာ အသုံးပြုနေပါသည်
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">တိကျပြီး</span>{' '}
              <span className="text-gradient">လွယ်ကူသော</span>
              <br />
              <span className="text-white">မောင်း Calculator</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              555Mix အတွက် အထူးပြုလုပ်ထားသော မောင်း Calculator။
              Cloud Sync, Offline Support နှင့် လုံခြုံမှုရှိသော အခမဲ့ Calculator App
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <FiCheck className="text-accent-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-accent-500/50 transition-all duration-300"
              >
                <FiDownload className="text-xl group-hover:animate-bounce" />
                <span>အခမဲ့ ဒေါင်းလုဒ် လုပ်ရန်</span>
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <FiPlay className="text-xl" />
                <span>Demo ကြည့်ရန်</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-400">1000+</div>
                <div className="text-sm text-gray-400 mt-1">အသုံးပြုသူ</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-400">5.0</div>
                <div className="text-sm text-gray-400 mt-1">Rating</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-400">100%</div>
                <div className="text-sm text-gray-400 mt-1">အခမဲ့</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-full max-w-sm">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -right-8 glass-effect rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-accent-400 text-3xl">☁️</div>
                  <div className="text-xs text-gray-300 mt-1">Cloud Sync</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-accent-400 text-3xl">🔒</div>
                  <div className="text-xs text-gray-300 mt-1">လုံခြုံမှု</div>
                </motion.div>

                {/* Phone Frame */}
                <div className="glass-effect rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Notch */}
                    <div className="h-6 bg-black/50 rounded-b-3xl mx-auto w-40"></div>

                    {/* App Screenshot Placeholder */}
                    <div className="p-6 h-full">
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-accent-400">555Mix</div>
                        <div className="text-sm text-gray-400">မောင်းတွက်စက်</div>
                      </div>

                      <div className="space-y-4">
                        <div className="glass-effect rounded-2xl p-4">
                          <div className="text-xs text-gray-400 mb-2">လောင်းငွေ</div>
                          <div className="text-right text-2xl font-bold text-accent-400">Unit 1,000</div>
                        </div>

                        <div className="glass-effect rounded-2xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div className="flex gap-2">
                              <div className="px-3 py-1 bg-green-500/30 rounded-full text-xs">အပြည့်</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div className="flex gap-2">
                              <div className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">+ ပြားစား</div>
                            </div>
                          </div>
                        </div>

                        <div className="glass-effect rounded-2xl p-6 bg-accent-500/20">
                          <div className="text-xs text-gray-400 mb-2">အနိုင်ရရှိငွေ</div>
                          <div className="text-center text-3xl font-bold text-accent-400">Unit 1,700</div>
                          <div className="text-center text-green-400 mt-2">+ အမြတ် 700</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
