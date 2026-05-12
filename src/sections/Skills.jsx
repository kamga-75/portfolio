import { motion } from 'framer-motion'

const skills = [
  { category: 'Langages', items: ['Python', 'SQL','MongoDB', 'R'] },
  { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
  { category: 'Visualisation', items: ['Matplotlib', 'Seaborn', 'Power BI', 'Streamlit'] },
  { category: 'Outils', items: ['Git', 'GitHub', 'VS Code', 'Jupyter'] },
]

function Skills() {
  return (
    <section id="skills" style={{
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
        style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '3rem' }}
      >
        Compétences
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        width: '100%',
      }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e8e8e8',
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem' }}>
              {skill.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.items.map((item, i) => (
                <span key={i} style={{
                  backgroundColor: '#1a1a2e',
                  color: '#ffffff',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Skills