import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './screens/Home'
import Tienda from './screens/Tienda'
import Foother from './components/Foother'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Tienda />
        <Foother />
      </div>

    </>
  )
}

export default App
