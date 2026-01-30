import { useState } from 'react'
import './Locations.css'

function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Hook n\' Cook - San Salvador Tizatlalli',
      address: 'Cam. Viejo a San Mateo 273, San Salvador Tizatlali, 52172 San Salvador Tizatlalli, Méx.',
      phone: '(722) 555-0101',
      hours: 'Mon-Sun: 11am - 10pm',
      region: 'mexico',
      isOriginal: true
    },
  ]

  return (
    <div className="locations">
      {/* Hero Section */}
      <section className="locations-hero">
        <div className="container">
          <h1>Our Location</h1>
          <p>Visit Hook n' Cook</p>
        </div>
      </section>

      {/* Locations Content */}
      <section className="section">
        <div className="container">
          {/* Locations Grid */}
          <div className="locations-grid single-location">
            {locations.map((location) => (
              <div className={`location-card ${location.isOriginal ? 'original' : ''}`} key={location.id}>
                {location.isOriginal && <span className="original-badge">🏆 Original Location</span>}
                <div className="location-icon">📍</div>
                <h3>{location.name}</h3>
                <div className="location-details">
                  <p><span>📍</span> {location.address}</p>
                  <p><span>📞</span> {location.phone}</p>
                  <p><span>🕐</span> {location.hours}</p>
                </div>
                <div className="location-actions">
                  <a href={`https://maps.app.goo.gl/Fe85Cr6d9osWS4tf7`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    Get Directions
                  </a>
                  <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="btn btn-secondary">
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="expansion-section">
        <div className="container">
          <h2>Our Story</h2>
          <p>Hook n' Cook was founded in Metepec, México in 2025. What started as a dream by student entrepreneurs 
             has become a reality. We're just getting started on our journey to bring fresh, affordable seafood 
             to communities everywhere!</p>
          <div className="expansion-stats">
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Location</span>
            </div>
            <div className="stat">
              <span className="stat-number">Metepec</span>
              <span className="stat-label">Founded In</span>
            </div>
            <div className="stat">
              <span className="stat-number">2025</span>
              <span className="stat-label">Established</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="section franchise-section">
        <div className="container">
          <div className="franchise-content">
            <div className="franchise-text">
              <h2>Interested in Franchising?</h2>
              <p>Join the Hook n' Cook family! We're looking for passionate entrepreneurs 
                 who share our vision of bringing fresh, affordable seafood to communities everywhere.</p>
              <ul>
                <li>✓ Comprehensive training program</li>
                <li>✓ Marketing and operational support</li>
                <li>✓ Proven business model</li>
                <li>✓ Growing brand recognition</li>
              </ul>
            </div>
            <div className="franchise-cta">
              <span className="franchise-icon">🤝</span>
              <a href="/contact" className="btn btn-primary">Inquire About Franchising</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
