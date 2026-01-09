import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FiPhone,
    FiMessageCircle,
    FiMail,
    FiX,
    FiPlus
} from 'react-icons/fi'
import {
    FaViber,
    FaTelegram,
    FaFacebookMessenger,
    FaWhatsapp
} from 'react-icons/fa'

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const contactOptions = [
        {
            name: 'Viber',
            icon: FaViber,
            color: 'bg-[#665CAC]',
            hoverColor: 'hover:bg-[#7d6bc4]',
            link: 'viber://chat?number=%2B959123456789', // Replace with your number
            action: () => window.open('viber://chat?number=%2B959123456789', '_blank')
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            color: 'bg-[#0088CC]',
            hoverColor: 'hover:bg-[#0099dd]',
            link: 'https://t.me/yourhandle', // Replace with your handle
            action: () => window.open('https://t.me/yourhandle', '_blank')
        },
        {
            name: 'Messenger',
            icon: FaFacebookMessenger,
            color: 'bg-[#0084FF]',
            hoverColor: 'hover:bg-[#0095ff]',
            link: 'https://m.me/yourpage', // Replace with your page
            action: () => window.open('https://m.me/yourpage', '_blank')
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            color: 'bg-[#25D366]',
            hoverColor: 'hover:bg-[#2ee673]',
            link: 'https://wa.me/959123456789', // Replace with your number
            action: () => window.open('https://wa.me/959123456789', '_blank')
        },
        {
            name: 'Phone',
            icon: FiPhone,
            color: 'bg-green-600',
            hoverColor: 'hover:bg-green-700',
            link: 'tel:+959123456789', // Replace with your number
            action: () => window.location.href = 'tel:+959123456789'
        },
        {
            name: 'Email',
            icon: FiMail,
            color: 'bg-red-600',
            hoverColor: 'hover:bg-red-700',
            link: 'mailto:support@555mix.com', // Replace with your email
            action: () => window.location.href = 'mailto:support@555mix.com'
        },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Contact Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
                    >
                        {contactOptions.map((option, index) => (
                            <motion.button
                                key={option.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={option.action}
                                className={`
                  group flex items-center gap-3 
                  ${option.color} ${option.hoverColor}
                  text-white px-4 py-3 rounded-full
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  min-w-[140px]
                `}
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <option.icon className="text-xl" />
                                </div>
                                <span className="font-semibold text-sm">{option.name}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={toggleMenu}
                className={`
          w-16 h-16 rounded-full shadow-2xl
          flex items-center justify-center
          transition-all duration-300
          ${isOpen
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:shadow-accent-500/50'
                    }
        `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 45 : 0 }}
            >
                {isOpen ? (
                    <FiX className="text-3xl text-white" />
                ) : (
                    <FiMessageCircle className="text-3xl text-gray-900" />
                )}
            </motion.button>

            {/* Pulse animation when closed */}
            {!isOpen && (
                <>
                    <motion.div
                        className="absolute inset-0 rounded-full bg-accent-500"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.5, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-accent-500"
                        animate={{
                            scale: [1, 1.8, 1.8],
                            opacity: [0.3, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            delay: 0.3,
                        }}
                    />
                </>
            )}
        </div>
    )
}

export default FloatingContact