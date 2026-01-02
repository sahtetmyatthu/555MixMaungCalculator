import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mi Mi',
      role: 'User',
      text: 'အလွန်အသုံးဝင်ပါတယ်။ Cloud sync လုပ်လို့ device ဘယ်ခုကမဆို သုံးလို့ရတယ်။',
      rating: 5,
      avatar: 'src/images/screenshots/4.jpg',
    },
    {
      name: 'Ko Ko',
      role: 'User',
      text: 'တွက်ချက်မှု တိကျပါတယ်။ အလွန် လွယ်ကူပါတယ်။',
      rating: 5,
      avatar: 'src/images/screenshots/5.jpg',
    },
    {
      name: 'Zaw Zaw',
      role: 'User',
      text: 'အခမဲ့ app ပါ။ feature တွေ အရမ်း ကောင်းပါတယ်။',
      rating: 5,
      avatar: 'src/images/screenshots/6.jpg',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            အသုံးပြုသူများ၏ <span className="text-gradient">သုံးသပ်ချက်</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-accent-400 fill-accent-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6">
                “{testimonial.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-accent-400 to-accent-600 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                <div>
                  <div className="font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
