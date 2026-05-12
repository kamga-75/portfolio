import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#ffffff',
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem' }}
      >
        Me Contacter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ color: '#6b6b8a', marginBottom: '2.5rem', textAlign: 'center' }}
      >
        Tu veux collaborer ou en savoir plus ? Ecris-moi !
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <input
          type="text"
          placeholder="Ton nom"
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <input
          type="email"
          placeholder="Ton email"
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <textarea
          placeholder="Ton message"
          rows={5}
          style={{
            padding: '0.9rem 1rem',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            fontSize: '1rem',
            outline: 'none',
            resize: 'none',
          }}
        />
        <button
          style={{
            padding: '0.9rem',
            backgroundColor: '#1a1a2e',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Envoyer
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '2.5rem',
        }}
      >
        <a
          href="https://github.com/kamga-75"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#1a1a2e', fontWeight: 600 }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#1a1a2e', fontWeight: 600 }}
        >
          LinkedIn
        </a>
      </motion.div>

    </section>
  )
}

export default Contact