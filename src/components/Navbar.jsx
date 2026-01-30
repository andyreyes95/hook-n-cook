import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🎣</span>
          <span className="logo-text">Hook n' Cook</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/menu" onClick={closeMenu}>Menu</NavLink></li>
          <li><NavLink to="/social" onClick={closeMenu}>Social</NavLink></li>
          <li><NavLink to="/locations" onClick={closeMenu}>Locations</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          <li><NavLink to="/play" onClick={closeMenu}>🎮 Play</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
