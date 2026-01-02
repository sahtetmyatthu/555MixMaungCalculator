import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { FaAndroid, FaApple, FaChrome, FaWindows } from 'react-icons/fa'
import { QRCodeCanvas } from 'qrcode.react'

const Download = () => {
  // 🔴 CHANGE THIS TO YOUR REAL LINK
  // Recommended: smart redirect URL (Android / iOS / Web)
  const DOWNLOAD_URL = 'https://play.google.com/store/apps/details?id=com.mobile.legends'

  const platforms = [
    {
      name: 'Android',
      icon: FaAndroid,
      color: 'from-green-400 to-green-600',
      link: 'https://play.google.com/store/apps/details?id=com.yourcompany.yourapp',
    },
    {
      name: 'iOS',
      icon: FaApple,
      color: 'from-gray-400 to-gray-600',
      link: 'https://apps.apple.com/app/idXXXXXXXXX',
    },
    {
      name: 'Web',
      icon: FaChrome,
      color: 'from-blue-400 to-blue-600',
      link: 'https://yourdomain.com',
    },
    {
      name: 'Windows',
      icon: FaWindows,
      color: 'from-cyan-400 to-cyan-600',
      link: '#',
    },
  ]

  return (
    <section
      id="download"
      className="relative py-20 md:py-32 gradient-bg overflow-hidden"
    >
      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ယခုပဲ <span className="text-gradient">Download</span> လုပ်ပါ
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            သင့် Device အတွက် သင့်လျော်သော Version ကို ရွေးချယ်ပါ
          </p>
        </motion.div>

        {/* Platform buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="group glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <platform.icon className="text-4xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {platform.name}
              </h3>

              <div className="flex items-center justify-center gap-2 text-accent-400 group-hover:text-accent-300">
                <FiDownload />
                <span>Download</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              သို့မဟုတ် QR Code ဖြင့် Download လုပ်ပါ
            </h3>

            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <QRCodeCanvas
                  value={DOWNLOAD_URL}
                  size={180}
                  level="H"
                  includeMargin
                />
              </div>
            </div>

            <p className="text-gray-400 text-lg">
              QR Code ကို Scan လုပ်ပြီး App ကို တိုက်ရိုက် Download လုပ်နိုင်ပါသည်
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download
