import { motion } from 'framer-motion'

const FloatingDecorations = () => {
  const decorations = [
    { emoji: '🎈', size: 'text-3xl', duration: 8 },
    { emoji: '🎊', size: 'text-2xl', duration: 6 },
    { emoji: '🌟', size: 'text-xl', duration: 10 },
    { emoji: '💫', size: 'text-2xl', duration: 7 },
    { emoji: '🎨', size: 'text-3xl', duration: 9 },
    { emoji: '🦄', size: 'text-4xl', duration: 12 },
    { emoji: '🌈', size: 'text-2xl', duration: 8 },
    { emoji: '💖', size: 'text-2xl', duration: 6 },
    { emoji: '🎭', size: 'text-3xl', duration: 10 },
    { emoji: '🎪', size: 'text-2xl', duration: 7 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.size} select-none opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}

      {/* Corner decorations */}
      {/* Top Left */}
      <motion.div
        className="absolute top-4 left-4 text-6xl opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎂
      </motion.div>

      {/* Top Right */}
      <motion.div
        className="absolute top-4 right-4 text-5xl opacity-20"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎉
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-4 left-4 text-4xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🎈
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-4 right-4 text-5xl opacity-20"
        animate={{
          x: [0, -15, 0],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌟
      </motion.div>

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-400 text-2xl opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-yellow-300 text-lg opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingDecorations