import './About.css'

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>From college dorm dreams to your dinner table</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>How It All Started</h2>
              <p>
                Hook n' Cook was born in 2023 when a group of ambitious college students noticed something missing 
                in the casual dining world – affordable, quality seafood for everyday people. While fine dining 
                offered exquisite ocean fare and fast food chains served frozen fish sticks, there was nothing 
                in between for the average consumer.
              </p>
              <p>
                Inspired by the success of casual dining chains like Chili's and Applebee's, we asked ourselves: 
                "Why can't seafood be accessible to everyone?" Armed with nothing but determination, a business 
                plan written during late-night study sessions, and a shared love for great food, we set out to 
                change the game.
              </p>
              <p>
                Today, Hook n' Cook stands as proof that big dreams can come true. We're not just a restaurant – 
                we're a movement to make fresh, delicious seafood a staple in communities everywhere.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🎓</span>
                <p>Student Founders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🌊</span>
              <h3>Sustainability</h3>
              <p>We partner with responsible fisheries and prioritize sustainable sourcing to protect our oceans for future generations.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💪</span>
              <h3>Quality</h3>
              <p>Every dish meets our high standards. We never compromise on freshness or flavor – that's our promise.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">❤️</span>
              <h3>Community</h3>
              <p>We believe in giving back. A portion of our profits supports local education and youth entrepreneurship programs.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎯</span>
              <h3>Accessibility</h3>
              <p>Great food shouldn't be a luxury. We keep our prices fair so everyone can enjoy quality seafood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet The Founders</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Marcus Johnson</h3>
              <p className="member-role">CEO & Co-Founder</p>
              <p>Business major with a passion for entrepreneurship and a family history in the fishing industry.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🍳</div>
              <h3>Sofia Chen</h3>
              <p className="member-role">Head Chef & Co-Founder</p>
              <p>Culinary arts student who grew up cooking seafood with her grandmother on the coast.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>David Park</h3>
              <p className="member-role">COO & Co-Founder</p>
              <p>Operations wizard who turned our chaotic kitchen dreams into a streamlined restaurant chain.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>Emma Rodriguez</h3>
              <p className="member-role">CMO & Co-Founder</p>
              <p>Marketing genius responsible for the Hook n' Cook brand that resonates with seafood lovers everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            "To bring fresh, affordable, and delicious seafood to every community, 
            while proving that young entrepreneurs can make a real difference in the world."
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
