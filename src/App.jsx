import React from 'react'
import "./index.css"

import Homepage from './pages/Homepage'
import About from './pages/About'
import Laws from './pages/Laws'
import Support from './pages/Support'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
    
      <Homepage />
      <About />
      <Laws />
      <Support />
      <Footer />
    </div>
  )
}

export default App
