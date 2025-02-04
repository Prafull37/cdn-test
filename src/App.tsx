import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import NotFound from './components/NotFound'
import Forbidden from './components/Forbidden'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
