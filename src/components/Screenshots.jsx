import React from 'react'
import { motion } from 'framer-motion'

const Screenshots = () => {
  const screenshots = [
    {
      title: 'Main Calculator',
      desc: 'တွက်ချက်မှု မျက်နှာပြင်',
      image: '/images/screenshots/1.jpg',
      alt: 'Main calculator interface'
    },
    {
      title: 'History',
      desc: 'မှတ်တမ်း',
      image: '/images/screenshots/2.jpg',
      alt: 'History view'
    },
  ]

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Screenshots
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
            App <span className="text-gradient">Interface</span>
          </h2>
        </motion.div>

        {/* Mobile swipe | Desktop centered */}
        <div
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6
            md:justify-center md:overflow-visible
          "
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-center shrink-0"
            >
              {/* IMAGE-DRIVEN CONTAINER */}
              <div
                className="
                  inline-flex flex-col items-center
                  glass-effect rounded-2xl p-4
                  max-w-[260px] sm:max-w-[300px] md:max-w-[340px]
                "
              >
                {/* Background hugs image */}
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl overflow-hidden">
                  <img
                    src={screenshot.image}
                    alt={screenshot.alt}
                    loading="lazy"
                    className="block w-full h-auto"
                  />
                </div>

                <h3 className="mt-4 font-bold text-white text-center">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {screenshot.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Screenshots
