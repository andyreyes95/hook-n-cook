import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import SocialMedia from './pages/SocialMedia'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Play from './pages/Play'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
