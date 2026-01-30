import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Have a question, comment, or feedback? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitted ? (
                <div className="success-message">
                  <span>✅</span>
                  <h3>Thank you for your message!</h3>
                  <p>We've received your inquiry and will respond within 24-48 hours.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Request</option>
                      <option value="franchise">Franchise Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <h3>Headquarters</h3>
                <p>Hook n' Cook Corporate</p>
                <p>Cam. Viejo a San Mateo 273</p>
                <p>San Salvador Tizatlalli, 52172 Méx.</p>
              </div>
              
              <div className="info-card">
                <span className="info-icon">📞</span>
                <h3>Phone</h3>
                <p>722 789 0376</p>
              </div>
              
              <div className="info-card">
                <span className="info-icon">📧</span>
                <h3>Email</h3>
                <p>rreyes@buenatierra.edu.mx</p>
                <p>aalvarez@buenatierra.edu.mx</p>
                <p>ratapia@buenatierra.edu.mx</p>
                <p>sfierro@buenatierra.edu.mx</p>
              </div>
              
              <div className="info-card">
                <span className="info-icon">🕐</span>
                <h3>Office Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM CST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer catering services?</h3>
              <p>Yes! We offer catering for events of all sizes. Contact our catering team at catering@hookncook.com or call (512) 555-0111 for more information.</p>
            </div>
            <div className="faq-item">
              <h3>Do you take reservations?</h3>
              <p>We operate on a first-come, first-served basis for most parties. For groups of 8 or more, please call your preferred location to arrange seating.</p>
            </div>
            <div className="faq-item">
              <h3>Are there vegetarian options?</h3>
              <p>While we specialize in seafood, we do offer several vegetarian sides and salads. Please ask your server for details.</p>
            </div>
            <div className="faq-item">
              <h3>How can I apply for a job?</h3>
              <p>We're always looking for great team members! Visit your nearest location to fill out an application or email careers@hookncook.com.</p>
            </div>
            <div className="faq-item">
              <h3>Do you have a kids menu?</h3>
              <p>Absolutely! Our kids menu features smaller portions and kid-friendly prices for guests 12 and under.</p>
            </div>
            <div className="faq-item">
              <h3>How do I inquire about franchising?</h3>
              <p>We'd love to hear from potential franchise partners! Email franchise@hookncook.com or call (512) 555-0122 to start the conversation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
