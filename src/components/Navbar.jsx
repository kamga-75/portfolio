import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e8e8e8',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1a1a2e' }}>
        Kamga Zainab
      </span>

      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
      }}>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar