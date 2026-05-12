import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Detection de maladies asymptomatiques',
    description: 'Application web de detection et prediction de maladies asymptomatiques a partir de donnees medicales.',
    technologies: ['HTML', 'Bootstrap', 'PHP'],
    github: null,
    status: 'termine',
  },
  {
    title: 'Prediction de prestataires',
    description: 'Application de prediction des meilleurs prestataires pour une entreprise basee sur les retours de satisfaction clients.',
    technologies: ['Python', 'Streamlit', 'Machine Learning'],
    github: null,
    status: 'termine',
  },
  {
    title: 'API Flask Steganographie',
    description: 'API Flask avec MySQL pour cacher des messages secrets dans des images de chats via la steganographie.',
    technologies: ['Python', 'Flask', 'MySQL'],
    github: 'https://github.com/kamga-75/cat-stegano-api',
    status: 'termine',
  },
  {
    title: 'Application de Patisserie',
    description: 'Application permettant de creer des designs de patisserie et de calculer automatiquement les prix en fonction des details.',
    technologies: ['En cours'],
    github: null,
    status: 'en cours',
  },
  {
    title: 'Gestion de Betail',
    description: 'Application de gestion des betailles pour eleveurs avec calcul des benefices, business plan et possibilite de partenariat.',
    technologies: ['En cours'],
    github: null,
    status: 'en cours',
  },
  {
    title: 'Analyse Boston Housing',
    description: 'Analyse et visualisation des donnees immobilieres de Boston Housing avec machine learning.',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    github: null,
    status: 'en cours',
  },
]

function Projects() {
  return (
    <section id="projects" style={{
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
        style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '3rem' }}
      >
        Mes Projets
      </motion.h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '960px',
        width: '100%',
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e8e8e8',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: project.status === 'termine' ? '#e8f5e9' : '#fff3e0',
              color: project.status === 'termine' ? '#2e7d32' : '#e65100',
              padding: '0.2rem 0.7rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>
              {project.status === 'termine' ? 'Termine' : 'En cours'}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '0.8rem', paddingRight: '5rem' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6b6b8a', marginBottom: '1rem', lineHeight: '1.6' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{
                  backgroundColor: '#f0f0f5',
                  color: '#1a1a2e',
                  padding: '0.2rem 0.7rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                }}>
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#1a1a2e',
                  borderBottom: '2px solid #1a1a2e',
                  paddingBottom: '2px',
                }}
              >
                Voir sur GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects