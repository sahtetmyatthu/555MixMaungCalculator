import React from 'react'
import { motion } from 'framer-motion'
import { FaViber, FaTelegram, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail } from 'react-icons/fi'

const StickyContactBar = () => {
    const contacts = [
        {
            name: 'Viber',
            icon: FaViber,
            color: '#665CAC',
            link: 'viber://chat?number=%2B959123456789',
            showOnMobile: true,
        },
        {
            name: 'Telegram',
            icon: FaTelegram,
            color: '#0088CC',
            link: 'https://t.me/yourhandle',
            showOnMobile: true,
        },
        {
            name: 'Messenger',
            icon: FaFacebookMessenger,
            color: '#0084FF',
            link: 'https://m.me/yourpage',
            showOnMobile: true,
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            color: '#25D366',
            link: 'https://wa.me/959123456789',
            showOnMobile: true,
        },
        {
            name: 'Phone',
            icon: FiPhone,
            color: '#10B981',
            link: 'tel:+959123456789',
            showOnMobile: false,
        },
        {
            name: 'Email',
            icon: FiMail,
            color: '#EF4444',
            link: 'mailto:support@555mix.com',
            showOnMobile: false,
        },
    ]

    const handleContact = (link) => {
        if (link.startsWith('viber://') || link.startsWith('https://')) {
            window.open(link, '_blank')
        } else {
            window.location.href = link
        }
    }

    return (
        <>
            {/* Mobile Version - Bottom Bar */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
            >
                <div className="bg-gray-950/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
                    <div className="flex items-center justify-around py-3 px-2">
                        {contacts.filter(c => c.showOnMobile).map((contact) => (
                            <motion.button
                                key={contact.name}
                                onClick={() => handleContact(contact.link)}
                                whileTap={{ scale: 0.9 }}
                                className="flex flex-col items-center gap-1 flex-1"
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: contact.color }}
                                >
                                    <contact.icon className="text-xl text-white" />
                                </div>
                                <span className="text-xs text-gray-400 font-medium">{contact.name}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Desktop Version - Side Bar */}
            <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
                <div className="flex flex-col gap-2">
                    {contacts.map((contact) => (
                        <motion.button
                            key={contact.name}
                            onClick={() => handleContact(contact.link)}
                            whileHover={{ x: -10, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative"
                        >
                            <div
                                className="w-14 h-14 rounded-l-full flex items-center justify-center shadow-lg"
                                style={{ backgroundColor: contact.color }}
                            >
                                <contact.icon className="text-2xl text-white" />
                            </div>

                            {/* Tooltip on hover */}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                                    {contact.name}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default StickyContactBar