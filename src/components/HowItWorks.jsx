import React from 'react'
import { motion } from 'framer-motion'
import { FiEdit3, FiCheckSquare, FiBarChart2 } from 'react-icons/fi'

const HowItWorks = () => {
  const steps = [
    {
      icon: FiEdit3,
      title: 'လောင်းငွေ ထည့်ရန်',
      description: 'လောင်းမည့် ငွေပမာဏကို ထည့်သွင်းပါ',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FiCheckSquare,
      title: 'အသင်းများ ရွေးချယ်ရန်',
      description: 'အသင်းတစ်ခုချင်းစီအတွက် အနိုင်/အရှုံး ရွေးချယ်ပါ',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FiBarChart2,
      title: 'ရလဒ် ကြည့်ရန်',
      description: 'အနိုင်ရရှိငွေကို ချက်ချင်း တွေ့မြင်နိုင်ပါသည်',
      color: 'from-amber-400 to-orange-500',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            အသုံးပြုနည်း
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-white">ရိုးရှင်းသော </span>
            <span className="text-gradient">3 ခြေလှမ်း</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            အလွန်လွယ်ကူစွာ အသုံးပြုနိုင်ပါသည်
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 mt-6`}
                >
                  <step.icon className="text-4xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <video
                src="/images/screenshots/1.mp4"
                poster="/images/video-poster.jpg"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-center text-gray-400 mt-6 text-lg">
              App ကို အသုံးပြုနည်း Video Tutorial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
