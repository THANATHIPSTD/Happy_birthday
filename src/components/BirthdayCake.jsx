import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BirthdayCake = ({ onCandlesBlow, candlesBlown }) => {
  const [showSmoke, setShowSmoke] = useState(false)

  const handleCakeClick = () => {
    if (!candlesBlown) {
      onCandlesBlow()
      setShowSmoke(true)
      setTimeout(() => setShowSmoke(false), 3000)
    }
  }

  const Candle = ({ delay = 0 }) => (
    <div className="relative">
      {/* Candle stick */}
      <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm mx-1" />
      
      {/* Flame */}
      <AnimatePresence>
        {!candlesBlown && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="w-3 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full flame-glow"
              animate={{
                scaleY: [1, 1.2, 1],
                scaleX: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smoke effect */}
      <AnimatePresence>
        {candlesBlown && showSmoke && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-4 h-6 bg-gray-400/50 rounded-full blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <motion.div
      className="cursor-pointer select-none"
      onClick={handleCakeClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Cake base */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Bottom layer */}
          <div className="w-48 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg shadow-2xl" />
          
          {/* Middle layer */}
          <div className="absolute -top-4 left-4 w-40 h-14 bg-gradient-to-b from-purple-300 to-purple-400 rounded-lg shadow-xl" />
          
          {/* Top layer */}
          <div className="absolute -top-8 left-8 w-32 h-12 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg shadow-lg" />
          
          {/* Decorative elements */}
          <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-300 rounded-full" />
          <div className="absolute top-4 left-8 w-2 h-2 bg-green-300 rounded-full" />
          <div className="absolute top-2 right-4 w-2 h-2 bg-red-300 rounded-full" />
          <div className="absolute top-6 right-8 w-2 h-2 bg-orange-300 rounded-full" />
        </motion.div>

        {/* Candles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex"
        >
          {[...Array(5)].map((_, i) => (
            <Candle key={i} delay={0.8 + i * 0.2} />
          ))}
        </motion.div>

        {/* Cake plate */}
        <div className="absolute -bottom-2 -left-4 w-56 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full shadow-lg" />
      </div>
    </motion.div>
  )
}

export default BirthdayCake