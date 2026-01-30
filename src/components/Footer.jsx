import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>🎣 Hook n' Cook</h3>
            <p>Fresh seafood for the everyday diner. Born from student entrepreneurs with a passion for great food and community.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/locations">Locations</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/social">Social Media</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <p>Mon - Thu: 11am - 9pm</p>
            <p>Fri - Sat: 11am - 10pm</p>
            <p>Sunday: 12pm - 8pm</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hook n' Cook. All rights reserved.</p>
          <p>Made with ❤️ by student entrepreneurs</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
