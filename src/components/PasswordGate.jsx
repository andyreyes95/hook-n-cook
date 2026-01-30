import { useState } from 'react'
import './PasswordGate.css'

// Password is loaded from environment variable
// Set VITE_SITE_PASSWORD in your .env file
const SITE_PASSWORD = import.meta.env.VITE_SITE_PASSWORD || ''

function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if already authenticated in this session
    return sessionStorage.getItem('siteAuthenticated') === 'true'
  })
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem('siteAuthenticated', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  if (isAuthenticated) {
    return children
  }

  return (
    <div className="password-gate">
      <div className="password-gate-container">
        <h1>Welcome to Hook n' Cook</h1>
        <p>Please enter the password</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoFocus
          />
          <button type="submit">Enter</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  )
}

export default PasswordGate
