import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'ဘယ်လို Download လုပ်မလဲ?',
      answer: 'Google Play Store (Android), App Store (iOS) သို့မဟုတ် Web Browser မှတဆင့် အသုံးပြုနိုင်ပါသည်။'
    },
    {
      question: 'Cloud Sync က ဘယ်လို အလုပ်လုပ်သလဲ?',
      answer: 'Google Sign-in လုပ်ပြီးသည်နှင့် သင့် တွက်ချက်မှု မှတ်တမ်းများသည် Cloud တွင် အလိုအလျောက် သိမ်းဆည်းပြီး Device အားလုံးတွင် Sync ဖြစ်ပါသည်။'
    },
    {
      question: 'အခမဲ့လား ငွေပေးရလား?',
      answer: '100% အခမဲ့ ဖြစ်ပါသည်။ Features အားလုံး အခမဲ့ အသုံးပြုနိုင်ပါသည်။'
    },
    {
      question: 'ဘယ် Device တွေမှာ အလုပ်လုပ်မလဲ?',
      answer: 'Android, iOS, Web Browser နှင့် Desktop အားလုံးတွင် အလုပ်လုပ်ပါသည်။'
    },
    {
      question: 'Data က လုံခြုံမှုရှိသလား?',
      answer: 'Google Sign-in နှင့် Firebase Security ဖြင့် သင့် Data များသည် လုံခြုံစိတ်ချရပါသည်။'
    },
    {
      question: 'Internet မရှိလည်း သုံးလို့ရလား?',
      answer: 'ရပါတယ်။ Offline mode ပါဝင်ပြီး Internet ပြန်ရရှိသောအခါ အလိုအလျောက် Sync ဖြစ်ပါသည်။'
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-white">
            မကြာခဏ <span className="text-gradient">မေးလေ့ရှိသော</span> မေးခွန်းများ
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-effect rounded-2xl p-6 text-left hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="text-accent-400 text-2xl flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
