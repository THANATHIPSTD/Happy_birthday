import { motion } from 'framer-motion'

const ParticleSystem = () => {
  const particles = [
    { emoji: '💖', count: 8 },
    { emoji: '⭐', count: 6 },
    { emoji: '🌸', count: 5 },
    { emoji: '🎊', count: 4 },
    { emoji: '✨', count: 10 },
    { emoji: '💫', count: 3 },
  ]

  const createParticles = (emoji, count) => {
    return [...Array(count)].map((_, i) => (
      <motion.div
        key={`${emoji}-${i}`}
        className="absolute text-2xl select-none pointer-events-none"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 50,
          opacity: 0,
          scale: 0,
          rotate: 0,
        }}
        animate={{
          y: -100,
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1.2, 0],
          rotate: Math.random() * 360,
          x: Math.random() * window.innerWidth,
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: Math.random() * 3 + 1,
        }}
      >
        {emoji}
      </motion.div>
    ))
  }

  const explosionParticles = [...Array(20)].map((_, i) => (
    <motion.div
      key={`explosion-${i}`}
      className="absolute text-xl select-none pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 0,
      }}
      animate={{
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 600,
        opacity: [1, 1, 0],
        scale: [0, 1, 0],
        rotate: Math.random() * 720,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        delay: Math.random() * 0.5,
      }}
    >
      {['🎉', '🎊', '✨', '💖', '⭐'][Math.floor(Math.random() * 5)]}
    </motion.div>
  ))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      {/* Continuous particle rain */}
      {particles.map(({ emoji, count }) => createParticles(emoji, count))}
      
      {/* Initial explosion */}
      {explosionParticles}

      {/* Confetti burst from sides */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`confetti-left-${i}`}
          className="absolute text-lg select-none pointer-events-none"
          style={{
            left: -50,
            top: Math.random() * window.innerHeight,
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * 200 - 100,
            rotate: 720,
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            delay: Math.random() * 3,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2,
          }}
        >
          🎊
        </motion.div>
      ))}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`confetti-right-${i}`}
          className="absolute text-lg select-none pointer-events-none"
          style={{
            right: -50,
            top: Math.random() * window.innerHeight,
          }}
          animate={{
            x: -(window.innerWidth + 100),
            y: Math.random() * 200 - 100,
            rotate: -720,
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            delay: Math.random() * 3,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 2,
          }}
        >
          🎉
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ParticleSystem