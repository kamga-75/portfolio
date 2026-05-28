import{ motion } from  'framer-motion'
import { Link } from 'react-router-dom'
function Hero()  {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem', paddingTop: '80px', backgroundColor: '#f8f9ff' }}>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 700 }}>
        KZ
      </motion.div>

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{ fontSize: '3rem', fontWeight: 800, color: '#1a1a2e', marginBottom: '1.5rem' }}>
        Bonjour, je suis Kamga Zainab
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{ fontSize: '1.1rem', color: '#6b6b8a', maxWidth: '550px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
        Etudiante passionnee par la donnee, le machine learning et la creation de solutions intelligentes.
      </motion.p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/projects" style={{ padding: '0.9rem 2rem', backgroundColor: '#4f46e5', color: '#ffffff', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>Voir mes projets</Link>
        <Link to="/contact" style={{ padding: '0.9rem 2rem', backgroundColor: 'transparent', color: '#4f46e5', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', border: '2px solid #4f46e5' }}>Me contacter</Link>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
        <a href="https://github.com/kamga-75" target="_blank" rel="noreferrer" style={{ color: '#6b6b8a', fontWeight: 500, textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#6b6b8a', fontWeight: 500, textDecoration: 'none' }}>LinkedIn</a>
      </div>

    </main>
  )
}

export default Hero
