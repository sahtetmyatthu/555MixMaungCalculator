import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCloud,
  FiLock,
  FiZap,
  FiDatabase,
  FiSmartphone,
  FiShare2,
  FiWifi,
  FiTrendingUp
} from 'react-icons/fi'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: FiZap,
      title: 'လျင်မြန်သော တွက်ချက်မှု',
      description: 'အလျင်အမြန် တွက်ချက်ပေးနိုင်သော စနစ်',
      color: 'from-yellow-400 to-orange-500',
    },
    // {
    //   icon: FiCloud,
    //   title: 'Cloud Sync',
    //   description: 'Device အားလုံးတွင် အလိုအလျောက် Sync လုပ်ပေးသည်',
    //   color: 'from-blue-400 to-cyan-500',
    // },
    // {
    //   icon: FiLock,
    //   title: 'လုံခြုံမှုရှိ',
    //   description: 'Google Sign-in ဖြင့် လုံခြုံစိတ်ချရသော စနစ်',
    //   color: 'from-green-400 to-emerald-500',
    // },
    // {
    //   icon: FiDatabase,
    //   title: 'မှတ်တမ်းသိမ်းဆည်းမှု',
    //   description: 'ယခင် တွက်ချက်မှု အားလုံးကို သိမ်းဆည်းပေးသည်',
    //   color: 'from-purple-400 to-pink-500',
    // },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Mobile, Tablet, Desktop အားလုံးတွင် အလုပ်လုပ်သည်',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      icon: FiTrendingUp,
      title: 'တိကျမှု',
      description: '15%/20% အကောက်ခွန် တိကျစွာ တွက်ချက်ပေးသည်',
      color: 'from-red-400 to-rose-500',
    },
    // {
    //   icon: FiWifi,
    //   title: 'Offline Support',
    //   description: 'Internet မရှိလည်း အလုပ်လုပ်နိုင်သည်',
    //   color: 'from-teal-400 to-cyan-500',
    // },
    {
      icon: FiShare2,
      title: 'Share Results',
      description: 'Viber, Telegram တို့ဖြင့် မျှဝေနိုင်သည်',
      color: 'from-orange-400 to-amber-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              အင်္ဂါရပ်များ
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">အထူး </span>
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            555Mix မောင်း Calculator တွင် ပါဝင်သော အထူး Features များ
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-effect rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-2xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full mt-4 transition-all duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            အခမဲ့ Download လုပ်ပြီး စတင်အသုံးပြုလိုက်ပါ
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-accent-500/50 transition-all duration-300"
          >
            <span>ယခုပဲ စတင်ရန်</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
