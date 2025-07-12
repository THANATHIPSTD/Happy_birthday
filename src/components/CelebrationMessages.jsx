import { motion } from 'framer-motion'

const CelebrationMessages = () => {
  const messages = [
    "🎉 สุขสันต์วันเกิด! 🎉",
    "💖 ขอให้มีความสุขมากๆ 💖",
    "🌟 เป็นคนที่พิเศษที่สุด 🌟",
    "🎂 ขอให้มีแต่สิ่งดีๆ 🎂",
    "✨ รักเธอมากที่สุด ✨",
    "🎈 Happy Birthday Darling 🎈",
    "💫 ขอให้ทุกความฝันเป็นจริง 💫",
    "🌈 วันนี้เป็นวันของเธอ 🌈",
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-25 overflow-hidden"
    >
      {/* Rotating messages around the center */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className="absolute text-white font-bold text-lg md:text-xl glass-morphism px-4 py-2 rounded-full whitespace-nowrap"
            style={{
              left: `${Math.cos((index / messages.length) * 2 * Math.PI) * 200}px`,
              top: `${Math.sin((index / messages.length) * 2 * Math.PI) * 200}px`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut"
            }}
          >
            {message}
          </motion.div>
        ))}
      </motion.div>

      {/* Floating side messages */}
      {[
        { text: "🎊 วันนี้เป็นวันพิเศษ 🎊", x: "10%", y: "20%" },
        { text: "💝 ขอให้โชคดีตลอดไป 💝", x: "85%", y: "30%" },
        { text: "🌺 สวยงามเหมือนดอกไม้ 🌺", x: "15%", y: "70%" },
        { text: "🦋 เบิกบานเหมือนผีเสื้อ 🦋", x: "80%", y: "75%" },
      ].map((item, index) => (
        <motion.div
          key={`side-${index}`}
          className="absolute text-white/90 font-semibold text-sm md:text-base glass-morphism px-3 py-2 rounded-full"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut"
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Central big message */}
      <motion.div
        className="absolute left-1/2 top-20 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-3xl md:text-4xl font-bold text-white text-center glass-morphism px-8 py-4 rounded-xl">
          🎂 Happy Birthday! 🎂
        </div>
      </motion.div>

      {/* Bottom celebration message */}
      <motion.div
        className="absolute left-1/2 bottom-20 transform -translate-x-1/2"
        animate={{
          y: [0, -15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="text-xl md:text-2xl font-semibold text-white text-center glass-morphism px-6 py-3 rounded-lg">
          🌟 ขอให้มีความสุขมากๆ นะคะ 🌟
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CelebrationMessages