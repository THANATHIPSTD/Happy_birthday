import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BirthdayCake from './components/BirthdayCake'
import AnimatedBackground from './components/AnimatedBackground'
import CelebratingCharacters from './components/CelebratingCharacters'
import ParticleSystem from './components/ParticleSystem'
import CelebrationMessages from './components/CelebrationMessages'
import FloatingDecorations from './components/FloatingDecorations'

function App() {
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleCandlesBlow = () => {
    setCandlesBlown(true)
    setShowCelebration(true)
  }

  const resetCelebration = () => {
    setCandlesBlown(false)
    setShowCelebration(false)
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-kanit">
      <AnimatedBackground />
      <FloatingDecorations />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎂 สุขสันต์วันเกิด 🎂
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            คนที่รักที่สุดในโลก 💖
          </p>
        </motion.div>

        {/* Cake Section */}
        <div className="relative mb-8">
          <BirthdayCake 
            onCandlesBlow={handleCandlesBlow}
            candlesBlown={candlesBlown}
          />
          
          {!candlesBlown && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-center text-white/80 mt-4 text-lg"
            >
              คลิกที่เค้กเพื่อเป่าเทียน! 🌬️
            </motion.p>
          )}
        </div>

        {/* Celebration Button */}
        {candlesBlown && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            onClick={resetCelebration}
            className="glass-morphism px-8 py-3 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform"
          >
            🎉 ฉลองอีกครั้ง 🎉
          </motion.button>
        )}
      </div>

      {/* Celebration Effects */}
      <AnimatePresence>
        {showCelebration && (
          <>
            <ParticleSystem />
            <CelebratingCharacters />
            <CelebrationMessages />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App