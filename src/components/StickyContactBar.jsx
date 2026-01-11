import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegram, FaViber } from 'react-icons/fa'
import { FiChevronUp } from 'react-icons/fi'

const StickyContactBar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const contacts = [
        {
            name: 'Viber Public',
            icon: FaViber,
            color: '#665CAC',
            link: 'viber://pa?chatURI=fordbet999',
            showOnMobile: true,
            category: 'viber'
        },
        {
            name: 'Telegram Bot 1',
            icon: FaTelegram,
            color: '#0088CC',
            link: 'https://t.me/BlackDiamond69_bot',
            showOnMobile: true,
            category: 'telegram',
            label: 'Main Support'
        },
        {
            name: 'Telegram Bot 2',
            icon: FaTelegram,
            color: '#229ED9',
            link: 'https://t.me/YourSecondBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'VIP Support'
        },
        {
            name: 'Telegram Bot 3',
            icon: FaTelegram,
            color: '#2AABEE',
            link: 'https://t.me/YourThirdBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'Customer Care'
        },
        {
            name: 'Telegram Bot 4',
            icon: FaTelegram,
            color: '#34B7F1',
            link: 'https://t.me/YourFourthBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'Technical Help'
        },
    ]

    const handleContact = (link) => {
        if (link.startsWith('viber://') || link.startsWith('https://')) {
            window.open(link, '_blank')
        } else {
            window.location.href = link
        }
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    // Get Viber contact (first one)
    const viberContact = contacts.find(c => c.category === 'viber')
    const ViberIcon = viberContact.icon

    return (
        <>
            {/* Mobile Version - Bottom Expandable Bar */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            >
                <div className="bg-gradient-to-t from-gray-950 via-gray-950/98 to-gray-950/95 backdrop-blur-lg border-t border-accent-500/20 shadow-2xl">
                    {/* Expandable Contact Grid */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 pt-4 pb-2">
                                    <div className="text-center mb-3">
                                        <h3 className="text-white font-bold text-sm mb-1">
                                            Choose Your Support Channel
                                        </h3>
                                        <p className="text-gray-400 text-xs">
                                            ကျွန်ုပ်တို့သို့ ဆက်သွယ်ပါ
                                        </p>
                                    </div>

                                    {/* Telegram Bots Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        {contacts.filter(c => c.category === 'telegram').map((contact, index) => {
                                            const ContactIcon = contact.icon
                                            return (
                                                <motion.button
                                                    key={contact.name}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => handleContact(contact.link)}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="glass-effect rounded-xl p-3 hover:bg-white/10 transition-all group"
                                                >
                                                    <div
                                                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform"
                                                        style={{ backgroundColor: contact.color }}
                                                    >
                                                        <ContactIcon className="text-2xl text-white" />
                                                    </div>
                                                    <div className="text-xs font-medium text-white mb-0.5">
                                                        {contact.label}
                                                    </div>
                                                    <div className="text-[10px] text-gray-400">
                                                        Telegram
                                                    </div>
                                                </motion.button>
                                            )
                                        })}
                                    </div>

                                    {/* Viber */}
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        onClick={() => handleContact(viberContact.link)}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full glass-effect rounded-xl p-3 hover:bg-white/10 transition-all flex items-center gap-3 group"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: viberContact.color }}
                                        >
                                            <ViberIcon className="text-2xl text-white" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="text-sm font-semibold text-white">
                                                Viber Public Account
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                Quick Response
                                            </div>
                                        </div>
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Toggle Button */}
                    <button
                        onClick={toggleExpand}
                        className="w-full py-3 flex items-center justify-center gap-2 group"
                    >
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                            <FiChevronUp className="text-gray-900 text-lg" />
                        </motion.div>
                        <div className="text-center">
                            <div className="text-white font-bold text-sm">
                                Contact Us
                            </div>
                            <div className="text-gray-400 text-xs">
                                {isExpanded ? 'Tap to close' : 'Tap to open'}
                            </div>
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Desktop Version - Right Sidebar with Header */}
            <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className="flex flex-col"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-l-2xl px-4 py-3 mb-2 shadow-xl">
                        <div className="text-gray-900 font-bold text-sm whitespace-nowrap">
                            Contact Us
                        </div>
                        <div className="text-gray-800 text-xs">
                            ကျွန်ုပ်တို့သို့ ဆက်သွယ်ပါ
                        </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex flex-col gap-2">
                        {contacts.map((contact, index) => {
                            const ContactIcon = contact.icon
                            return (
                                <motion.button
                                    key={contact.name}
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleContact(contact.link)}
                                    whileHover={{ x: -15, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative"
                                >
                                    <div
                                        className="w-16 h-16 rounded-l-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                                        style={{ backgroundColor: contact.color }}
                                    >
                                        {/* Shine effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                                        <ContactIcon className="text-2xl text-white relative z-10" />

                                        {/* Badge for Telegram bots */}
                                        {contact.category === 'telegram' && (
                                            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                                        )}
                                    </div>

                                    {/* Enhanced Tooltip */}
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                                        <div className="bg-gray-900 text-white px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap shadow-2xl border border-white/10">
                                            <div className="font-bold text-accent-400 mb-1">
                                                {contact.label || contact.name}
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                Click to connect
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 border-r border-t border-white/10 transform rotate-45"></div>
                                        </div>
                                    </div>
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-4 text-center">
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-8 h-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mx-auto"
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default StickyContactBar