import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './Home';
import Program from './Program';
import Choose from './Choose';
import Pricing from './Pricing';
import "./App.css"

function App() {
  return (
    <div className='App-parent'>
      <Router>
        <nav>
        <Link className="App-link" to="/">Home</Link>
        <Link className="App-link" to="/Program">Program </Link>
        <Link  className="App-link"to="/Choose">Choose Us</Link>
        <Link  className="App-link"to="/Pricing">Pricing</Link>
        <Link  className="App-link1"to="/">Register Now</Link>
      
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Program" element={<Program/>}></Route>
          <Route path="/Choose" element={<Choose/>}></Route>
          <Route path="/Pricing" element={<Pricing/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App