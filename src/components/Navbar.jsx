import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'A propos', path: '/about' },
    { name: 'Competences', path: '/skills' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e8e8e8',
      padding: '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxSizing: 'border-box',
    }}>
      <Link to="/" style={{
        fontWeight: 700,
        fontSize: '1.2rem',
        color: '#1a1a2e',
        textDecoration: 'none',
      }}>
        Kamga Zainab
      </Link>

      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              style={{
                textDecoration: 'none',
                fontWeight: location.pathname === link.path ? 700 : 400,
                color: location.pathname === link.path ? '#4f46e5' : '#1a1a2e',
                borderBottom: location.pathname === link.path ? '2px solid #4f46e5' : 'none',
                paddingBottom: '4px',
                fontSize: '0.95rem',
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar