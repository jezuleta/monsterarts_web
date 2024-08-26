import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './Screens/Home'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navbar />
          <Home />
          <Footer />
      </div>

    </>
  )
}

export default App
