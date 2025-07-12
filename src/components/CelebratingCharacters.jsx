import { motion } from 'framer-motion'

const CelebratingCharacters = () => {
  const sealVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    dancing: {
      rotate: [0, -10, 10, -10, 0],
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const beanVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "bounceOut"
      }
    },
    wiggle: {
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const Seal = ({ x, y, delay = 0 }) => (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      variants={sealVariants}
      initial="hidden"
      animate={["visible", "dancing"]}
      transition={{ delay }}
    >
      <div className="text-6xl select-none">🦭</div>
      {/* Hearts above seal */}
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 1
        }}
      >
        <span className="text-red-500 text-2xl">💖</span>
      </motion.div>
    </motion.div>
  )

  const Bean = ({ x, y, delay = 0 }) => (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      variants={beanVariants}
      initial="hidden"
      animate={["visible", "wiggle"]}
      transition={{ delay }}
    >
      <div className="text-5xl select-none">🫘</div>
      {/* Sparkles around bean */}
      <motion.div
        className="absolute -top-4 -left-4"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 0.5
        }}
      >
        <span className="text-yellow-400 text-xl">✨</span>
      </motion.div>
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 pointer-events-none z-20"
    >
      {/* Seals */}
      <Seal x="10%" y="20%" delay={0.5} />
      <Seal x="85%" y="30%" delay={1} />
      <Seal x="15%" y="70%" delay={1.5} />
      <Seal x="80%" y="75%" delay={2} />

      {/* Beans */}
      <Bean x="25%" y="15%" delay={2.5} />
      <Bean x="70%" y="20%" delay={3} />
      <Bean x="30%" y="80%" delay={3.5} />
      <Bean x="75%" y="65%" delay={4} />

      {/* Additional floating characters */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
        animate={{
          x: [-50, 50, -50],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <span className="text-4xl">🐧</span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <span className="text-5xl">🎈</span>
      </motion.div>
    </motion.div>
  )
}

export default CelebratingCharacters