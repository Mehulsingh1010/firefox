import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Laws from './pages/Laws'
import Support from './pages/Support'
import Footer from './components/Footer'
const App = () => {
  return (
    <div >
      {/* <Navbar /> */}
      <Homepage />
      <About />
      <Laws />
      <Support />
      <Footer />
    </div>
  )
}

export default App
