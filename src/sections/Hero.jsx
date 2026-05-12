import { motion } from 'framer-motion'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      paddingTop: '80px',
      backgroundColor: '#ffffff',
    }}>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', fontWeight: 700, color: '#1a1a2e' }}
      >
        Kamga Zainab
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: '1.3rem', color: '#4a4a6a', marginTop: '1rem' }}
      >
        Étudiante en Data Science
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ maxWidth: '600px', color: '#6b6b8a', marginTop: '1rem' }}
      >
        Passionnée par la donnée, le machine learning et la visualisation.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          marginTop: '2rem',
          padding: '0.8rem 2rem',
          backgroundColor: '#1a1a2e',
          color: '#ffffff',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Voir mes projets
      </motion.a>

    </section>
  )
}

export default Hero