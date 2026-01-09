import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaViber, FaTelegram, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const contactMethods = [
        {
            icon: FaViber,
            name: 'Viber',
            value: '+95 912 345 6789',
            color: 'from-purple-500 to-purple-600',
            link: 'viber://chat?number=%2B959123456789'
        },
        {
            icon: FaTelegram,
            name: 'Telegram',
            value: '@555mixsupport',
            color: 'from-blue-500 to-blue-600',
            link: 'https://t.me/555mixsupport'
        },
        {
            icon: FaFacebookMessenger,
            name: 'Messenger',
            value: 'm.me/555mix',
            color: 'from-blue-400 to-blue-500',
            link: 'https://m.me/555mix'
        },
        {
            icon: FaWhatsapp,
            name: 'WhatsApp',
            value: '+95 912 345 6789',
            color: 'from-green-500 to-green-600',
            link: 'https://wa.me/959123456789'
        },
        {
            icon: FiPhone,
            name: 'Phone',
            value: '+95 912 345 6789',
            color: 'from-emerald-500 to-emerald-600',
            link: 'tel:+959123456789'
        },
        {
            icon: FiMail,
            name: 'Email',
            value: 'support@555mix.com',
            color: 'from-red-500 to-red-600',
            link: 'mailto:support@555mix.com'
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission (send to API, email service, etc.)
        console.log('Form submitted:', formData)
        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleContactClick = (link) => {
        if (link.startsWith('viber://') || link.startsWith('https://')) {
            window.open(link, '_blank')
        } else {
            window.location.href = link
        }
    }

    return (
        <section id="contact" className="relative py-20 md:py-32 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                        ဆက်သွယ်ရန်
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-white">
                        <span className="text-gradient">ကျွန်ုပ်တို့</span>ကို ဆက်သွယ်ပါ
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        သင့်အတွက် အကောင်းဆုံး ဝန်ဆောင်မှုပေးနိုင်ရန် အဆင်သင့်ရှိပါသည်
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                ဆက်သွယ်လိုသော နည်းလမ်း ရွေးချယ်ပါ
                            </h3>
                            <p className="text-gray-400 mb-8">
                                သင့်အတွက် အဆင်ပြေသော နည်းလမ်းဖြင့် ဆက်သွယ်နိုင်ပါသည်
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactMethods.map((method, index) => (
                                <motion.button
                                    key={method.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleContactClick(method.link)}
                                    className="glass-effect rounded-2xl p-6 text-left hover:bg-white/10 transition-all group"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <method.icon className="text-2xl text-white" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                                        {method.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 break-all">
                                        {method.value}
                                    </p>
                                </motion.button>
                            ))}
                        </div>

                        {/* Office Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-2xl p-6 mt-8"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FiMapPin className="text-xl text-gray-900" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">Office Address</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        123 Mahabandoola Road,<br />
                                        Yangon, Myanmar<br />
                                        Open: Mon-Fri, 9AM-6PM
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-3xl p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            သတင်းစာပို့ရန်
                        </h3>

                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Message Sent Successfully!
                                </h4>
                                <p className="text-gray-400">
                                    ကျေးဇူးတင်ပါသည်။ မကြာမီ ပြန်လည်ဆက်သွယ်ပေးပါမည်။
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name / အမည်
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                                        placeholder="သင့်အမည်"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone / ဖုန်းနံပါတ်
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                                        placeholder="+95 9XX XXX XXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message / သတင်းစာ
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                                        placeholder="သင်၏ မေးခွန်း သို့မဟုတ် အကြံပြုချက်များ ရေးသားပါ..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-accent-500/50 transition-all flex items-center justify-center gap-2"
                                >
                                    <FiSend className="text-lg" />
                                    <span>Send Message</span>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact