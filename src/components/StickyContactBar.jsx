import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegram, FaViber } from 'react-icons/fa'
import { FiChevronUp, FiZap, FiUsers, FiClock } from 'react-icons/fi'

const StickyContactBar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showPulse, setShowPulse] = useState(true)
    const [activeUsers, setActiveUsers] = useState(247)

    // Simulate active users count changing
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Auto-show hint after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPulse(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const contacts = [
        {
            name: 'Viber Public',
            icon: FaViber,
            color: '#665CAC',
            gradient: 'from-purple-600 via-purple-500 to-purple-400',
            link: 'viber://pa?chatURI=fordbet999',
            showOnMobile: true,
            category: 'viber',
            label: 'Viber Community',
            description: 'Instant Response',
            activeNow: true
        },
        {
            name: 'Telegram Bot 1',
            icon: FaTelegram,
            color: '#0088CC',
            gradient: 'from-blue-600 via-blue-500 to-cyan-400',
            link: 'https://t.me/BlackDiamond69_bot',
            showOnMobile: true,
            category: 'telegram',
            label: 'FordBet Agent',
            description: '24/7 Available',
            activeNow: true
        },
        {
            name: 'Telegram Bot 2',
            icon: FaTelegram,
            color: '#229ED9',
            gradient: 'from-blue-500 via-cyan-500 to-teal-400',
            link: 'https://t.me/YourSecondBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'M9SKM Agent',
            description: 'Premium Members',
            activeNow: true,
            badge: 'VIP'
        },
        {
            name: 'Telegram Bot 3',
            icon: FaTelegram,
            color: '#2AABEE',
            gradient: 'from-cyan-500 via-blue-400 to-indigo-400',
            link: 'https://t.me/YourThirdBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'Slot Agent',
            description: 'Fast & Friendly',
            activeNow: true
        },
        {
            name: 'Telegram Bot 4',
            icon: FaTelegram,
            color: '#34B7F1',
            gradient: 'from-blue-400 via-indigo-400 to-purple-400',
            link: 'https://t.me/YourFourthBot',
            showOnMobile: true,
            category: 'telegram',
            label: 'Bet365 Agent',
            description: 'Expert Help',
            activeNow: true
        },
    ]

    const handleContact = (link) => {
        if (link.startsWith('viber://') || link.startsWith('https://')) {
            window.open(link, '_blank')
        } else {
            window.location.href = link
        }
        setShowPulse(false)
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
        setShowPulse(false)
    }

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
                {/* Glow effect behind */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 via-purple-500/10 to-transparent blur-xl"></div>

                <div className="relative bg-gradient-to-t from-gray-950 via-gray-900/98 to-gray-900/95 backdrop-blur-xl border-t-2 border-accent-500/30 shadow-2xl">
                    {/* Expandable Contact Grid */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-4 pt-5 pb-3">
                                    {/* Header with stats */}
                                    <div className="text-center mb-4">
                                        {/* <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 text-gray-900 px-4 py-2 rounded-full mb-3 shadow-lg"
                                        >
                                            <FiUsers className="text-lg" />
                                            <span className="font-bold text-sm">{activeUsers} Online Now</span>
                                        </motion.div> */}
                                        <h3 className="text-white font-bold text-base mb-1">
                                            🎯 Choose Your Support Channel
                                        </h3>
                                        <p className="text-gray-400 text-xs flex items-center justify-center gap-2">
                                            <FiClock className="text-accent-400" />
                                            Average response: <span className="text-accent-400 font-semibold">&lt; 2 min</span>
                                        </p>
                                    </div>

                                    {/* Telegram Bots Grid with enhanced cards */}
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        {contacts.filter(c => c.category === 'telegram').map((contact, index) => {
                                            const ContactIcon = contact.icon
                                            return (
                                                <motion.button
                                                    key={contact.name}
                                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    transition={{ delay: index * 0.08, type: "spring" }}
                                                    onClick={() => handleContact(contact.link)}
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="relative group"
                                                >
                                                    {/* Card with gradient */}
                                                    <div className={`bg-gradient-to-br ${contact.gradient} rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                                        {/* Animated shine effect */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                            initial={{ x: '-100%' }}
                                                            animate={{ x: '200%' }}
                                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                                        />

                                                        {/* Badge */}
                                                        {contact.badge && (
                                                            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                                {contact.badge}
                                                            </div>
                                                        )}

                                                        {/* Icon with pulse */}
                                                        <div className="relative mb-3">
                                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                                                                <ContactIcon className="text-3xl text-white" />
                                                            </div>
                                                            {/* Online indicator */}
                                                            {contact.activeNow && (
                                                                <motion.div
                                                                    animate={{ scale: [1, 1.2, 1] }}
                                                                    transition={{ duration: 2, repeat: Infinity }}
                                                                    className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                                                                />
                                                            )}
                                                        </div>

                                                        <div className="text-xs font-bold text-white mb-1">
                                                            {contact.label}
                                                        </div>
                                                        <div className="text-[10px] text-white/80">
                                                            {contact.description}
                                                        </div>
                                                    </div>
                                                </motion.button>
                                            )
                                        })}
                                    </div>

                                    {/* Viber - Enhanced */}
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        onClick={() => handleContact(viberContact.link)}
                                        whileHover={{ scale: 1.02, y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full relative group"
                                    >
                                        <div className={`bg-gradient-to-r ${viberContact.gradient} rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 relative overflow-hidden`}>
                                            {/* Shine */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                initial={{ x: '-100%' }}
                                                animate={{ x: '200%' }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                            />

                                            <div className="relative">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <ViberIcon className="text-3xl text-white" />
                                                </div>
                                                {viberContact.activeNow && (
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                                                    />
                                                )}
                                            </div>

                                            <div className="text-left flex-1">
                                                <div className="text-sm font-bold text-white mb-1">
                                                    {viberContact.label}
                                                </div>
                                                <div className="text-xs text-white/80">
                                                    {viberContact.description}
                                                </div>
                                            </div>

                                            <FiZap className="text-2xl text-yellow-300" />
                                        </div>
                                    </motion.button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Enhanced Toggle Button */}
                    <button
                        onClick={toggleExpand}
                        className="w-full py-4 flex items-center justify-center gap-3 group relative"
                    >
                        {/* Pulsing background when closed */}
                        {!isExpanded && showPulse && (
                            <>
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-accent-500/20"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    className="absolute inset-0 bg-purple-500/20"
                                />
                            </>
                        )}

                        {/* Main button */}
                        <motion.div
                            animate={{
                                rotate: isExpanded ? 180 : 0,
                                scale: isExpanded ? 1 : [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 0.3 },
                                scale: { duration: 2, repeat: Infinity }
                            }}
                            className="relative"
                        >
                            <div className="w-10 h-10 bg-gradient-to-r from-accent-500 via-accent-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                <FiChevronUp className="text-gray-900 text-xl font-bold" />
                            </div>
                            {/* Notification dot */}
                            {!isExpanded && (
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900"
                                />
                            )}
                        </motion.div>

                        <div className="text-center">
                            <div className="text-white font-bold text-base flex items-center gap-2">
                                <span className="bg-gradient-to-r from-accent-400 to-purple-400 bg-clip-text text-transparent">
                                    💬 ဆက်သွယ်လိုက်နော်
                                </span>
                            </div>
                            <div className="text-gray-400 text-xs">
                                {isExpanded ? '👇 Tap to close' : '☝️ ဘောလုံးကစားမယ်ဆို နှိပ်ပါ'}
                            </div>
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Desktop Version - FIXED Ultra Attractive Right Sidebar */}
            <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-end"
                >
                    {/* Glowing Header */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(255, 193, 7, 0.3)',
                                '0 0 40px rgba(255, 193, 7, 0.5)',
                                '0 0 20px rgba(255, 193, 7, 0.3)'
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-accent-500 via-accent-600 to-purple-600 rounded-l-3xl px-6 py-4 mb-3 shadow-2xl relative overflow-hidden"
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />

                        <div className="relative">
                            <div className="text-gray-900 font-black text-base flex items-center gap-2 whitespace-nowrap">
                                <FiZap className="text-xl" />
                                Contact Us
                            </div>
                            <div className="text-gray-800 text-xs font-semibold whitespace-nowrap">
                                ကျွန်ုပ်တို့သို့ ဆက်သွယ်ပါ
                            </div>
                            {/* <div className="flex items-center gap-1 mt-1">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-gray-900">{activeUsers} Online</span>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Contact Buttons - FIXED */}
                    <div className="flex flex-col gap-3">
                        {contacts.map((contact, index) => {
                            const ContactIcon = contact.icon
                            return (
                                <motion.div
                                    key={contact.name}
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                                    className="relative group"
                                >
                                    <motion.button
                                        onClick={() => handleContact(contact.link)}
                                        whileHover={{ x: -10, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative z-10"
                                    >
                                        {/* Glow on hover - FIXED positioning */}
                                        <div className={`absolute -inset-2 rounded-l-3xl bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-opacity -z-10`}></div>

                                        <div className={`relative w-20 h-20 rounded-l-3xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-xl hover:shadow-2xl transition-all overflow-hidden`}>
                                            {/* Shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '200%' }}
                                                transition={{ duration: 0.6 }}
                                            />

                                            <ContactIcon className="text-3xl text-white relative z-10 group-hover:scale-110 transition-transform" />

                                            {/* Online indicator */}
                                            {contact.activeNow && (
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg z-20"
                                                />
                                            )}

                                            {/* Badge */}
                                            {contact.badge && (
                                                <div className="absolute bottom-2 left-2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full z-20">
                                                    {contact.badge}
                                                </div>
                                            )}
                                        </div>
                                    </motion.button>

                                    {/* Enhanced Tooltip - FIXED positioning */}
                                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                        <motion.div
                                            initial={{ x: 10, opacity: 0 }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className={`bg-gradient-to-r ${contact.gradient} px-5 py-4 rounded-2xl shadow-2xl border-2 border-white/20 min-w-[200px] backdrop-blur-sm`}
                                        >
                                            <div className="font-black text-white text-base mb-1">
                                                {contact.label}
                                            </div>
                                            <div className="text-sm text-white/90 mb-2">
                                                {contact.description}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-white/80">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                Active now
                                            </div>
                                            {/* Arrow - FIXED */}
                                            <div
                                                className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 transform rotate-45"
                                                style={{
                                                    background: `linear-gradient(135deg, ${contact.color} 0%, ${contact.color} 100%)`,
                                                    borderRight: '2px solid rgba(255, 255, 255, 0.2)',
                                                    borderTop: '2px solid rgba(255, 255, 255, 0.2)'
                                                }}
                                            ></div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Animated indicator */}
                    <div className="mt-5 text-center">
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="w-10 h-1 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full"></div>
                            <div className="w-6 h-1 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default StickyContactBar