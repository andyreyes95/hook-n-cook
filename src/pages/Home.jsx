import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Welcome to Hook n' Cook</h1>
          <p>Fresh Seafood for Everyone</p>
          <p className="hero-tagline">Where student dreams meet ocean flavors</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/locations" className="btn btn-secondary">Find a Location</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Hook n' Cook?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🦐</span>
              <h3>Fresh Daily</h3>
              <p>We source our seafood fresh every day from trusted local suppliers and sustainable fisheries.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3>Affordable Prices</h3>
              <p>Quality seafood doesn't have to break the bank. We believe everyone deserves great food.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👨‍🍳</span>
              <h3>Cooked to Perfection</h3>
              <p>Our trained chefs prepare each dish with care, bringing out the best ocean flavors.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <h3>Community First</h3>
              <p>Built by students, for the community. We're invested in making dining accessible to all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="section popular-section">
        <div className="container">
          <h2 className="section-title">Fan Favorites</h2>
          <div className="popular-grid">
            <div className="popular-item">
              <div className="popular-image">🦞</div>
              <h3>Lobster Roll</h3>
              <p>Fresh Maine lobster in a buttery toasted roll</p>
              <span className="price">$16.99</span>
            </div>
            <div className="popular-item">
              <div className="popular-image">🍤</div>
              <h3>Crispy Shrimp Basket</h3>
              <p>Golden fried shrimp with our signature sauce</p>
              <span className="price">$12.99</span>
            </div>
            <div className="popular-item">
              <div className="popular-image">🐟</div>
              <h3>Fish & Chips</h3>
              <p>Beer-battered cod with seasoned fries</p>
              <span className="price">$14.99</span>
            </div>
          </div>
          <div className="center-button">
            <Link to="/menu" className="btn btn-primary">See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Dive In?</h2>
          <p>Find your nearest Hook n' Cook and experience the best casual seafood dining.</p>
          <Link to="/locations" className="btn btn-secondary">Find a Location</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
