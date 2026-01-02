import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const Pricing = () => {
  const features = [
    'အကန့်အသတ်မရှိ တွက်ချက်မှု',
    // 'Cloud Sync',
    'မှတ်တမ်း သိမ်းဆည်းမှု',
    'Offline Support',
    'Share လုပ်နိုင်မှု',
    'အကောက်ခွန် တိကျစွာ တွက်ချက်',
    'အားလုံး Device များတွင် အလုပ်လုပ်',
    // 'Google Sign-in',
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-white">
            <span className="text-gradient">100% အခမဲ့</span> Forever
          </h2>
          <p className="text-xl text-gray-400">ဝှက်ထားသော ကုန်ကျစရိတ် မရှိပါ</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-accent-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-500 text-gray-900 px-6 py-2 rounded-bl-2xl font-bold">
              အကောင်းဆုံး သင့်အတွက်
            </div>

            <div className="text-center mb-8 mt-8">
              <h3 className="text-3xl font-bold text-white mb-4">Free Plan</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-accent-400">$0</span>
                <span className="text-gray-400 text-xl">/forever</span>
              </div>
              <p className="text-gray-400">အားလုံး Features များ ပါဝင်</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <FiCheck className="text-gray-900 text-sm" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 py-4 rounded-full font-bold text-lg text-center hover:shadow-lg hover:shadow-accent-500/50 transition-all"
            >
              အခုပဲ စတင်ရန်
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
