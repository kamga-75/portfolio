import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#f8f9fa',
    }}>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem' }}
      >
        À propos de moi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          maxWidth: '700px',
          textAlign: 'center',
          color: '#4a4a6a',
          fontSize: '1.1rem',
          lineHeight: '1.8',
        }}
      >
        <p>
          Je suis <strong>Kamga Zainab</strong>, étudiante passionnée en Data Science.
          J'aime transformer des données brutes en insights utiles et en visualisations claires.
        </p>
        <br />
        <p>
          Mon objectif est de contribuer à des projets data impactants,
          en combinant analyse statistique, machine learning et storytelling visuel.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          display: 'flex',
          gap: '2rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[
          { label: 'Projets réalisés', value: '5+' },
          { label: 'Certifications', value: '2+' },
          { label: 'Technologies', value: '10+' },
        ].map((item, index) => (
          <div key={index} style={{
            textAlign: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e8e8e8',
            minWidth: '140px',
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e' }}>{item.value}</div>
            <div style={{ fontSize: '0.9rem', color: '#6b6b8a', marginTop: '0.3rem' }}>{item.label}</div>
          </div>
        ))}
      </motion.div>

    </section>
  )
}

export default About